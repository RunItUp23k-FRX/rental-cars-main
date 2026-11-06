// resources/js/firebase.js

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

let messaging = null;

// Only initialize Firebase in the browser
if (typeof window !== 'undefined') {
    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    messaging = getMessaging(app);
}

export const requestNotificationPermission = async () => {
    if (typeof window === 'undefined' || !messaging) return null;

    try {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
            const token = await getToken(messaging, {
                vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
            });

            console.log('FCM Token:', token);
            return token;
        } else {
            console.log('Notification permission denied');
            return null;
        }
    } catch (error) {
        console.error('Error getting notification permission:', error);
        return null;
    }
};

export const onMessageListener = () => {
    if (typeof window === 'undefined' || !messaging) {
        return new Promise(() => {});
    }

    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log('Foreground message received:', payload);
            resolve(payload);
        });
    });
};
