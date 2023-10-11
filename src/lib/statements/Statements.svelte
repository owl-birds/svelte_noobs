<script>
  let count = 0;
  // We're not limited to declaring reactive values
  // — we can also run arbitrary statements reactively.
  //  For example, we can log the value of count
  // whenever it changes
  $: console.log("Stand alone"); // only run when initiate
  // the comp
  $: console.log(`STATEMENTS, the count is changed : ${count}`);
  $: {
    console.log("grouped satements");
    console.log(`first statement : ${count}`);
  }
  $: if (count >= 10) {
    console.log("CONDITIONAL STATEMENTS");
    console.log(`count is bigger then 10 : ${count} need reset`);
    count = 0;
  }
  const increment = () => (count += 1);
</script>

<button on:click={increment}>click me : {count}</button>
