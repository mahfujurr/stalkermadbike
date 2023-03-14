import React from 'react';
import data from '../../Data/BikeData'

const C17 = ({ cCalculator, setC17, tBclasses, c17 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike017.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike017.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike017.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike017.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike017.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike017.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC17(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c17, data.CosmopolitanEBike017).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>

                <td className={`${tBclasses}`}>{data.CosmopolitanEBike017.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike017.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike017.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} rowSpan='2'>{data.CosmopolitanEBike017.COULEUR2}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike017.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike017.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike017.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike017.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C17;