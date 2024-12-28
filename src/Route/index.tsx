import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile/indedx";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import UserProfile from "../Pages/UserProfile";
import Layout from "../Layout";

const PageRoute = () => {
  const route = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        { element: <Navigate to={"home"} /> , path: "/" },
        { element: <Home />, path: "home" },
        { element: <Profile />, path: "profile/me/" },
        { element: <UserProfile />, path: "profile/:userid/" },
        { element: <Login />, path: "login" },
        { element: <SignUp />, path: "signup" },
      ],
    },
  ]);

  return <RouterProvider router={route}></RouterProvider>;
};

export default PageRoute;
