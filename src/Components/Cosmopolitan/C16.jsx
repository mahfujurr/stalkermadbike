import React from 'react';
import data from '../../Data/BikeData'

const C16 = ({ cCalculator, setC16, tBclasses, c16 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike016.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike016.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike016.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike016.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike016.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike016.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC16(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c16, data.CosmopolitanEBike016).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>

                <td className={`${tBclasses}`}>{data.CosmopolitanEBike016.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike016.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike016.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike016.COULEUR2}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike016.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike016.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike016.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike016.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C16;