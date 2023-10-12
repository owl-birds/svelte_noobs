<!-- 
  Conversely, if you need to reference all the props 
  that were passed into a component, including ones 
  that weren't declared with export, you can do so 
  by accessing $$props directly. It's not generally 
  recommended, as it's difficult for Svelte to 
  optimise, but it's useful in rare cases. -->
<script lang="ts">
  import Name_1 from "./Name_1.svelte";
  import Staffs from "./Staffs.svelte";
  let staff_1 = {
    first_name: "John",
    last_name: "Ken",
    badge_id: "99",
  };
</script>

<!-- // not using default value -->
<Name_1 name="Budi John" />
<!-- using default value -->
<Name_1 />

<div>
  <h1>PROPS, Staff details</h1>
  <Staffs />
  <hr />
  <Staffs undeclared_props="UNDECLARED PROPS IN STAFFS" {...staff_1} />
  <hr />
  <h5>spread operators</h5>
  <Staffs
    last_name={staff_1.last_name}
    first_name={staff_1.first_name}
    badge_id={staff_1.badge_id}
  />
</div>
