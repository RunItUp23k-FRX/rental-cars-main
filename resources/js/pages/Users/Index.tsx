import { index } from '@/actions/App/Http/Controllers/UserController';
import DeleteUserDialog from '@/components/delete-user-modale';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import UserCard from '@/components/user-card';
import UserFormDialog from '@/components/user-form';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem, User } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Plus, Search, Users as UsersIcon } from 'lucide-react';
import { useState } from 'react';

interface Stats {
    total: number;
    verified: number;
    unverified: number;
}

interface Filters {
    search?: string;
    verified?: string;
    date_from?: string;
    date_to?: string;
    sort_by?: string;
    sort_order?: string;
}

interface Props {
    users: User[];
    stats: Stats;
    filters: Filters;
}

export default function Index({ users, filters }: Props) {
    const [formOpen, setFormOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setFormOpen(true);
    };

    const handleDelete = (user: User) => {
        setSelectedUser(user);
        setDeleteOpen(true);
    };

    const handleCreate = () => {
        setSelectedUser(null);
        setFormOpen(true);
    };

    const filteredData = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const handleFilterChange = (key: string, value: string) => {
        router.get(
            index.url(),
            { ...filters, [key]: value },
            { preserveState: true, preserveScroll: true },
        );
    };

    const clearFilters = () => {
        setSearchQuery('');
        router.get(index.url(), {}, { preserveState: true });
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: dashboard.url(),
        },
        {
            title: 'Users',
            href: '#',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                {/* Header */}
                <div className="mb-2 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                            Users Management
                        </h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Manage system users and their permissions
                        </p>
                    </div>
                    <Button onClick={handleCreate} size="lg">
                        <Plus className="mr-2 h-5 w-5" />
                        Add User
                    </Button>
                </div>

                <Card className="mb-2">
                    <CardContent className="pt-6">
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="relative flex-1">
                                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                                <Input
                                    placeholder="Search by name or email..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="pl-9"
                                />
                            </div>

                            <Select
                                value={filters.verified || 'all'}
                                onValueChange={(value) =>
                                    handleFilterChange(
                                        'verified',
                                        value === 'all' ? '' : value,
                                    )
                                }
                            >
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <SelectValue placeholder="Verification" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Users
                                    </SelectItem>
                                    <SelectItem value="true">
                                        Verified
                                    </SelectItem>
                                    <SelectItem value="false">
                                        Unverified
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <Select
                                value={filters.sort_by || 'name'}
                                onValueChange={(value) =>
                                    handleFilterChange('sort_by', value)
                                }
                            >
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="name">Name</SelectItem>
                                    <SelectItem value="email">Email</SelectItem>
                                    <SelectItem value="created_at">
                                        Join Date
                                    </SelectItem>
                                    <SelectItem value="updated_at">
                                        Last Updated
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            {(filters.search ||
                                filters.verified ||
                                filters.sort_by !== 'name') && (
                                <Button
                                    variant="outline"
                                    onClick={clearFilters}
                                >
                                    Clear Filters
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Users Grid */}
                {filteredData.length === 0 ? (
                    <Card>
                        <CardContent className="mt-2">
                            <div className="py-12 text-center">
                                <UsersIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                                <h3 className="mt-4 text-lg font-semibold">
                                    No users found
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {filters.search
                                        ? 'Try adjusting your search or filters'
                                        : 'Get started by creating a new user'}
                                </p>
                                {!filters.search && (
                                    <Button
                                        onClick={handleCreate}
                                        className="mt-4"
                                    >
                                        <Plus className="mr-2 h-4 w-4" />
                                        Create User
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredData.map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Dialogs */}
            <UserFormDialog
                open={formOpen}
                onOpenChange={setFormOpen}
                user={selectedUser}
            />

            <DeleteUserDialog
                open={deleteOpen}
                onOpenChange={setDeleteOpen}
                user={selectedUser}
            />
        </AppLayout>
    );
}
