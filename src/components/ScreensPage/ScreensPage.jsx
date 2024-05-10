import StartPage from './StartPage/StartPage';
import './ScreensPage.scss';
// import SubmitButton from '../SubmitButton';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Container from '../Container';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBoardItems } from '../../redux/tasks/tasks-selectors';

const ScreensPage = () => {
    const boards = useSelector(selectBoardItems);
    const { boardName } = useParams();

    const board = boards.find(
        ({ board_name }) => board_name.toLowerCase() === boardName
    );

    return (
        <Container>
            <div>
                <HeaderDashboard boardName={board?.board_name} />

                {!boards.length ? (
                    <StartPage />
                ) : (
                    <SimpleBar>
                        <MainDashboard board={board} />
                    </SimpleBar>
                )}
            </div>
        </Container>
    );
};

export default ScreensPage;
