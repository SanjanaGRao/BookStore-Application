import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Button, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import "../styles/booksCard.scss";
import PaginationPage from "./Pagination";
import {
  setCurrentPage,
  setCart,
  setSearchedBooks
} from "../reduxActions/actionsOnBooks";
import { create } from "../service/cartOperations";
import { sortBooks } from '../service/booksForDashboard';

const useStyles = makeStyles((theme) => ({
  bookName: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: "12px",
  },
  bookQuantity: {
    fontSize: "12px",
  },
  bookPrize: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  addToBagButton: {
    padding: "3px 4px 3px 4px",
    margin: "5px",
    width: "85px",
    fontSize: "11px",
    backgroundColor: "#A03037",
    color: "#ffff",
    borderRadius: "2px",
  },
  addedBagButton: {
    background: "#3371B5 0% 0% no-repeat padding-box",
    opacity: 1,
    width: "170px",
    margin: "5px",
    marginLeft: "3em",
    color: "#ffff",
    borderRadius: "2px",
    fontSize: "11px",
  },
  wishListButton: {
    padding: "3px 4px 3px 4px",
    margin: "5px",
    width: "80px",
    fontSize: "13px",
    border: "1px solid #9D9D9D",
    opacity: "1",
    borderRadius: "2px",
    fontWeight: "bold",
  },
  wishListedButton: {
    width: "170px",
    margin: "5px",
      border: "1px solid #9D9D9D",
    fontSize: "11px",
    fontWeight: "bold",
  },
  optionSelect: {
    padding: "5px 5px",
  },
  container: {
    paddingTop: theme.spacing(10),
    maxWidth: "774px",
  },
}));

export default function BookCard() {
  const classes = useStyles();
  const books = useSelector((state) => state.allBooks.searchedBooks);
  const currentPage = useSelector((state) => state.allBooks.currentPage);
  const cart = useSelector((state) => state.allBooks.cartContents);
  const [booksPerPage] = useState(12);
  const [sort, setSort] = useState("");
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));
  console.log(books);
  const dispatch = useDispatch();

  const handleSort = (event) => {
    setSort(event.target.value);
    sortBooks({descending:event.target.value})
    .then((res)=>{dispatch(setSearchedBooks(res.data))})
    .catch((err)=>{console.log(err)})
    dispatch(setCurrentPage(1));
  };

  const HandleAddToCart = (productId) => {
    const data = {
      productId: productId,
      quantity: 1,
    };
    create(data)
      .then((res) => {
        dispatch(setCart(res.data));
      })
      .catch((err) => console.log(err.message));
  };

  const ButtonContainer = ({ data }) => {
    return (
      <div className="buttonContainer">
        <Button
          className={classes.addToBagButton}
          onClick={() => {
            let productId = data._id;
            HandleAddToCart(productId);
          }}
        >
          Add to bag
        </Button>
        <Button className={classes.wishListButton}>Wishlist</Button>
      </div>
    );
  };

  const AddedToBag = () => {
    return <Button className={classes.addedBagButton}>Added To Bag</Button>;
  };

  const Wishlisted = () => {
    return (
        <div className="buttonContainer">
            <Button className={
                classes.wishListedButton
            }>Wishlist</Button>
        </div>
    )
}

  return (
    <div className="displayBook">
      <span className="topContent">
        <div>
          Books <font className="bookSize">({books.length} items)</font>{" "}
        </div>
        <div>
          <FormControl
            variant="outlined"
            className={classes.formControl}
            style={{ paddingRight: "0.3em" }}
          >
            <Select
              className={classes.optionSelect}
              native
              style={{ fontSize: "13px" }}
              inputProps={{ name: "type" }}
              value={sort}
              onChange={handleSort}
            >
              <option value={"rel"} style={{ fontSize: "11.5px" }}>
                Sort by Relevance
              </option>
              <option value={"asc"} style={{ fontSize: "11.5px" }}>
                Price: Low to High
              </option>
              <option value={"desc"} style={{ fontSize: "11.5px" }}>
                Price: High to Low
              </option>
            </Select>
          </FormControl>
        </div>
      </span>
      <div className="allBooks">
        {currentBooks.map((data) => (
          <div className="bookContainer">
            <div className="imageContainer">
              <img className="bookImage" src={data.image} alt="" />
              { data.quantity === 0 ? (
                <div className="out-of-stock">OUT OF STOCK </div>
              ) : (
                ""
              )}
            </div>
            <div className="infoContainer">
              <Typography className={classes.bookName}>{data.title}</Typography>
              <Typography className={classes.bookAuthor}>
                {data.author}
              </Typography>

              <Typography className={classes.bookPrize}>
                Rs. {data.price}
              </Typography>
            </div>
            {cart &&
            Object.keys(cart).length !== 0 &&
            cart.items.some((obj) => obj.productId === data._id) ? (
              <AddedToBag />
            ) : (
              (data.quantity === 0) ? <Wishlisted/>: <ButtonContainer data={data}/>
            )}
            <div className="descClass">
              <Typography className={classes.bookName}>Book Detail</Typography>
              {data.description}{" "}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-box">
        <PaginationPage
          booksPerPage={booksPerPage}
          totalBooks={books.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
