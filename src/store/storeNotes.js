import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: []
        }
    },

    actions: {
        addNote(newNote) {
            const id = new Date().getTime()
            let day = new Date().getDate();
            let month = new Date().getMonth() + 1;
            let year = new Date().getFullYear();
            let currentDate = `${ day }/${ month }/${ year }`

            const note = {
                id,
                title: newNote.title,
                content: newNote.content,
                date: currentDate
            }
            this.notes.unshift(note)
        },
        deleteNote(noteId) {
            const filteredNotes = this.notes.filter(note => note.id !== noteId)
            this.notes = filteredNotes
        },
        editNote(payload) {
            let index = this.notes.findIndex(note => note.id === payload.id)
            this.notes[index].title = payload?.title
            this.notes[index].content = payload?.content
        }
    },
    getters: {
        getNote: (state) => {
            return (editId) => {
                const title = state.notes.find(note => note.id === editId)?.title
                const content = state.notes.find(note => note.id === editId)?.content
                return { title, content }
            }
        }
    }
})