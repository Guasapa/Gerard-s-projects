import mongoose, { Schema, Document } from 'mongoose';

// Example interface for TypeScript
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Example schema for MongoDB
const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

// Example method
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password; // Remove password from JSON response
  return user;
};

export default mongoose.model<IUser>('User', UserSchema);
