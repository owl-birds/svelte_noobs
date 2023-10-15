<script lang="ts">
  // Components can also dispatch events. To do so,
  // they must create an event dispatcher. Update
  // Inner.svelte:
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  //
  const say_helo = () => {
    dispatch("message", { text: "Hello!!!" });
    // costum event handler
  };
</script>

<button on:click={say_helo}>component event</button>

<!-- COMPONENT EVENTS -->
<!-- 
NOTES

createEventDispatcher must be called when the 
component is first instantiated — you can't do it 
later inside e.g. a setTimeout callback. This 
links dispatch to the component instance.

You can also try changing the event name to something 
else. For instance, change dispatch('message', {...}) 
to dispatch('greet', {...}) in Inner.svelte and change 
the attribute name from on:message to on:greet in 
App.svelte.
-->
