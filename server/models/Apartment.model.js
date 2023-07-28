import { Schema, model } from "mongoose";

const apartmentSchema = new Schema({
  address: {
    type: String,
    required: [true, "Please provide address"],
  },
  floor: {
    type: String,
    required: [true, "Please provide floor"],
  },
  doorNumber: {
    type: String,
    required: [true, "Please provide doorNumber"],
  },
});

export const Apartment = model("Apartment", apartmentSchema);
