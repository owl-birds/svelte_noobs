<!-- 
svelte, is a web app that composed from one or more 
components, 
component : reusable self-contained block of code 
that encapsulates HTML, CSS and JS that belong 
togehter, written in to a .svelte

ex : App.svelte

 -->

<!-- ts/js -->
<script lang="ts">
  const name = "svelte NOOBS";
  // images/svgs
  // const url_svg_1 = "/assets/svelte.svg"
  import url_svg_1 from "./assets/svelte.svg";
  import src from "./assets/svelte.svg";

  // nested components
  import Nested from "./lib/nested_comp/Nested.svelte";
  // reactivity
  import Counter_v2 from "./lib/reactivity/Counter_v2.svelte";
  // declarations
  import Declarations from "./lib/declarations/Declarations.svelte";
  //STATEMENTS
  import Statements from "./lib/statements/Statements.svelte";
  // updating arr and obj
  import Upd_arr_obj from "./lib/updating_arr_obj/Upd_arr_obj.svelte";
</script>

<!-- HTML -->
<main>
  <div class="test-img">
    <img src={url_svg_1} alt="SVELTE LOGO" />
    <img {src} alt="SVELTE LOGO" />
  </div>
  <h1>HELLO WORLD!</h1>
  <h4>starting : {name} : Uppercased : {name.toUpperCase()}</h4>
  <div class="nested-comps">
    <Nested />
    <!-- Component names are always 
    capitalised, to distinguish them from HTML 
    elements. -->
    <!-- outside of the comp 
    will not affect the inside of this nested comp  -->
    <h3>THE NESTED COMP IS UNAFFECTED</h3>
  </div>
  <!-- HTML TAGS
  Ordinarily, strings are inserted as plain text, 
  meaning that characters like < and > have no 
  special meaning.

  But sometimes you need to render HTML directly 
  into a component. For example, the words you're 
  reading right now exist in a markdown file that 
  gets included on this page as a blob of HTML.

  In Svelte, you do this with the special {@html ...} tag:
   -->
  <div class="HTML tags">
    <p>{@html "<h1>render HTML directly into a component</h1>"}</p>
    <!-- 
    use it carefully, only use it, if u trust 
    the content, for ex: the artilcle is written by u
    -->
  </div>
  <!-- 
    IMPORTANT
    Warning! Svelte doesn't perform any sanitization 
    of the expression inside {@html ...} before it 
    gets inserted into the DOM. This isn't an issue 
    if the content is something you trust like an 
    article you wrote yourself. However if it's some 
    untrusted user content, e.g. a comment on an 
    article, then it's critical that you manually 
    escape it, otherwise you risk exposing your 
    users to Cross-Site Scripting (XSS) attacks.
   -->
  <div class="reactivity">
    <Counter_v2 />
  </div>
  <div class="declarations">
    <Declarations />
  </div>
  <div class="statements">
    <Statements />
  </div>
  <div class="update-arr-obj">
    <Upd_arr_obj />
  </div>
</main>

<!-- CSS -->
<style>
  @keyframes rotate-img {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  .test-img img:nth-child(2) {
    /* transform: rotate(90deg); */
    animation: rotate-img 2s linear infinite;
  }
  .nested-comps h3 {
    color: brown;
  }
</style>
