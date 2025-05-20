import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./views/Login";
import Register from "./views/Register";
import AuthLayout from "./layout/AuthLayout";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes >
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}