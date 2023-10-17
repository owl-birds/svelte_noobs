<script lang="ts">
  //
  import { onMount, onDestroy } from "svelte";
  import { fetch_text } from "../logic/fetch_text";
  const url = "https://icanhazdadjoke.com/";
  let joke: { [index: string]: string | number };
  onMount(async () => {
    console.log("Component Mounted");
    joke = await fetch_text(url);
  });
  onMount(() => {
    console.log("Component Mounted");
    return () => {
      console.log("return Destroyed from onMount");
    };
  });
  onDestroy(() => {
    console.log("Component Destroyed");
    joke = {};

    // ALL OF YOUR CLEANUP CAN BE DONE HERE,
    // on onDestroy

    // return () => {
    //   console.log("return destroyed from onDestroy");
    // }; // UNNECESSARY
  });
</script>

<h2>NESTED, onMount, onDestroy</h2>
{#if joke}
  {#await joke}
    <p>... waiting for a joke</p>
  {:then joke_res}
    <p>the joke: {joke_res.joke}</p>
  {:catch error}
    <p style="color: red;">ERROR : {error.message}</p>
  {/await}
{:else}
  <p>... waiting</p>
{/if}
