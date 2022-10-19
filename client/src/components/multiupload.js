import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import { Button } from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function MultipleFileUploadComponent() {
  return (
    <div>
      
        <form id=attach>
          <h3>Attach Files</h3>
          <div>
            <input type="file" id="pic" multiple />
            <p>Enter a caption.</p>
            <input type="text" id="caption"/>
          </div>
          <div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Attach
              </Button>
          </div>
        </form>
      
    </div>
  );
}

const files = [
  /*{
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },*/
];
