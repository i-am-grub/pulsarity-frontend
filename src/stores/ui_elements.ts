/** @format */

import { pulsarity } from "@/utils/pulsarity_pb";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUIElementStore = defineStore("uiElements", () => {
	// The mappings of the route identifier to the element tree(s) to render on the route
	const elementTreeMapping = reactive(new Map<string, Array<number>>());

	// The mappings element tree to the additional element(s) to render under the tree
	const elementTreeValues = reactive(
		new Map<number, Array<pulsarity.ui.UIElementTreeEntry>>(),
	);

	// The mapping of markdown element ids to their respective data
	// The current value type of the key/value pair is a placeholder
	const markdownFields = reactive(new Map<number, number>());

	// The mapping of button element ids to their respective data
	// The current value type of the key/value pair is a placeholder
	const buttonFields = reactive(new Map<number, number>());

	// The mapping of value field element ids to their respective data
	// The current value type of the key/value pair is a placeholder
	const valueFields = reactive(new Map<number, number>());

	/**
	 * Load in the UI elements from the server
	 */
	async function loadElementsFromServer() {}

	// Test Data
	elementTreeMapping.set("pilots", [1]);
	const test = new pulsarity.ui.UIElementTreeEntry({
		elementId: 2,
		type: pulsarity.ui.UIElementType.ELEMENT_TYPE_VALUE,
	});
	elementTreeValues.set(1, [test]);
	valueFields.set(2, 3);

	return {
		elementTreeMapping,
		elementTreeValues,
		markdownFields,
		buttonFields,
		valueFields,
		loadElementsFromServer,
	};
});
