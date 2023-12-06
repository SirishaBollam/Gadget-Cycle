import { storage } from '../firbase/config'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadImage = async (imageFile, foldername) => {
  if (!imageFile) {
    throw new Error('No image file provided');
  }
  const storageRef = ref(storage, `images/${foldername}/${imageFile.name}`);
  console.log(`yes ${imageFile.name}`)
  try {
    const snapshot = await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL; 
  } catch (error) {
    console.error('Error uploading image: ', error);
    throw new Error(error.message);
  }
};

export { uploadImage };
