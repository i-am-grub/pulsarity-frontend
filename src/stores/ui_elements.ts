/** @format */

import { pulsarity } from "@/utils/pulsarity_pb";
import { defineStore } from "pinia";
import { reactive } from "vue";
import { getAllUIElements } from "@/utils/http_api";

export const useUIElementStore = defineStore("uiElements", () => {
	// The mappings of the route identifier to the element tree(s) to render on the route
	const elementTreeMapping = reactive(new Map<string, Array<number>>());

	// The mappings element tree to the additional element(s) to render under the tree
	const elementTreeValues = reactive(
		new Map<number, Array<pulsarity.ui.UIElementTreeEntry>>(),
	);

	// The mapping of markdown element ids to their respective data
	// The current value type of the key/value pair is a placeholder
	const markdownFields = reactive(
		new Map<number, pulsarity.ui.UIMarkdownField>(),
	);

	// The mapping of button element ids to their respective data
	// The current value type of the key/value pair is a placeholder
	const buttonFields = reactive(new Map<number, pulsarity.ui.UIButtonField>());

	// The mapping of value field element ids to their respective data
	// The current value type of the key/value pair is a placeholder
	const valueFields = reactive(new Map<number, pulsarity.ui.UIValueField>());

	/**
	 * Load in the UI elements from the server
	 */
	async function loadElementsFromServer() {
		// Start all requests before awaiting requested data
		const uiElements = await getAllUIElements();

		// Dump etree mappings to store
		if (uiElements.mappings != null && uiElements.mappings.mapping != null) {
			for (const [key, value] of Object.entries(uiElements.mappings.mapping)) {
				elementTreeMapping.set(key, value.elementIds ?? []);
			}
		}

		// Dump etree data to store
		if (uiElements.etrees != null && uiElements.etrees.etrees != null) {
			uiElements.etrees.etrees.forEach((val) =>
				elementTreeValues.set(
					val.elementId as number,
					val.elements as Array<pulsarity.ui.UIElementTreeEntry>,
				),
			);
		}

		// Dump markdown field data to store
		if (uiElements.markdown != null && uiElements.markdown.fields != null) {
			uiElements.markdown.fields.forEach((val) =>
				markdownFields.set(
					val.elementId as number,
					val as pulsarity.ui.UIMarkdownField,
				),
			);
		}

		// Dump button field data to store
		if (uiElements.buttons != null && uiElements.buttons.fields != null) {
			uiElements.buttons.fields.forEach((val) =>
				buttonFields.set(
					val.elementId as number,
					val as pulsarity.ui.UIButtonField,
				),
			);
		}

		// Dump value field data to store
		if (uiElements.values != null && uiElements.values.fields != null) {
			uiElements.values.fields.forEach((val) =>
				valueFields.set(
					val.elementId as number,
					val as pulsarity.ui.UIValueField,
				),
			);
		}
	}

	return {
		elementTreeMapping,
		elementTreeValues,
		markdownFields,
		buttonFields,
		valueFields,
		loadElementsFromServer,
	};
});
