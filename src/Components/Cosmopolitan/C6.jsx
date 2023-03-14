import React from 'react';
import data from '../../Data/BikeData'

const C6 = ({ cCalculator, setC6, tBclasses, c6 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike06.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike06.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike06.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike06.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike06.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike06.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC6(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c6, data.CosmopolitanEBike06).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike06.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike06.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike06.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike06.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike06.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike06.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C6;