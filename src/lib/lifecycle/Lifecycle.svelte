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
        paint(context, t);
      });
      // So far so good — you should see gently undulating colours in the shape of the Svelte logo. But there's one problem — the loop will continue even after the component has been destroyed. To fix that, we need to return a cleanup function from onMount:
      return () => {
        cancelAnimationFrame(frame);
      }; // clean up function
    }
  });
</script>

<h1>LIFECYCLE</h1>
<canvas width={32} height={32} />

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
