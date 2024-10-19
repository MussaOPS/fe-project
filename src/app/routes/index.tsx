// Libraries
import {useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

// Pages
import MainPage from "../../pages/MainPage";


const routes = [
    {path: '/', element: <MainPage/>},
    {path: '*', element: <Navigate to="/" replace/>}
];


const RoutesComponent = () => {
    const location = useLocation();

    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
    );
};


export default RoutesComponent;
