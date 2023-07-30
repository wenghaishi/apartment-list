import { User } from "../../models/User.model";

export default defineEventHandler(async (event) => {
  return await User.find();
});
