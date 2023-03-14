import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P8 = ({ pCalculator, setP8, p8, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike08.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.OffRoadEBike08.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike08.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike08.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP8(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p8, data.OffRoadEBike08).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike08.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P8;