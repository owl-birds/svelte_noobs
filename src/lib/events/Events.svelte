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
</script>

<div on:pointermove={handle_move}>
  the pointer is at x:{position.x}, y:{position.y}
</div>

<style>
  div {
    width: 100%;
    height: 100px;
    display: grid;
    justify-content: center;
    align-content: center;
    background-color: darkgoldenrod;
    color: #fff;
  }
</style>
