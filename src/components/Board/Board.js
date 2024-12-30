import {useCallback, useContext, useEffect,useRef, useState} from 'react';
import rough from 'roughjs';
import boardContext from '../../Store/BoardContext';

function Board() {
  console.log('board');
  const canvasRef = useRef();
  const {shape,shapes,dispatchShapes,len} = useContext(boardContext);
  const [isClick,setIsClick] = useState(false);
  const [x,setX] = useState(null);
  const [y,setY] = useState(null);
  console.log(shapes);

  const ShapesDrawing = useCallback(()=>
  {
    console.log(len);
    console.log(shapes.length);
    const canvas = canvasRef.current;
    const roughCanvas = rough.canvas(canvas);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i = 0;i<len;i++)
    {
      roughCanvas.draw(shapes[i]);
    }
  },[shapes,len])

  useEffect(() => {
    console.log('useEffect');
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ShapesDrawing();
  }, [shapes,ShapesDrawing])

  function handleTap(event)
  {
    if(shape==='undo'||shape==='redo')
    {
      return;
    }
      //console.log("rightclick");
      setX(event.clientX);
      setY(event.clientY);
      setIsClick(true);
  }


  function handleMouseMove(event){
    if(isClick)
    {
      //console.log('move');
      const canvas = canvasRef.current;
      const roughCanvas = rough.canvas(canvas);
      const generator = roughCanvas.generator;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      let shape1;
      if(shape==='rect')
      {
        shape1 = generator.rectangle(x,y,event.clientX-x,event.clientY-y,{stroke:'black'});
      }
      else if(shape==='circ')
      {
        let dia = 2*Math.sqrt(Math.pow(event.clientX - x, 2) + Math.pow(event.clientY - y, 2));
        shape1 = generator.circle(x,y,dia,{stroke:'black'});
      }
      else if(shape==='line')
      {
        shape1 = generator.line(x,y,event.clientX,event.clientY,{stroke:'black'});
      }
      
      ShapesDrawing();
      roughCanvas.draw(shape1);
    }
  }

  function handleMouseUp(event){
    if(isClick){
    //console.log('up');
    const canvas = canvasRef.current;
    const roughCanvas = rough.canvas(canvas);
    const generator = roughCanvas.generator;
    setIsClick(false);
    //const ctx = canvas.getContext('2d');
    //ctx.clearRect(0,0,canvas.width,canvas.height);
    let shape1;
    if(shape==='rect')
      {
        shape1 = generator.rectangle(x,y,event.clientX-x,event.clientY-y,{stroke:'black'});
      }
    else if(shape==='circ')
      {
        let dia = 2*Math.sqrt(Math.pow(event.clientX - x, 2) + Math.pow(event.clientY - y, 2));
        shape1 = generator.circle(x,y,dia,{stroke:'black'});
      }
      else if(shape==='line')
        {
          shape1 = generator.line(x,y,event.clientX,event.clientY,{stroke:'black'});
        }
    //let rect1 = generator.rectangle(x,y,event.clientX-x,event.clientY-y,{stroke:'white'});
    roughCanvas.draw(shape1);
    dispatchShapes({type:'shape/added',payload:shape1});
      }
  }

  
  

  return (
      <canvas ref = {canvasRef} width = '100vw' height = '100vw' 
              onMouseDown={handleTap}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              className='cursor-pen -z-1'
              ></canvas>
  );
}

export default Board;
