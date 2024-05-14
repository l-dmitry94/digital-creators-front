import StartPage from './StartPage/StartPage';
import './ScreensPage.scss';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBoardItems } from '../../redux/tasks/tasks-selectors';
import './ScreensPage.scss';

const ScreensPage = () => {
    const boards = useSelector(selectBoardItems);
    const { boardName } = useParams();

    const board = boards.find(
        ({ board_name }) => board_name.toLowerCase() === boardName
    );

    return (
        <>
            <div className="wrapper">
                {board && (
                    <picture>
                        <source
                            media="(min-width: 1440px )"
                            srcSet={`${board?.background?.desktop} 1x`}
                        />
                        <source
                            media="(min-width: 768px )"
                            srcSet={`${board?.background?.tablet} 1x`}
                        />
                        <source
                            media="(min-width: 320px )"
                            srcSet={`${board?.background?.mobile} 1x`}
                        />
                        <img
                            className="image"
                            src={board?.background?.mobile}
                            alt={board?.background?.board_name}
                        />
                    </picture>
                )}

                <HeaderDashboard boardName={board?.board_name} />

                {!boards.length ? (
                    <StartPage />
                ) : (
                    <div className="cont">
                        <SimpleBar>
                            <MainDashboard board={board} />
                        </SimpleBar>
                    </div>
                )}
            </div>
        </>
    );
};

export default ScreensPage;
