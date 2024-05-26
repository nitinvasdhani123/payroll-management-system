import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Buttons from './Buttons'
import './Addbasicdetails.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Addbasicdetailsadmin() {
  const navigate = useNavigate();
  // Password code
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const generatePassword = (event) => {
    event.preventDefault();
    const length = 20; // length of the generated password
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&/=';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
  };
  // api code
  const sendData = async (name, email, password,demp) => {
    try {
      const response = await axios.post('http://localhost:8000/api/store-basic-details-admin', {
        name: name,
        email: email,
        password: password,
        // createdBy:demp,
      });

      // Navigation
      const combinedState = { data1: name, data2: email };
      const navigatetoAddadmin = () => {
        navigate("/AddAdmin", { state: combinedState });
      };
      if (response.data.success === true) {
        alert(response.data.message);
        console.log(response.data.message);
        navigatetoAddadmin();
      } else if (response.data.success === false) {
        alert(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(localStorage.getItem('employeeId'));
      const demp=localStorage.getItem('employeeId');// store the createdby id 
      console.log(demp);
    sendData(name, email, password,demp);
  };

  return (
    <div id='main'>
      <Sidebar />
      <div className='basicdetail'>
        <div className='basicdetail-container'>
          <h4>User Registration Admin</h4>
          <form >
            <div className='basicinput'>
              <div><input type='text' name='employee_name' placeholder='Admin Full Name' onChange={(event) => setName(event.target.value)} /></div>
              <div><input type='email' name='office_email' placeholder='Office Email' onChange={(event) => setEmail(event.target.value)} /></div>
              <div className='password'>
                <input type='text' name='password' placeholder='Password' value={password} />
                <button className='generatepassword' onClick={generatePassword}>Generate</button></div>
              <div><button className='Basicbutton' type='submit' onClick={handleSubmit}>Submit</button></div>
            </div>
          </form>
        </div>
      </div>
      <Buttons />
    </div>
  )
}

export default Addbasicdetailsadmin
//working 

// import React, { useState } from 'react'
// import Sidebar from './Sidebar'
// import Buttons from './Buttons'
// import './Addbasicdetails.css'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// function Addbasicdetailsadmin() {
//   const navigate = useNavigate();
//   // Password code
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const generatePassword = (event) => {
//     event.preventDefault();
//     const length = 20; // length of the generated password
//     const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&/=';
//     let newPassword = '';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       newPassword += characters[randomIndex];
//     }
//     setPassword(newPassword);
//   };
//   // api code
//   const sendData = async (name, email, password) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/storeBasicDetailAdmin', {
//         name: name,
//         email: email,
//         password: password,
//       });

//       // Navigation
//       const combinedState = { data1: name, data2: email };
//       const navigatetoAddadmin = () => {
//         navigate("/AddAdmin", { state: combinedState });
//       };
//       if (response.data.success === true) {
//         alert(response.data.message);
//         console.log(response.data.message);
//         navigatetoAddadmin();
//       } else if (response.data.success === false) {
//         alert(response.data.error);
//         console.log(response.data.error);
//       }

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     sendData(name, email, password);
//   };

//   return (
//     <div id='main'>
//       <Sidebar />
//       <div className='basicdetail'>
//         <div className='basicdetail-container'>
//           <h4>User Registration Admin</h4>
//           <form >
//             <div className='basicinput'>
//               <div><input type='text' name='employee_name' placeholder='Admin Full Name' onChange={(event) => setName(event.target.value)} /></div>
//               <div><input type='email' name='office_email' placeholder='Office Email' onChange={(event) => setEmail(event.target.value)} /></div>
//               <div className='password'>
//                 <input type='text' name='password' placeholder='Password' value={password} />
//                 <button className='generatepassword' onClick={generatePassword}>Generate</button></div>
//               <div><button className='Basicbutton' type='submit' onClick={handleSubmit}>Submit</button></div>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Buttons />
//     </div>
//   )
// }

// export default Addbasicdetailsadmin
