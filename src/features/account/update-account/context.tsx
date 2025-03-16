import * as React from 'react';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { UpdateAccountDto, UpdateAccountDtoSchema } from './contract';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUpdateAccountMutation, useUpdateAvatarMutation } from './redux';
import { AccountMe } from '$/entities/account';

interface IUpdateAccountContext {
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
	register: UseFormRegister<UpdateAccountDto>;
	errors: FieldErrors<UpdateAccountDto>;
	canSubmit: boolean;
	isLoading: boolean;
	values: UpdateAccountDto;
	avatar: string | File | null;
	selectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UpdateAccountContext = React.createContext<
	IUpdateAccountContext | undefined
>(undefined);

interface IUpdateAccountProvider extends React.PropsWithChildren {
	defaultValues: UpdateAccountDto;
}

function getDefaultValues(defaultValues: UpdateAccountDto) {
	return {
		username: defaultValues.username,
		email: defaultValues.email,
		first_name: defaultValues.first_name,
		last_name: defaultValues.last_name,
		profile: {
			is_ustaz: defaultValues.profile.is_ustaz,
			telegram: defaultValues.profile.telegram
		}
	};
}

export const UpdateAccountProvider: React.FC<IUpdateAccountProvider> = ({
	children,
	defaultValues
}) => {
	const defValues = getDefaultValues(defaultValues);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		watch
	} = useForm<UpdateAccountDto>({
		resolver: zodResolver(UpdateAccountDtoSchema),
		defaultValues: defValues
	});

	const [loading, setLoading] = React.useState(false);
	const [file, setFile] = React.useState<File | null>(null);
	const [mutate] = useUpdateAccountMutation();
	const [updateAvatarMutate] = useUpdateAvatarMutation();

	const watchedValues = watch();

	const hasChanged = React.useMemo(() => {
		const hasFormChanges = Object.keys(defaultValues).some(
			key =>
				JSON.stringify(watchedValues[key as keyof UpdateAccountDto]) !==
				JSON.stringify(defValues[key as keyof UpdateAccountDto])
		);
		const hasFileChange = Boolean(file);

		return hasFormChanges || hasFileChange;
	}, [defaultValues, watchedValues, defValues, file]);

	const onSubmit = React.useCallback(
		(e?: React.BaseSyntheticEvent) =>
			handleSubmit(async data => {
				setLoading(true);
				try {
					if (hasChanged) await mutate(data).unwrap();
					if (file) await updateAvatarMutate(file).unwrap();
				} finally {
					setLoading(false);
				}
			})(e),
		[handleSubmit, mutate, updateAvatarMutate, file, hasChanged]
	);

	const selectFile = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;
			if (files && files[0]) setFile(files[0]);
		},
		[]
	);

	const values: IUpdateAccountContext = {
		onSubmit,
		register,
		errors,
		canSubmit: !isSubmitting && hasChanged,
		isLoading: loading,
		values: {
			...defaultValues,
			...watch()
		},
		avatar: file || (defaultValues as AccountMe).profile.avatar,
		selectFile
	};

	return (
		<UpdateAccountContext.Provider value={values}>
			{children}
		</UpdateAccountContext.Provider>
	);
};

export const useUpdateAccount = (): IUpdateAccountContext => {
	const context = React.useContext(UpdateAccountContext);

	if (!context) {
		throw new Error(
			'useUpdateAccount must be used within a UpdateAccountProvider'
		);
	}

	return context;
};
