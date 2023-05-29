import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Chart as ChartJS, ArcElement,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js';
 
import { Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const Acceuil = () => {
  const  [chartData, setChartData] =useState({})
  useEffect(() => {
  
    const fetchChartData = async () => {
      const data= await axios.get("http://localhost:5000/user/get");
      
       
      
       console.log("data",data)
      //  console.log(chartData)
  setChartData({
    labels :data?.benevole?.map((item) => item?._id),
    datasets :[{
label:"Benevole",
data:data?.benevole?.map((item) => item?.nom),
fill:true,
borderColor:"red",
backgroundColor:"red",

    }]
  })

    }
    fetchChartData()
  },[])
  
  return (
   <>
   <div className="charts">
    <h1>ccc</h1>
    {chartData && chartData.datasets && (
     
    <Line
    data={chartData}
    options={{
      responsive: true,
      plugins: {
        legend: {position: "bottom"},
        title:{display:true,text:"Benevole"},
      },
    }}
    />
    )}   

  
   </div>
   </>
  )
}

export default Acceuil