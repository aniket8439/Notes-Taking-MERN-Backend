import UserModel from "../models/userSchema.js";
export const userService = {
    async addUser(userObject) {
        try {
            const doc = await UserModel.create(userObject);
            return doc;
        } catch (err) {
            throw err;
        }
    },
    async readAllUser() {
        try {
            const docs = await UserModel.find({}).select("name phone email password").exec();
            return docs;
        } catch (err) {
            throw err;
        }
    },

    async deleteUser(email) {
        try {
            console.log('aaja email ka naam...', email);
            const result = await UserModel.deleteOne({ email: email });
            return result;
        } catch (err) {
            throw err;
        }
    },
    async updateUser(email, password) {
        try {
            const result = (await UserModel.findOneAndUpdate({ email: email }, { $set: { password: password } }));
        } catch (err) {
            throw err;
        }
    }
}