//import { AppConstants } from "../../../shared/utils/app-constants";
import { STATUS_CODES } from "../../../shared/utils/app-constants.js";
import { noteService } from "../services/note-service.js";

const noteController = {

    async getAllNotes(request, response) {
        try {
            const docs = await noteService.readAllNotes();
            response.status(STATUS_CODES.SUCCESS).json({ 'notes': docs });
        } catch (err) {
            response.status(STATUS_CODES.SERVER_ERROR).json({ message: 'Problem in fetching Notes...' });
            console.log(err);
        }
    },
    async addNote(request, response) {
        const noteBody = request.body;
        console.log('controller ka data ...', noteBody);
        try {
            const doc = await noteService.addNote(noteBody);
            if (doc && doc.title) {
                response.status(STATUS_CODES.SUCCESS).json({ message: 'Note Added Successfully' });
            } else {
                response.status(STATUS_CODES.RESOURCE_NOT_FOUND).json({ message: 'Not Able to Add a Note' });
            }
        } catch (err) {
            response.status(STATUS_CODES.SERVER_ERROR).json({ message: 'Error while adding the data' });
            console.log(err);
        }
    },
    async deleteNote(request, response) {
        const title = request.query.title;
        await noteService.deleteNote(title).then((result) => {
            response.status(STATUS_CODES.SUCCESS).json({ message: 'Delete Successfully....', result });
        }).catch((err) => {
            response.status(STATUS_CODES.SERVER_ERROR).json({ message: 'not deleted...' });
            console.log(err);
        })

    },
    async updateNote() {

    }
}

export default noteController;