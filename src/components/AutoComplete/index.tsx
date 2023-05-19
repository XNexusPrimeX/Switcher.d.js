import React from "react";
import { CompletionContainer, ItemContainer } from "./styles";

import { CiSliderVertical } from "react-icons/ci";

const CompletionItem: React.FC<{ icon; value: string }> = ({
	icon: Icon,
	value,
}) => {
	return (
		<ItemContainer>
			<Icon />
			<p>{value}</p>
		</ItemContainer>
	);
};

const AutoComplete: React.FC<{ input: string }> = ({ input }) => {
	const allItems = ["Alternar Tema", "tchau"];

	/**
	 * icon
	 * value
	 * execute
	 */

	input = input.toLowerCase();

	const filteredItems = allItems.filter(
		(r) => input.length > 0 && r.toLowerCase().includes(input)
	);

	return (
		<CompletionContainer>
			{filteredItems.map((i) => (
				<CompletionItem icon={CiSliderVertical} value={i} />
			))}
		</CompletionContainer>
	);
};

export default AutoComplete;
