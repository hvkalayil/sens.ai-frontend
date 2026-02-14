<script lang="ts">
interface Props {
    action?: () => void;
    label: string;
}

let { label = '', action }: Props = $props();

const onClick = () => {
    if (action) action();
};
</script>

<button type="button" class="bg-black text-white" onclick={onClick}>
    {label}
</button>
