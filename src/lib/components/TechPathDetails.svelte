<script lang="ts">
import { APPROACH_TYPE } from '../constants';
import Button from './common/Button.svelte';
import TextBox from './common/TextBox.svelte';

interface Props {
    action: (data: TechPathForm) => void;
}

export type TechPathForm = {
    techName: string;
    currentCompetency: string;
    expectedCompetency: string;
    assisstanceLevel: string;
    type: APPROACH_TYPE;
};

const { action }: Props = $props();

let form = {
    techName: '',
    currentCompetency: '',
    expectedCompetency: '',
    assisstanceLevel: '',
    type: APPROACH_TYPE.TechApproach,
} satisfies TechPathForm;

const onSubmit = () => {
    if (action) action(form);
};
</script>

<form>
    <div class="flex flex-col gap-2">
        <TextBox
            id="techName"
            label="What is the technology you want to learn?"
            bind:value={form.techName} />
        <TextBox
            id="currentCompetency"
            label={`How good are you in ${form.techName || 'this'} currently?`}
            bind:value={form.currentCompetency} />
        <TextBox
            id="expectedCompetency"
            label={`How good do you want to get in ${form.techName || 'this'}?`}
            bind:value={form.expectedCompetency} />
        <TextBox
            id="assisstanceLevel"
            label="How much of handholding would you need?"
            bind:value={form.assisstanceLevel} />
        <Button label="Submit" action={onSubmit} />
    </div>
</form>
