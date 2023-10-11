<!-- 
  SVELTE REACTIVITY IS BASED ON 
  ASSIGNMENTS
 -->

<!-- 
  Object
  const foo = obj.foo;
  foo.bar = 'baz';

  wont trigger reactivity on
  obj.foo.bar, unless u do re-assignment

  obj = obj

 -->

<!-- 
Because Svelte's reactivity is triggered by   
assignments, using array methods like push and 
splice won't automatically cause updates. For example, 
clicking the 'Add a number' button doesn't currently 
do anything, even though we're calling 
numbers.push(...) inside addNumber.

One way to fix that is to add an assignment that 
would otherwise be redundant: 
-->
<script lang="ts">
  let nums: number[] = [];
  const add_number_not_working = () => {
    nums.push(99);
  };
  const add_number = () => {
    nums.push(99); // it wont cause an update, because
    // svelte reacivity is triggered by assignment,
    // using array methods like push and splice wont
    // automatically cause updates,
    nums = nums; //???? what is this solution ahahaha,
    // above is an assignment
  };
  const add_number_idiomatic_solution = () => {
    nums = [...nums, nums.length + 1];
  };
  const pop_nums_not_reactive = () => {
    nums.pop();
  };
  const pop_nums_reactive = () => {
    nums.pop();
    nums = nums;
  };
  const change_last_num = () => {
    nums[nums.length - 1] = 888;
  };
  // You can use similar patterns to replace pop,
  // shift, unshift and splice.
  const staff = {
    name: "staff_no_1",
    badge_id: "23432",
  };
  const change_staff_name = () => {
    staff.name = "Budi";
  };
  const change_staff_badge_id = () => {
    staff.badge_id = "123";
  };
  const reset = () => {
    staff.name = "staff_no_1";
    staff.badge_id = "23432";
  };
</script>

<h1>updating arr and obj in svelte</h1>
<h2>{nums}</h2>
<button on:click={add_number}>add_number</button>
<button on:click={add_number_not_working}>add_number_not_working</button>
<button on:click={add_number_idiomatic_solution}
  >add_number_idiomatic_solution</button
>
<button on:click={pop_nums_not_reactive}>pop_nums_not_reactive</button>
<button on:click={pop_nums_reactive}>pop_nums_reactive</button>
<button on:click={change_last_num}>change_last_num</button>
<h2>obj : name : {staff.name} -- badge_id : {staff.badge_id}</h2>
<button on:click={change_staff_badge_id}>change_staff_badge_id</button>
<button on:click={change_staff_name}>change_staff_name</button>
<button on:click={reset}>reset</button>
