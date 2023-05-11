export let token = "NjA3OTk5OTM0NzI1MzU3NTc4.GRMajJ.FPn2bdxaPzN4UvRwetSxBRvmfLIy6WUxqggl9Y";
export default (input: RequestInfo | URL, init?: RequestInit | undefined) => {
	return fetch(input, {
		...init,
		headers: new Headers({ Authorization: token }),
	});
};
