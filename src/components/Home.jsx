import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, userDelete } from "../redux/actions/userAction";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  margin: {
    marginRight: 12,
  },
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
  },
});

// Component
const Home = () => {
  const [mount, setMount] = useState(false);

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!mount) {
      setMount(true);
      dispatch(loadUser());
    }
  }, [dispatch, mount]);

  const handleDelete = (id) => {
    if (window.confirm("please confirm the user was deleted!")) {
      dispatch(userDelete(id));
    }
  };

  const classes = useStyles();

  return (
    <div>
      <TableContainer className={classes.paper} component={Paper}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          style={{ marginBottom: 20 }}
          onClick={() => navigate("/add-user")}
        >
          Add User
        </Button>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      className={classes.margin}
                      variant="contained"
                      size="small"
                      color="default"
                      onClick={() => navigate(`/edit-user/${user.id}`)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={() => handleDelete(user.id)}
                    >
                      delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
