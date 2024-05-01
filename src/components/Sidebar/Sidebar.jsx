import Logo from './Logo/Logo.jsx';
import BoardList from './BoardList/BoardList.jsx';
// import HelpModal from './HelpModal';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <BoardList />
            {/* <div>
                <button onClick={handleNeedHelpClick}>Need Help</button>
            </div> */}
            <div>
                <button>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
