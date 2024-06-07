
import { data } from 'autoprefixer'
import './App.css'
import { useEffect, useState } from 'react'

function App() {


  const [data , setdata] = useState([])

 useEffect(()=>{


  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setdata(json))


 } , [])
 console.log(data)





  return (
    <>

    


  <div className="allcards flex  flex-wrap gap-10">
     {

      data.map((item)=>(
        <div className="singel-users w-[280px] h-[340px] bg-[#03AED2] rounded-[20px] p-5 flex items-center flex-col gap-5">
        <div className="img-col w-[200px] h-[200px] rounded-full overflow-hidden">
          <img src="public/img/445920196_470468828830063_2820940972362189834_n.jpg" alt="profile img" />
        </div>
        <div className="users-text">
            <p className='text-xl font-semibold'>id : {item.id}</p>
            <h1 className='text-1.5xl font-bold'>name: {item.name}</h1>
            <p className='text-1xl font-normal to-black'>email: {item.email}</p>
          </div>
        </div>
      )
       
        
      
      )
     }
     



    </div>
    </>
  )
}
export default App
