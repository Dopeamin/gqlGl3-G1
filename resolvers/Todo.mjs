export const Todo = {
  //Fetching by User using userId
  user: ({ userId }, args, { db }, info) => {
    return db.users.find((user) => user.id === userId);
  },
};
