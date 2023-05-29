import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, setOpen, title }) {
  const [images, setImages] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };

  const ChangeHandler = (event) => {
    const newImages = [...images];
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        newImages.push(e.target.result);
        setImages(newImages);
      };

      reader.readAsDataURL(files[i]);
    }
  };

  const SubmitHandler = () => {
    const endpoint =
      title === "Image" ? "images" : title === "Audio" ? "audio" : "video";

    fetch(`http://localhost:5000/${endpoint}`, {
      method: "post",
      body: JSON.stringify(images),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {});

    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload {title}</DialogTitle>
        <DialogContent>
          <input
            type="file"
            accept={
              title === "Image"
                ? "image/*"
                : title === "Audio"
                ? "audio/*"
                : "video/*"
            }
            multiple
            onChange={(event) => ChangeHandler(event)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={SubmitHandler}>Select</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
