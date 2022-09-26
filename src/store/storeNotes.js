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
        }
    },
})