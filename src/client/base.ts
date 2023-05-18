export default class Base {
	protected declare url: string;
	protected static token: string;

	get isReady() {
		return Base.__initialized && Base.__pending.length < 1;
	}

	async fetch() {
		await this.__fetch()
			.then(async (d) => {
				const data = await d.json();

				Object.assign(this, { ...data });
			})
			.catch(console.log);
	}

	protected async __init_fetch() {
		Base.__pending.push(this.url);
		if (!Base.__initialized) Base.__initialized = true;

		this.fetch().finally(() => {
			const i = Base.__pending.findIndex((p) => p == this.url);
			Base.__pending.splice(i, 1);
		});
	}

	protected static __initialized = false;

	protected __fetch(init?: RequestInit | undefined) {
		return fetch(this.url, {
			...init,
			headers: new Headers({
				Authorization: Base.token,
				"Content-Type": "application/json",
			}),
		});
	}

	/** Enganar o TS */
	static __getInstanceType<C extends typeof Base>(this: C) {
		return this as InstanceType<C>;
	}

	protected static __pending = new Array<any>();
}
