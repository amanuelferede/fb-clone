import { users } from "./user";

export const stories = users.map((user) => {
  return {
    user: user.fname,
    pic: user.profilepic,
  };
});
