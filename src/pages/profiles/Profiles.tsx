

import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import profileIcon from "./../../assets/men.webp";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <Grid
      // container
      // justifyContent={"center"}
      // alignItems={"center"}
      container

      justifyContent={"flex-start"}
     
      
      item
      gap={"20px"}
     
      lg={12}
      // height={"89vh"}
      width={"100vw"}
      sx={{ backgroundColor: "white" }}
      padding={"20px 20px"}
    >
      <Grid
        container
        height={"200px"}
        width={"450px"}
        sx={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid gray",
        }}
       >
        <Grid item lg={5}>
          <Grid
            component={"div"}
            sx={{
              width: "100%",
              height: "100%",

              backgroundImage: `url(${profileIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100px",
                height: "35px",
                position: "absolute",
                bottom: 10,
                border: "1px solid white",
                backgroundColor: "gray",
                left: -1,
              }}
            >
              <Typography>Varun Raj</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} sx={{ backgroundColor: "gray" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              paddingLeft: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            Software Developer
          </Typography>

          <Divider sx={{ backgroundColor: "white" }}></Divider>
          <Grid sx={{ padding: "5px 10px" }}>
            <Typography
              component={"span"}
              sx={{
                backgroundColor: "white",
                color: "gray",
                padding: "3px 5px",
                fontWeight: 500,
              }}
            >
              Product Manager
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Typography>
            <Button sx={{ color: "orange" }}>View Detail</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        height={"200px"}
        width={"450px"}
        sx={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid gray",
        }}
        >
        <Grid item lg={5}>
          <Grid
            component={"div"}
            sx={{
              width: "100%",
              height: "100%",

              backgroundImage: `url(${profileIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100px",
                height: "35px",
                position: "absolute",
                bottom: 10,
                border: "1px solid white",
                backgroundColor: "gray",
                left: -1,
              }}
            >
              <Typography>Varun Raj</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} sx={{ backgroundColor: "gray" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              paddingLeft: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            Software Developer
          </Typography>

          <Divider sx={{ backgroundColor: "white" }}></Divider>
          <Grid sx={{ padding: "5px 10px" }}>
            <Typography
              component={"span"}
              sx={{
                backgroundColor: "white",
                color: "gray",
                padding: "3px 5px",
                fontWeight: 500,
              }}
            >
              Product Manager
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Typography>
            <Button sx={{ color: "orange" }}>View Detail</Button>
          </Grid>
        </Grid>

      </Grid>

      <Grid
        container
        height={"200px"}
        width={"450px"}
        sx={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid gray",
        }}
        >
        <Grid item lg={5}>
          <Grid
            component={"div"}
            sx={{
              width: "100%",
              height: "100%",

              backgroundImage: `url(${profileIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100px",
                height: "35px",
                position: "absolute",
                bottom: 10,
                border: "1px solid white",
                backgroundColor: "gray",
                left: -1,
              }}
            >
              <Typography>Varun Raj</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} sx={{ backgroundColor: "gray" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              paddingLeft: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            Software Developer
          </Typography>

          <Divider sx={{ backgroundColor: "white" }}></Divider>
          <Grid sx={{ padding: "5px 10px" }}>
            <Typography
              component={"span"}
              sx={{
                backgroundColor: "white",
                color: "gray",
                padding: "3px 5px",
                fontWeight: 500,
              }}
            >
              Product Manager
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Typography>
            <Button sx={{ color: "orange" }}>View Detail</Button>
          </Grid>
        </Grid>

      </Grid>

      <Grid
        container
        height={"200px"}
        width={"450px"}
        sx={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid gray",
        }}
        >
        <Grid item lg={5}>
          <Grid
            component={"div"}
            sx={{
              width: "100%",
              height: "100%",

              backgroundImage: `url(${profileIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: "100px",
                height: "35px",
                position: "absolute",
                bottom: 10,
                border: "1px solid white",
                backgroundColor: "gray",
                left: -1,
              }}
            >
              <Typography>Varun Raj</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} sx={{ backgroundColor: "gray" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              paddingLeft: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            Software Developer
          </Typography>

          <Divider sx={{ backgroundColor: "white" }}></Divider>
          <Grid sx={{ padding: "5px 10px" }}>
            <Typography
              component={"span"}
              sx={{
                backgroundColor: "white",
                color: "gray",
                padding: "3px 5px",
                fontWeight: 500,
              }}
            >
              Product Manager
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </Typography>
            <Button sx={{ color: "orange" }}>View Detail</Button>
          </Grid>
        </Grid>

      </Grid>

    </Grid>
  );
}

export default Profile;

