
export interface LoginWithResponse {
	token: string
	user: Record<string, string>
	profile_comleted: boolean
	created: boolean
}
