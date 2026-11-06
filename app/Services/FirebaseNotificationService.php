<?php
// app/Services/FirebaseNotificationService.php

namespace App\Services;

use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Kreait\Firebase\Messaging\AndroidConfig;
use Kreait\Firebase\Messaging\WebPushConfig;

class FirebaseNotificationService
{
    protected $messaging;

    public function __construct()
    {
        $factory = (new Factory)->withServiceAccount(storage_path('firebase.json'));
        $this->messaging = $factory->createMessaging();
    }

    public function sendNewOrderNotification($order)
    {
        try {
            // Get all admin users with FCM tokens
            $adminUsers = User::whereNotNull('fcm_token')->get();

            if ($adminUsers->isEmpty()) {
                Log::info('No admin users with FCM tokens found');
                return;
            }

            foreach ($adminUsers as $admin) {
                $message = CloudMessage::withTarget('token', $admin->fcm_token)
                    ->withNotification(
                        Notification::create(
                            '🚗 New Order Received!',
                            "{$order->customer_name} booked {$order->car->name}"
                        )
                    )
                    ->withAndroidConfig(
                        AndroidConfig::fromArray([
                            'priority' => 'high',
                            'notification' => [
                                'sound' => 'default',
                                'channel_id' => 'orders',
                            ]
                        ])
                    )
                    ->withWebPushConfig(
                        WebPushConfig::fromArray([
                            'notification' => [
                                'requireInteraction' => true,
                                'vibrate' => [200, 100, 200],
                                'silent' => false,
                            ]
                        ])
                    )
                    ->withData([
                        'order_id' => (string) $order->id,
                        'customer_name' => $order->customer_name,
                        'car_name' => $order->car->name,
                        'type' => 'new_order',
                        'click_action' => url("/orders/{$order->id}")
                    ]);

                $this->messaging->send($message);
            }

            Log::info("Push notifications sent to {$adminUsers->count()} admin users for order #{$order->id}");

        } catch (\Exception $e) {
            Log::error('Push notification error: ' . $e->getMessage());
        }
    }
}