import z from 'zod';

export const UpdateAccountDtoSchema = z.object({
	username: z.string(),
	email: z.string().email(),
	first_name: z.string(),
	last_name: z.string(),
	profile: z.object({
		telegram: z.string(),
		is_ustaz: z.boolean(),
	})
});

export type UpdateAccountDto = z.infer<typeof UpdateAccountDtoSchema>;
