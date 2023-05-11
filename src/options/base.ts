class SelectorOption {
	declare name: string;
	declare options?: Array<SelectorOption>;
	declare run: () => any;

	static bulkBuild<S extends typeof SelectorOption>(
		this: S,
		...options: Array<Omit<InstanceType<S>, "global">>
	) {
		return options.map((option) => {
			const instance = new this();

			instance.name = option.name;
			instance.options = option.options ?? [];
			instance.run = option.run;
		});
	}
}
