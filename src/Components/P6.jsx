import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P6 = ({ pCalculator, setP6, p6, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike06.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2' >{data.OffRoadEBike06.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike06.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike06.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400 `} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP6(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p6, data.OffRoadEBike06).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike06.COULEUR2}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike06.EAN2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike06.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P6;