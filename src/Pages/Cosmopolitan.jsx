import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoMadBike from '../assets/LOGO STALKER MAD BIKE - FULL COLOR.png'
import C1 from '../Components/Cosmopolitan/C1';
import C10 from '../Components/Cosmopolitan/C10';
import C11 from '../Components/Cosmopolitan/C11';
import C12 from '../Components/Cosmopolitan/C12';
import C13 from '../Components/Cosmopolitan/C13';
import C14 from '../Components/Cosmopolitan/C14';
import C15 from '../Components/Cosmopolitan/C15';
import C16 from '../Components/Cosmopolitan/C16';
import C17 from '../Components/Cosmopolitan/C17';
import C18 from '../Components/Cosmopolitan/C18';
import C19 from '../Components/Cosmopolitan/C19';
import C2 from '../Components/Cosmopolitan/C2';
import C20 from '../Components/Cosmopolitan/C20';
import C3 from '../Components/Cosmopolitan/C3';
import C4 from '../Components/Cosmopolitan/C4';
import C5 from '../Components/Cosmopolitan/C5';
import C6 from '../Components/Cosmopolitan/C6';

import C8 from '../Components/Cosmopolitan/C8';
import C9 from '../Components/Cosmopolitan/C9';
import data from '../Data/BikeData'

