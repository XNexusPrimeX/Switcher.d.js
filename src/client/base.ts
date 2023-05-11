export default class Base {
	declare url: string;
	protected static token: string;

	protected async fetch(init?: RequestInit | undefined) {
		return (
			await fetch(this.url, {
				...init,
				headers: new Headers({
					Authorization: Base.token,
					"Content-Type": "application/json",
				}),
			})
		).json();
	}

	/** Enganar o TS */
	static use<C extends typeof Base>(this: C) {
		return this as InstanceType<C>;
	}
}
