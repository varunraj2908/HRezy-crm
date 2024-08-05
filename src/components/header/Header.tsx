import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import companyIcon from "./../../assets/company1.jpg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
  
      <Grid
        container
        item
        lg={12}
       
      >
        <Grid
          container
          alignItems={"center"}
          item
          lg={4}
          sx={{ height: "11vh" }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 500,
              paddingLeft: "10px",
              color: "white",
            }}
          >
            Employee Attendance
          </Typography>
        </Grid>

        <Grid
          container
          alignItems={"center"}
          item
          lg={4}
          sx={{ height: "11vh",}}
        >
          <TextField sx={{ width: "350px" ,backgroundColor:"white",borderRadius:"5px"}} placeholder="Search..." />
        </Grid>

        <Grid
          container
          alignItems={"center"}
          gap={"20px"}
          item
          lg={4}
          sx={{ height: "11vh", }}
        >
          <Grid
            container
            item
            sx={{
              width: "82px",
              height: "42px",
              backgroundColor: "lightgray",
              borderRadius: "0px",
              padding: "1px",
              border: "1px solid gray",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              item
              sx={{
                width: "38px",
                height: "38px",
                backgroundColor: "black",
                borderRadius: "0px",
              }}
            >
              <WbSunnyIcon />
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              item
              sx={{
                width: "38px",
                height: "38px",
                backgroundColor: "lightgray",
                borderRadius: "0px",
              }}
            >
              <DarkModeIcon />
            </Grid>
          </Grid>
          <NotificationsIcon fontSize="large" sx={{ color: "white" }} />
          <EmailIcon fontSize="large" sx={{ color: "white" }} />

          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              height: "50px",
              width: "70px",
              backgroundColor: "gray",
              borderRadius: "0px",
              overflow: "hidden",
              border: "1px solid gray",
            }}
          >
            <Grid
              component={"img"}
              sx={{ width: "100%", height: "100%" }}
              src={companyIcon}
            ></Grid>
          </Grid>

          <Typography
            component={"span"}
            sx={{
              fontSize: 20,
              fontWeight: 500,
              paddingLeft: "10px",
              color: "white",
            }}
          >
            Future Admin
          </Typography>
        </Grid>
      </Grid>
   
  );
};

export default Header;
