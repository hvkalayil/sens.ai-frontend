<script lang="ts">
import ProjectPath from '@/lib/components/ProjectPath.svelte';
import TechPath from '@/lib/components/TechPath.svelte';
</script>

<main class="flex min-h-screen w-full items-center gap-2 text-center">
    <section class="flex w-1/2">
        <TechPath />
    </section>

    <section class="flex w-1/2">
        <ProjectPath />
    </section>
</main>
