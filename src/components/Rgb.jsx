import React, { useReducer } from 'react'
import { ColorContext } from './ColorContext'
import Container from './Container'

const initialState = {
    r: 0,
    g: 0,
    b: 0,
}

function reducer(state, action) {
    switch(action.type){
        case "r":
            return{ ...state, r: action.payload};
        case "g":
            return{ ...state, g: action.payload};
        case "b":
            return{ ...state, b: action.payload};
        default:
            return state
    }
    
}

export default function Rgb() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <ColorContext.Provider value={[state, dispatch]}>
      < Container/>
      </ColorContext.Provider>
    </div>
  )
}
