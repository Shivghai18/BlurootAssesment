import React, {useState} from 'react';
import axios from 'axios';
import ShowResultsQ1 from './ShowResultsQ1';

function Q1(){

    const [input,setInput] = useState({
        location:'',
    });

    const [dataValue,ChangeDataValue] = useState([]);

    function handleChange(event)
    {
        const {name,value} = event.target;
        
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    } 

    const handleClick= async (event) =>
    {        
        event.preventDefault();
        const cityName=input.location;
        
        const axoValues= await axios.get('https://api.github.com/search/users?q=location:'+cityName+'&per_page=10');
        
            console.log(axoValues.data.items);
            
            ChangeDataValue(axoValues.data.items)
           
           console.log(dataValue);
         
          
    }

    return(
        <div className='container'>       
         <form onSubmit={handleClick}>
            <div className='form-group container'>
                <input onChange={handleChange} name='location' value={input.location} autoComplete='off' className='form-control' placeholder='enter the location'></input>
                </div>
                    
                <div className='form-group container'>
                    <input type='submit' onClick={handleClick} name='dataValue' text="Submit" className='btn btn-lg btn-info' /> 
                </div>
           </form>
          
           {dataValue.length ? <div id='locationId'>{input.location}</div> : null}
          <div className='mainContent' id='maincontentunique'>
              {
           dataValue.length ? dataValue.map(nodeValue=>{return <ShowResultsQ1 userlogin={nodeValue.login} userhtml={nodeValue.html_url}/>}) 
           : null
            
            }</div>
            {/* {dataValue.length? <button onClick={insertDb} className='btn btn-lg btn-info'> Store in database</button> : null} */}
        </div>

    )
}


export default Q1;