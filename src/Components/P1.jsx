import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'

const P1 = ({ pCalculator, setP1, tBclasses, p1 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike01.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2' >{data.OffRoadEBike01.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike01.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike01.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP1(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p1, data.OffRoadEBike01).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike01.COULEUR2}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike01.EAN2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike01.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P1;