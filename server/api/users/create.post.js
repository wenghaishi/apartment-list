import { User } from "../../models/User.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body)
  // create user
	try {
		const user = await User.create(body);
    return user
	} catch (e) {
		throw createError({
			message: e.message,
		});
	}
});
