import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyPrescriptions from "./pages/MyPrescriptions";
import Consumers from "./pages/Consumers";
import ConsumerPrescriptions from "./pages/ConsumerPrescriptions";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'my-prescriptions',
                element: <MyPrescriptions />
            },
            {
                path: 'consumers/',
                element: <Consumers />
            },
            {
                path: 'consumers/prescriptions/:userId',
                element: <ConsumerPrescriptions />
            }
        ]
    }
])

const App = () => (
    <RouterProvider router={router} />
)

export default App;