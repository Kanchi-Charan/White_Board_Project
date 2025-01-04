import { IoPencilOutline } from "react-icons/io5";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaUndoAlt } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
import ShapeItem from "./ShapeItem.js";


function Shapes()
{
    //console.log('Shapes');
    return (
        <div className="flex items-center  justify-center">
        <nav className=" fixed rounded top-4 z-1  bg-white shadow shadow-black py-1 px-2">
            <ShapeItem Icon={IoPencilOutline} data='pencil'/>
            <ShapeItem Icon={FaEraser} data='eraser'/>
            <ShapeItem Icon = {LuRectangleHorizontal} data = "rect"/>
            <ShapeItem Icon={FaRegCircle} data = "circ"/>
            <ShapeItem Icon={TfiLayoutLineSolid} data = "line"/>
            <ShapeItem Icon={FaUndoAlt} data = "undo"/>
            <ShapeItem Icon={FaRedo} data = "redo"/>
        </nav> 
        
        </div>
    );
}





export default Shapes;