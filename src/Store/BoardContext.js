import { createContext } from "react";

const boardContext = createContext({
    activeShape : 'line',
    Shapes : []
})

export default boardContext;