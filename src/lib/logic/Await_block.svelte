<!-- 
Most web applications have to deal with asynchronous 
data at some point. Svelte makes it easy to await 
the value of promises directly in your markup:    

Only the most recent promise is considered, 
meaning you don't need to worry about race 
conditions.

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

If you know that your promise can't reject, 
you can omit the catch block. You can also omit the 
first block if you don't want to show anything until 
the promise resolves:

{#await promise then number}
	<p>The number is {number}</p>
{/await}

-->
<script lang="ts">
  import { fetch_text } from "./fetch_text";
  const urls: string[] = [
    //
    "https://icanhazdadjoke.com/",
  ];
  //   const jokes: string[] = [];

  let joke = fetch_text(urls[0]);
  const button_fetch = () => {
    joke = fetch_text(urls[0]);
  };
</script>

<div>
  <h1>DAD's Jokes</h1>
  <!-- AWAIT BLOCK -->
  {#await joke}
    <p>...waiting for the JoKe</p>
  {:then the_joke}
    <p>dad's joke: {the_joke.joke}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
  <!-- AWAIT BLOCK -->
  <button on:click={button_fetch}>fetch dad's joke</button>
</div>
