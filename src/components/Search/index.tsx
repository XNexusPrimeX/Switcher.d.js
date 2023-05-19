import React from "react";
import { Input, TransparentModal } from "./styles.ts";

import AutoComplete from "../AutoComplete";

const SearchModal: React.FC = () => {
	const [text, setText] = React.useState("");

	const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	return (
		<TransparentModal>
			<Input value={text} onChange={handleText} />
			<AutoComplete input={text} />
		</TransparentModal>
	);
};

export default SearchModal;
