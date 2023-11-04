// snippet "rafc"
// npx create-react-app . --template typescript
// npm i react-router-dom @types/react-router-dom

import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route } from "react-router-dom";

export const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <EventsExample />
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outline}
        width="200px"
        height="200px"
      >
        <button>Button</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            user={user}
            key={user.id}
          />
        )}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
          />
        )}
      />
    </div>
  );
};
