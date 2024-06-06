
import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';

function App() {

const schema = yup.object().shape({
  name: yup.string()
  .required("Your name is Required!"),
  email: yup.string().email().required(),
  age: yup.number().typeError("Age is Required in numbers").positive().integer().min(18).required("Age must be greater than 18!"),
  password: yup.string().min(4).max(10).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password dont matched!").required(),

}) 

const {register, handleSubmit, formState: {errors}} = useForm({
  resolver: yupResolver(schema),
});

  const onSubmit = (data) => {
    console.log(data)
  }
    return (
    <div className='form-container'>

      <h1>Enter your Crads</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

       <div className='form-group'>

       <div className='form-group-input'>
       <label>Name :</label>
      <input type='text' placeholder='Enter Name...' {...register("name")}/>
      <p style={{color: 'red'}}>{errors.name?.message}</p>
      </div>
      
      <div className='form-group-input'>
       <label>Email :</label>
      <input type='email' placeholder='Enter Email...'{...register("email")}/>
      <p style={{color: 'red'}}>{errors.email?.message}</p>
      </div>

      <div className='form-group-input'>
      <label>Age :</label>
      <input type='number' placeholder='Enter Age...' {...register("age")}/>
      <p style={{color: 'red'}}>{errors.age?.message}</p>
      </div>

      <div className='form-group-input'>
      <label>Password :</label>
      <input type='password' placeholder='Enter Password...'{...register("password")}/>
      <p style={{color: 'red'}}>{errors.password?.message}</p>
      </div>

      <div className='form-group-input'>
      <label>Confirm Password :</label>
      <input type='password' placeholder='Confirm Password...'{...register("confirmPassword")}/>
      <p style={{color: 'red'}}>{errors.confirmPassword?.message}</p> 
      </div>

      <input type='submit'/>
      </div>
      </form>
      </div>
    );
  }
export default App;



