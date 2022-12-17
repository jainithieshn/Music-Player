import React, { useEffect, useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Records from "../Data/db.json";
import Title from "../Data/title.json";
import axios from "axios";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [Record, setRecord] = useState([]);

  let handleChange = (e) => {
    e.preventDefault();
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };


  const filteredData = Records.filter((el) => {
    //if no input the return the original
    if (searchInput === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.name.toLowerCase().includes(searchInput)
    }
})


  return (
    <>
      <TextField
        id="outlined-basic"
        onChange={handleChange}
        variant="outlined"
        fullWidth
        label="Search"
      />
      {filteredData &&
        filteredData.map((record) => {
          return (
            <>
              <h5> {record.name} </h5>
            </>
          );
        })}

    </>
  );
}

export default Home;
