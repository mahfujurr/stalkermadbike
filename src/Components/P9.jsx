import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P9 = ({ pCalculator, setP9, p9, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike09.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.OffRoadEBike09.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike09.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike09.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP9(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p9, data.OffRoadEBike09).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike09.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P9;