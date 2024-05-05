// noteController.js

const Note = require('./note');

// Fungsi untuk membuat catatan baru
async function createNote(judul, isi) {
    try {
        const newNote = new Note({ judul, isi });
        const savedNote = await newNote.save();
        return savedNote;
    } catch (error) {
        throw error;
    }
}

// Fungsi untuk mendapatkan semua catatan
async function getAllNotes() {
    try {
        const notes = await Note.find();
        return notes;
    } catch (error) {
        throw error;
    }
}

// Fungsi untuk mendapatkan catatan berdasarkan ID
async function getNoteById(id) {
    try {
        const note = await Note.findById(id);
        return note;
    } catch (error) {
        throw error;
    }
}

// Fungsi untuk memperbarui catatan berdasarkan ID
async function updateNoteById(id, updatedNote) {
    try {
        const note = await Note.findByIdAndUpdate(id, updatedNote, { new: true });
        return note;
    } catch (error) {
        throw error;
    }
}

// Fungsi untuk menghapus catatan berdasarkan ID
async function deleteNoteById(id) {
    try {
        const deletedNote = await Note.findByIdAndDelete(id);
        return deletedNote;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNoteById,
    deleteNoteById
};
