import {useState} from 'react';
import  '../App.css';

export default function SearchBar (){



const [data, setData] = useState("");
const [response, setResponse] = useState([""]);
const [result, setResult] = useState([""]);




const fetchu = (ef) =>

    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(f => f.filter(e => e.name.toLowerCase().match(ef.toLowerCase()))) 
        .then(z => setResponse(z))
        // .then(z => console.log(z));


    };



    const handleChange = (e) =>

    {

       setData(e);
       fetchu(e);


    };

    // console.log({data});
    //    console.log({response});


    
       document.addEventListener('keydown', (e) =>

        {
            if(e.key ==="Enter"){setResult(response);console.log(response);document.getElementById("opi").focus()}

        });



return (

<form>


<label for="opinion"> Search bar: </label><br /> 
  <textarea id="opi" rows="6" cols="80" value={data} onChange={e=>handleChange(e.target.value)} ></textarea>
  {/* <textarea id="opinion" rows="6" cols="80"  ></textarea> */}
  <br /> <br /> 
  <label for="opinion"> Fetched Datas: </label><br /> 
  <textarea id="opinion" rows="6" cols="80" value={response.map(e=>e.name)} ></textarea>
  <br /> <br /> 
  <label for="opinion"> Your request: </label><br /> 
  <textarea id="opinion" rows="12" cols="80" value={JSON.stringify(result)} ></textarea>
  <br /> <br /> 




<button type="reset"> 
RAZ 
</button>
</form>



);



}

