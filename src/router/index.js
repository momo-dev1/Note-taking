import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import AddNote from '@/views/AddNote.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/add-note',
    name: 'add-note',
    component: AddNote
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router