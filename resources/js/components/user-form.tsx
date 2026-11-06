import { store, update } from '@/actions/App/Http/Controllers/UserController';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from '@/types';
import { useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { FormEventHandler, useEffect } from 'react';

interface UserFormDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    user?: User | null;
}

export default function UserFormDialog({
    open,
    onOpenChange,
    user,
}: UserFormDialogProps) {
    const isUpdate = !!user;

    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: '',
            email: '',
            password: '',
        });

    useEffect(() => {
        if (user) {
            setData({
                name: user.name,
                email: user.email,
                password: '',
            });
        } else {
            reset();
        }
        clearErrors();
    }, [user, open]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            _method: isUpdate ? 'PUT' : 'POST',
        };

        post(
            isUpdate
                ? update.url({
                      user: user.id,
                  })
                : store.url(),
            {
                data: formData,
                onSuccess: () => {
                    onOpenChange(false);
                    reset();
                },
            },
        );
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>
                        {isUpdate ? 'Update User' : 'Create New User'}
                    </DialogTitle>
                    <DialogDescription>
                        {isUpdate
                            ? 'Update user information. Leave password empty to keep current password.'
                            : 'Add a new user to the system. Fill in all required information.'}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="John Doe"
                            className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                            <p className="text-sm text-destructive">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="john@example.com"
                            className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">
                            Password{' '}
                            {!isUpdate && (
                                <span className="text-destructive">*</span>
                            )}
                            {isUpdate && (
                                <span className="ml-2 text-xs text-muted-foreground">
                                    (leave empty to keep current)
                                </span>
                            )}
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            placeholder={
                                isUpdate
                                    ? 'Leave empty to keep current'
                                    : 'Enter password'
                            }
                            className={
                                errors.password ? 'border-destructive' : ''
                            }
                        />
                        {errors.password && (
                            <p className="text-sm text-destructive">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={processing}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            {isUpdate ? 'Update User' : 'Create User'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
