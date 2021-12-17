import React, { useEffect } from "react";
import { getAllBooks } from "../service/booksForDashboard";
import { useDispatch } from "react-redux";
import { setBooks, setCart } from "../reduxActions/actionsOnBooks";
import Appbar from "../components/Appbar";
import BookCard from "../components/BookCard";
import Paper from "@mui/material/Paper";
import { cartGet } from "../service/cartOperations";
import "../styles/dashboard.scss";
import Footer from "../components/Footer";


export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line
    fetchCart();
    fetchitem();
    // eslint-disable-next-line
  }, []);

  const fetchitem = () => {
      getAllBooks()
        .then((res) => {
          dispatch(setBooks(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const fetchCart = () => {
      cartGet()
        .then((res) => {
          dispatch(setCart(res.data[0]));
        })
        .catch((err) => {
          console.log(err);
        });
  };
    return (
      <>
        <Appbar />
        <Paper
          variant="outlined"
          sx={{ m: { xs: 2, md: 6 }, p: { xs: 2, md: 3 }, border: "none" }}
        >
          <BookCard />
        </Paper>
        <div style={{ paddingTop: "62em" }}>
          <Footer />
        </div>
      </>
    );
  }

