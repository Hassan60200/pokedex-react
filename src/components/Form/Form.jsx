const Form = ({ text, handleChange }) => (
    <>
        <input type="text" placeholder="Rechercher" defaultValue={text} onChange={handleChange} />
    </>
);

export default Form;