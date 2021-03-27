import React,{useState} from 'react';
import Q1 from './Q1';

import axios from 'axios';

function Q2(){
    const [records,setRecords] = useState([]);
    const insertDb = (event) =>
    {

        const mainDiv = document.querySelectorAll('#maincontentunique');
        setRecords(mainDiv);
        console.log(mainDiv[0].childNodes.forEach(function(item){
            const gitUser={
                login:item.childNodes[1].textContent,
                html_url:item.childNodes[3].textContent,
                location:document.getElementById('locationId').textContent
            }
          
              try{
                axios.post('http://localhost:3001/gituser',gitUser);
              }
              catch(error)
              {console.log(error);}

          


        }));
    }

    return(
        <div>
            <div className='content'><Q1/></div>
            <form>
            <input type='submit' onClick={insertDb} className='btn btn-lg btn-info' text='Store in database'/> 
            </form>
        </div>
    )
}

export default Q2;