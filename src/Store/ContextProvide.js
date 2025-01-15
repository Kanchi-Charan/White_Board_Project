import Board from "../components/Board/Board";
import Shapes from "../components/ToolBar/Shapes";
import boardContext from "./BoardContext";
import { useReducer, useState } from "react";
import Board_Reducer from "../components/Board/Board_Reducer";
import StrokeColor from "../components/StrokeColor/StrokeColor";


function ContextProvider(){
    const [shape,dispatchShape] = useReducer(reducer,'pencil');
    const [shapes,dispatchShapes] = useReducer(Board_Reducer,{Shapes:[],len:0});
    const [strokeColor,setStrokeColor] = useState('black');
    const [backgroundColor,setBackGroundColor] = useState('white');
    return (
        <boardContext.Provider value = {{shape : shape ,dispatchShape : dispatchShape,
                                        shapes: shapes.Shapes,len : shapes.len,dispatchShapes:dispatchShapes,
                                        strokeColor: strokeColor,setStrokeColor: setStrokeColor,
                                        backgroundColor: backgroundColor,setBackGroundColor:setBackGroundColor}}>
            <Board/>
            <Shapes/>
            <StrokeColor/>
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
            return 'pencil';
        }
    }
    
}

export default ContextProvider;