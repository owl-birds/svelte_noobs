<!-- COMPONENTS EVENT -->

<script>
  //
  export let btn_text = "Click to say hello";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

<button on:click={sayHello}>{btn_text}</button>
