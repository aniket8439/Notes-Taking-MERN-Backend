import NotesModel from "../models/notesSchema.js";
export const noteService = {
    async addNote(noteObject) {
        try {
            const doc = await NotesModel.create(noteObject);
            return doc;
        } catch (err) {
            throw err;
        }
    },
    async readAllNotes() {
        try {
            const docs = await NotesModel.find({}).select("title descr cdate importance").exec();
            return docs;
        } catch (err) {
            throw err;
        }
    },

    async deleteNote(title) {
        try {
            console.log('aaja title ka naam...', title);
            const result = await NotesModel.deleteOne({ title: title });
            return result;
        } catch (err) {
            throw err;
        }
    },
    async updateNote(title) {
        try {
            const result = (await NotesModel.updateOne())
        } catch (err) {
            throw err;
        }
    }
}