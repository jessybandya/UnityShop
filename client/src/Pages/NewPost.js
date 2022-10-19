import React, { useState, useContext, useEffect } from "react";
import { Box, TextField, Button, Modal, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { UserContext } from "../context/user-context";
import publishArticle from "../services/publish.js";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewPost() {
  const [state] = useContext(UserContext);
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: { title: "", body: "", author: state.user },
    onSubmit: async (values) => {
      await publishArticle(event, values);
      //redirect user to homepage while preserving state
      //this.props.history.push('/')
    },
  });



  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          fullwidth
          label="Title"
          name="title"
          multiline
          maxRows={2}
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Body"
          name="body"
          fullwidth
          multiline
          maxRows={40}
          value={formik.values.body}
          onChange={formik.handleChange}
        />
        <Box>
          {/* {photos ? <MasonryImageList /> : <></>}
          
photos.map(()=>{<img src={} />})
          <Button fullWidth onClick={handleOpen}>
            Attach File
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {" "}
              <form id="attach">
                <h3>Attach Files</h3>
                <div>
                  <input type="file" multiple />
                  <p>Enter a caption.</p>
                  <input type="text" />
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
              </form>{" "}
            </Box>
          </Modal>
*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Publish
          </Button>
        </Box>
      </div>
    </Box>
  );
}
