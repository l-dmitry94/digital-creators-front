import {
  useState,
  useId
} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup } from '../../../redux/auth/auth-operations';
import Container from '../../Container';
import CustomInput from '../../CustomInput/CustomInput'
import css from './RegisterForm.module.scss';
// import icons from '../../../assets/icons/icons.svg';
 

// const RegisterSchema = Yup.object().shape({
//         name: Yup.string().required('Name is required'),
//         email: Yup.string()
//             .email('Invalid email')
//             .required('Email is required'),
//         password: Yup.string()
//             .min(8, 'Password must be at least 8 characters')
//             .required('Password is required'),
//     });

//   const RegistrationForm = () => {
//     const dispatch = useDispatch();
//     const [loading, setLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
    
//     const unvisionPassword = () => {
//       setShowPassword(prevState => !prevState);
//     }

//     const { register, handleSubmit, reset, errors } = useForm({
//       defaultValues: { name: '', email: '', password: '' },
//       resolver: yupResolver(RegisterSchema),
//     });
    
//     const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//       await dispatch(signup(data));
//       history.push('/home');
//     } catch (error) {
//       console.error('Registration failed:', error);
//     } finally {
//       setLoading(false);
//     }
//   };


//     return (
//       <div className={css.register_page}>
     
//     <Container>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <CustomInput
//           type="text"
//           placeholder="Name"
//           name="name"
//           register={register}
//           errors={errors}
//         />
//         <CustomInput
//           type="email"
//           placeholder="Email"
//           name="email"
//           register={register}
//           errors={errors}
//         />
//         <CustomInput
//           type="password"
//           placeholder="Password"
//           name="password"
//           register={register}
//           errors={errors}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Registering...' : 'Register Now'}
//         </button>
//       </form>
//     </Container>
  
//       </div>
//     );
//   }


const RegistrationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async data => {
        try {
            await dispatch(signup(data));
            navigate('/home');
        } catch (error) {
            console.error(error);
      }
      console.log(data)
  };
  
  // const nameId = useId();
  //   const emailId = useId();
  //   const passwordId = useId();

   return (
     <div  className={css.register_page}>
       <Container>
            <h1>Please Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               
             <CustomInput {...register('name')}/>
                    {errors.name && (
                        <span className="error-message">
                            {errors.name.message}
                        </span>
                    )}    
             <CustomInput {...register('email')}/>
                    {errors.email && (
                        <span className="error-message">
                            {errors.email.message}
                        </span>
                    )}
              <CustomInput
                        {...register('password')}
                        type="password'"/>
           {errors.password && (
             <span className="error-message">
               {errors.password.message}
             </span>)}
                <button type="submit">Register Now</button>
            </form>
            </Container>
          </div>
    );
};

export default RegistrationForm;
