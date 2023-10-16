<script lang="ts">
  //
  export let options: string[] | number[] = ["Cookies", "Ice Cream", "Cake"];
  export let name: string = "option's name";
  let selected: string[] | number[] = [];
  $: console.log(`multiple select ${name} : `, selected);
</script>

<div>
  <select name="options" multiple bind:value={selected}>
    <!--  -->
    {#each options as option}
      <option>{option}</option>
      <!-- <option value={option}>{option}</option> -->
    {/each}
  </select>
</div>

<!-- 
  Note that we're able to omit the value attribute 
  on the <option>, since the value is identical to 
    the element's contents.

  Press and hold the control key (or the command key 
  on MacOS) to select multiple options.
 -->
