import { Link, useNavigate } from 'react-router-dom';

import image from '../../assets/images/welcome-developer.png';
import icons from '../../assets/icons/icons.svg';
import css from './welcome.module.scss';

import Container from '../Container/index.js';
import { useAuth } from '../../hooks/useAuth.js';
import { useEffect } from 'react';

const Welcome = () => {
    const { isLogin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate('/home');
        }
    });
    return (
        <div className={css.welcome_page}>
            <Container>
                <div className={css.wrapper}>
                    <img
                        className={css.welcome_image}
                        src={image}
                        alt="Welcome-developer"
                    />
                    <div className={css.welcome_title_wrapper}>
                        <div className={css.icon_wrapper}>
                            <svg className={css.welcome_icon}>
                                <use href={`${icons}#icon-logo`} />
                            </svg>
                        </div>
                        <h1 className={css.title}>Task Pro</h1>
                    </div>
                    <p className={css.descr}>
                        Supercharge your productivity and take control of your
                        tasks with Task Pro - Don&apos;t wait, start achieving
                        your goals now!
                    </p>
                    <div className={css.link_wrapper}>
                        <Link className={css.link_signup} to="/auth/register">
                            Registration
                        </Link>
                        <Link className={css.link_login} to="/auth/login">
                            Login
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Welcome;
