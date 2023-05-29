import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Chart as ChartJS, ArcElement,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js';
 
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import Date from './Date';



const Acceuil = ({users ,benevole,evenement, ping, setPing}) => {
  const  [chartData, setChartData] =useState({})
  const  [cData, setData] =useState({})

 
  console.log('first',evenement.length)
  
 
  useEffect(() => {
    
  }, [!ping])
  
  return (
   <div className='date_nb'>
    <div className="datz">
    <Date/>
  </div>
   <div className="charts">
    

   

   <div className="carduser">
    <div className="nb">
      <h1>عدد الأنشطة</h1>
    </div>
   <Icon icon="heroicons:user-group" width="100" />

    <h1>
    {evenement?.length}</h1>
   </div>

   <div className="carduser">
   <div className="nb">
      <h1>عدد المتطوعين</h1>
    </div>
   <Icon icon="clarity:event-solid" width="100" />

   <h1>
    {benevole?.length}
    </h1>
   </div>
   </div>
  

   
   </div>
  )
}

export default Acceuil