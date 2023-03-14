import Main from "../Layout/Main";
import OffRoadEbike from "../Pages/OffRoadEbike";
import { createBrowserRouter } from "react-router-dom";
import Trailers from "../Pages/Trailers";
import Cosmopolitan from "../Pages/Cosmopolitan";
import Thanks from "../Pages/Thanks";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <OffRoadEbike />
            },
            {
                path: '/cosmopolitan',
                element: <Cosmopolitan />
            },
            {
                path: '/trailers',
                element: <Trailers />
            },
            {
                path: '/thanks',
                element: <Thanks />
            },


        ]
    },
])

export default router;