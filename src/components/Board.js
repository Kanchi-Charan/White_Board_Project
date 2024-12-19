import {useCallback, useEffect,useRef, useState} from 'react';
import rough from 'roughjs';

function Board() {
  console.log('board');
  const canvasRef = useRef();
  const [shapes,setShapes] = useState([]);
  const [isClick,setIsClick] = useState(false);
  const [x,setX] = useState(null);
  const [y,setY] = useState(null);
  

  const ShapesDrawing = useCallback(()=>
  {
    const canvas = canvasRef.current;
    const roughCanvas = rough.canvas(canvas);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.Width,canvas.Height);
    for(let i = 0;i<shapes.length;i++)
      {
        roughCanvas.draw(shapes[i]);
      }
  },[shapes])

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ShapesDrawing();
  }, [shapes,ShapesDrawing])

  function handleTap(event)
  {
      console.log("rightclick");
      setX(event.clientX);
      setY(event.clientY);
      setIsClick(true);
  }


  function handleMouseMove(event){
    if(isClick)
    {
      console.log('move');
      const canvas = canvasRef.current;
      const roughCanvas = rough.canvas(canvas);
      const generator = roughCanvas.generator;
      let rect1 = generator.rectangle(x,y,event.clientX-x,event.clientY-y);
      ShapesDrawing();
      roughCanvas.draw(rect1);
    }
  }

  function handleMouseUp(event){
    console.log('up');
    const canvas = canvasRef.current;
    const roughCanvas = rough.canvas(canvas);
    const generator = roughCanvas.generator;
    setIsClick(false);
    let rect1 = generator.rectangle(x,y,event.clientX-x,event.clientY-y);
    roughCanvas.draw(rect1);
    setShapes([...shapes,rect1]);
  }
  

  return (
      <canvas ref = {canvasRef} width = '100vw' height = '100vw' 
              onMouseDown={handleTap}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              ></canvas>
  );
}

export default Board;
