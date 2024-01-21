import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  formControl,
  Select,
} from "@material-ui/core";

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("restaurants");

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Tourist centers
      </Typography>
      <formControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="tourist centers">Tourist Centers</MenuItem>
        </Select>
      </formControl>

      <formControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="tourist centers">Tourist Centers</MenuItem>
        </Select>
      </formControl>
    </div>
  );
};

export default List;
