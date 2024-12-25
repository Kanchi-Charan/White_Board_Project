import { useState } from "react";
import Board from './Board.js';
function Shapes()
{
    const [shape,setShape] = useState('rect');
    console.log(shape);
    return (
        <div >
        <nav className=" fixed top-4  bg-white">
            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                        shape === 'rect' ? 'bg-blue-700' : ''
                    }`} onClick={()=>setShape('rect')}>Rectangle</button>
            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                        shape === 'circ' ? 'bg-blue-700' : ''
                    }`} onClick={()=>setShape('circ')}>Circle</button>
            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                        shape === 'line' ? 'bg-blue-700' : ''
                    }`} onClick={()=>setShape('line')}>Line</button>
        </nav>
        <Board shape = {shape}/>
        </div>
    );
}

export default Shapes;