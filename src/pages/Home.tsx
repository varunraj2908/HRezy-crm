import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import companyIcon from "./../assets/company1.jpg";
import employee from "./../assets/employee.jpg";
import profileIcon from "./../assets/men.webp";
import MuiCalendar from "../components/muiCalendar/MuiCalendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Groups2Icon from '@mui/icons-material/Groups2';
import SettingsIcon from '@mui/icons-material/Settings';
import SimpleReactCalendar from 'simple-react-calendar'

function Home() {
  return (
    <Grid
      container
      item
      lg={12}
      bgcolor={"red"}
      sx={{ backgroundColor: "red", height: "100vh", width: "100vw" }}
    >
      {/* <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        item
        lg={1}
        bgcolor={"red"}
        height={"100vh"}
        sx={{ backgroundColor: "white" }}
       >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          item
          lg={12}
          height={"11vh"}
          sx={{ backgroundColor: "white" }}
        >
          <Typography sx={{ fontSize: 30, fontWeight: 600, color: "gray" }}>
            CRM
          </Typography>
        </Grid>
        <Grid item lg={12} height={"78vh"} sx={{ backgroundColor: "white" }}>
          <Grid
            container
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            item
            lg={12}
            height={"100px"}
            sx={{ backgroundColor: "white" }}
          >
            <DashboardIcon sx={{ color: "black" }} />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "gray",
                paddingTop: "10px",
              }}
            >
              Dashboard
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            item
            lg={12}
            height={"100px"}
            sx={{ backgroundColor: "white" }}
          >
            <GroupAddIcon sx={{ color: "black" }} />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "gray",
                paddingTop: "10px",
              }}
            >
              Profiles
            </Typography>
          </Grid>

          <Grid
          container
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          item
          lg={12}
          height={"11vh"}
          sx={{ backgroundColor: "white" }}
         >
          <Groups2Icon sx={{ color: "black" }} />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "gray",
              paddingTop: "10px",
            }}
          >
            Attendance
          </Typography>
        </Grid>
          <Grid
            container
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            item
            lg={12}
            height={"100px"}
            sx={{ backgroundColor: "white" }}
          >
            <AssessmentIcon sx={{ color: "black" }} />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "gray",
                paddingTop: "10px",
              }}
            >
              Reports
            </Typography>
          </Grid>

          <Grid
            container
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            item
            lg={12}
            height={"100px"}
            sx={{ backgroundColor: "white" }}
           >
            <SettingsIcon sx={{ color: "black" }} />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "gray",
                paddingTop: "10px",
              }}
            >
              Payroll
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            item
            lg={12}
            height={"100px"}
            sx={{ backgroundColor: "white" }}
           >
            <SettingsIcon sx={{ color: "black" }} />
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "gray",
                paddingTop: "10px",
              }}
            >
              Settings
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          item
          lg={12}
          height={"11vh"}
          sx={{ backgroundColor: "white" }}
        >
          <ExitToAppIcon sx={{ color: "black" }} />
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "gray",
              paddingTop: "10px",
            }}
          >
            Log Out
          </Typography>
        </Grid>

        
      </Grid> */}

      <Grid
        container
        item
        lg={11}
        bgcolor={"red"}
        sx={{ backgroundColor: "gray", height: "100vh", width: "100vw" }}
      >
        <Grid
          container
          item
          lg={12}
          sx={{ height: "11vh", backgroundColor: "white" }}
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
                color: "gray",
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
            sx={{ height: "11vh", backgroundColor: "white" }}
          >
            <TextField sx={{ width: "350px" }} placeholder="Search..." />
          </Grid>
          <Grid
            container
            alignItems={"center"}
            gap={"20px"}
            item
            lg={4}
            sx={{ height: "11vh", backgroundColor: "white" }}
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
            <NotificationsIcon fontSize="large" sx={{ color: "gray" }} />
            <EmailIcon fontSize="large" sx={{ color: "gray" }} />

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
                color: "gray",
              }}
            >
              Future Admin
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          sx={{ backgroundColor: "red", height: "89vh" }}
          lg={12}
        >
          <Grid
            item
            sx={{
              backgroundColor: "lightcyan",
              height: "89vh",
              padding: "20px",
            }}
            lg={8.5}
          >
            <Typography sx={{ color: "black", marginBottom: "10px" }}>
              Best Employee of the Company
            </Typography>

            <Grid
              container
              item
              sx={{
                backgroundColor: "#ffdfdf",
                height: "16vh",
                border: "1px solid #ff6363",
                borderRadius: "0px",
                overflow: "hidden",
              }}
              lg={12}
            >
              <Grid
                container
                flexDirection={"column"}
                justifyContent={"center"}
                item
                sx={{
                  backgroundColor: "#ffdfdf",
                  height: "16vh",
                  borderRadius: "10px",
                }}
                lg={6}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    paddingLeft: "10px",
                    color: "#ff5757",
                  }}
                >
                  Month Of the employee
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,

                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  He is Achived Goals this Month
                  <Typography
                    component={"span"}
                    sx={{ marginLeft: "10px", color: "#ff5757" }}
                  >
                    Congradulations!.
                  </Typography>
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,

                    paddingLeft: "10px",
                    color: "black",
                  }}
                >
                  Digital Department
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,

                    paddingLeft: "10px",
                    color: "white",
                  }}
                >
                  Senior Executive
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
                item
                sx={{
                  backgroundColor: "#ffdfdf",
                  height: "16vh",
                  borderRadius: "10px",
                  padding: "10px",
                }}
                lg={6}
              >
                <Button
                  sx={{
                    width: "150px",
                    backgroundColor: "red",
                    height: 50,
                    color: "white",
                    borderRadius: "0px",
                  }}
                >
                  Give Rewards{" "}
                </Button>

                <Grid
                  component={"img"}
                  sx={{
                    width: "40%",
                    height: "100%",
                    border: "1px solid gray",
                  }}
                  src={employee}
                ></Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                height: "63vh",
                marginTop: "16px",
              }}
              lg={12}
            >
              <Grid
                item
                lg={12}
                sx={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  height: "40vh",
                }}
              >
                <Grid
                  item
                  lg={12}
                  sx={{
                    backgroundColor: "#A0DEFF",
                    // marginTop: "10px",
                    height: "4vh",
                  }}
                >
                  <Typography sx={{ color: "black",paddingLeft:"10px" }}>
                    Clock In Members{" "}
                  </Typography>
                </Grid>

                <Grid
                  container
                  item
                  lg={12}
                  sx={{
                    backgroundColor: "#A0DEFF",
                    // marginTop: "10px",
                    height: "12vh",
                  }}
                >
                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
  container
  justifyContent={"center"}
  alignItems={"center"}
  sx={{
    width: "70px",
    height: "70px",
    borderRadius: "100px",
  }}
