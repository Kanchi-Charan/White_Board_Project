function Board_Reducer(state,action)
{

    switch(action.type){
        case 'shape/added':
            {
                if(action.shape==='pencil'||action.shape==='eraser')
                {
                    if(action.drawing)
                    {
                        console.log('charan');
                        return {
                            ...state,
                            Shapes: state.Shapes.map((shape, index) => 
                                index === state.Shapes.length - 1 
                                    ? [...shape, action.payload] 
                                    : shape
                            ),
                        };
                    }
                    else{
                        return{
                            ...state,
                            Shapes:[...state.Shapes.slice(0,state.len),[]],
                            len: state.len+1,
                        }
                    }
                }
                return {
                    ...state,
                    Shapes: [...state.Shapes.slice(0, state.len), action.payload], // Keep elements up to `len` index and add `action.payload`
                    len: state.len+1, // Update `len` to match the new length of `Shapes`
                  };
                  
            }
        case 'undo':
            {
                if(state.len===0)
                {
                    return state;
                }
                return{
                    ...state,
                    len:state.len-1,
                };
            }
        case 'redo':
            {
                if(state.len===state.Shapes.length)
                {
                    //console.log('charan');
                    return state;
                }
                return{
                    ...state,
                    len:state.len+1,
                };
            }
        default : {
            return state;
        }
    }
}

export default Board_Reducer;