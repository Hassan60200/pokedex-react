const Form = ({ text, handleChange }) => (
    <>
        <input type="text" defaultValue={text} onChange={handleChange} />
    </>
);

export default Form;