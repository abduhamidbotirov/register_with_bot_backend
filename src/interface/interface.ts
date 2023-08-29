import mongoose, { Document, Types } from 'mongoose';
export interface ICategory extends Document {
    name: string;
  }

  export interface IUser extends Document {
    name: string;
    family: string;
    phone: string;
    category: string;
  }