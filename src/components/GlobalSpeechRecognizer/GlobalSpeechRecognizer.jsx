import { useSpeechSynthesis } from "react-speech-kit";
import { useEffect, useState } from 'react';
import { processLoginScreenSpeech } from '../../utility/speechKeywordLogic'
import { useNavigate } from 'react-router-dom';
import useSpeechToText from "react-hook-speech-to-text";


const GlobalSpeechRecognizer = ({mobileVehiclePopupVisibility = null, setMobileVehiclePopupVisibility = null, payBillPopupVisibility=null, setPayBillPopupVisibility = null}) => {
    const { speak } = useSpeechSynthesis();
    const navigate = useNavigate();

    const {
        error, // API is only available in chrome browser
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        // crossBrowser: true,
        // googleApiKey: 'API_KEY',
        // googleCloudRecognitionConfig: {
        //     languageCode: 'tr-TR'
        // },
        useLegacyResults: false,
        // speechRecognitionProperties: {
        //     interimResults: true
        // },
        // timeout: 500
    });
    
    useEffect(() => {
        if (!isRecording && error === ""){
            startSpeechToText();
        }
    }, [])

    useEffect(() => {
        if (error !== ""){
            return;
        }
        processLoginScreenSpeech(startSpeechToText, stopSpeechToText, results, navigate, speak, 
            mobileVehiclePopupVisibility, setMobileVehiclePopupVisibility, payBillPopupVisibility, setPayBillPopupVisibility);
    }, [results])

    return (
        <div style={{visibility:'hidden'}}>
        </div>
    )
}

export default GlobalSpeechRecognizer