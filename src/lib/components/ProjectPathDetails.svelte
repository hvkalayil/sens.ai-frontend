<script lang="ts">
import { APPROACH_TYPE } from '../constants';
import Button from './common/Button.svelte';
import TextBox from './common/TextBox.svelte';

interface Props {
    action: (data: ProjectPathForm) => void;
}

export type ProjectPathForm = {
    projectName: string;
    projectDescription: string;
    techStack: string;
    assisstanceLevel: string;
    type: APPROACH_TYPE;
};

const { action }: Props = $props();

let form = {
    projectName: '',
    projectDescription: '',
    techStack: '',
    assisstanceLevel: '',
    type: APPROACH_TYPE.ProjectApproach,
} satisfies ProjectPathForm;

const onSubmit = () => {
    if (action) action(form);
};
</script>

<form>
    <div class="flex flex-col gap-2">
        <TextBox
            id="projectName"
            label="Do you have a name for this project?"
            bind:value={form.projectName} />
        <TextBox
            id="projectDescription"
            label="Define the details of the project. Lets get into it"
            bind:value={form.projectDescription} />
        <TextBox
            id="techStack"
            label="Do you have a tech stack in mind to use for this project"
            bind:value={form.techStack} />
        <TextBox
            id="assisstanceLevel"
            label="How much of handholding would you need?"
            bind:value={form.assisstanceLevel} />

        <Button label="Submit" action={onSubmit} />
    </div>
</form>
