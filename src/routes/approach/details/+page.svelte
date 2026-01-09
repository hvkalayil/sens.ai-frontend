<script lang="ts">
import { page } from '$app/state';
import ProjectPathDetails from '@/lib/components/ProjectPathDetails.svelte';
import TechPathDetails from '@/lib/components/TechPathDetails.svelte';
import { TYPE_OF_PATH } from '@/lib/constants';

type DetailsPageState = {
    type?: TYPE_OF_PATH;
};
const approachType =
    (page.state as DetailsPageState)?.type ?? TYPE_OF_PATH.ProjectPath;
</script>

<main>
    <section>
        {#if approachType === TYPE_OF_PATH.ProjectPath}
            <ProjectPathDetails />
        {:else if approachType === TYPE_OF_PATH.TechPath}
            <TechPathDetails />
        {/if}
    </section>
</main>
