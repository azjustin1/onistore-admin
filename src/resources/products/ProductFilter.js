import { Filter, SearchInput, TextInput } from "react-admin";

export const ProductFilter = (props) => (
	<Filter {...props}>
		<SearchInput source="q" alwaysOn />
		<TextInput
			source="description"
			defaultValue="Qui tempore rerum et voluptates"
		/>
	</Filter>
);
