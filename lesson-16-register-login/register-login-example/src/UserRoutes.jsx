import { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

const RegisterPage = lazy(()=> import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(()=> import('./pages/LoginPage/LoginPage'));
const MyBooksPage = lazy(()=> import('./pages/MyBooksPage/MyBooksPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes> 
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/my-books" element={<MyBooksPage />} />
        </Routes>
      </Suspense>
    )
};

export default UserRoutes;