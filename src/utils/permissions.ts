interface permissionstype {
	[key: string]: string[];
}

export const permissions: permissionstype = {
	admin: ["admin"],
	agent: ["agent"],
};
