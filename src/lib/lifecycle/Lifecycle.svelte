<!-- 
Every component has a lifecycle that starts when it 
is created, and ends when it is destroyed. There are 
a handful of functions that allow you to run code at 
key moments during that lifecycle. The one you'll use 
most frequently is onMount, which runs after the 
component is first rendered to the DOM.

In this exercise, we have a <canvas> that we'd like 
to animate, using the paint function in gradient.js. 
Begin by importing the function from svelte:
-----------------
NOTES

Svlete onMount - Lifecycle

// basic syntax
onMOunt(()=>{
  // Code to run when the component is mounted
})

 PRACTICAL USE
 
 1. Loading data
 const fetch_data = ()=>{};
 onMount(()=>{
  fetch_data();
 }) 
 
 ::::: > fetch_data function is callled as soon as
 the component is mounted, initiating the data retrieval
 process

 2. Handling Asynchronous Operations

 onMount(async () => {
  const data = await fetch_data();
 })

 !!!!. Cleaning up resources
 sometimes you may need to clean up resourcces when a 
 component is destroyed. the onMount function allows you
 to return a functon that will be called when the component
 is removed from the DOM

This pattern ensures that any resources allocated during the component's lifecycle are properly released when the component is destroyed.

############
Common Mistakes And Best Practices
When working with onmount, there are a few common mistakes to avoid and best practices to follow:

- Avoid Complex Logic: Keep the logic within the onmount function simple and focused. If you need to perform complex operations, consider breaking them down into separate functions.
- Use Async/Await Carefully: If you're using async/await within onmount, make sure to handle any potential errors to prevent unhandled promise rejections.
- Clean Up Resources: If you allocate resources within onmount, make sure to clean them up by returning a cleanup function.

// more read : https://marketsplash.com/tutorials/svelte/svelte-onmount/#:~:text=The%20onmount%20function%20in%20Svelte,party%20libraries%20or%20fetching%20data. 
-->
<script lang="ts">
  import { onMount } from "svelte";
  import { paint } from "./gradient";
  onMount(() => {
    const canvas = document.querySelector("canvas");
    // In a later exercise, we'll learn how to get an element reference without using document.querySelector.
    const context = canvas?.getContext("2d");

    if (context) {
      let frame = requestAnimationFrame(function loop(t) {
        requestAnimationFrame(loop);
        // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        paint(context, t);
      });
      // So far so good — you should see gently undulating colours in the shape of the Svelte logo. But there's one problem — the loop will continue even after the component has been destroyed. To fix that, we need to return a cleanup function from onMount:
      return () => {
        cancelAnimationFrame(frame);
      }; // clean up function
    }
  });
  // onMount and onDestroy simple example
  import Nested from "./Nested.svelte";
  let is_nested = false;
</script>

<h1>LIFECYCLE</h1>
<canvas width={32} height={32} />
<br />
{#if is_nested}
  <Nested />
{/if}
<button on:click={() => (is_nested = !is_nested)}>click to show nested</button>

<style>
  canvas {
    /* position: fixed;
    left: 0;
    top: 0; */
    width: 100%;
    height: 100%;
    background-color: #666;
    mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
    mask-size: 60vmin;
    -webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
    -webkit-mask-size: 60vmin;
  }
</style>
