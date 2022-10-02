<script setup>
import NoteCard from "@/components/NoteCard.vue";
import AddButton from "@/components/AddButton.vue";
import { useStoreNotes } from "@/store/storeNotes";

const noteStore = useStoreNotes();
</script>
  

<template>
  <div class="max-w-5xl py-10 px-3 mx-auto relative min-h-[calc(100vh-56px)]">
    <div
      v-if="noteStore.notes.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <NoteCard v-for="note in noteStore.notes" :key="note.id" :note="note" />
    </div>
    <div class="text-center flex flex-col gap-2" v-else>
      <span class="text-2xl font-semibold text-gray-500"
        >No notes added yet</span
      >
      <span class="text-gray-400"
        >Tap <span class="md:hidden">'+'</span>
        <span class="hidden md:inline text-spray">Add note</span> button
        <span class="md:hidden">on bottom</span> to add new note</span
      >
    </div>

    <AddButton />
  </div>
</template>