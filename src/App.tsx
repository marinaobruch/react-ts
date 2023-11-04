// snippet "rafc"
// npx create-react-app . --template typescript
// npm i react-router-dom @types/react-router-dom

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import OtherExamplePage from "./components/OtherExamplePage";
import UserItemPage from "./components/UserItemPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Главная</NavLink>

        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos">Список дел</NavLink>
        <NavLink to="/others">Прочие данные</NavLink>
      </div>
      <Routes>
        <Route
          path={"/users"}
          element={<UsersPage />}
        ></Route>
        <Route
          path={"/users/:id"}
          element={<UserItemPage />}
        ></Route>
        <Route
          path={"/todos"}
          element={<TodosPage />}
        ></Route>
        <Route
          path={"/others"}
          element={<OtherExamplePage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
