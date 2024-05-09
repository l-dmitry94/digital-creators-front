const Errors = ({ error, touched, errorMessage }) => {
    return (
        <>
            {error[errorMessage] && touched[errorMessage] && (
                <div>{error[errorMessage]}</div>
            )}
        </>
    );
};

export default Errors;
