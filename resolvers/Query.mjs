export const Query = {
  hello: (_, { name }) => `Hello ${name || "World"}`,
  
  // Get all of the todos
  getTodos: (parent, args, { db }, info) => {
    console.log(db);
    return db.todos;
  },

  //Fetch a specific todo by Id
  getTodoById: (parent, { id }, { db }, info) => {
    const todo = db.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with ${id} as ID is not FOUND`);
    }
    return todo;
  },

  //Fetch all users
  getUsers: (parent, args, { db }, info) => {
    return db.users;
  },

  //Fetch a user by Id
  getUserById: (parent, { id }, { db }, info) => {
    const user = db.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with ${id} as ID is not FOUND`);
    }
    return user;
  },
};
