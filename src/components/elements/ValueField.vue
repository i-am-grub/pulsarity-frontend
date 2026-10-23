<!-- @format -->

<!-- Component for rendering different types of value field components -->

<script setup lang="ts">
	import { type Component, type ComputedRef } from "vue";
	import { useUIElementStore } from "@/stores/ui_elements";
	import { computed } from "vue";
	import { pulsarity } from "@/utils/pulsarity_pb";
	import TextField from "./value_fields/TextField.vue";
	import NumberField from "./value_fields/NumberField.vue";
	import HiddenField from "./value_fields/HiddenField.vue";
	import RangeField from "./value_fields/RangeField.vue";
	import SelectField from "./value_fields/SelectField.vue";
	import CheckboxField from "./value_fields/CheckboxField.vue";
	import PasswordField from "./value_fields/PasswordField.vue";
	import DatetimeField from "./value_fields/DatetimeField.vue";
	import DateField from "./value_fields/DateField.vue";
	import TimeField from "./value_fields/TimeField.vue";
	import EmailField from "./value_fields/EmailField.vue";
	import TelField from "./value_fields/TelField.vue";
	import UrlField from "./value_fields/UrlField.vue";

	const uiStore = useUIElementStore();

	const props = defineProps({
		id: { type: Number, required: true },
		depth: { type: Number, required: true },
	});

	const fieldTypes: Record<pulsarity.ui.FieldType, Component> = {
		[pulsarity.ui.FieldType.FIELD_TYPE_UNKNOWN]: HiddenField,
		[pulsarity.ui.FieldType.FIELD_TYPE_TEXT]: TextField,
		[pulsarity.ui.FieldType.FIELD_TYPE_NUMBER]: NumberField,
		[pulsarity.ui.FieldType.FIELD_TYPE_RANGE]: RangeField,
		[pulsarity.ui.FieldType.FIELD_TYPE_SELECT]: SelectField,
		[pulsarity.ui.FieldType.FIELD_TYPE_CHECKBOX]: CheckboxField,
		[pulsarity.ui.FieldType.FIELD_TYPE_PASSWORD]: PasswordField,
		[pulsarity.ui.FieldType.FIELD_TYPE_DATETIME]: DatetimeField,
		[pulsarity.ui.FieldType.FIELD_TYPE_DATE]: DateField,
		[pulsarity.ui.FieldType.FIELD_TYPE_TIME]: TimeField,
		[pulsarity.ui.FieldType.FIELD_TYPE_EMAIL]: EmailField,
		[pulsarity.ui.FieldType.FIELD_TYPE_TEL]: TelField,
		[pulsarity.ui.FieldType.FIELD_TYPE_URL]: UrlField,
	};

	const fieldData: ComputedRef<pulsarity.ui.UIValueField | undefined> =
		computed(() => uiStore.valueFields.get(props.id));

	const valueType: ComputedRef<pulsarity.ui.FieldType> = computed(
		() =>
			fieldData.value?.fieldType ?? pulsarity.ui.FieldType.FIELD_TYPE_UNKNOWN,
	);
</script>

<template>
	<component
		v-if="
			valueType !== pulsarity.ui.FieldType.FIELD_TYPE_UNKNOWN &&
			(fieldData?.visible ?? false)
		"
		:is="fieldTypes[valueType]"
		:id="props.id"
	/>
</template>
