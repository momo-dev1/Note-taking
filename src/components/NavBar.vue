<template>
  <nav class="bg-nero w-full">
    <ul
      class="
        max-w-5xl
        flex
        relative
        justify-between
        items-center
        px-8
        h-14
        mx-auto
      "
    >
      <li class="flex gap-4 text-ivory flex-1 mx-auto font-semibold">
        <RouterLink active-class="text-yellow-300" to="/">Notes</RouterLink>
        <RouterLink active-class="text-yellow-300" to="/stats"
          >Stats</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/add-note"
          class="
            border border-transparent
            text-sm
            py-2
            px-4
            font-medium
            rounded-md
            shadow-sm
            text-white
            bg-spray
            hidden
            md:block
          "
        >
          Add note
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>



