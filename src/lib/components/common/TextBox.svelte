<script lang="ts">
interface Props {
    label: string;
    id: string;
    value: string;
}

let { label = '', id = '', value = $bindable() }: Props = $props();
</script>

<div class="flex flex-col border-2 p-2">
    <label for={id}>{label}</label>
    <input class="border-2" type="text" name={id} {id} bind:value />
</div>
