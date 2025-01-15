import React, {useState} from 'react';
import { ChromePicker } from 'react-color';
import { useContext } from "react";
import boardContext from "../../Store/BoardContext";


function StrokeColor(){
    const {strokeColor,setStrokeColor} = useContext(boardContext);
    const [hide,setHide] = useState(true);

    const handleColorChange = (newColor) => {
        setStrokeColor(newColor.hex);
      };

    function handleHide()
    {
        setHide(!hide);
    }

    return(
        <div style={{ padding: '20px' }}>
      <button className={'fixed rounded top-4 z-1  bg-white shadow shadow-black py-1 px-2'} onClick = {handleHide}>Stroke Color</button>
      <ChromePicker className = {!hide&&" fixed rounded top-16 z-1  bg-white shadow shadow-black py-1 px-2"} color={strokeColor} onChange={handleColorChange} />
    </div>
    );
}

export default StrokeColor;