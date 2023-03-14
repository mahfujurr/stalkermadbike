import React from 'react';
import data from '../../Data/BikeData'

const C5 = ({ cCalculator, setC5, tBclasses, c5 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike05.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike05.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike05.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike05.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike05.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike05.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC5(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c5, data.CosmopolitanEBike05).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike05.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike05.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike05.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike05.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike05.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike05.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C5;