import { Schema, model } from "mongoose";

const itemSchema = new Schema({
  name: { type: String, required: true }, // Name of the inventory item
  quantity: { type: Number, required: true },
});

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
  inventoryList: {
    name: { type: String, required: true },
    items: [itemSchema],
  },
});

export const Apartment = model("Apartment", apartmentSchema);
