import React from "react";
import { makeStyles } from "@material-ui/core";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Records from "../Data/db.json";

function Home() {
  return (
    <>
      <div className="row" id="row">
        {
            Records && Records.map((record) => {
                return (
                  <>
                    <div className="col-md-3">
                      { record.title } 
                        <Card
                          sx={{
                            maxWidth: 180,
                            height: 220,
                            bgcolor: "grey",
                          }}
                        >
                        <CardMedia
                            component='img'
                            height='170'
                            image={ record.image }
                            sx={{ padding: "10px", paddingBottom: "0px" }}
                        />
                        <CardContent>
                            {record.name}
                        </CardContent>
                        </Card>
                        <br />
                    </div>
                    </>
                );
            })
        }
      </div>
    </>
  );
}

export default Home;
