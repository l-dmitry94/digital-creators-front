export const TextField = ({ label, ...props }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...props} />
        </div>
    );
};
