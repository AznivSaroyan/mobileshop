import React, { useState, useEffect } from 'react'
import './DynamicScrollToTop';
import '../src/globalCss/PhoneDetails.css';
// import { EventEmitter } from 'events';
// import { Link } from 'react-router-dom'



const items1 = [
    {
        id: 101,
        detalisImg: require('../src/img/iPhone 11 Pro Max 256GB Silver.jpg'),
        detalisName: "iPhone 11 Pro Max 256GB Silver",
        detalisPrice: "829.000դր.",
        guarantor: "12 months", 
        phoneModelodel: "iPhone 11 Pro Max",
        year: 2019,
        operationSystemType: "iOS 13",
        operationSystem: "OS",


        screen: "Super Retina XDR OLED",
        screenResolution: "1242 x 2688",
        sizeScreen: "6.5 inch",

        frontCamera: "12 MP",
        basicCamera: "12MP + 12MP + 12MP",

        processorCores: "Hexa-core",
        internetAccess: "_ _",
        processor: "2x2.65 GHz Lightning + 4x1.8 GHz Thunder",
        RAM: "4 GB",
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

        chargingSlotType: "_ _",
        talkTime: "_ _",
        batteryType: "Li-Ion",
        batteryPower: "3969mAh",

        weight: "226 g",
        thickness: "Այո",
        length: "158 mm",
        width: "77.8 mm",
        audio: "_ _",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 102,
        detalisImg: require('../src/img/Phone 11 Pro Max 64GB Gold.jpg'),
        detalisName: "Phone 11 Pro Max 64GB Gold.jpg",
        detalisPrice: "739,900դր.",
        guarantor: "12 months", 
        phoneModelodel: "iPhone 11 Pro Max",
        year: 2019,
        operationSystemType: "iOS 13",
        operationSystem: "iOS",


        screen: "Super Retina XDR OLED",
        screenResolution: "1242 x 2688",
        sizeScreen: "6.5 inch",

        frontCamera: "12 MP",
        basicCamera: "12MP + 12MP + 12MP",

        processorCores: "Hexa-core",
        internetAccess: "_ _",
        processor: "2x2.65 GHz Lightning + 4x1.8 GHz Thunder",
        RAM: "4 GB",
        memoryCardSlot: "Ոչ",
        memory: "64 GB",

        standardGrid: "GSM / CDMA / HSPA / EVDO / LTE",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 28(700), 29(700), 30(2300), 32(1500), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 42(3500), 46, 48, 66(1700/2100)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "_ _",
        talkTime: "_ _",
        batteryType: "Li-Ion",
        batteryPower: "3969mAh",

        weight: "226 g",
        thickness: "Այո",
        length: "158 mm",
        width: "77.8 mm",
        audio: "_ _",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 103, 
        detalisImg: require('../src/img/Apple iPhone X 256GB (Space Grey).jpg'),
        detalisName: "Apple iPhone X 256GB (Space Grey)",
        detalisPrice: "600.000դր.",
        guarantor: "_ _", 
        phoneModelodel: "iPhone X",
        year: 2017,
        operationSystemType: "_ _",
        operationSystem: "iOS",


        screen: "Super Retina HD display, all-screen OLED Multi-Touch, HDR display",
        screenResolution: "2436x1125",
        sizeScreen: "_ _",

        frontCamera: "7 MP",
        basicCamera: "12 MP + 12MP",

        processorCores: 6,
        processor: "A11 Bionic Embedded M11 motion coprocessor",
        RAM: "3 GB",
        memoryCardSlot: "Ոչ",
        memory: "256 GB",

        standardGrid: "GSM 850 / 900 / 1800 / 1900",
        internetAccess: "GPRS, EDGE",
        fourGLTENetworkDomain: "LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 29, 30, 66)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "Lightning connector",
        talkTime: "Up to 21 h (3G)",
        batteryType:"Li-Ion",
        batteryPower: "2716 mAh",

        weight: "174 g (6.14 oz)",
        thickness: "7.7 mm (0.30 in)",
        length: "143.6 mm (5.65 in)",
        width: "70.9 mm (2.79 in)",
        audio: "AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 104,
        detalisImg: require('../src/img/iPhone 11 256GB (White).jpg'),
        detalisName: "iPhone 11 256GB (White)",
        detalisPrice: "459,900դր.",
        guarantor: "12 months", 
        phoneModelodel: "iPhone 11",
        year: "2019",
        operationSystemType: "iOS 13",
        operationSystem: "iOS",


        screen: "Liquid Retina IPS LCD",
        screenResolution: "828 x 1792",
        sizeScreen: "6.1 inch",

        frontCamera: "12 MP",
        basicCamera: "12 MP + 12MP",

        processorCores: "Hexa-core",
        processor: "2x2.65 GHz Lightning + 4x1.8 GHz Thunder",
        RAM: "4 GB",
        memoryCardSlot: "Ոչ",
        memory: "256 GB",

        standardGrid: "GSM / CDMA / HSPA / EVDO / LTE",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 28(700), 29(700), 30(2300), 32(1500), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 42(3500), 46, 48, 66(1700/2100)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "_ _",
        talkTime: "_ _",
        batteryType: "Li-Ion",
        batteryPower: "3046mAh",

        weight: "194 g",
        thickness: "yes",
        length: "150.9 mm",
        width: "75.7 mm",
        audio: "_ _",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 105,
        detalisImg: require('../src/img/Samsung Galaxy S10e (Prism Black).jpg'),
        detalisName: "Samsung Galaxy S10e (Prism Black)",
        detalisPrice: "349.000դր.",
        guarantor: "12 months", 
        phoneModelodel: "SM-G970F",
        year: 2019,
        operationSystemType: "Android 9.0 (Pie)",
        operationSystem: "Android",


        screen: "PPI 550",
        screenResolution: "2280x1080,",
        sizeScreen: "5.8 դյույմ",

        frontCamera: "10 MP",
        basicCamera: "16 MP + 12 MP",

        processorCores: "Eight Core",
        processor: "Exynos 9820",
        RAM: "6 GB",
        memoryCardSlot: "Այո",
        memory: "128 GB",

        standardGrid: "Enhanced 4x4 MIMO, до 7CA, LAA, LTE Cat.20",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "802.11 a/b/g/n/ac/ax 2.4 G+5 GHz, VHT80 MU-MIMO",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "Fast Wireless Charging 2.0",
        talkTime: "_ _",
        batteryType: "Wireless charger",
        batteryPower: "3100 mAh",

        weight: "150 g",
        thickness: "_ _",
        length: "142.2 mm",
        width: "69.9 mm",
        audio: "MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA, DSF, DFF, APE",
        SIMCardNumber: "2 SIM"
       
    },
    {
        id: 106,
        detalisImg: require('../src/img/Apple iPhone XR 64GB (Red).jpg'),
        detalisName: "Apple iPhone XR 64GB (Red)",
        detalisPrice:  "359,910դր.",
        phoneModelodel: "iPhone XR",
        guarantor: "_ _",
        year: 2018,
        operationSystemType: "iOS 12",
        operationSystem: "iOS",


        screen: "Liquid Retina HD display",
        screenResolution: "1792x828",
        sizeScreen: "6.1 inch",

        frontCamera: "7 MP",
        basicCamera: "12 MP",

        processorCores: "A12 Bionic chip",
        processor: "3 GB",
        RAM: "_ _",
        memoryCardSlot: "Ոչ",
        memory: "64 GB",

        standardGrid: "GSM 850 / 900 / 1800 / 1900",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "LTE Advanced",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "Lightning connector",
        talkTime: "Up to 25 h",
        batteryType: "_ _",
        batteryPower: "_ _",

        weight: "194 g",
        thickness: "0.33 in (8.3 mm)",
        length: "5.94 in (150.9 mm)",
        width: "2.98 in (75.7 mm)",
        audio: "AAC‑LC, HE‑AAC, HE‑AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC‑3), Dolby Digital Plus (E‑AC‑3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 107,
        detalisImg: require('../src/img/Samsung Galaxy J2 Core (Gold).jpg'),
        detalisName: "Samsung Galaxy J2 Core (Gold)",
        detalisPrice: "47,900դր",
        phoneModelodel: "J260",
        guarantor: "_ _",
        year: 2018,
        operationSystemType: "_ _",
        operationSystem: "Android",


        screen: "PLS TFT LCD",
        screenResolution: "960x540",
        sizeScreen: "5.0 դյույմ",

        frontCamera: "5 MP",
        basicCamera: "8 MP",

        processorCores: 4,
        processor: "_ _",
        RAM: "1 GB",
        memoryCardSlot: "Այո",
        memory: "8 GB",

        standardGrid: "GSM850, GSM900, DCS1800",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "_ _",
        GPS: "_ _",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "Micro USB",
        talkTime: "Up to 18 h",
        batteryType: "_ _",
        batteryPower: "2600 mAh",

        weight: "154 g",
        thickness: "8.9 mm",
        length: "143.4 mm",
        width: "72.1 mm",
        audio: "_ _",
        SIMCardNumber: "2 SIM"
       
    },
    {
        id: 201,
        detalisImg: require('../src/img/iPad Pro 12.9 Wi-Fi + Cellular 64GB (Space Grey).jpg'),
        detalisName: "iPad Pro 12.9 Wi-Fi + Cellular 64GB (Space Grey)",
        detalisPrice: "699,900դր.",
        guarantor: "12 months", 
        year: 2019,
        phoneModelodel: "iOS",
        operationSystemType: "_ _",
        operationSystem: "_ _",

        screen: "IPS LCD",
        screenResolution: "2732x2048",
        sizeScreen: "12.9 դյույմ",

        frontCamera: "7 MP",
        basicCamera: "12 MP",

        processorCores: "Octa-core",
        processor: "4x2.5 GHz Vortex + 4x1.6 GHz Tempest",
        RAM: "4 GB",
        memoryCardSlot: "Ոչ",
        memory: "64 GB",

        standardGrid: "GSM/CDMA/HSPA/EVDO/LTE",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 27(800), 28(700), 29(700), 30(2300), 38(2600), 39(1900), 40(2300), 41(2500)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "non-removable",
        talkTime: "_ _",
        batteryType: "Li-Po",
        batteryPower: "9720 mAh",

        weight: "633 g",
        thickness: "_ _",
        length: "280.6 mm",
        width: "214.9 mm",
        audio: "WAV, AAC+, OGG, FLAC, AMR, AAC, eAAC+, MIDI, WMA, M4A, MP3",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 202,
        detalisImg: require('../src/img/iPad Pro 11 Wi-Fi + Cellular 64GB (Silver).jpg'),
        detalisName: "iPad Pro 11 Wi-Fi + Cellular 64GB (Silver)",
        detalisPrice: "559,900դր.",
        phoneModelodel: "_ _",
        guarantor: "12 months", 
        year: 2019,
        operationSystemType: "_ _",
        operationSystem: "iOS",


        screen: "IPS LCD",
        screenResolution: "2224x1668",
        sizeScreen: "11 inch",

        frontCamera: "7 MP",
        basicCamera: "12 MP",

        processorCores: "Octa-core",
        processor: "4x2.5 GHz Vortex + 4x1.6 GHz Tempest",
        RAM: "4 GB",
        memoryCardSlot: "Ոչ",
        memory: "64 GB",

        standardGrid: "GSM / CDMA / HSPA / EVDO / LTE",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 14(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 29(700), 30(2300), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 46, 66(1700/2100), 71(600)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "Non-Removable",
        talkTime: "_ _",
        batteryType: "Li-Po",
        batteryPower: "7812 mAh",

        weight: "468 g",
        thickness: "_ _",
        length: "247.6 mm",
        width: "178.5 mm",
        audio: "_ _",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 203,
        detalisImg: require('../src/img/Apple iPad Pro 12.9 Wi-Fi 64 GB (Gold).jpg'),
        detalisName: "Apple iPad Pro 12.9 Wi-Fi 64 GB (Gold)",
        detalisPrice: "429,900դր.",
        phoneModelodel: "_ _",
        year: 2017,
        operationSystemType: "_ _",
        operationSystem: "iOS",


        screen: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
        screenResolution: "2732x2048",
        sizeScreen: "_ _",

        frontCamera: "7 MP",
        basicCamera: "12 MP",

        processorCores: "_ _",
        processor: "Apple A10X Fusion",
        RAM: "4 GB",
        memoryCardSlot: "Ոչ",
        memory: "64 GB",

        standardGrid: "GSM 850 / 900 / 1800 / 1900",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 27(800), 28(700), 29(700), 30(2300), 38(2600), 39(1900), 40(2300), 41(2500)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Ոչ",
        NFC: "Ոչ",
        fourGLTENetwork: "Ոչ",

        chargingSlotType: "3.0, proprietary reversible connector; magnetic connector",
        talkTime: "Up to 10 h (multimedia)",
        batteryType: "Non-removable Li-Ion",
        batteryPower: "10 891 mAh",

        weight: "677 g",
        thickness: "6.9 mm (0.27 in)",
        length: "305.7 mm (12.04 in)",
        width: "220.6 mm (8.69 in)",
        audio: "_ _",
        SIMCardNumber: "_ _"
    },
    {
        id: 204,
        detalisImg: require('../src/img/iPad mini 5 Wi-Fi + Cellular 64GB (Gold).jpg'),
        detalisName: "iPad mini 5 Wi-Fi + Cellular 64GB (Gold)",
        detalisPrice: "337,900դր.",
        phoneModelodel: "_ _",
        guarantor: "_ _", 
        year: 2019,
        operationSystemType: "_ _",
        operationSystem: "iOS",

        screen: "IPS LCD",
        screenResolution: "2048x1536",
        sizeScreen: "7.9 inch",

        frontCamera: "7 MP",
        basicCamera: "8 MP",

        processorCores: "Hexa-core",
        processor: "2x2.5 GHz Vortex + 4x1.6 GHz Tempest",
        RAM: "3 GB",
        memoryCardSlot: "Ոչ",
        memory: "64 GB",

        standardGrid: "GSM / HSPA / LTE",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 11(1500), 12(700), 13(700), 14(700), 17(700), 18(800), 19(800), 20(800), 21(1500), 25(1900), 26(850), 29(700), 30(2300), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500), 46, 66(1700/2100), 71(600)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",


        chargingSlotType: "_ _",
        talkTime: "_ _",
        batteryType: "Li-Ion",
        batteryPower: "5124mAh",

        weight: "308.5 g",
        thickness: "3.5 mm audio output",
        length: "203.2 mm",
        width: "134.8 mm",
        audio: "_ _",
        SIMCardNumber: "1 SIM"
       
    },
    {
        id: 205,
        detalisImg: require('../src/img/Samsung Galaxy Tab A 8.0 (Black).jpg'),
        detalisName: "Samsung Galaxy Tab A 8.0 (Black)",
        detalisPrice: "95,900դր.",
        phoneModelodel: "_ _",
        guarantor: "_ _", 
        year: 2019,
        operationSystemType: "_ _",
        operationSystem: "Android",


        screen: "TFT capacitive touchscreen",
        screenResolution: "800 x 1280",
        sizeScreen: "8.0 inch",

        frontCamera: "2 MP",
        basicCamera: "8 MP",

        processorCores: "Octa-core",
        processor: "2.0 GHz Cortex-A53",
        RAM: "2 GB",
        memoryCardSlot: "Այո",
        memory: "32 GB",

        standardGrid:"GSM / HSPA / LTE",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "LTE band 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 8(900), 12(700), 17(700), 20(800), 28(700), 38(2600), 40(2300), 41(2500)",
        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Այո",
        fourGLTENetwork: "Այո",

        chargingSlotType: "_ _",
        talkTime: "_ _",
        batteryType: "Li-Po",
        batteryPower: "5100mAh",

        weight: "347g",
        thickness: "Այո",
        length: "210 mm",
        width: "124.4 mm",
        audio: "_ _",
        SIMCardNumber: "1 SIM"
    },
    {
        id: 206,
        detalisImg: require('../src/img/Prestigio WIZE 3171 3G (Black).jpg'),
        detalisName: "Prestigio WIZE 3171 3G (Black)",
        detalisPrice: "50,900դր.",
        guarantor: "12 months", 
        phoneModelodel: "kjsncks",
        operationSystemType: "_ _",
        year: 2019,
        operationSystem: "Android",


        screen: "IPS LCD",
        screenResolution: "1280x800",
        sizeScreen: "10.1 դյույմ",

        frontCamera: "0.3 MP",
        basicCamera: "2 MP",

        standardGrid:"_ _",
        internetAccess: "_ _",
        fourGLTENetworkDomain: "_ _",
        processorCores: "Octa-core",
        processor: "1.30 GHz",
        RAM: "1 GB",
        memoryCardSlot: "Այո",
        memory: "8 GB",

        GPS: "Այո",
        bluetooth: "Այո",
        WiFiNetwork: "Այո",
        threeNetwork: "Այո",
        NFC: "Ոչ",
        fourGLTENetwork: "Ոչ",

        chargingSlotType: "_ _",
        talkTime: "_ _",
        batteryType: "_ _",
        batteryPower: "5100mAh",

        weight: "Այո",
        thickness: "_ _",
        length: "_ _",
        width: "_ _",
        audio: "_ _",
        SIMCardNumber: "1 SIM"
       
    }
  ]

