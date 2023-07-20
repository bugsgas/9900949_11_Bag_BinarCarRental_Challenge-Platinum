import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//layouts
import LayoutCustomer from "./user/layout/LayoutCustomer";
import LayoutAdmin from "./admin/layout/LayoutAdmin";
import NotFound from "./user/NotFound";

//pages
import Login from "./user/pages/Login";
import Register from "./user/pages/Register";
import LandingPage from "./user/pages/LandingPage";
import CariMobil from "./user/pages/CariMobil";
import DetailMobil from "./user/pages/DetailMobil";
//admin
import LoginAdmin from "./admin/pages/LoginAdmin";
import Dashboard from "./admin/pages/Dashboard";
import CarAdmin from "./admin/pages/CarAdmin";
import EditCar from "./admin/pages/EditCar";
import AddCar from "./admin/pages/AddCar";
import PaymentSteps from "./user/pages/PaymentSteps";
import PaymentSteps2 from "./user/pages/PaymentSteps2";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* //customer */}
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="/" element={<LayoutCustomer />}>
        <Route index element={<LandingPage />} />
        <Route path="carimobil" element={<CariMobil />} />
        <Route path="car/:id" element={<DetailMobil />} />
        <Route path="payments" element={<PaymentSteps />} />
        <Route path="payments-2" element={<PaymentSteps2 />} />
      </Route>

      {/* admin */}
      <Route path="admin-signin" element={<LoginAdmin />} />
      <Route path="/" element={<LayoutAdmin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="listcar" element={<CarAdmin />} />
        <Route path="listcar/edit/:id" element={<EditCar />} />
        <Route path="listcar/add-car" element={<AddCar />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
