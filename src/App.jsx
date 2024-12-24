import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("flowers");
  useEffect(()=>{
    },[])
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }
  return (
    <div>
      <center className='bg-slate-300'>
        <br />
       <form onSubmit={submitHandler} className=''>
        <h2 className='text-2xl'>Gallery Snapshot</h2><br></br>
          <input size="30" type="text" onChange={changeHandler} className='rounded-xl' value={search}/><br /><br />
          <input type="submit" name="Search"  className='btn btn-primary'/>
        </form>
        <br />
        <div>
      {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
      </div>
      </center>
     
    
    </div>
  )
}

export default App