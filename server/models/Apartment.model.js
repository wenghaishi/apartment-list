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
  imageUrl: {
    type: String,
    required: [true, "Please provide imageUrl"],
  },
});

export const Apartment = model("Apartment", apartmentSchema);
