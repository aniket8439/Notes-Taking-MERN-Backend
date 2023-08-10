import { STATUS_CODES } from "../../../shared/utils/app-constants.js";
import { userService } from "../services/user-service.js";
const userController = {

    async getAllUser(request, response) {
        try {
            const docs = await userService.readAllUser();
            response.status(STATUS_CODES.SUCCESS).json({ 'users': docs });
        } catch (err) {
            response.status(STATUS_CODES.SERVER_ERROR).json({ message: 'Problem in fetching User...' });
            console.log(err);
        }
    },
    async addUser(request, response) {
        const userBody = request.body;
        console.log('controller ka data ...', userBody);
        try {
            const doc = await userService.addUser(userBody);
            if (doc && doc.email) {
                response.status(STATUS_CODES.SUCCESS).json({ message: 'User Added Successfully' });
            } else {
                response.status(STATUS_CODES.RESOURCE_NOT_FOUND).json({ message: 'Not Able to Add a User' });
            }
        } catch (err) {
            response.status(STATUS_CODES.SERVER_ERROR).json({ message: 'Error while adding the data' });
            console.log(err);
        }
    },
    async deleteUser(request, response) {
        const email = request.query.email;
        await userService.deleteUser(email).then((result) => {
            response.status(STATUS_CODES.SUCCESS).json({ message: 'Delete Successfully....', result });
        }).catch((err) => {
            response.status(STATUS_CODES.SERVER_ERROR).json({ message: 'not deleted...' });
            console.log(err);
        })

    },
    async updateUser(request, response) {
        const email = request.query.email;
        const password = request.query.password;
        try {
            const doc = await userService.updateUser(email, password);
            response.status(STATUS_CODES.SUCCESS).json({ 'user': doc });
        } catch (err) {
            response.status(STATUS_CODES.SERVER_ERROR).json('update not performed...');
        }
    }
}

export default userController;