import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';
import TextInput from './Components/TextInput';
import NumberInput from './Components/NumberInput';
import SingleSelect from './Components/SingleSelect';
import MultiSelect from './Components/MultiSelect';

function App() {
  const schema = yup.object().shape({
    name: yup.string().required("Your name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().typeError("Age is required in Numbers!").positive().integer().min(18).required("Age must be greater than 18!"),
    password: yup.string().min(4).max(10).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password dont matched!").required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    console.log('Selected Country:', selectedCountry);
    console.log('Selected Interests:', selectedInterests);
  };

  const countryOptschemaions = [
    { value: 'usa', label: 'USA' },
    { value: 'uk', label: 'UK' },
    { value: 'canada', label: 'Canada' },
  ];

  const interestOptions = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'movies', label: 'Movies' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleInterestChange = (selectedOptions) => {
    setSelectedInterests(selectedOptions);
  };

  return (
    <div className='form-container'>
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>

      <div className='form-group-input'>
        <TextInput placeholder='Enter Name...' register={register} name='name' error={errors.name?.message} />
        </div>
        <div className='form-group-input'>
        <TextInput placeholder='Enter Email...' register={register} name='email' error={errors.email?.message} />
        </div>
        <div className='form-group-input'>
        <NumberInput placeholder='Enter Age...' register={register} name='age' error={errors.age?.message} />
        </div>
        <div className='form-group-input'>
        <TextInput placeholder='Enter Password...' register={register} name='password' error={errors.password?.message} />
        </div>
        <div className='form-group-input'>
        <TextInput placeholder='Confirm Password...' register={register} name='confirmPassword' error={errors.confirmPassword?.message} />
        </div>
        <SingleSelect
          options={countryOptions}
          value={selectedCountry}
          onChange={handleCountryChange}
        />

        <MultiSelect
          options={interestOptions}
          value={selectedInterests}
          onChange={handleInterestChange}
        />

        <input type='submit' />
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
