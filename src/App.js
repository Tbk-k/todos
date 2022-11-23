import Home from "./components/pages/home/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Profile from "./components/pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profil",
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
