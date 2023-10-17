<script lang="ts">
  export let text: string = "display's text";
  export let is_open: boolean = true;
  export const bind_this_comp = () => {
    console.log("COMPONENT EVENT????, Display");
  };
</script>

{#if is_open}
  <p>{text}</p>
{/if}
