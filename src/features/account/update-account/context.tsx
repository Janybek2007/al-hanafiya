import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AccountMe } from '$/entities/account';
import { UpdateAccountDto, UpdateAccountDtoSchema } from './contract';
import { useUpdateAccountMutation, useUpdateAvatarMutation } from './redux';

interface IUpdateAccountContext {
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
	register: ReturnType<typeof useForm<UpdateAccountDto>>['register'];
	errors: ReturnType<typeof useForm<UpdateAccountDto>>['formState']['errors'];
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

function getDefaultValues(defaultValues: UpdateAccountDto): UpdateAccountDto {
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
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<UpdateAccountDto>({
		defaultValues: defValues,
		resolver: zodResolver(UpdateAccountDtoSchema)
	});

	const values = watch();
	const [loading, setLoading] = React.useState(false);
	const [file, setFile] = React.useState<File | null>(null);
	const [mutate] = useUpdateAccountMutation();
	const [updateAvatarMutate] = useUpdateAvatarMutation();

	const hasChanged = React.useMemo(() => {
		return (
			JSON.stringify(values) !== JSON.stringify(defValues) || Boolean(file)
		);
	}, [values, defValues, file]);

	const onSubmit = React.useCallback(
		async (data: UpdateAccountDto) => {
			setLoading(true);
			try {
				if (hasChanged) {
					await mutate(data).unwrap();
					alert('Аккаунт ийгиликтүү жаңыртылды!');
				}
				if (file) {
					await updateAvatarMutate(file).unwrap();
					alert('Аватар ийгиликтүү жаңыртылды!');
				}
			} finally {
				setLoading(false);
			}
		},
		[mutate, updateAvatarMutate, file, hasChanged]
	);

	const selectFile = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;
			if (files && files[0]) setFile(files[0]);
		},
		[]
	);

	const contextValue: IUpdateAccountContext = {
		onSubmit: handleSubmit(onSubmit),
		register,
		errors,
		canSubmit: hasChanged && !loading,
		isLoading: loading,
		values,
		avatar: file || (defaultValues as AccountMe).profile.avatar,
		selectFile
	};

	return (
		<UpdateAccountContext.Provider value={contextValue}>
			{children}
		</UpdateAccountContext.Provider>
	);
};

export const useUpdateAccount = (): IUpdateAccountContext => {
	const context = React.useContext(UpdateAccountContext);
	if (!context) {
		throw new Error(
			'useUpdateAccount must be used within an UpdateAccountProvider'
		);
	}
	return context;
};
