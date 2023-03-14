import React from 'react';
import data from '../../Data/BikeData'

const C13 = ({ cCalculator, setC13, tBclasses, c13 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike013.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike013.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike013.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike013.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike013.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC13(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c13, data.CosmopolitanEBike013).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike013.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike013.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike013.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike013.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C13;