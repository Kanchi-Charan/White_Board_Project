import { useContext } from "react";
import boardContext from "../../Store/BoardContext";

function ShapeItem({Icon,data})
{
    const {shape,dispatchShape,dispatchShapes} = useContext(boardContext);
    function handleClick(data)
    {
        
        if(data==='undo'||data==='redo')
        {
            dispatchShapes({type:data});
        }
        else{
            dispatchShape({type:'shape/changed',payload:data});
        }
        
    }
    return (
        <button className={` hover:bg-blue-100 text-black font-bold py-1 px-2 mx-1 rounded ${
            shape === data ? 'bg-blue-100' : 'bg-white'}`} 
            onClick={()=>{handleClick(data)}}><Icon /></button>
    );
}

export default ShapeItem;