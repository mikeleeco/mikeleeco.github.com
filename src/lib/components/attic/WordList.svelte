<script>
  // the name is updated whenever the prop value changes...
  export let wordList;

  import { returnTileValue } from "$lib/utlilty/returnTileValue";
  import Transition from "$lib/Transition.svelte";
</script>

<Transition />

<div class="word-list-container">
  {#each wordList as word, index}
    {#if word.guess.length === 0}
      <div class="tile-container-hidden">
        {#each word.guess.slice(0, 7) as letter, index}
          <div class="drum">
            <span class="tile">
              {" "}
            </span>
          </div>
        {/each}
      </div>
    {:else}
      <div class="tile-container">
        {#each word.guess.slice(0, 7) as letter, index}
          <div class="drum">
            <span class="tile">
              {letter}
            </span>
          </div>
        {/each}
      </div>
    {/if}
  {/each}
</div>

<style>
  .word-list-container {
    position: absolute;
    margin-top: 1rem;
  }
  .tile-container {
    display: flex; /* or inline-flex */
    flex-direction: row;
    border-radius: 0.3em;
    background-color: var(--pure-background-color);
    border: 2px solid var(--pure-text-color);
    /* margin: 1rem; */
  }

  .tile-container-hidden {
    display: flex; /* or inline-flex */
    flex-direction: row;
    border-radius: 0.3em;
    background-color: var(--pure-background-color);
    border: 0px solid var(--pure-text-color);
    /* margin: 1rem; */
  }
  .tile {
    /* flex-basis: 100%; */
    font-family: var(--font-sans);
    font-size: 1.2rem;
    height: 100%;
    color: var(--pure-text-color);
  }

  .drum {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.1rem;
    margin-top: 0.3rem;
    border-radius: 0.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    /* color: var(--pure-background-color);
		background-image: linear-gradient(
			to right bottom,
			var(--pure-text-color),
			var(--accent-color) 10%,
			var(--pure-text-color) 100%
		); */
    background-position: 30% 100%;
    background-repeat: no-repeat;
    border: 2px solid var(--pure-text-color);
  }
</style>
