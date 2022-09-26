<script setup>
</script>

<template>
  <RouterLink to="add-note">
    <div class="flex justify-center">
      <button
        class="
          h-13
          w-13
          text-white
          bg-nero
          md:hidden
          absolute
          bottom-6
          rounded-full
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width=".8"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  </RouterLink>
</template>

