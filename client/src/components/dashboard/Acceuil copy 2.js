import axios from 'axios'
import React,{useState, useEffect} from 'react';
import Chart from 'react-apexcharts';

// ChartJS.register(
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// )

const Acceuil = () => {
//   const  [chartData, setChartData] =useState({})
//   useEffect(() => {
  
//     const fetchChartData = async () => {
//       const data= await axios.get("http://localhost:5000/user/get");
      
       
      
//        console.log("data",data)
      
//   setChartData({
//     labels :data?.benevole?.map((item) => item?._id),
//     datasets :[{
// label:"Benevole",
// data:data?.benevole?.map((item) => item?.nom),
// fill:true,
// borderColor:"red",
// backgroundColor:"red",

//     }]
//   })

//     }
//     fetchChartData()
//   },[])
const [sData, setSdata]= useState([]);
useEffect( ()=>{
    const getvaluedata= async()=>{
        const newvalue=[];
        const reqData= await fetch("http://localhost:5000/user/get");
        const resData= await reqData.json();
        console.log(resData);
        for(let i=0; i < resData.user?.length; i++)
        {
            newvalue.push({name:resData[i].name, data:resData[i]?.lastName });   

        }
        setSdata(newvalue);

    }
    getvaluedata();
},[]);   

  return (
   <>
   {/* <div className="charts">
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

  
   </div> */}
   <div className='container-fluid mt-3 mb-3'>
          <h2>Line Chart- Using Apexcharts in React </h2>          
          <Chart type='line'
          width={900}
          height={500}
          series={sData}
          options={{
            title:{ text:"Product sell in 2021"},
            xaxis:{
                title:{text:"Product Sell in Months"},
                categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{
                title:{text:"Product in K"}                 
            }          

        }}
          >
          </Chart>

        </div>
   </>
  )
}

export default Acceuil