
import React from 'react';
import './chart.css'
import {
    Chart as ChartJS , 
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
       } from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function ChartApp (){
    const data = {
        
        labels: ['July','August','September','October','November'],
        datasets:[
            {
                label:'Service Requests Chart',
                data:[20,30,20,45,35],
                bacgroundColor:'red',
                borderWidth:2
            }
        ]
    }
  const options = {

  }
    return(
       <div className='Chart'>
        <div>
            <Bar
            data = {data}
            options = {options}
            ></Bar>
        </div>
       </div>
    )
}
export default ChartApp;