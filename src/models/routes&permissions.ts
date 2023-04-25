export function handleMainPage(role: string): string {
	switch (role) {
		case "admin":
			return "/admin";
		case "agent":
			return "/agent";
		default:
			return "/";
	}
}
