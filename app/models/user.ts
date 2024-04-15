import { mongooseInstance } from "#config/mongo";

const Schema = mongooseInstance.Schema;

export const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
});
export const UserModel = mongooseInstance.model('User', UserSchema);


