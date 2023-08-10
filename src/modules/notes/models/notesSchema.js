import mongoose from 'mongoose';
//import {mongoose} from '../../../shared/db/connection.js';
import { AppConstants } from '../../../shared/utils/app-constants.js';
const schemaName = AppConstants.SCHEMA.NOTE_SCHEMA;
const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    title: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    descr: {
        type: mongoose.SchemaTypes.String,

    },
    cdate: {
        type: mongoose.SchemaTypes.Date
    },
    importance: {
        type: mongoose.SchemaTypes.String
    }
});
const NotesModel = mongoose.model(schemaName, NoteSchema);
export default NotesModel;