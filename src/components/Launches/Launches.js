import {useEffect, useState} from "react";
import Launch from "../Launch/Launch";

export default function Launches(){

    let [launches,setLaunches]=useState([]);

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches').then(
            value => value.json().then(
                value => setLaunches(value.filter(value=>value.launch_year !== 2020))))
    },[])

    return(
      <div>
          {
              launches.map((launch,index)=><Launch key={index} props={launch}/>)
          }
      </div>
);
}