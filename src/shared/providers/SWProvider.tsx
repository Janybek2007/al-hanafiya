'use client';
import React, {
	createContext,
	useEffect,
	useState,
	useContext,
	ReactNode
} from 'react';

interface SWContextType {
	isRegistered: boolean;
	registration: ServiceWorkerRegistration | null;
}

const SWContext = createContext<SWContextType | undefined>(undefined);

interface SWProviderProps {
	children: ReactNode;
}

export const SWProvider: React.FC<SWProviderProps> = ({ children }) => {
	const [isRegistered, setIsRegistered] = useState(false);
	const [registration, setRegistration] =
		useState<ServiceWorkerRegistration | null>(null);

	useEffect(() => {
		if ('serviceWorker' in navigator) {
			const registerSW = async () => {
				try {
					const reg = await navigator.serviceWorker.register(
						'/service-worker.js'
					);
					setIsRegistered(true);
					setRegistration(reg);
				} catch (error) {
					console.error('Service Worker registration failed:', error);
				}
			};

			registerSW();
		}
	}, []);

	return (
		<SWContext.Provider value={{ isRegistered, registration }}>
			{children}
		</SWContext.Provider>
	);
};

export const useSW = () => {
	const context = useContext(SWContext);
	if (context === undefined) {
		throw new Error('useSW must be used within a SWProvider');
	}
	return context;
};
