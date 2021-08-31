import {useState, useEffect} from "react";

const NameLocalStorage = nameLS => {
    const [name, setName] = useState(
        localStorage.getItem(nameLS) || ""
    );
    useEffect(() => {
        localStorage.setItem(nameLS, name)
    }, [name])
    return [name, setName];
};

export default NameLocalStorage;