<script lang="ts">
  export let first_name = "fname"; // deafult value
  export let last_name = "lname";
  export let badge_id = "01";
  let access__$$props = "$$props accessed";
</script>

<h3>first name : {first_name}</h3>
<h3>last name : {last_name}</h3>
<h3>badge id : {badge_id}</h3>

<!-- 
  Conversely, if you need to reference all the props 
  that were passed into a component, including ones 
  that weren't declared with export, you can do so 
  by accessing $$props directly. It's not generally 
  recommended, as it's difficult for Svelte to 
  optimise, but it's useful in rare cases. -->

<h5>
  {$$props.first_name} - {$$props.access__$$props} - {$$props.undeclared_props}
</h5>
<!-- accessing propss directly, its not generally recommended
, as its difficult for svelte to optimise, but
its useful in rare cases -->
