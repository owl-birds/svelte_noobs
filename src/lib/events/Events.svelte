<script lang="ts">
  //
  const position = {
    x: 0,
    y: 0,
  };
  const handle_move = (event: MouseEvent) => {
    position.x = event.clientX;
    position.y = event.clientY;
  };

  // COMPONENT EVENTS
  import Component_events from "./Component_events.svelte";
  const component_event_handler = (event: { detail: { text: string } }) => {
    alert(event.detail.text + " Component Event");
  };
  // EVENT FORWARDING
  import Outer from "./Outer.svelte";
  const message_event_forward = (event: { detail: { text: string } }) => {
    //
    alert(event.detail.text + " EVENT FORWARDING");
  };
  // DOM EVENT FORWARDING
  import Big_red_button from "./Big_red_button.svelte";
  let is_clicked = false;
  const dom_event_forwarding = () => {
    is_clicked = !is_clicked;
  };
</script>

<div on:pointermove={handle_move}>
  the pointer is at x:{position.x}, y:{position.y}
</div>

<!-- INLINE EVENT HANDLER -->
<div
  on:pointermove={(event) => {
    position.x = event.clientX;
    position.y = event.clientY;
  }}
>
  inline event handler <br />
  the pointer is at x:{position.x}, y:{position.y}
</div>

<!-- 
  NOTES for inline event handler
  In some frameworks you may see recommendations to 
  avoid inline event handlers for performance reasons, 
  particularly inside loops. That advice doesn't apply 
  to Svelte — the compiler will always do the right 
  thing, whichever form you choose.
-->

<!-- EVENT MODIFIERS -->
<!-- 
The full list of modifiers:

- preventDefault — calls event.preventDefault() 
    before running the handler. Useful for client-
    side form handling, for example.
- stopPropagation — calls event.stopPropagation(), 
    preventing the event reaching the next element
- passive — improves scrolling performance on 
    touch/wheel events (Svelte will add it 
    automatically where it's safe to do so)
- nonpassive — explicitly set passive: false
- capture — fires the handler during the capture 
    phase instead of the bubbling phase
- once — remove the handler after the first time it 
    runs
- self — only trigger handler if event.target is the 
    element itself
- trusted — only trigger handler if event.isTrusted 
    is true, meaning the event was triggered by a 
    user action rather than because some JavaScript 
    called element.dispatchEvent(...)

You can chain modifiers together, 
e.g. on:click|once|capture={...}.
-->
<br />
<button on:click|once={() => alert("BUTTON CLICKED")}>
  Click me, u have only one chance
</button>

<!-- COMPONENT EVENTS -->
<br />
<Component_events on:message={component_event_handler} />

<!-- EVENT FORWARDING -->
<Outer on:message={message_event_forward} />

<!-- DOM EVENT FORWARDING -->
<br />
<br />
{#if is_clicked}
  <div>DOM EVENT FORWARDING</div>
{/if}
<br />
<br />
<Big_red_button on:click={dom_event_forwarding} />

<style>
  div:nth-child(1) {
    width: 100%;
    height: 100px;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: darkgoldenrod;
    color: #fff;
  }
  div:nth-child(2) {
    width: 100%;
    height: 100px;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: darkslateblue;
    color: #fff;
  }
</style>
