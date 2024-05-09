// import StartPage from './StartPage/StartPage';
import './ScreensPage.scss';
// import SubmitButton from '../SubmitButton';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Container from '../Container';

const ScreensPage = () => {
    // const screenWidth = [{ mod: 375 }, { tab: 768 }];

    return (
        <Container>
            <div className="screen">
                <HeaderDashboard boardName={'Project office'} />
                <SimpleBar>
                    <MainDashboard />
                </SimpleBar>
                {/* <StartPage /> */}
            </div>
        </Container>
    );
};

export default ScreensPage;
