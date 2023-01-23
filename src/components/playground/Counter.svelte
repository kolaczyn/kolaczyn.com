<script lang="ts">
  let count = 0;

  const increment = () => count++

</script>

<button class="px-4 py-2 bg-blue-300 rounded-lg shadow-sm" on:click={increment}>Counter at {count}</button>