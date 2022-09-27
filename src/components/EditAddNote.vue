<script setup>
const props = defineProps({
  titleValue: {
    type: String,
  },
  contentValue: {
    type: String,
  },
  handleSubmit: {
    type: String,
  },
});
</script>

<template>
  <form
    @submit.prevent="$emit('handleSubmit')"
    class="relative m-4 max-w-3xl lg:mx-auto"
  >
    <div class="border border-nero rounded-lg shadow-md p-5 overflow-hidden">
      <label for="title" class="sr-only">Title</label>
      <input
        v-model="titleValue"
        @input="$emit('update:titleValue', titleValue)"
        type="text"
        name="title"
        id="title"
        class="
          block
          w-full
          py-1
          px-1
          text-lg
          font-medium
          border-l-2 border-nero
          outline-none
          placeholder-nero
          focus:ring-0
          placeholder:font-bold
          mb-6
          bg-transparent
        "
        placeholder="Add title"
      />
      <label for="description" class="sr-only">Description</label>
      <textarea
        v-model="contentValue"
        @input="$emit('update:contentValue', contentValue)"
        rows="2"
        name="description"
        id="description"
        class="
          bg-transparent
          block
          w-full
          border-2 border-nero
          outline-none
          py-2
          px-2
          h-32
          rounded
          resize-none
          placeholder-gray-500
          focus:ring-0
          sm:text-sm
        "
        placeholder="Write a note..."
      />

      <!-- Spacer element to match the height of the toolbar -->
      <div aria-hidden="true">
        <div class="h-px" />
        <div class="py-2">
          <div class="py-px">
            <div class="h-9" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 inset-x-1">
      <div
        class="px-2 py-2 flex justify-between items-center space-x-3 sm:px-3"
      >
        <div class="flex-shrink-0 ml-auto">
          <slot name="submit" />
        </div>
      </div>
    </div>
  </form>
</template>


