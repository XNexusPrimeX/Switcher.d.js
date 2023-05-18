import React from "react";
import { CompletionContainer, ItemContainer } from "./styles";

const CompletionItem: React.FC<{ value: string }> = ({ value }) => {
	return (
		<ItemContainer>
			<h1>{value}</h1>
		</ItemContainer>
	);
};

const AutoComplete: React.FC<{ find: string }> = ({ find }) => {
	const allResults = ["oi", "tchau"];

	const filtered = allResults.filter(
		(r) => find.length > 0 && r.includes(find)
	);

	return (
		<CompletionContainer>
			{filtered.map((i) => (
				<CompletionItem value={i} />
			))}
		</CompletionContainer>
	);
};

export default AutoComplete;
