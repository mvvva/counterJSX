import React from 'react'
import { useContext } from 'react'
import { ColorContext } from './ColorContext'

export default function Container() {
    const [state, dispatch] = useContext(ColorContext)
    const {r,g,b} = state
  return (
    <div>
      <h2>Container</h2>
      <div style={{display: "flex", gap:"5px"}}>
        <div style={{width: "300px", height: "300px", border: "solid", background: `rgb(${r}, ${g}, ${b})`}}>

        </div>
        <div className="inputs" style={{display:"flex", flexDirection:"column"}}>
            <div className='items-center justify-center gap-2 ' style={{display:"flex"}}>
                <label htmlFor='R'>R: </label>
                <input 
                id='R' 
                className='border-2 border-slate-400' 
                type="number" 
                min={0} 
                max={255} 
                value={state.r}
                onChange={(e) => dispatch({type: "r", payload: e.target.value})}
                />
            </div>
            <div className='items-center justify-center gap-2 ' style={{display:"flex"}}>
                <label htmlFor='G'>G: </label>
                <input 
                id='G' 
                className='border-2 border-slate-400' 
                type="number" 
                min={0} 
                max={255} 
                value={state.g}
                onChange={(e) => dispatch({type: "g", payload: e.target.value})}
                />
            </div>
            <div className='items-center justify-center gap-2 ' style={{display:"flex"}}>
                <label htmlFor='B'>B: </label>
                <input id='B' className=' border-2 border-slate-400' type="number" 
                min={0} max={255} 
                value={state.b}
                onChange={(e) => dispatch({type: "b", payload: e.target.value})}
                />
            </div>
        </div>


      </div>
    </div>
  )
}
