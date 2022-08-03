import React, { useState } from 'react'

export default function FileUploadData() {

    const [picture, setPicture] = useState({});

    setImageAction = () => {
        const formData = new FormData();
        formData.append("Name", "Test");
        formData.append(
            "file",
            picture.pictureAsFile
        );
        // do your post request

    };

    uploadPicture = (e) => {
        setPicture({
            /* contains the preview, if you want to show the picture to the user
               you can access it with this.state.currentPicture
           */
            picturePreview : URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile : e.target.files[0]
        })
    };



  return (
    <div>
<form method="post" action="post" enctype="multipart/form-data">
  <input type="file" name="image" /><br /><br />
  <button type="submit" name="upload">Upload</button>
</form>

    </div>
  )
}
