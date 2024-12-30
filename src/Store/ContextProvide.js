import Board from "../components/Board/Board";
import Shapes from "../components/ToolBar/Shapes";
import boardContext from "./BoardContext";
import { useReducer } from "react";
import Board_Reducer from "../components/Board/Board_Reducer";


function ContextProvider(){
    const [shape,dispatchShape] = useReducer(reducer,'rect');
    const [shapes,dispatchShapes] = useReducer(Board_Reducer,{Shapes:[],len:0});
    return (
        <boardContext.Provider value = {{shape : shape ,dispatchShape : dispatchShape,shapes: shapes.Shapes,len : shapes.len,dispatchShapes:dispatchShapes}}>
            <Board/>
            <Shapes/>
        </boardContext.Provider>
    );
}

function reducer(shape,action)
{
    switch(action.type){
        case 'shape/changed':{
            return action.payload;
        }
        default:{
            return 'rect';
        }
    }
    
}

export default ContextProvider;