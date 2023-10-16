<script lang="ts">
  export let num_of_scoops = [1, 2, 3];
  export let flavour_options = ["strawberry", "chocolate", "vanilla"];
  //
  let scoops: number | undefined = 1;
  $: console.log(`number of scoops : ${scoops}`);
  let selected_flavours: string[] = [];
  $: console.log("flavour selected :", selected_flavours);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  }); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
</script>

<h4>choose how many scoops</h4>
{#each num_of_scoops as num}
  <label>
    <input type="radio" name="scoops" value={num} bind:group={scoops} />
    {num}
    {num === 1 ? "scoop" : "scoops"}
  </label>
  <br />
{/each}

<h4>Choose one or more flavours</h4>
{#each flavour_options as flavour}
  <label>
    <input
      type="checkbox"
      name="flavours"
      value={flavour}
      bind:group={selected_flavours}
    />
    {flavour}
  </label>
  <br />
{/each}

<!--  -->
{#if selected_flavours.length === 0}
  <p>choose at least one flavour</p>
{:else if scoops && selected_flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops}
    {scoops === 1 ? "scoop" : "scoops"}
    of {formatter.format(selected_flavours)}
  </p>
{/if}
<!--  -->

<!-- const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(
      locale,
    ).format(count)}`,
  );
}

log("en-US"); // 5/24/2012 26,254.39

log("de-DE"); // 24.5.2012 26.254,39 -->