const PhoneDetails = (props) => {
    const[product, setProduct] = useState({})

    useEffect(() => {
        const data = items1.find(product => product.id === parseInt(props.match.params.id)) 
        setProduct(data)
    }, [])

    
return(
    <div className="itemDetalis">
        <div className="itemDetalisTop">
            <div className="detalisImg"><img src={product.detalisImg}/></div>
            <ul className="detalisNmaePrice">
                <li className="detalisName"><p>{product.detalisName}</p></li>
                <li className="detalisPrice"><p>{product.detalisPrice}</p></li>
                <li className="detalisPayButton"><a onClick = { () => props.history.goBack()}><p>Վերադառնալ</p></a></li>
            </ul>
        </div>
        <div className="itemDetalisButton">
            
            <ul>
                <li>
                    <p className="detailsTitle">Ընդհանուր բնութագրեր</p>
                    <ul className="detailsDevice">
                        <li>
                            <div  className="detalisItem"><p> Երաշխիք</p></div>
                            <div className="detailsProperties"><p>{product.guarantor} </p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p> Մոդել</p></div>
                            <div className="detailsProperties"><p>{product.phoneModelodel} </p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Հայտարարության տարին</p></div>
                            <div className="detailsProperties"><p>{product.year}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>ՕՀ տեսակ</p></div>
                            <div className="detailsProperties"><p>{product.operationSystemType}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Օպերացիոն համակարգ</p></div>
                            <div className="detailsProperties"><p>{product.operationSystem}</p></div>
                        </li>
                    </ul>
                </li>



                <li>
                    <p  className="detailsTitle">Էկրան</p>
                    <ul className="detailsDevice">
                        <li>
                            <div  className="detalisItem"><p>Էկրանի տեսակը</p></div>
                            <div className="detailsProperties"><p>{product.screen}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Էկրանի բանաձևը</p></div>
                            <div className="detailsProperties"><p>{product.screenResolution}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Էկրանի չափսը</p></div>
                            <div className="detailsProperties"><p>{product.sizeScreen}</p></div>
                        </li>
                    </ul>
                </li>



                <li>
                    <p  className="detailsTitle">Տեսախցիկներ</p>
                    <ul className="detailsDevice">
                        <li>
                            <div  className="detalisItem"><p>Դիմային տեսախցիկ</p></div>
                            <div className="detailsProperties"><p>{product.frontCamera}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Հիմնական տեսախցիկ</p></div>
                            <div className="detailsProperties"><p>{product.basicCamera}</p></div>
                        </li>
                    </ul>
                </li>



                <li>
                    <p  className="detailsTitle">Հիշողություն և Պրոցեսոր</p>
                    <ul className="detailsDevice">
                        <li>
                            <div  className="detalisItem"><p>Պրոցեսորների միջուկների քանակը</p></div>
                            <div className="detailsProperties"><p>{product.processorCores}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Պրոցեսոր</p></div>
                            <div className="detailsProperties"><p>{product.processor}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Օպերատիվ հիշողություն</p></div>
                            <div className="detailsProperties"><p>{product.RAM}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Հիշողության քարտի բնիկը</p></div>
                            <div className="detailsProperties"><p>{product.memoryCardSlot}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Հիշողություն</p></div>
                            <div className="detailsProperties"><p>{product.memory}</p></div>
                        </li>
                    </ul>
                </li>
            


                <li>
                    <p  className="detailsTitle">Ցանց</p>
                    <ul className="detailsDevice">
                        <li>
                            <div  className="detalisItem"><p>Ստանդարտ Ցանց</p></div>
                            <div className="detailsProperties"><p>{product.standardGrid}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Ինտերնետի հասանելիություն</p></div>
                            <div className="detailsProperties"><p>{product.internetAccess}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>4G LTE Ցանցի տիրույթ</p></div>
                            <div className="detailsProperties"><p>{product.fourGLTENetworkDomain}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>GPS</p></div>
                            <div className="detailsProperties"><p>{product.GPS}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Bluetooth</p></div>
                            <div className="detailsProperties"><p>{product.bluetooth}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>WiFi Ցանց</p></div>
                            <div className="detailsProperties"><p>{product.WiFiNetwork}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>3G Ցանց</p></div>
                            <div className="detailsProperties"><p>{product.threeNetwork}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>NFC</p></div>
                            <div className="detailsProperties"><p>{product.NFC}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>4G LTE Ցանց</p></div>
                            <div className="detailsProperties"><p>{product.fourGLTENetwork}</p></div>
                        </li>
                    </ul>
                </li>



                <li>
                    <p  className="detailsTitle">Սնուցում</p>
                    <ul className="detailsDevice">
                        <li>
                            <div  className="detalisItem"><p>Լիցքավորման բնիկի տեսակը</p></div>
                            <div className="detailsProperties"><p>{product.chargingSlotType}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Զրույցի ժամանակը</p></div>
                            <div className="detailsProperties"><p>{product.talkTime}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Մարտկոցի տեսակը</p></div>
                            <div className="detailsProperties"><p>{product.batteryType}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Մարտկոցի հզորությունը</p></div>
                            <div className="detailsProperties"><p>{product.batteryPower}</p></div>
                        </li>
                    </ul>
                </li>



                <li>
                    <p  className="detailsTitle">Այլ</p>
                    <ul className="detailsDevice">
                        <li>
                            <div  className="detalisItem"><p>Կշիռ</p></div>
                            <div className="detailsProperties"><p>{product.weight}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Հաստություն</p></div>
                            <div className="detailsProperties"><p>{product.thickness}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Երկարություն</p></div>
                            <div className="detailsProperties"><p>{product.length}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Լայնությունը</p></div>
                            <div className="detailsProperties"><p>{product.width}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>Աուդիո</p></div>
                            <div className="detailsProperties"><p>{product.audio}</p></div>
                        </li>
                        <li>
                            <div  className="detalisItem"><p>SIM քարտի քանակ</p></div>
                            <div className="detailsProperties"><p>{product.SIMCardNumber}</p></div>
                        </li>
                    </ul>
                </li>
                
            </ul>

        </div>
    </div>
     );
}

export default PhoneDetails;
