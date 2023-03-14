import React from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import logoMadBike from '../assets/LOGO STALKER MAD BIKE - FULL COLOR.png'
import P1 from '../Components/P1'
import P10 from '../Components/P10'
import P11 from '../Components/P11'
import P12 from '../Components/P12'
import P2 from '../Components/P2'
import P3 from '../Components/P3'
import P4 from '../Components/P4'
import P5 from '../Components/P5'
import P6 from '../Components/P6'
import P7 from '../Components/P7'
import P8 from '../Components/P8'
import P9 from '../Components/P9'
import data from '../Data/BikeData'

let pCalculator = (a, b) => {
    const pTotal = parseFloat(a < 10 ? (a * b.CAU1)
        : a >= 10 && a <= 50 ? (a * b.CAU2)
            : a >= 51 && a <= 100 ? (a * b.CAU3)
                : a > 100 ? (a * b.CAU4) : 0
    )
    return pTotal
}

const OffRoadEbike = () => {
    const navigate = useNavigate();
    const [p1, setP1] = useState(0)
    const [p2, setP2] = useState(0)
    const [p3, setP3] = useState(0)
    const [p4, setP4] = useState(0)
    const [p5, setP5] = useState(0)
    const [p6, setP6] = useState(0)
    const [p7, setP7] = useState(0)
    const [p8, setP8] = useState(0)
    const [p9, setP9] = useState(0)
    const [p10, setP10] = useState(0)
    const [p11, setP11] = useState(0)
    const [p12, setP12] = useState(0)

    const handlesent = (e) => {

        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const chargedecompte = form.chargedecompte.value;
        const aInfo1 = form.aInfo1.value;
        const aInfo2 = form.aInfo2.value;
        const aInfo3 = form.aInfo3.value;
        const aInfo4 = form.aInfo4.value;
        const aInfo5 = form.aInfo5.value;
        const aInfo6 = form.aInfo6.value;
        const bInfo1 = form.bInfo1.value;
        const bInfo2 = form.bInfo2.value;
        const bInfo3 = form.bInfo3.value;
        const bInfo4 = form.bInfo4.value;
        const bInfo5 = form.bInfo5.value;
        const bInfo6 = form.bInfo6.value;
        // const supportData = {
        //     guideEmail,
        //     meetLink,
        //     time,
        // };
        const modele01 = data.OffRoadEBike01.MODELE
        const modele02 = data.OffRoadEBike02.MODELE
        const modele03 = data.OffRoadEBike03.MODELE
        const modele04 = data.OffRoadEBike04.MODELE
        const modele05 = data.OffRoadEBike05.MODELE
        const modele06 = data.OffRoadEBike06.MODELE
        const modele07 = data.OffRoadEBike07.MODELE
        const modele08 = data.OffRoadEBike08.MODELE
        const modele09 = data.OffRoadEBike09.MODELE
        const modele010 = data.OffRoadEBike010.MODELE
        const modele011 = data.OffRoadEBike011.MODELE
        const modele012 = data.OffRoadEBike012.MODELE
        


        const p1Price01 = pCalculator(p1, data.OffRoadEBike01).toFixed(2)
        const p1Price02 = pCalculator(p2, data.OffRoadEBike02).toFixed(2)
        const p1Price03 = pCalculator(p3, data.OffRoadEBike03).toFixed(2)
        const p1Price04 = pCalculator(p4, data.OffRoadEBike04).toFixed(2)
        const p1Price05 = pCalculator(p5, data.OffRoadEBike05).toFixed(2)
        const p1Price06 = pCalculator(p6, data.OffRoadEBike06).toFixed(2)
        const p1Price07 = pCalculator(p7, data.OffRoadEBike07).toFixed(2)
        const p1Price08 = pCalculator(p8, data.OffRoadEBike08).toFixed(2)
        const p1Price09 = pCalculator(p9, data.OffRoadEBike09).toFixed(2)
        const p1Price010 = pCalculator(p10, data.OffRoadEBike010).toFixed(2)
        const p1Price011 = pCalculator(p11, data.OffRoadEBike011).toFixed(2)
        const p1Price012 = pCalculator(p12, data.OffRoadEBike012).toFixed(2)
        


        const totalPriceWTax = (
            (pCalculator(p1, data.OffRoadEBike01)
                +
                pCalculator(p2, data.OffRoadEBike02)
                +
                pCalculator(p3, data.OffRoadEBike03)
                +
                pCalculator(p4, data.OffRoadEBike04)
                +
                pCalculator(p5, data.OffRoadEBike05)
                +
                pCalculator(p6, data.OffRoadEBike06)
                +
                pCalculator(p7, data.OffRoadEBike07)
                +
                pCalculator(p8, data.OffRoadEBike08)
                +
                pCalculator(p9, data.OffRoadEBike09)
                +
                pCalculator(p10, data.OffRoadEBike010)
                +
                pCalculator(p11, data.OffRoadEBike011)
                +
                pCalculator(p12, data.OffRoadEBike012)
            )
            * 1.2
        ).toFixed(2)
        const totalPrice = (
            (pCalculator(p1, data.OffRoadEBike01)
                +
                pCalculator(p2, data.OffRoadEBike02)
                +
                pCalculator(p3, data.OffRoadEBike03)
                +
                pCalculator(p4, data.OffRoadEBike04)
                +
                pCalculator(p5, data.OffRoadEBike05)
                +
                pCalculator(p6, data.OffRoadEBike06)
                +
                pCalculator(p7, data.OffRoadEBike07)
                +
                pCalculator(p8, data.OffRoadEBike08)
                +
                pCalculator(p9, data.OffRoadEBike09)
                +
                pCalculator(p10, data.OffRoadEBike010)
                +
                pCalculator(p11, data.OffRoadEBike011)
                +
                pCalculator(p12, data.OffRoadEBike012)
            )
        ).toFixed(2)
        const titlet1 = 'OFF-ROAD EBIKES (GAMME TOUT TERRAIN)'
        const info = {
            p1,
            p2,
            p3,
            p4,
            p5,
            p6,
            p7,
            p8,
            p9,
            p10,
            p11,
            p12,
            

            date,
            chargedecompte,
            modele01,
            modele02,
            modele03,
            modele04,
            modele05,
            modele06,
            modele07,
            modele08,
            modele09,
            modele010,
            modele011,
            modele012,
            

            p1Price01,
            p1Price02,
            p1Price03,
            p1Price04,
            p1Price05,
            p1Price06,
            p1Price07,
            p1Price08,
            p1Price09,
            p1Price010,
            p1Price011,
            p1Price012,
            
            data,
            totalPriceWTax,
            totalPrice,
            aInfo1,
            aInfo2,
            aInfo3,
            aInfo4,
            aInfo5,
            aInfo6,
            bInfo1,
            bInfo2,
            bInfo3,
            bInfo4,
            bInfo5,
            bInfo6,
            titlet1



        }
        // console.log(t6);

        fetch(`https://stalker-mad-bi-ke-server.vercel.app/mailsentp/641032aab4491720553e856a`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {


            });
        // alert("Order Successfully sent!")
        navigate('/thanks')


    }

    const w2bgOrange = 'w-5/6 outline-none text-center bg-orange-400 text-xs p-1 '
    const w1bgOrange = 'w-full outline-none text-center bg-orange-400 text-xs p-1'
    const tBclasses = 'border w-1/12 p-1 border-black mt-5'
    return (
        <form onSubmit={handlesent}>

            <div className='flex justify-center mx-5 my-3 min-w-[1200px]'>
                <div className='w-full lg:w-5/6 box all p-5'>

                    {/* header section start */}
                    <div className='w-full flex gap-10'>
                        {/* left side information start */}
                        <div className='w-1/2 text-base'>
                            <div className='w-full text-sm flex flex-col justify-center items-center'>
                                <img className='w-1/2' src={logoMadBike} alt="" />

                                <h1 className='mt-5'>GLOBAL WEB MARKET GROUP S.A.S		</h1>
                                <h1>STALKER MAD BIKE® MARQUE DÉPOSEE</h1>
                                <h1>Adresse: BELLECHASSE 36260 SAINT PIERRE DE JARDS</h1>
                                <h1>T.V.A: FR68 884 415787 00016</h1>
                                <a href='mailto:stalker.madbike@gmail.com'>stalker.madbike@gmail.com</a>

                            </div>
                            <h1 className='mt-5'>PREPARATION DE BON DE COMMANDE</h1>

                            <table className='border border-black w-2/3 text-sm'>
                                <thead>
                                    <tr className='border border-black text-center'>
                                        <td className='w-1/2 border border-black'>Date</td>
                                        <td className='bg-orange-400'><input className='w-full outline-none  text-center bg-orange-400 text-xs' type="date" name='date' required /></td>
                                    </tr>
                                    <tr className='border border-black text-center'>
                                        <td className='w-1/2 border border-black'>VALIDITE</td>
                                        <td className='w-1/2'>10 JOURS</td>
                                    </tr>
                                    <tr className='border border-black text-center'>
                                        <td className='w-1/2 border border-black'>CHARGE DE COMPTE</td>
                                        <td className='bg-orange-400'><input className='w-full outline-none text-center bg-orange-400 text-xs' type="text" name='chargedecompte' /></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {/* left side information end */}

                        {/* ======================= */}

                        {/* right side information start */}
                        <div className='w-1/2 text-sm text-center'>
                            <h1>ENVOYER LE FICHIER .XLS PAR EMAIL A VOTRE CHARGE DE COMPTE PROFESSIONNEL UNE FOIS COMPLETE </h1>

                            <div className='border border-black mt-3'>
                                <h1 className='border p-3 border-b-black'>"Conditions Générales de Vente &
                                    de Service Fournisseur en Annexe
                                    WWW.STALKERMADBIKES.COM"

                                </h1>
                                <h1 className='text-xs  p-3 border border-b-black'>
                                    Pays d’Origine des Productions du Fournisseur : CHINE / UNION EUROPÉENNE Port de Chargement : Selon Type de Freit Destination des Marchandises : France Conformité : CE, Matières Dangereuses UN38.1 Raison de la Demande : Commande Stock et Échantillonnage Magasin Professionnel, Vente aux Professionnels.


                                </h1>
                                <h1 className='text-xs  p-3'>
                                    Je confirme avoir pris connaissance des CGV&S et confirme les quantités et les tarifs ci-dessus en vue de l’établissement d’une facture de commande avec le fournisseur (envoyer copie de cette commande proforma à l’Account Manager.

                                </h1>
                            </div>


                            <div>
                                <h1 className='py-1 text-center border border-black mt-5 font-semibold bg-orange-400'>REMPLIR OU MODIFIER LES CASES EN ORANGE</h1>
                                <h1 className='text-xs mt-1'>Remise Spéciale**: Voir Conditions de Remises selon le Contrat Cadre Acheteur			</h1>
                                <h1 className='text-xs'>Remise Spéciale**: Voir Conditions de Remises selon le Contrat Cadre Acheteur			</h1>

                            </div>
                        </div>

                        {/* right side information start */}
                    </div>

                    {/* ========================== */}
                    <div className='w-full flex justify-between gap-5  mt-5 '>
                        <div className='w-3/4 h-fit flex'>

                            <table className='border border-black mt-1 text-sm w-1/2'>
                                <thead>
                                    <tr className='border border-black'>
                                        <th className='w-1/3 border border-black font-semibold'>NOM CLIENT LIVRAISON</th>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo1' required /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Adresse Livraison</td>
                                        <td className='border border-black bg-orange-400'><textarea className={`${w1bgOrange}`} type="text" name='aInfo2' required /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Code Postal</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo3' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Ville</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo4' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Téléphone</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo5' required /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Email</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="email" name='aInfo6' required /></td>
                                    </tr>
                                </thead>
                            </table>

                            <table className='border border-black mt-1 text-sm w-1/2'>
                                <thead>
                                    <tr className='border border-black'>
                                        <th className='w-1/3 border border-black font-semibold'>NOM CLIENT - FACTURATION</th>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo1' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Adresse Livraison</td>
                                        <td className='border border-black bg-orange-400'><textarea className={`${w1bgOrange}`} type="text" name='bInfo2' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Code Postal</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo3' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Ville</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo4' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Téléphone</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='bInfo5' /></td>
                                    </tr>
                                    <tr className='border border-black'>
                                        <td className='w-1/3 border border-black text-center'>Email</td>
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="email" name='bInfo6' /></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {/* left side of second section end */}

                        {/* Right side of second section start */}

                        <div className='w-1/4 flex flex-col justify-end items-end'>
                            <div className='border border-black mt-1 text-sm w-full'>

                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>TOTAL T.T.C</h1>
                                    <h1 className='w-1/2 outline-none text-center'>
                                        €{
                                            (
                                                (pCalculator(p1, data.OffRoadEBike01)
                                                    +
                                                    pCalculator(p2, data.OffRoadEBike02)
                                                    +
                                                    pCalculator(p3, data.OffRoadEBike03)
                                                    +
                                                    pCalculator(p4, data.OffRoadEBike04)
                                                    +
                                                    pCalculator(p5, data.OffRoadEBike05)
                                                    +
                                                    pCalculator(p6, data.OffRoadEBike06)
                                                    +
                                                    pCalculator(p7, data.OffRoadEBike07)
                                                    +
                                                    pCalculator(p8, data.OffRoadEBike08)
                                                    +
                                                    pCalculator(p9, data.OffRoadEBike09)
                                                    +
                                                    pCalculator(p10, data.OffRoadEBike010)
                                                    +
                                                    pCalculator(p11, data.OffRoadEBike011)
                                                    +
                                                    pCalculator(p12, data.OffRoadEBike012)
                                                )
                                                * 1.2
                                            ).toFixed(2)
                                        }
                                    </h1>
                                </div>
                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>T.V.A</h1>
                                    <h1 className='w-1/2 outline-none text-center'>20%</h1>
                                </div>
                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>Remise Centrale*</h1>
                                    <h1 className='w-1/2 outline-none text-center'></h1>
                                </div>
                                <div className='flex text-center border border-b-black'>
                                    <h1 className='w-1/2 border border-r-black'>Remise Spéciale**</h1>
                                    <h1 className='w-1/2 outline-none text-center'></h1>
                                </div>

                                <div className='flex text-center'>
                                    <h1 className='w-1/2 border border-r-black'>GRAND TOTAL H.T</h1>
                                    <h1 className='w-1/2 outline-none text-center'>
                                        €{
                                            (pCalculator(p1, data.OffRoadEBike01)
                                                +
                                                pCalculator(p2, data.OffRoadEBike02)
                                                +
                                                pCalculator(p3, data.OffRoadEBike03)
                                                +
                                                pCalculator(p4, data.OffRoadEBike04)
                                                +
                                                pCalculator(p5, data.OffRoadEBike05)
                                                +
                                                pCalculator(p6, data.OffRoadEBike06)
                                                +
                                                pCalculator(p7, data.OffRoadEBike07)
                                                +
                                                pCalculator(p8, data.OffRoadEBike08)
                                                +
                                                pCalculator(p9, data.OffRoadEBike09)
                                                +
                                                pCalculator(p10, data.OffRoadEBike010)
                                                +
                                                pCalculator(p11, data.OffRoadEBike011)
                                                +
                                                pCalculator(p12, data.OffRoadEBike012)
                                            ).toFixed(2)
                                        }
                                    </h1>
                                </div>
                            </div>
                            <button type='submit' className='bg-orange-400 p-1 text-center w-full font-bold'>Commandez maintenant!</button>
                        </div>
                    </div>
                    {/* Main section  */}
                    <div className=' mt-5'>
                        <h1 className='font-semibold text-center border border-t-black border-l-black border-r-black'>
                            OFF-ROAD EBIKES (GAMME TOUT TERRAIN)
                        </h1>
                        {/* heading on main section  */}
                        <table className='border border-black w-full text-sm'>
                            <thead>
                                <tr>
                                    <th className={`${tBclasses} font-normal`}>MODELE</th>
                                    <th className={`${tBclasses} font-normal`}>COULEUR</th>
                                    <th className={`${tBclasses} font-normal`}>EAN</th>
                                    <th className={`${tBclasses} italic font-normal`}>Prix Vente Public Conseillé H.T (EUR)</th>
                                    <th className={`${tBclasses} font-normal`}>Paliers de Quantité</th>
                                    <th className={`${tBclasses} font-normal`}>Coût Achat Unitaire</th>
                                    <th className={`${tBclasses} font-bold`}>Quantité de Commande</th>
                                    <th className={`${tBclasses} font-bold`}>TOTAL ACHAT H.T(€) PAR MODÈLE</th>
                                </tr>
                            </thead>


                            <P1 setP1={setP1} p1={p1} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P2 setP2={setP2} p2={p2} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P3 setP3={setP3} p3={p3} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P4 setP4={setP4} p4={p4} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P5 setP5={setP5} p5={p5} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P6 setP6={setP6} p6={p6} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P7 setP7={setP7} p7={p7} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P8 setP8={setP8} p8={p8} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P9 setP9={setP9} p9={p9} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P10 setP10={setP10} p10={p10} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P11 setP11={setP11} p11={p11} pCalculator={pCalculator} tBclasses={tBclasses} />
                            <P12 setP12={setP12} p12={p12} pCalculator={pCalculator} tBclasses={tBclasses} />


                        </table>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default OffRoadEbike;
