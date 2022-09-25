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
      <button>
        <RouterLink to="/">Notes</RouterLink>
      </button>
      <button>
        <RouterLink to="/stats">Stats</RouterLink>
      </button>
    </div>
  </nav>
</template>



<style scoped>
</style>