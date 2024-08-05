import { Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import SidebarMenu from "../components/sidebarMenu/SidebarMenu";
import Header from "../components/header/Header";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <Grid
      container
      sx={{ width: "100vw", height: "100vh",backgroundColor:"white"}}
    >
      <Grid sx={{ width: "10%", height: "100vh",backgroundColor:"#002379"}}>
        <SidebarMenu />
      </Grid>
      <Grid item  sx={{ width: "90%", height: "100vh"}}>
        <Grid width={"100%"} height={"11vh" } bgcolor={"#FF204E"}>
            <Header/>
            
        </Grid>
        <Grid width={"100%"} height={"89vh"}>

        <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
