import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Layout/Login/Login";
import SignUp from "../Layout/Signup/Signup";
import CheckOut from "../Layout/CheckOut/CheckOut";
import Booking from "../components/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/checkout/:id",
        element:<PrivateRoute>
           <CheckOut></CheckOut>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/booking",
        element: <PrivateRoute>
          <Booking></Booking>
        </PrivateRoute>
      }
    ]

  },
]);

export default router

