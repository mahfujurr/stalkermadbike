import React from 'react';
import data from '../Data/BikeData'
import './ppp.css'

const P2 = ({ pCalculator, setP2, p2, tBclasses }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike02.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.OffRoadEBike02.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike02.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.OffRoadEBike02.PVP}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.PDQ1}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setP2(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{pCalculator(p2, data.OffRoadEBike02).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.PDQ2}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.CAU2}</td>
            </tr>
            <tr className='text-center '>
                {/* <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike02.COULEUR2}</td> */}
                {/* <td className={`${tBclasses}`} rowSpan='2'>{data.OffRoadEBike02.EAN2}</td> */}
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.PDQ3}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.PDQ4}</td>
                <td className={`${tBclasses}`}>{data.OffRoadEBike02.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default P2;