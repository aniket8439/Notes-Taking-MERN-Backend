import express from 'express';
import { NOTE_ROUTES } from '../../../shared/utils/app-constants.js';
import noteController from '../controllers/note-controller.js';

//import notesModel from '../models/notesSchema';
const noteRoutes = express();

noteRoutes.post(NOTE_ROUTES.ADD, noteController.addNote)
noteRoutes.get(NOTE_ROUTES.ALL_NOTES, noteController.getAllNotes);
noteRoutes.delete(NOTE_ROUTES.DELETE_NOTES, noteController.deleteNote);
noteRoutes.put(NOTE_ROUTES.UPDATE_NOTES, noteController.updateNote);

export default noteRoutes;