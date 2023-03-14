import React from 'react';
import data from '../../Data/BikeData'

const C4 = ({ cCalculator, setC4, tBclasses, c4 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike04.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike04.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike04.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike04.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike04.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike04.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC4(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c4, data.CosmopolitanEBike04).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike04.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike04.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike04.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike04.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike04.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike04.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C4;