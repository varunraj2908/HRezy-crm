import { Button, Grid, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Groups2Icon from "@mui/icons-material/Groups2";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import "./SidebarMenu.css"

interface SidebarMenuProps {}

const SidebarMenu: React.FC<SidebarMenuProps> = ({}) => {
  return (
    <Grid
      container
      sx={{ width: "100%", height: "100vh" }}
    >
      <Grid
        container
        // alignItems={"center"}
        justifyContent={"space-between"}
        item
        lg={12}
       
        height={"100vh"}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          item
          lg={12}
          height={"11vh"}
          bgcolor={"#FF204E"}
         
         >
          <Typography sx={{ fontSize: 30, fontWeight: 600, color: "white" }}>
            CRM
          </Typography>
        </Grid>
        <Grid  item lg={12} height={"78vh"} >
          <Link to="/dashboard" style={{ display: "flex",gap:"5px",fontWeight:600,height:60,paddingLeft:"20px"}} className="slected">
            <DashboardIcon sx={{ color: "white" }} />
            Dashboard
          </Link>
          <Link to="/reports" style={{ display: "flex",gap:"5px",fontWeight:600,height:60,paddingLeft:"20px" }}className="slected">
            <AssessmentIcon sx={{ color: "white" }} />
            Reports
          </Link>
          <Link to="/profiles" style={{ display: "flex",gap:"5px",fontWeight:600,height:60,paddingLeft:"20px"  }}className="slected">
            <GroupAddIcon sx={{ color: "white" }} />
            Profiles
          </Link>
          <Link to="/reports" style={{ display: "flex",gap:"5px",fontWeight:600,height:60,paddingLeft:"20px"  }}className="slected">
            <Groups2Icon sx={{ color: "white" }} />
            Attendance
          </Link>
          <Link to="/reports" style={{ display: "flex",gap:"5px",fontWeight:600,height:60,paddingLeft:"20px"  }}className="slected">
            <AssessmentIcon sx={{ color: "white" }} />
            Payroll
          </Link>
          <Link to="/reports" style={{ display: "flex",gap:"5px",fontWeight:600,height:60,paddingLeft:"20px" }}className="slected">
            <SettingsIcon sx={{ color: "white" }} />
            Settings
          </Link>
          <Link to="/reports" style={{ display: "flex",gap:"5px",fontWeight:600,height:60,paddingLeft:"20px" }}className="slected">
            <ExitToAppIcon  className="muiIcon" />
            Log Out
          </Link>
          <Grid sx={{width:"100%",height:"120px",marginTop:"169px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FF204E"}}>

          <Grid sx={{width:"110px",height:"110px",backgroundColor:"#002379",borderRadius:"100px",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid white"}}>
          <Grid sx={{width:"90px",height:"90px",backgroundColor:"#002379",borderRadius:"100px",border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Typography sx={{fontSize:"14px"}}>Update</Typography>
            {/* <Button>click</Button> */}

</Grid>

</Grid>

</Grid>
        </Grid>
       
      </Grid>
    </Grid>
  );
};

export default SidebarMenu;
