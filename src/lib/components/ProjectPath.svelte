<script lang="ts">
import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { APPROACH_TYPE } from '../constants';
import Button from './common/Button.svelte';
const onClick = () => {
    goto(resolve('/approach/details'), {
        state: {
            type: APPROACH_TYPE.ProjectApproach,
        },
    });
};

const title = 'I want to learn from a project idea I have';
const subTitle =
    'Define your project idea and sens.ai will build a path that will help you build out your project. Teaching you different concepts along the way.';
const buttonLabel = 'Define idea';
</script>

<div>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    <Button label={buttonLabel} action={onClick} />
</div>
