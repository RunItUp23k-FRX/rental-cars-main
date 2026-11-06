import { requestNotificationPermission } from '@/firebase';
import { dashboard } from '@/routes';
import { Flash } from '@/types';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

export default function NotificationSetup() {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const enableNotifications = async () => {
        setLoading(true);
        setStatus('Requesting permission...');

        const token = await requestNotificationPermission();

        if (token) {
            router.post(
                '/fcm-token',
                { token },
                {
                    preserveState: false,
                    onSuccess: ({ props }) => {
                        console.log(props);
                        const { error, success } = props.flash as Flash;
                        if (success) {
                            setStatus(
                                '✅ Notifications enabled! You will now receive order alerts even when the browser is closed.',
                            );
                            toast.success(success);
                        }
                        if (error) {
                            toast.error(error);
                        }
                    },
                },
            );
        } else {
            setStatus(
                '❌ Permission denied. Please allow notifications in your browser settings and try again.',
            );
        }

        setLoading(false);
    };

    return (
        <>
            <Toaster position="top-right" richColors />
            <Head title="Enable Notifications" />
            <div className="min-h-screen bg-gray-100 px-4 py-12">
                <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-lg">
                    <div className="mb-6 text-center">
                        <div className="mb-4 text-6xl">🔔</div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Enable Order Notifications
                        </h1>
                    </div>

                    <div className="mb-8 space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="text-xl text-green-500">✓</span>
                            <p className="text-gray-700">
                                Get instant alerts when new orders are placed
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-xl text-green-500">✓</span>
                            <p className="text-gray-700">
                                Receive notifications even when browser is
                                closed
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-xl text-green-500">✓</span>
                            <p className="text-gray-700">
                                Works on desktop and mobile devices
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={enableNotifications}
                        disabled={loading}
                        className="w-full rounded-lg bg-blue-600 py-4 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                        {loading
                            ? 'Setting up...'
                            : '🔔 Enable Push Notifications'}
                    </button>

                    {status && (
                        <div
                            className={`mt-6 rounded-lg p-4 ${
                                status.includes('✅')
                                    ? 'border border-green-200 bg-green-50 text-green-800'
                                    : 'border border-red-200 bg-red-50 text-red-800'
                            }`}
                        >
                            {status}
                        </div>
                    )}

                    <div className="mt-6 text-center">
                        <a
                            href={dashboard.url()}
                            className="text-blue-600 hover:underline"
                        >
                            ← Back to Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
