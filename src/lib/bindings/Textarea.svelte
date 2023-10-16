<script lang="ts">
  //
  let value: string =
    "Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool";
</script>

<div>
  <h4>TEXTAREA</h4>
  <!-- 

    In cases like these, where the names match, we can also use a shorthand form
This applies to all bindings, not just textareas.   
-->
  <textarea bind:value name="textarea_test" id="" cols="30" rows="10" />
  <!-- <textarea bind:value={value} name="textarea_test" id="" cols="30" rows="10" /> -->
</div>
<div>
  <p>display value : {value}</p>
</div>
