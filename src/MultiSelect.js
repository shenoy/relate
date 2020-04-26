import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"; 
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import searchFunction from './Search'
import Divider from "@material-ui/core/Divider";
import { tsPropertySignature } from "@babel/types";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(10),
    minWidth: 120,
    maxWidth: 300
  },
  
  divider:{

    marginBottom: 100

  }, 
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1)
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

function getStyles(name, severityName, theme) {
  return {
    fontWeight:
        severityName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
////////////////////////////////////////////////////////////////FUNCTIONAL COMPONENT///////////////////////////////////////////////////////////////
export default function MultipleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();

  ////////////////////////////////////////////////////////////REDUX HOOKS/////////////////////////////////////////////////////////////////////

  const State = useSelector(state => state);
  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  const [year, setYear] = React.useState("");

  const [severityName, setSeverityName] = React.useState([]);


  const [selectState, setSelectState] = React.useState([{
    
  }]);

  const handleChangeSimple=(event)=>{
    setYear(event.target.value);
    const res = searchFunction(event.target.value);
    dispatch({ type: "Multiselect", payload: res})
  } 

  const handleChange = (event) => {
    setSeverityName(event.target.value);
    const res = searchFunction(year, event.target.value[0], event.target.value[1]);
    dispatch({ type: "Multiselect", payload: res })

  };


  const handleChart = () => {
    console.log(year, "graph year");
    // getChartData(year); 
    // dispatch({type:"HighChart"})
    
    
    // dispatch({ type: "Multiselect", payload: res });
  };
 

   return (
     <div>
       <FormControl className={classes.formControl}>
         <InputLabel id="demo-simple-select-label">Year</InputLabel>
         <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={year}
           onChange={handleChangeSimple}
         >
           <MenuItem value={2015}>2015</MenuItem>
           <MenuItem value={2016}>2016</MenuItem>
           <MenuItem value={2017}>2017</MenuItem>
           <MenuItem value={2018}>2018</MenuItem>
           <MenuItem value={2019}>2019</MenuItem>
           <MenuItem value={2020}>2020</MenuItem>
         </Select>
       </FormControl>

       <Divider />

       <FormControl className={classes.formControl}>
         <InputLabel id="demo-mutiple-name-label">Severity</InputLabel>
         <Select
           labelId="demo-mutiple-name-label"
           id="demo-mutiple-name"
           multiple
           value={severityName}
           onChange={handleChange}
           input={<Input />}
           MenuProps={MenuProps}
         >
           {names.map(name => (
             <MenuItem
               key={name}
               value={name}
               style={getStyles(name, severityName, theme)}
             >
               {name}
             </MenuItem>
           ))}
         </Select>
       </FormControl>
       <Divider />
       <Button
         variant="contained"
         size="large"
         color="primary"
         className={classes.margin}
         value={year}
         onClick = {handleChart}
       >
         Generate Graph
       </Button>
     </div>
   );
}
