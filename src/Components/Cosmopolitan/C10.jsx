import React from 'react';
import data from '../../Data/BikeData'

const C10 = ({ cCalculator, setC10, tBclasses, c10 }) => {
    return (
        <tbody>
            <tr className='text-center'>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike010.MODELE}</td>
                <td className={`${tBclasses}`}  >{data.CosmopolitanEBike010.COULEUR1}</td>
                <td className={`${tBclasses}`} >{data.CosmopolitanEBike010.EAN1}</td>
                <td className={`${tBclasses}`} rowSpan='4'>{data.CosmopolitanEBike010.PVP}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.PDQ1}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike010.CAU1}</td>
                <td className={`${tBclasses} font-bold bg-orange-400`} rowSpan='4'>
                    <input type="number" id='inputID' placeholder='0' onChange={(e) => setC10(e.target.value)} className='bg-orange-400 h-16 w-full outline-none text-center' />
                </td>
                <td rowSpan='4' className={`${tBclasses} font-bold`}>€{cCalculator(c10, data.CosmopolitanEBike010).toFixed(2)}</td>

            </tr>

            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.COULEUR2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.EAN2}</td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.PDQ2}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike010.CAU2}</td>
            </tr>
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.COULEUR3}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.PDQ3}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike010.CAU3}</td>
            </tr>
       
            <tr className='text-center '>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.COULEUR4}</td>
                <td className={`${tBclasses}`}></td>
                <td className={`${tBclasses}`}>{data.CosmopolitanEBike010.PDQ4}</td>
                <td className={`${tBclasses}`}>€{data.CosmopolitanEBike010.CAU4}</td>
            </tr>

        </tbody>
    );
};

export default C10;