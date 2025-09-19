// /firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC1FnOEYHlBaXQtxqHX9Qnwx4lpZc0cZY0",
  authDomain: "family-tasks-app-44296.firebaseapp.com",
  projectId: "family-tasks-app-44296",
  storageBucket: "family-tasks-app-44296.firebasestorage.app",
  messagingSenderId: "108479351489",
  appId: "1:108479351489:web:0629b17053ec0eeb96e240"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  const title = n.title || 'Ειδοποίηση';
  const options = {
    body: n.body || '',
    icon: '/favicon.ico',        // άλλαξέ το αν θέλεις
    vibrate: [200, 100, 200],
    tag: 'family-task',
    data: { url: '/' }          // άνοιγμα της αρχικής σε κλικ
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(self.clients.openWindow('/'));
});
