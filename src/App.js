
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute ";
import SharedLayout from "./components/SharedLayout/SharedLayout";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";
// import NotFound from "path/to/pages/NotFound";
const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
// const LoginPage = lazy(() => import("../pages/Login"));
// const TasksPage = lazy(() => import("../pages/Tasks"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="/register"
                        element={
                            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
                        }
                    />
                    <Route path="news" element={<NewsPage />} />
                </Route>
            </Routes>
        </div>
    );


}

export default App;
