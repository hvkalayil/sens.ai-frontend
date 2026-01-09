<script lang="ts">
import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { TYPE_OF_PATH } from '../constants';
import Button from './common/Button.svelte';
const onClick = () => {
    goto(resolve('/approach/details'), {
        state: {
            type: TYPE_OF_PATH.TechPath,
        },
    });
};
const title = 'I want to learn a tech';
const subTitle =
    'Define what you want to learn and sens.ai will setup a learning journey for you. A simple project that will take you through the basics and take you into the action';
const buttonLabel = 'Define tech';
</script>

<div>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    <Button label={buttonLabel} action={onClick} />
</div>
