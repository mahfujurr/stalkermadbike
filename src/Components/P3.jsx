import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P3 = ({ pCalculator, setP3, p3, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike03.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2' >{data.OffRoadEBike03.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike03.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike03.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP3(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p3, data.OffRoadEBike03).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike03.COULEUR2}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike03.EAN2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike03.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P3;