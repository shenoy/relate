import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import MultiSelect from "./MultiSelect";
import AGGrid from "./AGGrid";
import HighChart from "./HighChart";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import data from "./datas";
import useStyles from "./useStyles";
import { useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //===================================================TEXTVALUE HOOK============================================================

  const [textValue, changeTextValue] = React.useState("");
  console.log(textValue, "changeTextValue Hook");

  //==================================================  STATE HOOK ===============================================

  //===========================================SEARCH BY ID =============================================================================

  const searchByID = ID => {
    const res = data.find(x => Object.values(x).includes(ID));
    if (res) return res;
  };

  //========================================================HANDLE SUBMIT FUNCTION========================================================

  const handleSubmit = event => {
    event.preventDefault();
    const res = searchByID(textValue);
    dispatch({ type: "Dashboard", payload: res });
  };

  //==========================================================REDUX HOOOKS================================================================
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  //+++++++++++++++++++++++++++++++++++++++++++

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <form onSubmit={handleSubmit}>
          <div className={classes.search}>
            {/* ================================HANDLE SUBMIT LISTENER=========================== */}
            <InputBase
              value={textValue}
              onChange={e => changeTextValue(e.target.value)}
              // ======================================ON CHANGE LISTENER===========================
              placeholder="Search by ID…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />

            <SearchIcon />

            <div className={classes.searchIcon}>
              {/* ======================================================================================== */}
            </div>
          </div>
        </form>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CVE Analysis
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <KeyboardArrowLeftIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <Divider />

        <MultiSelect />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.root}>
          <AGGrid state={state} />
        </div>
        <div className={classes.root}>
          <HighChart state={state} />
        </div>
      </main>
    </div>
  );
}
