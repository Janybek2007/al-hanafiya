'use client';
import { useState, useCallback } from 'react';
import { ZodSchema, ZodError } from 'zod';

type FieldValue =
	| string
	| number
	| boolean
	| null
	| Record<string, unknown>
	| FieldValue[];

type UseFormOptions<T> = {
	defaultValues: T;
	schema: ZodSchema<T>;
};

type UseFormReturn<T> = {
	values: T;
	errors: Record<string, string>;
	register: (field: string) => {
		value: FieldValue;
		onChange: (
			e: React.ChangeEvent<
				HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
			>
		) => void;
	};
	reset: VoidFunction;
	handleSubmit: (
		callback: (data: T) => void
	) => (e: React.FormEvent<HTMLFormElement>) => void;
};

type NestedObject = Record<string, unknown>;

function setNestedValue<T extends NestedObject>(
	obj: T,
	path: string,
	value: FieldValue
): T {
	const keys = path.split('.');
	const lastKey = keys.pop()!;

	const result = { ...obj };
	let current: NestedObject = result;

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (
			!(key in current) ||
			typeof current[key] !== 'object' ||
			current[key] === null
		) {
			current[key] = {};
		}
		current = current[key] as NestedObject;
	}

	current[lastKey] = value;
	return result;
}

function getNestedValue<T extends NestedObject>(
	obj: T,
	path: string
): FieldValue {
	const keys = path.split('.');
	let current: unknown = obj;

	for (const key of keys) {
		if (
			current === null ||
			current === undefined ||
			typeof current !== 'object'
		) {
			return null;
		}

		current = (current as NestedObject)[key];
	}

	return current as FieldValue;
}

export function useForm<T extends NestedObject>({
	defaultValues,
	schema
}: UseFormOptions<T>): UseFormReturn<T> {
	const [values, setValues] = useState<T>(defaultValues);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const setValue = useCallback(
		(field: string, value: FieldValue) => {
			const updatedValues = setNestedValue(values, field, value);
			setValues(updatedValues);

			try {
				schema.parse(updatedValues);
				setErrors(prev => {
					const newErrors = { ...prev };
					delete newErrors[field];
					return newErrors;
				});
			} catch (err) {
				if (err instanceof ZodError) {
					const issue = err.issues.find(
						issue => issue.path.join('.') === field
					);
					if (issue) {
						setErrors(prev => ({ ...prev, [field]: issue.message }));
					}
				}
			}
		},
		[schema, values]
	);

	const register = useCallback(
		(field: string) => {
			const value = getNestedValue(values, field);
			return {
				value: value === null ? '' : value,
				onChange: (
					e: React.ChangeEvent<
						HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
					>
				) => {
					let newValue: FieldValue;
					const target = e.target;
					if (target.type === 'checkbox') {
						newValue = (target as HTMLInputElement).checked;
					} else if (target.type === 'number' || target.type === 'range') {
						newValue = Number(target.value);
					} else {
						newValue = target.value;
					}
					setValue(field, newValue);
				}
			};
		},
		[values, setValue]
	);

	const reset = useCallback(() => {
		setValues(defaultValues);
		setErrors({});
	}, [defaultValues]);

	const handleSubmit = useCallback(
		(callback: (data: T) => void) => (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			try {
				schema.parse(values);
				setErrors({});
				callback(values);
			} catch (err) {
				if (err instanceof ZodError) {
					const newErrors: Record<string, string> = {};
					err.issues.forEach(issue => {
						newErrors[issue.path.join('.')] = issue.message;
					});
					setErrors(newErrors);
				}
			}
		},
		[values, schema]
	);

	return {
		values,
		errors,
		register,
		reset,
		handleSubmit
	};
}
