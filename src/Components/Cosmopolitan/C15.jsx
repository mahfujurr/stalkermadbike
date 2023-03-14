import React from 'react';
import data from '../../Data/BikeData'

const C15 = ({ cCalculator, setC15, tBclasses, c15 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike015.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike015.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike015.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike015.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike015.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC15(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c15, data.CosmopolitanEBike015).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike015.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike015.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike015.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike015.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C15;