import * as React from 'react';
import { UpdateAccountDto, UpdateAccountDtoSchema } from './contract';
import { useUpdateAccountMutation, useUpdateAvatarMutation } from './redux';
import { AccountMe } from '$/entities/account';
import { useForm } from '$/shared/utils';

interface IUpdateAccountContext {
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
	register: ReturnType<typeof useForm<UpdateAccountDto>>['register'];
	errors: ReturnType<typeof useForm<UpdateAccountDto>>['errors'];
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

	const { values, errors, register } = useForm({
		defaultValues: defValues,
		schema: UpdateAccountDtoSchema
	});

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
		async (e?: React.BaseSyntheticEvent) => {
			e?.preventDefault();
			setLoading(true);

			try {
				if (hasChanged) {
					await mutate(values).unwrap();
					alert('Account updated successfully!');
				}
				if (file) {
					await updateAvatarMutate(file).unwrap();
					alert('Avatar updated successfully!');
				}
			} finally {
				setLoading(false);
			}
		},
		[values, mutate, updateAvatarMutate, file, hasChanged]
	);

	const selectFile = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;
			if (files && files[0]) setFile(files[0]);
		},
		[]
	);

	const contextValue: IUpdateAccountContext = {
		onSubmit,
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
