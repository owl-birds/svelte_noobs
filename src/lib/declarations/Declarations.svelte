<!-- 
Svelte automatically updates the DOM when your 
component's state changes. Often, some parts of a 
component's state need to be computed from other 
parts (such as a fullname derived from a firstname 
and a lastname), and recomputed whenever they 
change.

For these, we have reactive declarations. They look 
like this:

let count = 0;
$: doubled = count * 2;
 -->

<!-- 
NOTES
Note that reactive declarations and statements will 
run after other script code and before component 
markup is rendered.
 -->

<script>
  let count = 0;

  const increment = () => (count += 1);
  const decrement = () => (count -= 1);

  // not reactive declarations
  let doubled_not_reactive = count * 2;

  // reactive declarations
  $: doubled_reactive = count * 2;
</script>

<div>
  <!--  -->
  <h1>REACTIVE DECLARATIONS</h1>
  <h2>[{count}]</h2>
  <h4>not reactive : {doubled_not_reactive} : count * 2</h4>
  <h4>reactive : {doubled_reactive} : count * 2</h4>
  <h4>reactive, write it directly : [count * 2] : {count * 2} : count * 2</h4>
  <button on:click={increment}> increment </button>
  <button on:click={decrement}> decrement </button>
</div>

<style></style>
