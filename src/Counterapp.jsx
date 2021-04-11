import React, { useState } from 'react';
import './counterapp.css';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Counterapp=()=>{
    const [num,setnum]=useState(0);
    const [textcolor,settextcolor]=useState('#FFFFFF');
    const ince=()=>{
        setnum(num+1);
        if(num<5){
            settextcolor('#FF0000');
        }
        if(num>=5 && num<=100){
            settextcolor('#FFFFFF');
        }
        if(num>100){
            settextcolor('#00FF00');
        }

    }
    const dece=()=>{
        setnum(num-1);
        if(num<5){
            settextcolor('#FF0000');
        }
        if(num>=5 && num<=100){
            settextcolor('#FFFFFF');
        }
        if(num>100){
            settextcolor('#00FF00');
        }
    }
    return(
        <div className='main'>
            <div className='centre'>
                <button className='btn' onClick={dece}><RemoveIcon fontSize='large'/></button>
                <h1 style={{color:textcolor}}>{num}</h1>
                <button className='btn' onClick={ince}><AddIcon fontSize='large'/></button>
            </div>
        </div>
    )
}
export default Counterapp;