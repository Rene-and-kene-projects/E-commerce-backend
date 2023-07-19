import userModel from "../models/user.model.js";

class UserService {
  async create(data) {
    const newUser = await userModel.create(data);
    return newUser;
  }

  async find(id, firstname, email, lastname) {
    const query = {};

    if (firstname !== undefined) {
      query.firstname = firstname;
    }
    if (email !== undefined) {
      query.email = email;
    }
    if (lastname !== undefined) {
      query.lastname = lastname;
    }
    if (id !== undefined) {
      query._id = id;
    }

    const user = await userModel.find(query);
    return user;
  }
  async delete(id) {
    const user = await userModel.findByIdAndDelete(id);
    return user;
  }
}
export default new UserService();
