import React from 'react';
import data from '../../Data/BikeData'

const C19 = ({ cCalculator, setC19, tBclasses, c19 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike019.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike019.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike019.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike019.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike019.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike019.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC19(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c19, data.CosmopolitanEBike019).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>

                <td className={`${tBclasses}`}>{data.CosmopolitanEBike019.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike019.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike019.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike019.COULEUR2}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike019.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike019.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike019.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike019.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C19;