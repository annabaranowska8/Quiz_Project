import {useState, useEffect} from "react";

const GroupLocalStorage = groupLS => {
    const [group, setGroup] = useState(
        localStorage.getItem(groupLS) || ""
    );
    useEffect(() => {
        localStorage.setItem(groupLS, group)
    }, [group])
    return [group, setGroup];
};

export default GroupLocalStorage;