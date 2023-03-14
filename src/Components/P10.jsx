import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P10 = ({ pCalculator, setP10, p10, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike010.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.OffRoadEBike010.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike010.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike010.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP10(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p10, data.OffRoadEBike010).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike010.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P10;