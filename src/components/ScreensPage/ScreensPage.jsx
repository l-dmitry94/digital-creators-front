// import StartPage from './StartPage/StartPage';
import './ScreensPage.scss';
// import SubmitButton from '../SubmitButton';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const ScreensPage = () => {
    // const screenWidth = [{ mod: 375 }, { tab: 768 }];

    return (
        <div>
            <HeaderDashboard boardName={'Project office'} />
            <SimpleBar className="scroll" style={{ maxWidth: 1132 }}>
                <MainDashboard />
            </SimpleBar>
            {/* <StartPage /> */}
        </div>
    );
};

export default ScreensPage;
