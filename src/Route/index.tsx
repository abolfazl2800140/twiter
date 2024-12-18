import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile/indedx";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import UserProfile from "../Pages/UserProfile";

const PageRoute = () => {
  const route = createBrowserRouter([
    { element: <Home />, path: "/" },
    { element: <Profile />, path: "profile/me/" },
    { element: <UserProfile />, path: "profile/:userid/" },
    { element: <Login />, path: "login" },
    { element: <SignUp />, path: "signup" },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
};

export default PageRoute;
