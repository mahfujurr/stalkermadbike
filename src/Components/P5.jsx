import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P5 = ({ pCalculator, setP5, p5, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='6'>{data.OffRoadEBike05.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.OffRoadEBike05.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='6'>{data.OffRoadEBike05.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='6'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP5(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='6' className={`${tBclasses} font-bold`}>€{pCalculator(p5, data.OffRoadEBike05).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.COULEUR2}</td>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.EAN2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.COULEUR3}</td>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.EAN3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.COULEUR4}</td>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.EAN4}</td>
                <td className={`${tBclasses}`} rowSpan='3'>{data.OffRoadEBike05.PDQ4}</td>
                <td className={`${tBclasses}`} rowSpan='3'>{data.OffRoadEBike05.CAU4}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.COULEUR5}</td>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.EAN5}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike05.COULEUR6}</td>
                <td className={`${tBclasses}`} >{data.OffRoadEBike05.EAN6}</td>
            </tr>


        </tbody>
    );
};

export default P5;