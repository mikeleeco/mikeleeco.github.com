<script>
  // the name is updated whenever the prop value changes...
  export let items;
  import { fade, fly } from "svelte/transition";

  import { returnTileValue } from "$lib/utlilty/returnTileValue";
  let tileValue;
</script>

<div class="game-section game-tiles">
  {#each items.text.slice(0, 7) as letter, index}
    <div class="drum">
      <span class="tileNo">
        {returnTileValue(letter)}
      </span>
      <span class="tile">
        {letter}
      </span>
    </div>
  {/each}
</div>

<style>
  .game-tiles {
    display: flex; /* or inline-flex */
    /* flex-direction: row; */
    align-items: center;
    padding-bottom: 1rem;
  }

  .tile {
    font-family: var(--font-sans);
    font-size: 3rem;
    padding-bottom: 0.5rem;
    justify-content: center;
    height: 80%;
    text-align: center;
    /* text-transform: capitalize; */
  }
  .tileNo {
    display: flex;
    color: var(--pure-background-color);
    height: 20%;
    font-family: var(--font-sans);
    text-align: center;
    vertical-align: top;
    justify-content: right;
    vertical-align: top;
    font-weight: 600;
    margin-right: 0.3rem;
    margin-top: 0.1rem;
  }
  .drum {
    display: flex;
    flex-direction: column;
    width: 60px;
    margin: 0.2rem;
    border-radius: 0.3em;
    color: var(--pure-background-color);
    background-image: linear-gradient(
      to right bottom,
      var(--pure-text-color),
      var(--accent-color) 10%,
      var(--pure-text-color) 100%
    );
    background-position: 30% 100%;
    background-repeat: no-repeat;
    border: 2px solid var(--pure-text-color);
  }
  @media screen and (max-width: 768px) {
    .drum {
      width: 33px;
      height: 50px;
    }
    .tile {
      font-size: 2rem;
    }
    .tileNo {
      font-size: 0.5rem;
    }
  }
</style>
