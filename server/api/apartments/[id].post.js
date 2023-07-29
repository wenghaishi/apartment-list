import { Apartment } from "../../models/Apartment.model";

export default defineEventHandler(async (event) => {
	const { id } = event.context.params;
  const body = await readBody(event);
  console.log(body)
  // create user
	console.log(id)
	try {
    const result = await Apartment.findByIdAndUpdate(
      id,
      { $set: { 'inventoryList.name': body.name } },
      { new: true } // To get the updated document as the result
    );
		console.log(result)
    return result
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});
