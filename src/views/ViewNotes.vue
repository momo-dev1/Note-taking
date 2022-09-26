<script setup>
import NoteCard from "@/components/NoteCard.vue";
import AddButton from "@/components/AddButton.vue";
</script>
  

<template>
  <div class="max-w-5xl py-10 px-3 mx-auto relative min-h-[calc(100vh-56px)]">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NoteCard />
    </div>

    <AddButton />
  </div>
</template>