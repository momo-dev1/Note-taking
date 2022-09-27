import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewAddNote from '@/views/ViewAddNote.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'

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
    component: ViewAddNote
  },
  {
    path: '/edit-note/:id',
    name: 'edit-note',
    component: ViewEditNote
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router