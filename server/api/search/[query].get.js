import { Apartment } from "../../models/Apartment.model";

export default defineEventHandler(async (event) => {
  const { query } = event.context.params;
  console.log(query);

  if (query) {
    // If search parameter exists, perform the search
    const regex = new RegExp(query, "i"); // Case-insensitive regex pattern
    console.log(regex)

    // Use the `find` method to search for apartments that match the search query
    return await Apartment.find({
      $or: [
        { address: { $regex: regex } }, // Search by address field
        { floor: { $regex: regex } }, // Search by floor field
        // Add more fields as needed for your apartment model
      ],
    });
  } else {
    // If there's no search parameter, return all apartments
    return {message: "no apartment"};
  }
});
