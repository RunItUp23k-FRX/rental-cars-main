// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCzJdoPMXsJnsQDKJ34qMzYjyAJ1V3bCMk",
    authDomain: "aguinanecars.firebaseapp.com",
    projectId: "aguinanecars",
    storageBucket: "aguinanecars.firebasestorage.app",
    messagingSenderId: "259303469952",
    appId: "1:259303469952:web:79d1c52b77dd1c18a58765"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Background notification received:', payload);
    
    const notificationTitle = payload.notification?.title || '🚗 New Order';
    const notificationOptions = {
        body: payload.notification?.body || 'A new order has been placed',
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        tag: 'order-notification',
        requireInteraction: true,
        vibrate: [200, 100, 200], // Vibration pattern for mobile
        silent: false, // ✅ NOT silent - plays sound!
        data: {
            url: payload.data?.click_action || '/dashboard',
            orderId: payload.data?.order_id
        }
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked:', event);
    event.notification.close();
    
    const urlToOpen = event.notification.data?.url || '/dashboard';
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((windowClients) => {
                for (let i = 0; i < windowClients.length; i++) {
                    const client = windowClients[i];
                    if (client.url.includes(urlToOpen) && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});