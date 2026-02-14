<script lang="ts">
import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { page } from '$app/state';
import ProjectPathDetails, {
    type ProjectPathForm,
} from '@/lib/components/ProjectPathDetails.svelte';
import TechPathDetails, {
    type TechPathForm,
} from '@/lib/components/TechPathDetails.svelte';
import { APPROACH_TYPE, LOCAL_STORAGE } from '@/lib/constants';

type DetailsPageState = {
    type?: APPROACH_TYPE;
};
const approachType =
    (page.state as DetailsPageState)?.type ?? APPROACH_TYPE.ProjectApproach;

const onSubmit = (data: ProjectPathForm | TechPathForm) => {
    localStorage.setItem(LOCAL_STORAGE.approachDetails, JSON.stringify(data));
    goto(resolve('/approach/evaluation/'));
    // TODO: Call API to add request to queue
    // TODO: Instead of redirect show status of request in this page itself
    // TODO: If API failed, add ability to retry
};
</script>

<main>
    <section class="flex justify-center">
        <div class="w-3/4">
            {#if approachType === APPROACH_TYPE.ProjectApproach}
                <ProjectPathDetails action={onSubmit} />
            {:else if approachType === APPROACH_TYPE.TechApproach}
                <TechPathDetails action={onSubmit} />
            {/if}
        </div>
    </section>
</main>
