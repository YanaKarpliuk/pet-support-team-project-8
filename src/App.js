import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import RestrictedRoute from "./components/RestrictedRoute ";
import SharedLayout from './components/SharedLayout/SharedLayout';
import RestrictedRoute from './components/RestrictedRoute ';
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";
// import NotFound from "path/to/pages/NotFound";
const HomePage = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const NoticesCategoriesList = lazy(() => import('./components/NoticesCategoriesList/NoticesCategoriesList'));
const OurFriendsPage = lazy(() => import('./pages/OurFriendsPage/OurFriendsPage'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/user" component={<RegisterPage />} />}
          />
          <Route path="/user" element={<UserPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<Navigate to="/notices/sell" replace />} >
            <Route index element={<NoticesPage />} />
            <Route path='sell' element={<NoticesCategoriesList category={'sell'} />} />
            <Route path="lost-found" element={<NoticesCategoriesList category={'lost-found'} />} />
            <Route path="for-free" element={<NoticesCategoriesList category={'for-free'} />} />
            <Route path="own" element={<NoticesCategoriesList category={'own'} />} />
            <Route path="favorite" element={<NoticesCategoriesList category={'favorite'} />} />
          </Route>
          <Route path="/friends" element={<OurFriendsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
