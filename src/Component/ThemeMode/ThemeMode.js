import React, {useState} from 'react';
import './ThemeMode.css';



export const ThemeMode = () => {
    
    const [darkMode, setDarkMode] = useState(true);

    const onChangeHandler = (event) => {
        const {checked} = event.target;
        setDarkMode(checked);
    }
      
        let modeClass = darkMode ? "dark-mode" : "light-mode";
        let checked = darkMode ? "checked" : "unchecked";
      
    return (
        <div className="ThemeMode_blk">
          <div className={`box p-3 rounded content ${modeClass}`}>
            <h1>{'title'}</h1>
            <p>I was built with a Class component extending React.Component.</p>
            <label className="checkbox">
                <input 
                type="checkbox" 
                defaultChecked={checked} 
                onChange={onChangeHandler} />
                {/* onChange={event => setDarkMode(event.target.checked)} other way to use this and comment 'onChangeHandler' function  */}
                {' '}Dark Mode
            </label>
            </div>
        </div>
    );
}

