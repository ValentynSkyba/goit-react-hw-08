import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./routes/RestrictedRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { selectIsRefreshing } from "./redux/auth/slice";
import { Toaster } from "react-hot-toast";

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const PhoneBook = lazy(() => import("./pages/Phonebook/Phonebook"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </Suspense>
  );
}

export default App;
