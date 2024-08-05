import { Button, Grid, Typography } from "@mui/material";
import employee from "./../../assets/employee.jpg";
import profileIcon from "./../../assets/men.webp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Dashboard() {
  return (
    <Grid container item lg={12} sx={{ height: "89vh", width: "100vw" }}>
      <Grid container item lg={12}>
        <Grid
          container
          item
          sx={{ backgroundColor: "red", height: "89vh" }}
          lg={12}
        >
          <Grid
            item
            sx={{
              backgroundColor: "white",
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
                borderRadius: "5px",
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
                   border:"1px solid #7FA1C3",
                   borderRadius:"5px",
                   overflow:"hidden"
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
                  <Typography sx={{ color: "black", paddingLeft: "10px" }}>
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
                <Grid
                  container
                  item
                  lg={6}
                  sx={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    height: "18.7vh",
                    border: "1px solid #7FA1C3",
                    borderRadius:"5px"
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
              sx={{ backgroundColor: "white", height: "10vh", padding: "10px", borderRadius: "5px",
                border:"1px solid #7FA1C3", }}
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
            <Grid
              item
              lg={12}
              sx={{ height: 70, marginTop: "10px" }}
             >
              <Grid
                sx={{
                  width: "90px",
                  backgroundColor: "white",
                  height: 70,
                  color: "white",
                  borderRadius: "5px",
                  border:"1px solid #7FA1C3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:"pointer"
                }}
              >
                <CalendarMonthIcon fontSize="large" sx={{color:"#002379"}}/>
              </Grid>
            </Grid>

            <Grid
              item
              lg={12}
              sx={{ height: "66vh", marginTop: "10px",backgroundColor:"white" , borderRadius: "5px",
                border:"1px solid #7FA1C3",}}
             >

<Grid
                sx={{
                  width: "100%",
                 
                  height: 40,
                  display:'flex',
                  alignItems:"center"

                 
                 
                }}
              >
                <Typography sx={{color:"gray",paddingLeft:"10px"}}>Upcoming birthdays</Typography>
              </Grid>
              {/* <Grid
                sx={{
                  width: "90px",
                  backgroundColor: "white",
                  height: 70,
                  color: "white",
                  borderRadius: "5px",
                  border:"1px solid #7FA1C3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor:"pointer"
                }}
              >
                <CalendarMonthIcon fontSize="large" sx={{color:"#002379"}}/>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
