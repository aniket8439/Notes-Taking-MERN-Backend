import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { AppConstants } from '../../../shared/utils/app-constants.js';
import validator from 'validator';
//import { isEmail } from 'validator';
const schemaName = AppConstants.SCHEMA.USER_SCHEMA;
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;
const UserSchema = new Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 25
    },
    phone: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        unique: true,
        max: 9999999999,
        min: 1000000000,

    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
        // validate: [isEmail, 'invalid email'],
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
        maxlength: 25,
        minlength: 8
    }
});
UserSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

UserSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
};

const UserModel = mongoose.model(schemaName, UserSchema);
export default UserModel;