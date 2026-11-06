import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from '@/types';
import { format } from 'date-fns';
import {
    Calendar,
    CheckCircle2,
    Mail,
    MoreVertical,
    Pencil,
    Trash2,
    XCircle,
} from 'lucide-react';

interface UserCardProps {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (user: User) => void;
}

export default function UserCard({ user, onEdit, onDelete }: UserCardProps) {
    const isVerified = user.email_verified_at !== null;

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <Card className="transition-shadow duration-200 hover:shadow-lg">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary text-lg font-semibold text-primary-foreground">
                            {getInitials(user.name)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <div className="mt-1 flex items-center gap-2">
                            {isVerified ? (
                                <Badge variant="default" className="gap-1">
                                    <CheckCircle2 className="h-3 w-3" />
                                    Verified
                                </Badge>
                            ) : (
                                <Badge variant="secondary" className="gap-1">
                                    <XCircle className="h-3 w-3" />
                                    Unverified
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEdit(user)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => onDelete(user)}
                            className="text-destructive focus:text-destructive"
                        >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>

            <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="mr-2 h-4 w-4" />
                    <span className="truncate">{user.email}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>
                        Joined{' '}
                        {format(new Date(user.created_at), 'MMM dd, yyyy')}
                    </span>
                </div>
            </CardContent>

            <CardFooter className="border-t pt-4">
                <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
                    <span>ID: {user.id}</span>
                    <span>
                        Updated{' '}
                        {format(new Date(user.updated_at), 'MMM dd, yyyy')}
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
}
