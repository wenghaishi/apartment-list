import { Apartment } from "../../models/Apartment.model";

export default defineEventHandler(async (event) => {
  return await Apartment.find();
});
