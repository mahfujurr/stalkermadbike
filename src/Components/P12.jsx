import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P12 = ({ pCalculator, setP12, p12, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike012.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.OffRoadEBike012.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike012.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike012.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP12(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p12, data.OffRoadEBike012).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike012.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P12;