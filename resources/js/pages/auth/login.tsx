import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}
export default function Login({ canResetPassword }: LoginProps) {
    return (
        <>
            <Head>
                <title>Login - Access Your Account</title>
                <meta
                    name="description"
                    content="Sign in to your account and unlock powerful tools designed for professionals."
                />
                <meta
                    name="keywords"
                    content="login, sign in, account access"
                />
            </Head>

            <div className="flex h-screen w-full items-center justify-center overflow-hidden p-6">
                <div className="grid h-full w-7xl grid-cols-6 gap-6 rounded-lg border-2 border-muted-foreground/10 bg-secondary p-2">
                    <div className="col-span-4 hidden items-end justify-end rounded-lg bg-[url('/bg-login.webp')] bg-cover bg-top lg:flex">
                        <div className="m-2 flex h-40 w-full items-center justify-center rounded-lg bg-[rgba(255,255,255,0.3)] p-8 backdrop-blur-sm">
                            <div className="text-center">
                                <div className="mb-3 inline-block rounded-full bg-white/40 px-4 py-1 text-xs font-semibold tracking-wider text-gray-800">
                                    PRO
                                </div>
                                <p className="text-lg leading-relaxed font-medium text-black/80 dark:text-white">
                                    "Success is where preparation meets
                                    opportunity.
                                    <br />
                                    Your journey to excellence starts here."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 grid h-full w-full content-center items-center px-6 lg:col-span-2">
                        <div className="mb-8 text-center">
                            <h1 className="mb-3 text-3xl font-bold text-foreground">
                                Welcome Back
                            </h1>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Enter your credentials to access your dashboard
                                and continue your professional journey.
                            </p>
                        </div>

                        <Form
                            action={store.url()}
                            method='POST'
                            resetOnSuccess={['password']}
                            className="flex flex-col gap-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="grid gap-6">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">
                                                Email address
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                placeholder="email@example.com"
                                            />
                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <div className="flex items-center">
                                                <Label htmlFor="password">
                                                    Password
                                                </Label>
                                                {canResetPassword && (
                                                    <TextLink
                                                        href={request()}
                                                        className="ml-auto text-sm"
                                                        tabIndex={5}
                                                    >
                                                        Forgot password?
                                                    </TextLink>
                                                )}
                                            </div>
                                            <Input
                                                id="password"
                                                type="password"
                                                name="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="Password"
                                            />
                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Checkbox
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                            />
                                            <Label htmlFor="remember">
                                                Remember me
                                            </Label>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="mt-4 w-full"
                                            tabIndex={4}
                                            disabled={processing}
                                            data-test="login-button"
                                        >
                                            {processing && <Spinner />}
                                            Log in
                                        </Button>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
