import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ApptCard from "../../ApptCard";


const View = () =>{

   const [getView, setView] = useState([])

   useEffect( async () => {
       let response;
       try {
           const response = await axios.get('http://localhost:5000/appointments')
           setView(response.data)

       } catch (e) {
           alert(e.toString())

       }
},[])

   return(
       <div class="container">
          <div class="row">
             <div class="col-12">
                <h2>total number of appts {getView.length}</h2>
                 <h1>{getView.name}</h1>
                 <h3>{getView.email}</h3>   
             </div>


              </div>
          </div>
   )

    }


export default View