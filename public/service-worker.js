const urlBase64ToUint8Array = base64String => {
	const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
	const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
	const rawData = atob(base64);
	const outputArray = new Uint8Array(rawData.length);
	for (let i = 0; i < rawData.length; ++i) {
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
};

const VAPID_PUBLIC_KEY =
	'BK5ZrLr25_Tn3JFSRogZ-B-6OXA5dtOv49X8rUYnXGBZtzvGCpANkyHZXkKLDgZwp1ipKAJnokpEkuhkZkWE4rg';

self.addEventListener('push', event => {
	const data = event.data?.json();
	self.registration.showNotification(data.title, {
		body: data.body,
		icon: '/favicon-192x192.png'
	});
});

self.addEventListener('pushsubscriptionchange', async () => {
	try {
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
	} catch (error) {
		console.error('Push subscription renewal failed:', error);
	}
});
