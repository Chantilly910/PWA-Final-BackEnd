import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  createdAt: Date;
  isDeleted: boolean;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

const User = model<IUser>('User', userSchema);

export default User;
