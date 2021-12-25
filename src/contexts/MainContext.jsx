import { createContext, useState } from "react";

const MainContext = createContext({});

const Provider = ({ children }) => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        const inputValue = event.target.value;

        setText(inputValue);

    };

    return (
        <MainContext.Provider value={{  handleChange, text }}>
            {children}
        </MainContext.Provider>
    );
};

export { Provider };
export default MainContext;