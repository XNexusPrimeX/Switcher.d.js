function Endpoint(name: string): any;
function Endpoint(_, context: ClassFieldDecoratorContext): any;
function Endpoint(...args) {
	if (typeof args[0] !== "string") {
		const [_, context] = args as [any, ClassFieldDecoratorContext];

		return function (this: any, initValue: any) {
			const name = String(context.name).toLowerCase();

			initValue.prototype.url = `${this.url}/${name}`;
			initValue = new initValue();

			return initValue;
		};
	} else {
		return (_, context) => {
			return function (this: any, initValue: any) {
				initValue.prototype.url = `${this.url}/${args[0]}`;
				initValue = new initValue();
				initValue.fetch();

				return initValue;
			};
		};
	}
}

export default Endpoint;
