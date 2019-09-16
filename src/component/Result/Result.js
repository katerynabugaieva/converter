import React from 'react'
import Typography from '@material-ui/core/Typography';
import './Result.css'

const Result = (props) =>{
    return (
        <div className='result'>
           <Typography variant='h3'>{props.value}</Typography>  
        </div>
    )
}

export default Result