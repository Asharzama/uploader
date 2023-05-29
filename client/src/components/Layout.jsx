import React, { useEffect, useState } from "react";
import FormDialog from "./DialogBox";

const ImageList = ({ Images, title }) => {
  const [open, setOpen] = useState(false);
  const [uploadedImage, setUploadImage] = useState([]);

  useEffect(() => {
    fetchedData();
  });
  const fetchedData = async () => {
    const endpoint = title === "Image" ? "images" : title === "Audio" ? "audio" : "video";
    let ftech = await fetch(`http://localhost:5000/${endpoint}`);
    ftech = await ftech.json();
    setUploadImage(ftech);
  };

  return (
    <>
      <div className="flex justify-end px-12 py-7">
        <button
          className="rounded-2xl border-2 border-gray-400 px-4 py-2 uppercase font-medium text-gray-400 hover:bg-gray-400 hover:text-white"
          onClick={() => setOpen(true)}
        >
          Upload new {title}
        </button>
      </div>
      <FormDialog open={open} setOpen={setOpen} title={title} />

      <div className="flex flex-wrap px-6 justify-center">
        {Images.map((image, index) => (
          <div key={index} className="my-4 flex-auto">
            {title === "Image" ? (
              <img src={image} alt="" className="max-w-sm" />
            ) : title === "Audio" ? (
              <audio controls className="max-w-sm">
                <source src={image} />
                Audio not supported
              </audio>
            ) : (
              <video controls className="max-w-sm">
                <source src={image} />
              </video>
            )}
          </div>
        ))}

        {uploadedImage?.length
          ? uploadedImage.map((image, index) => (
              <div key={index} className="flex flex-wrap px-6 ">
                {image.data.map((img, index) => (
                  <div key={index} className="flex flex-wrap px-6 ">
                    {title === "Image" ? (
                      <img
                        src={img}
                        alt=""
                        key={index}
                        className="my-4 max-w-sm flex-auto"
                      />
                    ) : title === "Audio" ? (
                      <audio controls className="max-w-sm">
                        <source src={image} />
                        Audio not supported
                      </audio>
                    ) : (
                      <video controls className="max-w-sm">
                        <source src={image} />
                      </video>
                    )}
                  </div>
                ))}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ImageList;
