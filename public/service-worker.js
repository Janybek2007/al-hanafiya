self.addEventListener('push', event => {
	const data = event.data?.json();
	self.registration.showNotification(data.title, {
		body: data.body,
		icon: '/favicon-192x192.png'
	});
});

export const VAPID_PUBLIC_KEY =
	'BK5ZrLr25_Tn3JFSRogZ-B-6OXA5dtOv49X8rUYnXGBZtzvGCpANkyHZXkKLDgZwp1ipKAJnokpEkuhkZkWE4rg';

self.addEventListener('pushsubscriptionchange', async () => {
	const newSubscription = await self.registration.pushManager.subscribe({
		userVisibleOnly: true,
		applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
	});
	self.clients.matchAll().then(clients => {
		clients.forEach(client =>
			client.postMessage({
				type: 'SUBSCRIPTION_CHANGE',
				subscription: newSubscription
			})
		);
	});
});
