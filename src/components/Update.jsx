import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateSingleUser } from "../redux/actions/userAction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

const Update = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const { name, email, address, contact } = userInput;
  const { id } = useParams();
  const [error, setError] = useState("");

  const { user } = useSelector((state) => state.userData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (user) {
      setUserInput({ ...user });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("Please fill all input filled");
    } else {
      dispatch(updateSingleUser(userInput, id));
      navigate("/");
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        style={{ marginBottom: 20 }}
        onClick={() => navigate("/")}
      >
        Go back
      </Button>
      <h2>Edit User</h2>
      {error && error ? <h3>{error}</h3> : null}

      <form
        className={classes.root}
        validate="true"
        autoComplete="off"
        onSubmit={formSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          value={name || ""}
          type="text"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          value={email || ""}
          type="email"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          name="address"
          value={address || ""}
          type="text"
          onChange={handleInput}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          name="contact"
          value={contact || ""}
          type="number"
          onChange={handleInput}
        />
        <br />
        <Button variant="contained" size="medium" color="primary" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Update;
