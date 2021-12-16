import React, { useEffect } from "react";
import { cartGet } from "../service/cartOperations";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../reduxActions/actionsOnBooks";
import Appbar from "../components/Appbar";
import CartCard from "../components/CartComponents";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "../styles/dashboard.scss";
import Footer from "../components/Footer";

export default function Cart() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCart(); // eslint-disable-next-line
  }, []);

  const fetchCart = () => {
    cartGet()
      .then((res) => {
        dispatch(setCart(res.data[0]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cart = useSelector((state) => state.allBooks.cartContents);

  return (
    <>
      <Appbar />
      {cart && Object.keys(cart).length !== 0 ? (
        <CartCard cart={cart} />
      ) : (
        <div style={{ paddingLeft: "5em", paddingBottom: "22.7em" }}>
          <Paper
            variant="outlined"
            sx={{ m: { xs: 1, md: 5 }, p: { xs: 1, md: 2 }, maxWidth: "724px" }}
          >
            <Typography variant="h6" gutterBottom sx={{ py: 3 }}>
              My Cart (0 items)
            </Typography>
          </Paper>
        </div>
      )}
      <Footer />
    </>
  );
}
