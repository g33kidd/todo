import { DateTime } from "luxon";
import { createContext, useEffect, useState } from "react";

const TodoStorageContext = createContext();

function TodoStorage({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  // I created this function to provide a standard for creating
  // the data structure of a Todo and to ensure that each one is
  // created equally. In the event that more data needs to be added,
  // it can be added to this function.
  const generateTodo = ({ text }) => {
    const epoch = DateTime.now().toUnixInteger();

    return {
      id: todos.length + 1,
      text: text,
      completed: false,
      createdAt: epoch,
      updatedAt: epoch,
    };
  };

  const sortedTodos = todos.sort((a, b) => a.createdAt > b.createdAt);

  // Appends the
  const createTodo = (params) => {
    const todo = generateTodo(params);
    const newTodoList = [...todos, todo];
    setTodos([...todos, todo]);
    syncItems();
  };

  // This could also be a call to an API to store the todo items.
  // I am running out of time at 1:28, but error handling would be important here because of the storage limitations of LocalStorage.
  // it could potentially handle both local storage & API in-case the user was offline.
  const syncItems = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // I'd like to document this, but I'm running out of time.
  // It just loads the items from localStorage into the state.
  const fetchItems = () => {
    const storedItems = localStorage.getItem("todos");
    setTodos(JSON.parse(storedItems));
  };

  const toggleState = (id, newState) => {
    const editedItem = todos.findIndex((todo) => todo.id == id);
    // I probably don't need to copy the array this point, but I did it anyway because of time?
    const newTodos = todos;
    newTodos[editedItem].completed = newState;
    syncItems();
  };

  const store = {
    // Data Accessors
    todos,
    sortedTodos,

    // Mutation Functions
    createTodo,
    generateTodo,
    toggleState,
  };

  // I ran out of time, but I would have liked to do the following:
  /**
   * - Implement some type of API to store them externally.
   * - Allow children elements to be added.
   * - Error checking.
   * - Writing some tests, to show that I understand how to write tests.
   * - Separate styles into a different folder.
   *
   * Hook-up the ChatGPT API xD
   * honestly I may actually keep working on this because I've never personally made
   * a personal TODO app for fun. The most I've done recently is creating prototypes
   * of authentication systems.
   *
   * Thanks for the chat, sorry about the nerves! I put some music on and kept going with this through a 30minute timer.
   */

  return (
    <TodoStorageContext.Provider value={store}>
      {children}
    </TodoStorageContext.Provider>
  );
}

export { TodoStorage, TodoStorageContext };
