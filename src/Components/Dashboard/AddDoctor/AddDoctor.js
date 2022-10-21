import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleFileChange = (e) =>{
    const newFile = e.target.files[0];
    setFile(newFile);
  }

  const handleBlur = e =>{
    const newInfo = {...info};
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }
  const handleSubmit = () =>{
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
  
    fetch('https://serene-taiga-29892.herokuapp.com/addDoctor', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error)
    })
  }
  

  return (
    <section>
      <div className=" row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <h5>Add a doctor</h5>
          <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col-12">
              <label for="inputAddress" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Name"
                onBlur={handleBlur}
              />
            </div>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input onBlur={handleBlur} type="email" class="form-control" name='email' />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input  type="password" class="form-control" name="password" />
            </div>
            <div class="col-md-4">
              <label  class="form-label">
                Upload Headshot
              </label>
              <input type="file" class="form-control" onChange={handleFileChange}  />
            </div>
            
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
