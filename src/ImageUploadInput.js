import React, { useEffect, useState } from 'react';
import './ImageUploadInput.css';

function ImageUploadInput({ src_img, id, updateImage }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
        updateImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (src_img && !(src_img === "none")) {
      setImage(src_img);
    }
  }, []);

  return (
    <label className='label-image-upload-input'>
        <input
          type='file'
          onChange={handleImageChange}
          accept='image/*'
          className='image-upload-input'
          id={id}
        />
        {image ? (
          <img 
            src={image}
            alt='uploaded-image'
            className='uploaded-image'
          />
        ) : (
          <div className='not-uploaded-plus-div'>
            <span className='not-uploaded-plus-span'>+</span>
          </div>
        )}
    </label> 
  );
};

export default ImageUploadInput;
