import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Make API call to register user
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (json.success) {
        // Automatically log in user and redirect to home page
        localStorage.setItem('token', json.token);
        window.location.href = '/';
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input type="text" {...register('name')} />
          {errors.name && <div>{errors.name.message}</div>}
        </label>
        <label>
          Email:
          <input type="email" {...register('email')} />
          {errors.email && <div>{errors.email.message}</div>}
        </label>
        <label>
          Password:
          <input type="password" {...register('password')} />
          {errors.password && <div>{errors.password.message}</div>}
        </label>
        <button type="submit" disabled={loading}>
          {loading? 'Loading...' : 'Register Now'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;