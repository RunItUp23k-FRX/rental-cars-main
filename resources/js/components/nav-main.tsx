import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    const isActive = (item: NavItem) => {
        const href = typeof item.href === 'string' ? item.href : item.href.url;

        // Don't match placeholder links
        if (href === '#') return false;

        // Normalize URLs by removing trailing slashes and query params
        const normalizedUrl = page.url.split('?')[0].replace(/\/$/, '');
        const normalizedHref = href.split('?')[0].replace(/\/$/, '');

        // Exact match only
        return normalizedUrl === normalizedHref;
    };

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{import.meta.env.VITE_APP_NAME}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    // Check if this item has children
                    if (item.childrens && item.childrens.length > 0) {
                        const hasActiveChild = item.childrens.some((child) => isActive(child));
                        const [isOpen, setIsOpen] = useState(hasActiveChild);

                        return (
                            <Collapsible key={item.title} asChild defaultOpen={hasActiveChild} onOpenChange={setIsOpen}>
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            <ChevronRight className={`ml-auto transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.childrens.map((child) => (
                                                <SidebarMenuSubItem key={child.title}>
                                                    <SidebarMenuSubButton asChild isActive={isActive(child)}>
                                                        <Link href={child.href}>
                                                            {child.icon && <child.icon />}
                                                            <span>{child.title}</span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    }

                    // Regular item without children
                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={isActive(item)} tooltip={{ children: item.title }}>
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
