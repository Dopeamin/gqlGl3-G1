export const User = {
  //Fetching todos of a specific user by his ID
  todos: ({ id }, args, { db }, info) => {
    return db.todos.filter((todo) => todo.userId === id);
  },
};
