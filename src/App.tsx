import { Route, Routes } from "react-router-dom";
import Homepage from "./components/view/HomePage/Homepage";
import AdminDashboard from "./components/view/admin/AdminDasboard/AdminDasboard";

const InteriorLandingPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default InteriorLandingPage;
