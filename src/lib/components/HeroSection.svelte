<script lang="ts">
import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import Button from './common/Button.svelte';

const title = 'Welcome to sens.ai';
const subtitle =
    'Knowledge is of no value unless you put it into practice. Sens.ai is your teacher that helps you learn by practicing.';
const primaryButtonLabel = 'Get Started';
const onClick = () => {
    goto(resolve('/approach/select'));
};
</script>

<section class="flex w-full justify-center">
    <div class="text-center">
        <h1>{title}</h1>
        <p class="mx-auto mt-6 max-w-2xl">
            {subtitle}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <Button label={primaryButtonLabel} action={onClick} />
        </div>
    </div>
</section>
