import React from 'react';
import data from '../../Data/BikeData'

const C20 = ({ cCalculator, setC20, tBclasses, c20 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike020.MODELE}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike020.COULEUR1}</td>
                <td className={`${tBclasses}`} rowSpan='4' >{data.CosmopolitanEBike020.EAN1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike020.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike020.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike020.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC20(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c20, data.CosmopolitanEBike020).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>

                <td className={`${tBclasses}`} >{data.CosmopolitanEBike020.PVP2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike020.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike020.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike020.PVP2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike020.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike020.CAU3}</td>
            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike020.PVP2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike020.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike020.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C20;