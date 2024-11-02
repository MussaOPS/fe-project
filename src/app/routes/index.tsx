// Libraries
import {Navigate, Route, Routes} from "react-router-dom";

// Pages
import MainPage from "../../pages/MainPage";


const routes = [
    {path: '/', element: <MainPage/>},
    {path: '*', element: <Navigate to="/" replace/>}
];


const RoutesComponent = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))}
        </Routes>
    );
};


export default RoutesComponent;
