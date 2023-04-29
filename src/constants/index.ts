const enviroment: string = "local"; // local, dev, prod
//--------------------------------------------
var Domain: string;
var Backend: string;

switch (enviroment) {
	case "local":
		Domain = "http://localhost:3000";
		Backend = "http://localhost:3001";
		break;
	case "dev":
		Domain = "";
		Backend = "";
		break;
	case "prod":
		Domain = "";
		Backend = "";
		break;
	default:
		break;
}

export {Domain, Backend};
//J4C@CRM7865#
