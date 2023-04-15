import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import './Statewise.css'


function Statewise() {
//   
const [data,setData]=useState([]);
const [main,setMain]=useState([])

const getCovidData=async ()=>{
 const res= await fetch(`https://api.rootnet.in/covid19-in/stats/latest`);
 const actualData=await res.json();
 const reqData=actualData.data.regional
 const mainData=actualData.data.summary
//  console.log(mainData)
//  console.log(reqData)s
 setData(reqData)
 setMain([mainData])
 //  for(var i=0;i<36;i++){
//  console.log(actualData.data.regional[i].loc)
//  }
}
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
    <div>
    <Link to='/'><button className="back">Back</button></Link>
      <h1 className="state-title">COVID-19 DATA OF INDIA</h1>
      <div className="data-cont">
      <table>
      <thead className="title">
      <tr>
        <th className="state">State</th>
        
        <th>Confirmed</th>
        <th>Recovered</th>
        <th>Deaths</th>
        </tr>
        </thead>

        <tbody>
          {
            data.map((currEle,index)=>{
              return(
                <tr>
        <td className="state">{currEle.loc}</td>
       
        <td className="confirmed">{currEle.confirmedCasesIndian}</td>
        <td className="recovered">{currEle.discharged}</td>
        <td className="deaths">{currEle.deaths}</td>
        </tr>
              )
            })
          }
        </tbody>
        
      </table>
      </div>
    </div>
   
    </>
  );
}

export default Statewise;
