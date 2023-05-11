import Base from "../api/base";

function Endpoint(_, context: ClassFieldDecoratorContext) {
	return function (initValue: any) {
		initValue.prototype.url += `${this.url}/${String(context.name).toLowerCase()}`;

		return new initValue();
	};
}

export default Endpoint;
