
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import RestrictedRoute from "./components/RestrictedRoute ";
import SharedLayout from "./components/SharedLayout/SharedLayout";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";
// import NotFound from "path/to/pages/NotFound";
const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage"));
const OurFriendsPage = lazy(() => import("./pages/OurFriendsPage"));
function App() {
 return (
  <div>
   <Routes>
    <Route path="/" element={<SharedLayout />}>
     <Route index element={<HomePage />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/register" element={<RegisterPage />} />
     <Route path="/user" element={<UserPage />} />
     <Route path="/news" element={<NewsPage />} />
     <Route path="/notices" element={<NoticesPage />} />
     <Route path="/friends" element={<OurFriendsPage />} />
    </Route>
   </Routes>
  </div>
 );
 
 
}

export default App;
