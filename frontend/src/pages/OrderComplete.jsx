import Home from "../components/Appbar";
import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import success from "../assets/Group 4132.svg";
import img from "../assets/Screenshot (298).png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "../styles/cart.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
  },
  font: {
    position: "absolute",
    top: "33%",
    textAlign: "center",
    color: "black",
    backgroundColor: "none",
    fontFamily: "Comic Sans MS",
  },
}));

export default function OrderComplete() {
  let history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Home />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.root}
        spacing={2}
      >
        <img className="success-image" src={success} alt="" />
        <Typography
          variant="h6"
          className={classes.font}
          style={{ fontWeight: "bold" }}
        >
          Order Placed Successfully
        </Typography>

        <div className="success-info">
          <Typography>
            Hurray! Your order is confirmed the order id is #123456 save the
            order id for further communication..
          </Typography>
        </div>
        <img className="contactImage" src={img} alt="" />
        <Button
          variant="contained"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Continue Shopping
        </Button>
      </Stack>
    </>
  );
}
