<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/store/storeNotes";
import EditAddNote from "@/components/EditAddNote.vue";
import { useRoute } from "vue-router";

const title = ref("");
const content = ref("");

const route = useRoute()

const noteStore = useStoreNotes();

title.value = noteStore.getNote(+route.params.id).title
content.value = noteStore.getNote(+route.params.id).content


const handleSubmit = () => {
  //   noteStore.editNote({ title: title.value, content: content.value });
  title.value = "";
  content.value = "";
};
</script>
    <template>
  <EditAddNote
    v-model:titleValue="title"
    v-model:contentValue="content"
    @handleSubmit="handleSubmit"
  >
    <template #submit>
      <button
        type="submit"
        class="
          px-4
          py-2
          border border-transparent
          text-sm
          font-bold
          rounded-md
          shadow-sm
          text-white
          bg-nero
          disabled:bg-nero/50 disabled:cursor-not-allowed
        "
        :disabled="!title || !content"
      >
        Save
      </button>
    </template>
  </EditAddNote>
</template>
    
    