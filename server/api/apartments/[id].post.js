import { Apartment } from "../../models/Apartment.model";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const body = await readBody(event);
  console.log(body);

  if (body.itemName) {
    const apartment = await Apartment.findById(id);
    const itemsArr = apartment.inventoryList.items;

		// array already has item that user want to add
		let hasItem = false
    itemsArr.forEach((item) => {
      if (item.name === body.itemName) {
        item.quantity += body.itemQuantity;
				hasItem = true
      }
    });
		
		// array does not have item that user want to add
		if (!hasItem) {
			apartment.inventoryList.items.push({name: body.itemName, quantity: body.itemQuantity})
		}
		console.log(apartment.inventoryList.items)
		await apartment.save()
		return apartment
  } else {
    try {
      const result = await Apartment.findByIdAndUpdate(
        id,
        { $set: { "inventoryList.name": body.name } },
        { new: true } // To get the updated document as the result
      );
      console.log(result);
      return result;
    } catch (e) {
      throw createError({
        message: e.message,
      });
    }
  }
});
