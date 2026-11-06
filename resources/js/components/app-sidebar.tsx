import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { index as OrdersIndex } from '@/routes/orders';
import { index as ReglementIndex } from '@/routes/reglements';
import { index as CarsIndex } from '@/routes/vehicles';
import { index as MarqueIndex } from '@/routes/vehicles/marque';
import { index as UsersIndex } from '@/routes/users';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    Car,
    ClipboardList,
    CreditCard,
    LayoutGrid,
    List,
    Tag,
    Users2Icon,
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Vehicles',
        href: '#',
        icon: Car,
        childrens: [
            {
                href: CarsIndex.url(),
                title: 'Liste Vehicles',
                icon: List,
            },
            {
                href: MarqueIndex.url(),
                title: 'Liste Marques',
                icon: Tag,
            },
        ],
    },
    {
        title: 'Orders',
        href: OrdersIndex.url(),
        icon: ClipboardList,
    },
    {
        title: 'Payments',
        href: ReglementIndex.url(),
        icon: CreditCard,
    },
    {
        title: 'Users',
        href: UsersIndex.url(),
        icon: Users2Icon,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
