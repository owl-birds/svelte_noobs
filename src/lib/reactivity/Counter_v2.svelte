<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
  const decrement = () => {
    count -= 1;
  };
</script>

<div>
  <h4>REACTIVITY [{count}]</h4>
  <button on:click={increment}> increment </button>
  <button on:click={decrement}> decrement </button>
</div>

<style></style>
