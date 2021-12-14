import React,{useState} from "react";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import {emptyCart} from '../service/cartOperations';
import { setCart } from "../reduxActions/actionsOnBooks";

export default function OrderSummary({showOrder,orders}) {
    let history = useHistory();

    const handleSubmit = () => {
        emptyCart().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
        setCart();
        history.push('/orderComplete');
    }

    return(
        <>
         <Paper variant="outlined" sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 } ,maxWidth:'724px'}}>
        <Typography variant="h6" gutterBottom  >
            Order Summary
        </Typography>
        {(showOrder && orders.length!==0)?(
           <Grid container
           spacing={1}>
               {
           orders.items.map((data) => (
               <Grid container
           spacing={1} >
               <Grid item xs={4}  sx={{ py: { xs: 2, md: 3 }}}>
               <img
                 className="bookImage"
                 src={data.image}
                 alt=""  
               />
             </Grid>
              <Grid item xs={8}>
              <div style={{ marginLeft: "10px" }}>
                <Typography align="left"  style={{fontWeight: "bold", fontSize: "14px" }}>{data.name}</Typography>
                <Typography
                  align="left"
                  color="text.secondary"
                  style={{ fontSize: "14px" }}
                >
                  by {data.author}
                </Typography>
                <Typography
                  align="left"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  Rs {data.price}
                </Typography>
              </div></Grid></Grid>
           )
           )}
               <Grid item xs={4}  align="right">
                   <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                       Total Bill is Rs.{orders.bill}
                   </Typography>
               </Grid>
           <Grid item xs={8}  align="right">
             <Button
                   variant="contained"
                   onClick={(e)=>{handleSubmit()}}
                 >
               Checkout
                 </Button></Grid>
           </Grid>
        ):""}
      
        </Paper>
        </>
    )
}
