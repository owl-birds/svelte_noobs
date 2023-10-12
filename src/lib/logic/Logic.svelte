<script lang="ts">
  //
  let count = 0;
  const increment = () => (count += 1);
  const reset = () => (count = 0);
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
