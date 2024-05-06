// import StartPage from './StartPage/StartPage';
import scss from './ScreensPage.module.scss';
// import SubmitButton from '../SubmitButton';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';

const ScreensPage = () => {
    return (
        <div className={scss.flex}>
            <HeaderDashboard />
            <MainDashboard />

            {/* <StartPage /> */}
        </div>
    );
};

export default ScreensPage;
