import { Outlet } from "react-router-dom";
import LayoutContactUs from "../shared/components/LayoutContactUs";
import NavBar from "../shared/components/NavBar";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div>
      <LayoutContactUs />
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
