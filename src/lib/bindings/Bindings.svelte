<!-- 
As a general rule, data flow in Svelte is 
top down — a parent component can set props on a 
child component, and a component can set attributes 
on an element, but not the other way around.

Sometimes it's useful to break that rule. Take the 
case of the <input> element in this component — we 
could add an on:input event handler that sets the 
value of name to event.target.value, but it's a 
bit... boilerplatey. It gets even worse with other 
form elements, as we'll see.

Instead, we can use the bind:value directive:
 -->

<script lang="ts">
  //
  let name = "BINDINGS";
  // numeric values
  // In the DOM, everything is a string. That's
  // unhelpful when you're dealing with numeric
  // inputs — type="number" and type="range" — as it
  // means you have to remember to coerce input.value
  // before using it.

  // With bind:value, Svelte takes care of it for
  // you:
  let num1 = 0;
  let num2 = 100;
  // CHECKBOXES
  let is_exist = false;
  // SELECT
  const values = ["apple", "orange", "date", "tomato"];
  let select_fruit = values[0];
  let questions = [
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];

  let selected: { [index: string]: number | string } = {};
  // initiate value
  // let selected: { [index: string]: number | string } = questions[2];
  // STATEMENTS
  $: console.log("part BINDINGS: select value : ", selected);
  let answer: undefined | string = undefined;

  function handleSubmit() {
    if (selected === undefined) return;
    alert(
      `answered question ${selected.id} (${selected.text}) with "${answer}"`
    );
  }
  // GROUP INPUTS
  import Group_input from "./Group_input.svelte";
  // SELECT MULTIPLE
  import Select_multiple from "./Select_multiple.svelte";
  // TEXTAREA
  import Textarea from "./Textarea.svelte";
  //
  import Display from "./Display.svelte";
  let is_open = false;
  let text = "props bindings";
  let display: Display;
</script>

<h1>BINDINGS</h1>

<h4>HELLO {name}????</h4>
<input bind:value={name} />

<h5>Numeric Values</h5>
<h2>num1 : {num1}</h2>
<h2>num2 : {num2}</h2>
<h2>num1 + num2 = {num1} + {num2} = {num1 + num2}</h2>

<label>
  <input type="number" bind:value={num1} min="0" max="10" />
  <input type="range" bind:value={num1} min="0" max="10" step="0.5" />
</label>

<label>
  <input type="number" bind:value={num2} min="0" max="10" />
  <input type="range" bind:value={num2} min="0" max="100" step="1" />
</label>

<h5>CHECKBOXES</h5>
<label>
  Checkbox input
  <input type="checkbox" bind:value={is_exist} />
</label>
{#if is_exist}
  <h3>CHECKBOXES {is_exist}</h3>
{/if}

<h5>SELECT Bindings</h5>
<h3>fruit selected : {select_fruit}</h3>
<select bind:value={select_fruit}>
  {#each values as fruit, i (i)}
    <option value={fruit}>{fruit}</option>
  {/each}
</select>
<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
  <!-- <form on:submit={handleSubmit}> -->
  <!-- <select bind:value={selected} on:change={() => (answer = "")}> -->
  <select bind:value={selected} on:change={() => (answer = undefined)}>
    {#each questions as question}
      <option value={question}>
        <!-- 
          Note that the <option> values are objects rather than strings. Svelte doesn't mind.
         -->
        {question.text}
      </option>
    {/each}
  </select>

  <input bind:value={answer} />

  <button disabled={!answer} type="submit"> Submit </button>
</form>

<p>
  selected question {selected.id !== undefined ? selected.id : "[waiting...]"}
</p>
<!-- 
  NNOTES
  Because we haven't set an initial value of selected, 
  the binding will set it to the default value (the 
  first in the list) automatically. Be careful though 
  — until the binding is initialised, selected remains 
  undefined, so we can't blindly reference e.g. 
  selected.id in the template.
 -->

<!-- GROUP INPUT -->
<Group_input />

<!-- SELECT MULTIPLE -->
<Select_multiple />

<!-- TEXTAREA -->
<Textarea />

<!--  -->
<hr />
<Display bind:this={display} bind:is_open bind:text />
<button
  on:click={() => {
    display.bind_this_comp();
    is_open = !is_open;
  }}>toggle display</button
>
<input type="text" bind:value={text} />
