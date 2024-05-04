import StartPage from './StartPage/StartPage';
import scss from './ScreensPage.module.scss';
// import SubmitButton from '../SubmitButton';
import Container from '../Container';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';

const ScreensPage = () => {
    return (
        <Container>
            <div className={scss.flex}>
                <HeaderDashboard />
                <MainDashboard />

                <StartPage />

                {/* <SubmitButton buttonText={'Add another card'} /> */}
            </div>
        </Container>
    );
};

export default ScreensPage;