>
  <Grid
    component={"div"} 
    sx={{
      width: "100%",
      height: "100%",
      border: "1px solid gray",
      borderRadius: "100px",
      backgroundImage: `url(${profileIcon})`,
      backgroundSize: "cover",
      backgroundPosition: "center", 
    }}
  ></Grid>
</Grid>



                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>

                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100px",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                          borderRadius: "100px",
                        }}
                        src={profileIcon}
                      ></Grid>
                    </Grid>

                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100px",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                          borderRadius: "100px",
                        }}
                        src={profileIcon}
                      ></Grid>
                    </Grid>

                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100px",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                          borderRadius: "100px",
                        }}
                        src={profileIcon}
                      ></Grid>
                    </Grid>

                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100px",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                          borderRadius: "100px",
                        }}
                        src={profileIcon}
                      ></Grid>
                    </Grid>

                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100px",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                          borderRadius: "100px",
                        }}
                        src={profileIcon}
                      ></Grid>
                    </Grid>

                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100px",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                          borderRadius: "100px",
                        }}
                        src={profileIcon}
                      ></Grid>
                    </Grid>

                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    justifyContent={"center"}
                    item
                    lg={1.5}
                    sx={{
                      width: "140px",
                      height: "12vh",
                    }}
                  >
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "100px",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                          borderRadius: "100px",
                        }}
                        src={profileIcon}
                      ></Grid>
                    </Grid>

                    <Typography sx={{ color: "black" }}>
                      Roshan Muh..
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                item
                lg={12}
                sx={{ marginTop: "10px", height: "20vh" }}
              >
                {/* <Grid
                  container
                  item
                  lg={6}
                  sx={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    height: "18.7vh",
                    border: "1px solid #3FA2F6",
                  }}
                 >
                  <Grid item lg={4} sx={{ height: "20vh", padding: "15px" }}>
                    <Grid
                      container
                      justifyContent={"center"}
                      sx={{
                        width: "160px",
                        height: "128px",
                        padding: "15px",
                        backgroundColor: "#A7E6FF",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                        }}
                        src={employee}
                      ></Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={8} sx={{ height: "20vh", padding: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: 20,

                        color: "#FF4191",
                      }}
                    >
                      Senior Executive
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        paddingTop: "5px",

                        color: "gray",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus semper ex sed ligula pharetra lacinia. Aliquam
                      ultricies .
                    </Typography>

                    <Button
                      sx={{
                        width: "130px",
                        backgroundColor: "#3FA2F6",
                        height: 30,
                        color: "white",
                        borderRadius: "0px",
                        marginTop: "5px",
                      }}
                    >
                      View Details
                    </Button>
                  </Grid>

                 
  
                </Grid> */}

                <Grid
                  container
                  item
                  lg={6}
                  sx={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    height: "18.7vh",
                    border: "1px solid #3FA2F6",
                  }}
                >
                  <Grid item lg={4} sx={{ height: "20vh", padding: "15px" }}>
                    <Grid
                      container
                      justifyContent={"center"}
                      sx={{
                        width: "160px",
                        height: "128px",
                        padding: "15px",
                        backgroundColor: "#A7E6FF",
                      }}
                    >
                      <Grid
                        component={"img"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          border: "1px solid gray",
                        }}
                        src={employee}
                      ></Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={8} sx={{ height: "20vh", padding: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: 20,

                        color: "#FF4191",
                      }}
                    >
                      Senior Executive
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        paddingTop: "5px",

                        color: "gray",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus semper ex sed ligula pharetra lacinia. Aliquam
                      ultricies .
                    </Typography>

                    <Button
                      sx={{
                        width: "130px",
                        backgroundColor: "#3FA2F6",
                        height: 30,
                        color: "white",
                        borderRadius: "0px",
                        marginTop: "5px",
                      }}
                    >
                      View Details
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              backgroundColor: "lightblue",
              height: "89vh",
              padding: "10px",
            }}
            lg={3.5}
          >
            <Grid
              item
              sx={{ backgroundColor: "white", height: "10vh", padding: "10px" }}
              lg={12}
            >
              <Typography
                sx={{
                  fontSize: 16,

                  paddingLeft: "10px",
                  color: "black",
                }}
              >
                Tell Your Ideas improve our platform
              </Typography>

              <Grid
                container
                item
                sx={{ backgroundColor: "white" }}
                lg={12}
                justifyContent={"flex-end"}
              >
                <Button
                  sx={{
                    width: "130px",
                    backgroundColor: "#3FA2F6",
                    height: 36,
                    color: "white",
                    borderRadius: "0px",
                  }}
                >
                  Share Idea
                </Button>
              </Grid>
            </Grid>

            {/* <SimpleReactCalendar activeMonth={new Date()} /> */}
           
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    //  <Box sx={{width:"100vw",height:"100vh",backgroundColor:"red"}} >

    //  </Box>
  );
}

export default Home;
