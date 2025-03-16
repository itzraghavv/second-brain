import mongoose, { model, Types } from "mongoose";
import { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL as string;

mongoose.connect(MONGODB_URL);

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model("User", UserSchema);

const TagSchema = new Schema({
  title: String,
});

export const TagModel = model("Tag", TagSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  type: String,
  userId: { type: Types.ObjectId, ref: "User", required: true },
  tags: [{ type: Types.ObjectId, ref: "TagSchema" }],
});

export const ContentModel = model("Content", ContentSchema);

const LinkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: Types.ObjectId, ref: "User" },
});

export const LinkModel = model("Link", LinkSchema);

module.exports = {
  UserModel,
  TagModel,
  ContentModel,
  LinkModel,
};
