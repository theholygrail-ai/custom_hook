import React from "react"
import UseFetch from "./UseFetch"
import "./FetchData.css"
const FetchYogaData = () =>{
    const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return(
        <>
            <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Yoga Data</h1>
                {data && data.map((i)=>(
                    <>
                        <li className= 'list_data'>
                            <h3>{i.name}</h3>
                            <p><strong>Benefits:{i.benefits}</strong></p>
                            <p><strong>Time Duration:{i.time_duration}</strong></p>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}
export default FetchYogaData