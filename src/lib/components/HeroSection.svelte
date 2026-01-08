<script lang="ts">
interface Props {
    titlePrefix?: string;
    titleHighlighted?: string;
    subtitle?: string;
    primaryButtonText?: string;
}

let {
    titlePrefix = 'Welcome to',
    titleHighlighted = 'sens.ai',
    subtitle = 'Empowering intelligent solutions with cutting-edge AI technology. Transform your workflow with the power of artificial intelligence.',
    primaryButtonText = 'Get Started',
}: Props = $props();

const onPrimaryClick = () => {
    console.log('Clicked');
};
</script>

<section class="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
        <div class="text-center">
            <h1
                class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                {titlePrefix}{' '}
                <span
                    class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {titleHighlighted}
                </span>
            </h1>
            <p
                class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
                {subtitle}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <button
                    type="button"
                    onclick={onPrimaryClick}
                    class="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    {primaryButtonText}
                </button>
            </div>
        </div>
    </div>

    <!-- Decorative background elements -->
    <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
    </div>
</section>
