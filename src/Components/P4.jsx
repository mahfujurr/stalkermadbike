import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P4 = ({ pCalculator, setP4, p4, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike04.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2' >{data.OffRoadEBike04.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike04.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike04.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP4(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p4, data.OffRoadEBike04).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike04.COULEUR2}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike04.EAN2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike04.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P4;