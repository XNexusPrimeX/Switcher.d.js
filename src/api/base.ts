export default class Base {
	/** Engana o TS, pois os decoradores não tipam o retorno */
	static preInstancie<T extends typeof Base>(this: T) {
		return this as unknown as InstanceType<T>;
	}
}
