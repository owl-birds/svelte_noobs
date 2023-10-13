<script lang="ts">
  //
  let count = 0;
  const increment = () => (count += 1);
  const reset = () => (count = 0);
  // array for each block
  const colors: string[] = ["red", "blue", "aqua", "teal", "orange"];
  let selected: string = colors[0];

  // keyed each
  import Thing from "./Things.svelte";
  let things = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ];
  const remove_first = () => (things = things.splice(1));
  // AWAIT BLOCK
  import Await_block from "./Await_block.svelte";
</script>

<!-- {#if count <= 10}
  <h1 class="red">--LOGIC--</h1>
{/if} -->
{#if count > 10 && count <= 15}
  <h2 class="blue">--Logic--</h2>
{:else if count > 15 && count <= 20}
  <h3 class="aqua">---Logic---</h3>
{:else}
  <h1 class="red">----Logic----</h1>
{/if}

<button on:click={increment}>
  CLiCkEd {count}
  {count === 1 ? "time" : "times"}
</button>
<button on:click={reset}>reset</button>

<!-- EACH BLOCKS -->
<h3>SELECTED COLOR : <span style="color: {selected}">{selected}</span></h3>
{#each colors as color, i}
  <button
    aria-current={selected === color}
    aria-label={color}
    style="background: {color}"
    on:click={() => (selected = color)}>{i + 1}</button
  >
{/each}

<!-- KEYED EACH BLOCK -->
<!-- 
  


You can use any object as the key, as Svelte uses a Map internally — in other words you could do (thing) instead of (thing.id). Using a string or number is generally safer, however, since it means identity persists without referential equality, for example when updating with fresh data from an API server.
 -->
<h3>KEYED EACH BLOCK</h3>
<!-- cause we rent using declarative var in the Thing
so when we manipulate the value on each block

By default, when you modify the value of an each block, it will add and remove items at the end of the block, and update any values that have changed. That might not be what you want.

It's easier to show why than to explain. Click the 'Remove first thing' button a few times, and notice what happens: it does not remove the first <Thing> component, but rather the last DOM node. Then it updates the name value in the remaining DOM nodes, but not the emoji, which is fixed when each <Thing> is created.

Instead, we'd like to remove only the first <Thing> component and its DOM node, and leave the others unaffected.

To do that, we specify a unique identifier (or "key") for the each block:

-->

<!-- {#each things as thing} -->
<!--- the solution for this is using declarative var ---->
{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}
<button on:click={remove_first}>remmove first thing</button>

<!-- 
  You can use any object as the key, as Svelte uses 
  a Map internally — in other words you could do 
  (thing) instead of (thing.id). Using a string or 
  number is generally safer, however, since it means 
  identity persists without referential equality, 
  for example when updating with fresh data from an 
  API server.
 -->

<!-- AWaIT BLOCK -->
<Await_block />

<style>
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
  .aqua {
    color: aqua;
  }
</style>
