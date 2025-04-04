'use client';
import {
	useProgressQuery,
	useSaveProgressMutation
} from '$/entities/lessons/redux';
import React, {
	createContext,
	useContext,
	useCallback,
	ReactNode
} from 'react';

interface LessonProgressContextType {
	progress: number | undefined;
	save: (currentTime: number) => void;
}

const LessonProgressContext = createContext<
	LessonProgressContextType | undefined
>(undefined);

interface LessonProgressProviderProps {
	slug: string;
	children: ReactNode;
}

export const LessonProgressProvider: React.FC<LessonProgressProviderProps> = ({
	slug,
	children
}) => {
	const { data: progress } = useProgressQuery({ slug });
	const [saveProgressMutation] = useSaveProgressMutation();

	const saveProgress = useCallback(
		(timestamp: number) => {
			saveProgressMutation({ slug, data: { timestamp } });
		},
		[saveProgressMutation, slug]
	);

	const save = useCallback(
		(currentTime: number) => {
			if (progress && currentTime > 0) {
				saveProgress(currentTime);
			}
		},
		[progress, saveProgress]
	);

	const value = {
		progress: progress?.timestamp,
		save
	};

	return (
		<LessonProgressContext.Provider value={value}>
			{children}
		</LessonProgressContext.Provider>
	);
};

export const useLessonProgress = () => {
	const context = useContext(LessonProgressContext);
	if (context === undefined) {
		throw new Error(
			'useLessonProgress must be used within a LessonProgressProvider'
		);
	}
	return context;
};
