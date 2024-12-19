import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { UserContextProvider } from "./context/UserContext";
import Campaigns from "./Pages/Campaigns";
import CreateCampaign from "./Pages/CreateCampaign";
import EditCampaign from "./Pages/EditCampaign";
import IndexPage from "./Pages/IndexPage";
import Login from "./Pages/Login";
import MyCampaigns from "./Pages/MyCampaigns";
import ShowCampaign from "./Pages/ShowCampaign";
import Register from "./Pages/Register";

import AdminDashboard from "./Components/admin/AdminDashboard";
import ManageCampaign from "./Components/admin/ManageCampaign";
import ManageUsers from "./Components/admin/ManageUsers";
import AboutUs from "./Pages/AboutUs";
import AdminIndex from "./Components/admin/AdminIndex";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/:id" element={<ShowCampaign />} />
          <Route path="/campaigns/my" element={<MyCampaigns />} />
          <Route path="/campaigns/my/create" element={<CreateCampaign />} />
          <Route path="/campaigns/my/edit/:id" element={<EditCampaign />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<AdminIndex />} />
            <Route
              path="manage-campaigns"
              element={<ManageCampaign />}
            />
            <Route path="manage-users" element={<ManageUsers />} />
          </Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
