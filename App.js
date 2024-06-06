import React from 'react'
import "./App.css";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const App = () => {

  const formik = useFormik({
    initialValues:{
    username: "",
    name: "",
    age:"",
    email: "",
    status: "",
    country:""
    },

    validationSchema:Yup.object().shape({
      username: Yup.string().max(10, "User name must be less than or equal to 10!!")
      .required("This is required field!"),
      name:Yup.string()
      .required("This is required!"),
      age:Yup.number()
      .required("This is required!")
      .typeError("Age must be a number!")
      .integer("Must be an Integer!")
      .min(18,"You must be 18 years old!"),
      email:Yup.string()
      .email("Please Provide valid Email!")
      .required("This is required!"),
      status:Yup.string()
      .required("this is required!"),
      country:Yup.string()
      .required("This is required!"),
    }),
    
    onSubmit:(values) => {
      alert("Form is Submitted "+ JSON.stringify(values))

    }
  })


  return (
<Formik>
    <form onSubmit={formik.handleSubmit}>
      <div className='bg'>
    <div className='App'>
    <div className='spacing'>

      <h1>Enter your Data!</h1>

<label>User Name :</label>
<input 
type="text" 
placeholder="Enter username"
name='username'
onChange={formik.handleChange}
value={formik.values.username}
onBlur={formik.handleBlur}
/>
{formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
</div>

<div className='spacing'>
<label>Name :</label>
<input 
type="text" 
placeholder="Enter name"
name='name'
onChange={formik.handleChange}
value={formik.values.name}
onBlur={formik.handleBlur}
/>
{formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>} 
</div>


<div className='spacing'>
<label>User Age :</label>
<input 
type="number" 
placeholder="Enter Age"
name='age'
onChange={formik.handleChange}
value={formik.values.age}
onBlur={formik.handleBlur}
/>
{formik.touched.age && formik.errors.age && <p style={{color:"red"}}>{formik.errors.age}</p>} 
</div>


<div className='spacing'>
<label>User Email :</label>
<input 
type="email" 
placeholder="Enter email"
name='email'
onChange={formik.handleChange}
value={formik.values.email}
onBlur={formik.handleBlur}
/>
{formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
</div>

<div className='next'>
<span>Your Status : </span>

<input 
type='radio'
name='status'
value='single'
onChange={formik.handleChange}
/>
<label>Single</label>

<input 
type='radio'
name='status'
value='married'
onChange={formik.handleChange}
/>
<label>married</label>
<input 
type='radio'
name='status'
value='coder'
onChange={formik.handleChange}
/>
<label>coder</label>
<br />
{formik.touched.status && formik.errors.status && <p style={{color:"red"}}>{formik.errors.status}</p>}
</div>

<div className='next'>
<select name='country' onBlur={formik.handleBlur} onChange={formik.handleChange}>
  <option value="">Select Country</option>
  <option value="india">India</option>
  <option value="pakistan">Pakistan</option>
  <option value="palestine">Palestine</option>
  <option value="iran">Iran</option>
</select>
{formik.touched.country && formik.errors.country && <p style={{color:"red"}}>{formik.errors.country}</p>}
</div>

<div className='next'>
<button type='submit'>Submit</button>
</div>
</div>
    </div>
    </form>
    </Formik>
  )
}

export default App

