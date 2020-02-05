import React, { useState } from 'react'
import './PhoneDetails.css';
import { EventEmitter } from 'events';



const items = [
 {
        phoneModelodel: "44 months",
        year: "iPhone 11 Pro Max",
        operationSystem: 2019,
        screen: "iOS 13",
        screenResolution: "iOS",
        sizeScreen: "Super Retina XDR OLED",
        frontCamera: "1242 x 2688",
        basicCamera: "6.5 inch",
        processorCores: "12 MPHexa-core",
        processor: "2x2.65 GHz Lightning + 4x1.8 GHz Thunder",
        RAM: "Hexa-core",
        memoryCardSlot: "Ոչ",
        memory: "256 GB",
        standardGrid: "GSM / CDMA / HSPA / EVDO / LTE",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 28(700), 29(700), 30(2300), 32(1500), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 42(3500), 46, 48, 66(1700/2100)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",
        batteryType: "Li-Ion",
        batteryPower: "3969mAh",
        weight: "226 g",
        thickness: "yes",
        length: "158 mm",
        width: "77.8 mm",
        SIMCardNumber: "1 SIM"


    },
    {
        phoneModelodel: "12 months",
        year: "iPhone 11 Pro Max",
        operationSystem: 2019,

        screen: "iOS 13",
        screenResolution: "iOS",
        sizeScreen: "Super Retina XDR OLED",
        
        frontCamera: "1242 x 2688",
        basicCamera: "6.5 inch",

        processorCores: "Hexa-core",
        processor: "2x2.65 GHz Lightning + 4x1.8 GHz Thunder",
        RAM: "4 GB",
        memoryCardSlot: "Ոչ",
        memory: "64 GB",


        standardGrid: "GSM / CDMA / HSPA / EVDO / LTE",
        internetAccess: "",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 28(700), 29(700), 30(2300), 32(1500), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 42(3500), 46, 48, 66(1700/2100)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",


        chargingSlotType: "",
        talkTime: "",
        batteryType: "Li-Ion",
        batteryPower: "3969mAh",

        weight: "226 g",
        thickness: "yes",
        length: "158 mm",
        width: "77.8 mm",
        audio: "",
        SIMCardNumber: "1 SIM"
    },
    
]


const PhoneDetails = (phone) => {

    return(
        <div className="itemDetalis">
               
        {
        items.map((elem, index) =>
        <div  key={index}>           
            <ul>
            <li>
                <p className="detailsTitle">Ընդհանուր բնութագրեր</p>
                <ul className="detailsPhone">
                    <li>
                        <div  className="detailsName"><p>Մոդել</p></div>
                        <div className="detailsProperties"><p>{elem.phoneModelodel} </p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Հայտարարության տարին</p></div>
                        <div className="detailsProperties"><p>{elem.year}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Օպերացիոն համակարգ</p></div>
                        <div className="detailsProperties"><p>{elem.operationSystem}</p></div>
                    </li>
                </ul>
            </li>



            <li>
                <p  className="detailsTitle">Էկրան</p>
                <ul className="detailsPhone">
                    <li>
                        <div  className="detailsName"><p>Էկրանի տեսակը</p></div>
                        <div className="detailsProperties"><p>{elem.screen}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Էկրանի բանաձևը</p></div>
                        <div className="detailsProperties"><p>{elem.screenResolution}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Էկրանի չափսը</p></div>
                        <div className="detailsProperties"><p>{elem.sizeScreen}</p></div>
                    </li>
                </ul>
            </li>



            <li>
                <p  className="detailsTitle">Տեսախցիկներ</p>
                <ul className="detailsPhone">
                    <li>
                        <div  className="detailsName"><p>Դիմային տեսախցիկ</p></div>
                        <div className="detailsProperties"><p>{elem.frontCamera}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Հիմնական տեսախցիկ</p></div>
                        <div className="detailsProperties"><p>{elem.basicCamera}</p></div>
                    </li>
                </ul>
            </li>



            <li>
                <p  className="detailsTitle">Հիշողություն և Պրոցեսոր</p>
                <ul className="detailsPhone">
                    <li>
                        <div  className="detailsName"><p>Պրոցեսորների միջուկների քանակը</p></div>
                        <div className="detailsProperties"><p>{elem.processorCores}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Պրոցեսոր</p></div>
                        <div className="detailsProperties"><p>{elem.processor}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Օպերատիվ հիշողություն</p></div>
                        <div className="detailsProperties"><p>{elem.RAM}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Հիշողության քարտի բնիկը</p></div>
                        <div className="detailsProperties"><p>{elem.memoryCardSlot}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Հիշողություն</p></div>
                        <div className="detailsProperties"><p>{elem.memory}</p></div>
                    </li>
                </ul>
            </li>



            <li>
                <p  className="detailsTitle">Ցանց</p>
                <ul className="detailsPhone">
                    <li>
                        <div  className="detailsName"><p>Ստանդարտ Ցանց</p></div>
                        <div className="detailsProperties"><p>{elem.standardGrid}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Ինտերնետի հասանելիություն</p></div>
                        <div className="detailsProperties"><p>{elem.internetAccess}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>4G LTE Ցանցի տիրույթ</p></div>
                        <div className="detailsProperties"><p>{elem.fourGLTENetworkDomain}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>GPS</p></div>
                        <div className="detailsProperties"><p>{elem.GPS}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Bluetooth</p></div>
                        <div className="detailsProperties"><p>{elem.bluetooth}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>WiFi Ցանց</p></div>
                        <div className="detailsProperties"><p>{elem.WiFiNetwork}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>3G Ցանց</p></div>
                        <div className="detailsProperties"><p>{elem.threeNetwork}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>NFC</p></div>
                        <div className="detailsProperties"><p>{elem.NFC}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>4G LTE Ցանց</p></div>
                        <div className="detailsProperties"><p>{elem.fourGLTENetwork}</p></div>
                    </li>
                </ul>
            </li>



            <li>
                <p  className="detailsTitle">Սնուցում</p>
                <ul className="detailsPhone">
                    <li>
                        <div  className="detailsName"><p>Լիցքավորման բնիկի տեսակը</p></div>
                        <div className="detailsProperties"><p>{elem.chargingSlotType}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Զրույցի ժամանակը</p></div>
                        <div className="detailsProperties"><p>{elem.talkTime}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Մարտկոցի տեսակը</p></div>
                        <div className="detailsProperties"><p>{elem.batteryType}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Մարտկոցի հզորությունը</p></div>
                        <div className="detailsProperties"><p>{elem.batteryPower}</p></div>
                    </li>
                </ul>
            </li>



            <li>
                <p  className="detailsTitle">Այլ</p>
                <ul className="detailsPhone">
                    <li>
                        <div  className="detailsName"><p>Կշիռ</p></div>
                        <div className="detailsProperties"><p>{elem.weight}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Հաստություն</p></div>
                        <div className="detailsProperties"><p>{elem.thickness}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Երկարություն</p></div>
                        <div className="detailsProperties"><p>{elem.length}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Լայնությունը</p></div>
                        <div className="detailsProperties"><p>{elem.width}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>Աուդիո</p></div>
                        <div className="detailsProperties"><p>{elem.audio}</p></div>
                    </li>
                    <li>
                        <div  className="detailsName"><p>SIM քարտի քանակ</p></div>
                        <div className="detailsProperties"><p>{elem.SIMCardNumber}</p></div>
                    </li>
                </ul>
            </li>
            
        </ul>
        </div> 
             )
        }

        </div>
    );
}

export default PhoneDetails;
