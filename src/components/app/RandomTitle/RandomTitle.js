import { useState, useEffect, React } from 'react';

const possibleTitleSuffixes = ['MERN', "123123123", "testy testerson"]
const timerInterval = 1000;

function RandomTitle () {
    const [curSuffix, setCurSuffix] = useState(0);
    
    // This useEffect syntax only triggers once
    useEffect(() => {
        setInterval(SetRandomSuffix(), timerInterval);
    }, [])

    function SetRandomSuffix() {
        setCurSuffix(Math.floor(Math.random() * possibleTitleSuffixes.length));
    }
    
    return (
        <title>Tyler Smith - {curSuffix}</title>
    );
}


export default RandomTitle;