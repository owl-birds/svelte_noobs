<!-- EVENT FORWARDING -->
<!-- 
Unlike DOM events, component events don't bubble. If 
you want to listen to an event on some deeply nested 
component, the intermediate components must forward 
the event.

In this case, we have the same App.svelte and 
Inner.svelte as in the previous chapter, but there's 
now an Outer.svelte component that contains 
<Inner/>.

One way we could solve the problem is adding 
createEventDispatcher to Outer.svelte, listening for 
the message event, and creating a handler for it:

 -->

<script lang="ts">
  //
  import Inner from "./Inner.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const event_forwarding = (event: { detail: { text: string } }) => {
    dispatch("message", event.detail);
  };
</script>

<br />
<h3>EVENT FORWARDING</h3>
<Inner on:message={event_forwarding} btn_text="event forwarding example" />

<!-- shortcut -->
<Inner on:message btn_text="event forwarding shortcut ver" />
