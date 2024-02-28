import { createContext } from "react";
import { useReducer } from "react";

export const ItemsContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});

const oye = (current, action) => {
  let newList = current;
  if (action.type === "ADD_ITEM") {
    newList = [
      ...current,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newList = newList.filter((item) => item.name !== action.payload.name);
  }
  return newList;
};

const TodoItemsContextProvider = ({ children }) => {
  // const [list, setList] = useState([]);
  const [list, disPatcher] = useReducer(oye, []);

  const handleDelete = (deleteName) => {
    // let newDeletedList = list.filter((item) => item.name !== deleteName);
    // setList(newDeletedList);
    const newAction = {
      type: "DELETE_ITEM",
      payload: {
        name: deleteName,
      },
    };
    disPatcher(newAction);
  };

  const handleInfo = (name, date) => {
    const newAction = {
      type: "ADD_ITEM",
      payload: {
        name,
        date,
      },
    };
    disPatcher(newAction);
    // let newList = [...list, { name: name, date: date }];
    // setList(newList);
  };
  return (
    <ItemsContext.Provider
      value={{
        todoItems: list,
        deleteItem: handleDelete,
        addItem: handleInfo,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
