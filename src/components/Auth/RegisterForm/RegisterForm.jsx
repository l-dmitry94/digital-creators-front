import {
  useState,
  // useId
} from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup } from '../../../redux/auth/auth-operations';
import Container from '../../Container';
import CustomInput from '../../CustomInput/CustomInput'
import css from './RegisterForm.module.scss';
// import icons from '../../../assets/icons/icons.svg';
 

const RegisterSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

  const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    
    const unvisionPassword = () => {
      setShowPassword(prevState => !prevState);
    }

    const { register, handleSubmit, reset, errors } = useForm({
      defaultValues: { name: '', email: '', password: '' }, 
      resolver: yupResolver(RegisterSchema),
      mode: 'onChange',
    });
    
    const onSubmit = (data) => {
      dispatch(signup(data))
      reset()
      }


    return (
      <div className={css.register_page}>
      <Container >
        <div className={css.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput type="text" placeholder="Name" name="name" register={register} errors={errors} />
          <CustomInput type="email" placeholder="Email" name="email" register={register} errors={errors} />
          <CustomInput
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            errors={errors}
          />
          <button type="submit">Register Now</button>
          </form>
          </div>
        </Container>
      </div>
    );
  }

export default RegistrationForm;
