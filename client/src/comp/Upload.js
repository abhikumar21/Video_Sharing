import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import VideoCallIcon from '@mui/icons-material/VideoCall';




const Upload = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    const [img, setImg] = useState(undefined)
    const [video, setVideo] = useState(undefined)
    const [imgPerc, setImgPerc] = useState(0)
    const [vidPerc, setVidPerc] = useState(0)

    const [inputs, setInputs] = useState({title:"", desc:"", imgUrl:"", videoUrl:""});
    const [tags, setTags] = useState("");

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    
    const handleTags = (e) => {
       setTags(e.target.value.split(","));
    }

    const uploadFile = (file, urlType) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name

      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVidPerc(Math.round(progress));
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {},
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setInputs( (inputs) => {
       return {...inputs, [urlType]: downloadURL}
      }
        )
    }
  )
});

}

const handleUpload = async(e) => {
  e.preventDefault();
  // console.log(inputs)

  try {

    //this ensures file upload first
    //currectly works on login page
    const res = await axios.post("videos/post", {...inputs, tags})
    setOpen(false);
    console.log("success", res)
  } catch (error) {
   console.log(error)
  }
 }


useEffect(()=> {video && uploadFile(video, "videoUrl")}, [video])
useEffect(()=> {img && uploadFile(img, "imgUrl")}, [img])


  return (
  <>
    <Button className='upload_btn' onClick={handleOpen}><VideoCallIcon/></Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Box className="modal_box" >
    <h2 className="t_head">
      Upload Video
    </h2>

    <form className='videoform'>
      <h4>Choose Video</h4>

      {vidPerc>0 ? ("Uploading"+vidPerc) :   (<input type="file" onChange={(e)=>setVideo(e.target.files[0]) } />) }
    

      <input className='vform_input' type="text" value={inputs.title} name="title" placeholder='Title' onChange={handleChange} />
      <textarea className='vform_input desc1' type="text" value={inputs.desc} name="desc" placeholder='Description' onChange={handleChange} />
      <input className='vform_input' type="text" value={inputs.tags} name="tags" placeholder='tags: seperate by commas' onChange={handleTags} />

      <h4>Choose Thumbnail</h4>
      {imgPerc>0 ? ("Uploading"+imgPerc) : ( <input type="file" onChange={(e)=>setImg(e.target.files[0]) } />)}
     

      <button onClick={handleUpload}className='submit_post'>Submit</button>
    </form>
  </Box>
  </Modal>
  </>
  )
}

export default Upload
