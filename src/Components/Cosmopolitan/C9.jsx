import React from 'react';
import data from '../../Data/BikeData'

const C9 = ({ cCalculator, setC9, tBclasses, c9 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike09.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike09.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike09.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike09.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike09.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike09.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC9(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c9, data.CosmopolitanEBike09).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike09.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike09.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike09.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike09.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike09.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike09.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C9;