let cCalculator = (a, b) => {
    const cTotal = parseFloat(a < 10 ? (a * b.CAU1)
        : a >= 10 && a <= 50 ? (a * b.CAU2)
            : a >= 51 && a <= 100 ? (a * b.CAU3)
                : a > 100 ? (a * b.CAU4) : 0
    )
    return cTotal
}
const Cosmopolitan = () => {
    const navigate = useNavigate()
    const [c1, setC1] = useState(0)
    const [c2, setC2] = useState(0)
    const [c3, setC3] = useState(0)
    const [c4, setC4] = useState(0)
    const [c5, setC5] = useState(0)
    const [c6, setC6] = useState(0)
    const [c8, setC8] = useState(0)
    const [c9, setC9] = useState(0)
    const [c10, setC10] = useState(0)
    const [c11, setC11] = useState(0)
    const [c12, setC12] = useState(0)
    const [c13, setC13] = useState(0)
    const [c14, setC14] = useState(0)
    const [c15, setC15] = useState(0)
    const [c16, setC16] = useState(0)
    const [c17, setC17] = useState(0)
    const [c18, setC18] = useState(0)
    const [c19, setC19] = useState(0)
    const [c20, setC20] = useState(0)

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

        const modele01 = data.CosmopolitanEBike01.MODELE
        const modele02 = data.CosmopolitanEBike02.MODELE
        const modele03 = data.CosmopolitanEBike03.MODELE
        const modele04 = data.CosmopolitanEBike04.MODELE
        const modele05 = data.CosmopolitanEBike05.MODELE
        const modele06 = data.CosmopolitanEBike06.MODELE
        const modele08 = data.CosmopolitanEBike08.MODELE
        const modele09 = data.CosmopolitanEBike09.MODELE
        const modele010 = data.CosmopolitanEBike010.MODELE
        const modele011 = data.CosmopolitanEBike011.MODELE
        const modele012 = data.CosmopolitanEBike012.MODELE
        const modele013 = data.CosmopolitanEBike013.MODELE
        const modele014 = data.CosmopolitanEBike014.MODELE
        const modele015 = data.CosmopolitanEBike015.MODELE
        const modele016 = data.CosmopolitanEBike016.MODELE
        const modele017 = data.CosmopolitanEBike017.MODELE
        const modele018 = data.CosmopolitanEBike018.MODELE
        const modele019 = data.CosmopolitanEBike019.MODELE
        const modele020 = data.CosmopolitanEBike020.MODELE


        const c1Price01 = cCalculator(c1, data.CosmopolitanEBike01).toFixed(2)
        const c1Price02 = cCalculator(c2, data.CosmopolitanEBike02).toFixed(2)
        const c1Price03 = cCalculator(c3, data.CosmopolitanEBike03).toFixed(2)
        const c1Price04 = cCalculator(c4, data.CosmopolitanEBike04).toFixed(2)
        const c1Price05 = cCalculator(c5, data.CosmopolitanEBike05).toFixed(2)
        const c1Price06 = cCalculator(c6, data.CosmopolitanEBike06).toFixed(2)
        const c1Price08 = cCalculator(c8, data.CosmopolitanEBike08).toFixed(2)
        const c1Price09 = cCalculator(c9, data.CosmopolitanEBike09).toFixed(2)
        const c1Price010 = cCalculator(c10, data.CosmopolitanEBike010).toFixed(2)
        const c1Price011 = cCalculator(c11, data.CosmopolitanEBike011).toFixed(2)
        const c1Price012 = cCalculator(c12, data.CosmopolitanEBike012).toFixed(2)
        const c1Price013 = cCalculator(c13, data.CosmopolitanEBike013).toFixed(2)
        const c1Price014 = cCalculator(c14, data.CosmopolitanEBike014).toFixed(2)
        const c1Price015 = cCalculator(c15, data.CosmopolitanEBike015).toFixed(2)
        const c1Price016 = cCalculator(c16, data.CosmopolitanEBike016).toFixed(2)
        const c1Price017 = cCalculator(c17, data.CosmopolitanEBike017).toFixed(2)
        const c1Price018 = cCalculator(c18, data.CosmopolitanEBike018).toFixed(2)
        const c1Price019 = cCalculator(c19, data.CosmopolitanEBike019).toFixed(2)
        const c1Price020 = cCalculator(c20, data.CosmopolitanEBike020).toFixed(2)


        const totalPriceWTax = (
            (cCalculator(c1, data.CosmopolitanEBike01)
                +
                cCalculator(c2, data.CosmopolitanEBike02)
                +
                cCalculator(c3, data.CosmopolitanEBike03)
                +
                cCalculator(c4, data.CosmopolitanEBike04)
                +
                cCalculator(c5, data.CosmopolitanEBike05)
                +
                cCalculator(c6, data.CosmopolitanEBike06)
                +
                cCalculator(c8, data.CosmopolitanEBike08)
                +
                cCalculator(c9, data.CosmopolitanEBike09)
                +
                cCalculator(c10, data.CosmopolitanEBike010)
                +
                cCalculator(c11, data.CosmopolitanEBike011)
                +
                cCalculator(c12, data.CosmopolitanEBike012)
                +
                cCalculator(c13, data.CosmopolitanEBike013)
                +
                cCalculator(c14, data.CosmopolitanEBike014)
                +
                cCalculator(c15, data.CosmopolitanEBike015)
                +
                cCalculator(c16, data.CosmopolitanEBike016)
                +
                cCalculator(c17, data.CosmopolitanEBike017)
                +
                cCalculator(c18, data.CosmopolitanEBike018)
                +
                cCalculator(c19, data.CosmopolitanEBike019)
                +
                cCalculator(c20, data.CosmopolitanEBike020)
            )
            * 1.2
        ).toFixed(2)
        const totalPrice = (
            (cCalculator(c1, data.CosmopolitanEBike01)
                +
                cCalculator(c2, data.CosmopolitanEBike02)
                +
                cCalculator(c3, data.CosmopolitanEBike03)
                +
                cCalculator(c4, data.CosmopolitanEBike04)
                +
                cCalculator(c5, data.CosmopolitanEBike05)
                +
                cCalculator(c6, data.CosmopolitanEBike06)
                +
                cCalculator(c8, data.CosmopolitanEBike08)
                +
                cCalculator(c9, data.CosmopolitanEBike09)
                +
                cCalculator(c10, data.CosmopolitanEBike010)
                +
                cCalculator(c11, data.CosmopolitanEBike011)
                +
                cCalculator(c12, data.CosmopolitanEBike012)
                +
                cCalculator(c13, data.CosmopolitanEBike013)
                +
                cCalculator(c14, data.CosmopolitanEBike014)
                +
                cCalculator(c15, data.CosmopolitanEBike015)
                +
                cCalculator(c16, data.CosmopolitanEBike016)
                +
                cCalculator(c17, data.CosmopolitanEBike017)
                +
                cCalculator(c18, data.CosmopolitanEBike018)
                +
                cCalculator(c19, data.CosmopolitanEBike019)
                +
                cCalculator(c20, data.CosmopolitanEBike020)
            )
        ).toFixed(2)
        const titlet1 = 'COSMOPOLITAN EBIKES (GAMME URBAINE)'
        const info = {
            c1,
            c2,
            c3,
            c4,
            c5,
            c6,
            c8,
            c9,
            c10,
            c11,
            c12,
            c13,
            c14,
            c15,
            c16,
            c17,
            c18,
            c19,
            c20,

            date,
            chargedecompte,
            modele01,
            modele02,
            modele03,
            modele04,
            modele05,
            modele06,
            modele08,
            modele09,
            modele010,
            modele011,
            modele012,
            modele013,
            modele014,
            modele015,
            modele016,
            modele017,
            modele018,
            modele019,
            modele020,

            c1Price01,
            c1Price02,
            c1Price03,
            c1Price04,
            c1Price05,
            c1Price06,
            c1Price08,
            c1Price09,
            c1Price010,
            c1Price011,
            c1Price012,
            c1Price013,
            c1Price014,
            c1Price015,
            c1Price016,
            c1Price017,
            c1Price018,
            c1Price019,
            c1Price020,
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

        fetch(`https://stalker-mad-bi-ke-server.vercel.app/mailsentc/641032c3b4491720553e856b`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {


            });

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
                                        <td className='border border-black bg-orange-400'><input className={`${w1bgOrange}`} type="text" name='aInfo1' required/></td>
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
                                                (cCalculator(c1, data.CosmopolitanEBike01)
                                                    +
                                                    cCalculator(c2, data.CosmopolitanEBike02)
                                                    +
                                                    cCalculator(c3, data.CosmopolitanEBike03)
                                                    +
                                                    cCalculator(c4, data.CosmopolitanEBike04)
                                                    +
                                                    cCalculator(c5, data.CosmopolitanEBike05)
                                                    +
                                                    cCalculator(c6, data.CosmopolitanEBike06)
                                                    +
                                                    cCalculator(c8, data.CosmopolitanEBike08)
                                                    +
                                                    cCalculator(c9, data.CosmopolitanEBike09)
                                                    +
                                                    cCalculator(c10, data.CosmopolitanEBike010)
                                                    +
                                                    cCalculator(c11, data.CosmopolitanEBike011)
                                                    +
                                                    cCalculator(c12, data.CosmopolitanEBike012)
                                                    +
                                                    cCalculator(c13, data.CosmopolitanEBike013)
                                                    +
                                                    cCalculator(c14, data.CosmopolitanEBike014)
                                                    +
                                                    cCalculator(c15, data.CosmopolitanEBike015)
                                                    +
                                                    cCalculator(c16, data.CosmopolitanEBike016)
                                                    +
                                                    cCalculator(c17, data.CosmopolitanEBike017)
                                                    +
                                                    cCalculator(c18, data.CosmopolitanEBike018)
                                                    +
                                                    cCalculator(c19, data.CosmopolitanEBike019)
                                                    +
                                                    cCalculator(c20, data.CosmopolitanEBike020)
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
                                            (cCalculator(c1, data.CosmopolitanEBike01)
                                                +
                                                cCalculator(c2, data.CosmopolitanEBike02)
                                                +
                                                cCalculator(c3, data.CosmopolitanEBike03)
                                                +
                                                cCalculator(c4, data.CosmopolitanEBike04)
                                                +
                                                cCalculator(c5, data.CosmopolitanEBike05)
                                                +
                                                cCalculator(c6, data.CosmopolitanEBike06)
                                                +

                                                cCalculator(c8, data.CosmopolitanEBike08)
                                                +
                                                cCalculator(c9, data.CosmopolitanEBike09)
                                                +
                                                cCalculator(c10, data.CosmopolitanEBike010)
                                                +
                                                cCalculator(c11, data.CosmopolitanEBike011)
                                                +
                                                cCalculator(c12, data.CosmopolitanEBike012)
                                                +
                                                cCalculator(c13, data.CosmopolitanEBike013)
                                                +
                                                cCalculator(c14, data.CosmopolitanEBike014)
                                                +
                                                cCalculator(c15, data.CosmopolitanEBike015)
                                                +
                                                cCalculator(c16, data.CosmopolitanEBike016)
                                                +
                                                cCalculator(c17, data.CosmopolitanEBike017)
                                                +
                                                cCalculator(c18, data.CosmopolitanEBike018)
                                                +
                                                cCalculator(c19, data.CosmopolitanEBike019)
                                                +
                                                cCalculator(c20, data.CosmopolitanEBike020)
                                            ).toFixed(2)
                                        }
                                    </h1>
                                </div>
                            </div>
                            <button type='submit' className='bg-orange-400 p-1 text-center w-full font-bold'>Commandez maintenant!</button>
                        </div>
                    </div>
                    {/* =============== */}
                    <div className=' mt-5'>
                        <h1 className='font-semibold text-center border border-t-black border-l-black border-r-black'>
                            COSMOPOLITAN EBIKES (GAMME URBAINE)
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


                            <C1 setC1={setC1} c1={c1} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C2 setC2={setC2} c2={c2} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C3 setC3={setC3} c3={c3} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C4 setC4={setC4} c4={c4} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C5 setC5={setC5} c5={c5} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C6 setC6={setC6} c6={c6} cCalculator={cCalculator} tBclasses={tBclasses} />

                            <C8 setC8={setC8} c8={c8} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C9 setC9={setC9} c9={c9} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C10 setC10={setC10} c10={c10} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C11 setC11={setC11} c11={c11} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C12 setC12={setC12} c12={c12} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C13 setC13={setC13} c13={c13} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C14 setC14={setC14} c14={c14} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C15 setC15={setC15} c15={c15} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C16 setC16={setC16} c16={c16} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C17 setC17={setC17} c17={c17} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C18 setC18={setC18} c18={c18} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C19 setC19={setC19} c19={c19} cCalculator={cCalculator} tBclasses={tBclasses} />
                            <C20 setC20={setC20} c20={c20} cCalculator={cCalculator} tBclasses={tBclasses} />





                        </table>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Cosmopolitan;