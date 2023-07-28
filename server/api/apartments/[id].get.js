import { Apartment } from "../../models/Apartment.model";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  try {
    const apartment = await Apartment.findById(id);
    return apartment;
  } catch (error) {
    console.error("Error fetching apartment:", error);
    throw error; 
  }
});
