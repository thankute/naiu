import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './modules/login/Index';
import PrivateRoute from './routes/PrivateRoute';
import Home from './modules/home/Index';
import NotFound from './modules/notfound/Index';


function App() {
    const router = createBrowserRouter(
        [
            {
                path: "/naiu/login",
                element: <Login />,
            },
            {
                path: "/naiu/home",
                element: <PrivateRoute>
                    <Home />
                </PrivateRoute>
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
