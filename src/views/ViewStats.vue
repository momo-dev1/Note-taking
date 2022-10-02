<script setup>
import { useStoreNotes } from "@/store/storeNotes";

const notes = useStoreNotes();
</script>

<template>
  <div
    class="
      mt-4
      w-11/12
      max-w-3xl
      mx-auto
      border border-nero
      shadow-md
      rounded-sm
    "
  >
    <table class="table-auto w-full">
      <thead class="text-xs font-semibold uppercase bg-spray/50">
        <tr>
          <th class="p-2">
            <div class="font-semibold text-left">Stat</div>
          </th>
          <th class="p-2">
            <div class="font-semibold text-left">Value</div>
          </th>
        </tr>
      </thead>
      <tbody class="text-sm divide-y divide-gray-200">
        <tr>
          <td class="p-2">Number of notes</td>
          <td class="p-2">{{ notes.totalNoteCount }}</td>
        </tr>
        <tr>
          <td class="p-2">Number of Characters (of all notes)</td>
          <td class="p-2">{{ notes.totalCharacterCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

