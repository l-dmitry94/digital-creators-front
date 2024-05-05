import scss from './StartPage.module.scss';

const StartPage = () => {
    return (
        <div className={scss.startPage}>
            <p className={scss.text}>
                Before starting your project, it is essential
                <span className={scss.span}> to create a board </span>
                to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow
                and ensure effective collaboration among team members.
            </p>
        </div>
    );
};

export default StartPage;
