import React,{useState ,useEffect} from 'react';
import dayjs from 'dayjs'
function Topbar() {
  const [currentTime, setcurrentTime] = useState();

  useEffect(() => {
    setInterval(()=> {
      setcurrentTime(dayjs( ).format("dddd, MMM D YYY, hh:mm:ss A"))
    })

  })
  
  return (
    <>
      <header className='bg-primary py-1'>
        <div className="container">
          <div className="row">
            <div className="col">
          <p className='mb-0 text-center text-white' >{currentTime}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Topbar