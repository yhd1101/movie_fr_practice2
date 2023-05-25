import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main"
import Tv from "./pages/Tv"
import Detail from "./pages/Detail"

const router = createBrowserRouter([
    {
        path : "/",
        element:<Main/>
    },
    {
        path:"/Tv",
        element:<Tv/>
    },
    {
        path:"/movie/:id",
        element:<Detail/>
    }
])

export default router