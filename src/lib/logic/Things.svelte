<script lang="ts">
  //
  export let name: string = "apple";
  //
  const emojis: { [index: string]: string } = {
    apple: "🍎",
    banana: "🍌",
    carrot: "🥕",
    doughnut: "🍩",
    egg: "🥚",
  };
  //
  // $: emoji = emojis[name]; // it will automatically update it
  let emoji = emojis[name]; // if we dont specify a key here
  // the moji will not be updated
</script>

<div>
  <p>{emoji} : {name}</p>
</div>
