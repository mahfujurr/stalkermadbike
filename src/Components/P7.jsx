import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'
const P7 = ({ pCalculator, setP7, p7, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike07.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.OffRoadEBike07.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike07.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike07.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP7(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p7, data.OffRoadEBike07).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike07.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P7;