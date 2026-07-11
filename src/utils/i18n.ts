/** @format */

import { createI18n } from "vue-i18n";
import { getLocalizationPack } from "./http_api";

export const i18n = createI18n({
	legacy: false,
	locale: "en-us",
	fallbackLocale: "en-us",
});

/**
 * Loads a localization pack from the server with a matching key
 * @param [key] The key to use to lookup the language pack
 */
export async function loadLocalizatioPack(
	key: string = "en-us",
): Promise<void> {
	const data = await getLocalizationPack(key);

	i18n.global.setLocaleMessage(key, {
		messages: data?.messages,
		pluralization: data?.pluralization,
	});
}

/**
 * Set the frontend to use the localization pack with the specific key
 * @param [key] The key of the localization pack to use
 */
export function setLocalizatioPack(key: string = "en-us"): void {
	i18n.global.locale.value = key;
}
