import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OurServices from "../../user/component/LandingPage/OurServices";
import Chart from "../component/Chart";

export default function Dashboard() {
  const navigate = useNavigate();
  const tokenAdmin = localStorage.getItem("tokenadmin");

  useEffect(() => {
    if (!tokenAdmin) {
      navigate("/admin-signin");
    }
  });

  return (
    <>
      <Chart />
    </>
  );
}
