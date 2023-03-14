import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P11 = ({ pCalculator, setP11, p11, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike011.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.OffRoadEBike011.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike011.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike011.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP11(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p11, data.OffRoadEBike011).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike011.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P11;