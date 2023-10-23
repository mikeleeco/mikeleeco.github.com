<script>
    export let alt;
    export let src;
    export let text;

    let visible = false;

    function showCaption() {
        visible = !visible;
    }
</script>

<figure
    on:keypress={showCaption}
    on:click={showCaption}
    class="relative flex flex-col first:pt-5 last:pb-5 py-5"
>
    <img {src} {alt} />

    <figcaption class="hidden sm:block py-2">{@html text}</figcaption>

    {#if visible}
        <figcaption
            class="lg:hidden flex-1 bg-[--primary-color] opacity-[85%] p-3 w-full absolute"
        >
            <div class="text-primary opacity-100 p-2">{@html text}</div>
        </figcaption>
    {/if}
</figure>