<script>
  import { windowHeight, windowWidth } from "../../stores/global.js";
  import Tile from "../components/Tile.svelte";
  import WordList from "../components/WordList.svelte";
  import { sleep } from "../../scripts/utils.js";
  import Icon from "$lib/components/Icon.svelte";

  let i = 0;
  let words = {
    id: 0,
    started: false,
    wordList: [
      {
        id: 0,
        text: "meelkie",
        answer: "mikelee",
        complete: false,
        guess: "",
      },
      {
        id: 1,
        text: "eschocu",
        answer: "couches",
        complete: false,
        guess: "",
      },
      {
        id: 2,
        text: "teeprst",
        answer: ["pretest", "pertest", "petters"],
        complete: false,
        guess: "",
      },
      {
        id: 3,
        text: "uonrutt",
        answer: ["turnout", "outturn"],
        complete: false,
        guess: "",
      },
      {
        id: 4,
        text: "bdilota",
        answer: "tabloid",
        complete: false,
        guess: "",
      },
      {
        id: 5,
        text: "oorsrhr",
        answer: "horrors",
        complete: false,
        guess: "",
      },
      {
        id: 6,
        text: "cnotocc",
        answer: "concoct",
        complete: false,
        guess: "",
      },
      {
        id: 7,
        text: "hpirmut",
        answer: "triumph",
        complete: false,
        guess: "",
      },
      {
        id: 8,
        text: "cpamoss",
        answer: "compass",
        complete: false,
        guess: "",
      },
      {
        id: 9,
        text: "wayurna",
        answer: "runaway",
        complete: false,
        guess: "",
      },
      {
        id: 10,
        text: "ektocah",
        answer: "hotcake",
        complete: false,
        guess: "",
      },
    ],
  };

  let pushWord = (word) => {
    let df = [];
    for (var i = 0; i < word.length; ++i) {
      df.push(word[i]);
    }
    return df;
  };

  let sectionHeight = $windowHeight;
  import { shuffleLetters } from "$lib/utlilty/shuffleLetters.js";
  import { countTiles } from "$lib/utlilty/countTiles.js";

  let pickedWord = words.wordList[i];
  let value = "";
  let wordList = words.wordList;

  let encouragement = "";

  let completed = wordList.length === 10;
  function shuffleTiles() {
    // pushWord: string to characters in an array
    // shuffleLetters: shuffle letters, return as split
    pickedWord.text = shuffleLetters(pushWord(pickedWord.text), true);
  }
  async function newWord() {
    words.started = true;
    if (pickedWord.answer !== "mikelee") {
      let arr = words.wordList.filter((d) => {
        d.complete !== true && d.text != pickedWord.text;
      });

      pickedWord = wordList[Math.floor(Math.random() * arr.length)];
    }

    if (pickedWord.answer === "mikelee" && pickedWord.complete) {
      await sleep(3000);
      let arr = words.wordList.filter((d) => {
        d.complete !== true && d.text != pickedWord.text;
      });

      pickedWord = wordList[Math.floor(Math.random() * arr.length)];
    }
    console.log(pickedWord);

    value = pickedWord.guess;
    return true;
  }

  let submittedValue = null;

  // function addToArray() {
  //   pickedWord.answer.map(function (e) {
  //     //  = e.split(" ").indexOf(pickedWord.guess) > -1
  //     return e;
  //   });
  // }

  function allAreTrue() {
    // console.log("all are true");
    if (wordList.filter((d) => d.complete !== false).length === 10) return true;
  }

  function checkGuess() {
    // console.log(pickedWord);
    // console.log(pickedWord.answer.split(" ").indexOf(pickedWord.guess));
    pickedWord.guess = value;

    // if pickedWord.guess === "mikelee" and pickedWord.guess === answer, give directions
    // if pickedWord.guess !== "mikelee" add to wordList
    // if pickedWord.guess ===  pickedWord.answer assign complete = true and newWord()
    // if pickedWord.guess !==  pickedWord.answer, for every 3 change in guess add encouragement?

    wordList = wordList.filter((d) => d.answer !== "mikelee");

    if (pickedWord.guess == pickedWord.answer) {
      pickedWord.complete = true;
      newWord();
    }
  }
</script>

<section id="game">
  <div class="game">
    <div class="game-section game-encouragement">
      <h2 class="encouragement">
        {#if allAreTrue()}
          You solved all 10 seven-letter anagrams!! That's amazing :D
        {/if}
      </h2>
      <p class="encouragement">
        {#if pickedWord.guess === "mikelee"}
          Nicely done! There are 10 seven-letter anagrams in all...happy
          solving!
        {/if}
      </p>
    </div>

    <Tile items={pickedWord} />
    <div class="game-section game-input">
      <div class="game-section game-input-form">
        <form on:submit|preventDefault={() => (submittedValue = value)}>
          <input bind:value />

          <button class="button" on:click={checkGuess}>Submit</button>
          <hr />
        </form>
      </div>
      <div class="game-section game-input-buttons">
        <button class="button" alt="Shuffle letters" on:click={shuffleTiles}
          >Shuffle letters <Icon name="refresh-cw" /></button
        >
        <button
          class="button"
          alt="New Word"
          on:click={newWord}
          disabled={!words.started}>Next word...</button
        >
      </div>
    </div>
    <div class="game-section game-output">
      <hr />
      <WordList {wordList} />
    </div>
  </div>
</section>

<style>
  #game {
    font-family: var(--font-sans);
  }
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .game-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .game-input-buttons {
    flex-direction: row;
  }

  .encouragement {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 468px) {
    section {
      place-items: center;
    }
  }
</style>
