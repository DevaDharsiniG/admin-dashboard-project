import mongoose, { Schema, Document } from "mongoose";

export interface IInternship extends Document {
  name: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  internshipType: string;
  duration: string;
  fromDate?: Date;
  toDate?: Date;
  createdAt: Date;
}

const InternshipSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    college: { type: String, required: true },
    department: { type: String, required: true },

    internshipType: {
      type: String,
      enum: [
        "Web Development",
        "Web App Development",
        "UI/UX",
        "Data Science/ Machine Learning",
      ],
      required: true,
    },

    duration: { type: String, required: true },
    fromDate: { type: Date },
    toDate: { type: Date },

    mode: {
      type: String,
      enum: ["HALF_DAY", "FULL_DAY"],
    },

    stay: {
      type: Boolean,
      default: false,
    },

    food: {
      type: Boolean,
      default: false,
    },

    internshipFee: {
      type: Number,
      default: 0,
    },

    stayFee: {
      type: Number,
      default: 0,
    },

    foodFee: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      default: 0,
    },

    paymentMode: {
      type: String,
      enum: ["ONLINE", "OFFLINE"],
    },

    status: {
      type: String,
      default: "APPLIED",
    },
  },
  { timestamps: true }

);


export default mongoose.models.Internship ||
  mongoose.model<IInternship>("Internship", InternshipSchema);
