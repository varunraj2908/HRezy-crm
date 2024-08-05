
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';



export default function Reports() {
    const getRandomStatus = () => (Math.random() < 0.5 ? 'P' : 'A');

const generateStatusArray = (length) => Array.from({ length }, getRandomStatus);


    const [status,setStatus] = useState(generateStatusArray(31))


  const gridItems = status?.map((item,index) => (
    <Grid item key={index} sx={{ width: 40, height: 40, backgroundColor:item === "P"? '#B0EBB4':"#EE4266" ,border:"1px solid white",display:"flex",justifyContent:"center",alignItems:"center"}} >
        <Typography>{item}</Typography>
    </Grid>
  ));
 
  return (
    <Box sx={{ width: "100%",height:"89vh",display:"flex",justifyContent:"center",alignItems:"center"  }}>
        <Grid  sx={{ width: "100%",height:"89vh",border:"1px solid white",backgroundColor:"white" ,padding:"10px",gap:"1px" }}>

        <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white',overflow:"hidden"}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>
            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>
            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>
            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>
            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>
            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>
            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>

            <Grid container sx={{ width: "100%",height:"42px",backgroundColor:'white'}}>
            <Grid sx={{width:"150px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Employee Names</Typography>

            </Grid>

           {gridItems}
           <Grid sx={{width:"85px",height:"40px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid white"}}>
                <Typography sx={{color:"black",fontSize:"14px"}}>Pressent</Typography>

            </Grid>

            </Grid>
           


            

            



    </Grid>
    </Box>
  );
}

