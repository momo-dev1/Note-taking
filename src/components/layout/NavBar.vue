<script>
</script>

<template>
  <!-- component -->
  <nav
    class="
      bg-[#282828]
      w-full
      flex
      relative
      justify-between
      items-center
      px-8
      h-20
    "
  >
    <div class="flex gap-4 max-w-5xl text-[#fefef6] w-full mx-auto">
      <RouterLink active-class="text-yellow-300" to="/">Notes</RouterLink>
      <RouterLink active-class="text-yellow-300" to="/stats">Stats</RouterLink>
    </div>
  </nav>
</template>



<style scoped>
</style>