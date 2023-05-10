import { Base } from "../api/base";

function Endpoint(
	value: new (...args) => any,
	context: ClassDecoratorContext
): void;
function Endpoint(name: string): (...args) => void;
function Endpoint(...args) {
	let name;

	const fn = (value: typeof Base) => {
		value.prototype.url += `/${name.toLowerCase()}`;
		console.log(value.prototype.url);
	};

	if (typeof args[0] == "function") {
		name = args[0].name;
		fn(args[0]);
	} else
		return (v) => {
			name = args[0];

			fn(v);
		};
}

export default Endpoint;
