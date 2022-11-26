import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import MainTemplate from "./components/template/mainTemplate/MainTemplate";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import NewTask from "./pages/newTask/NewTask";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      { path: "", element: <Home /> },
      { path: "/profil", element: <Profile /> },
      { path: "/create", element: <NewTask /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
