import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import { setSpeechText } from '../../redux/speechToTextSlice'
import { useDispatch } from 'react-redux';

const SpeechToText = () => {
    const dispatch = useDispatch();

    const {
        error,
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
        speechRecognitionProperties: {
            interimResults: true
        },
        // timeout: 300
    });
    
    if (error) return <h2>Web Speech API is not available in this browser 🤷‍</h2>;

    return (
        <div>
            <h1>SELECTRA</h1>
            <h1>Recording: {isRecording.toString()}</h1>
            <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <ul>
                {results.map((result) => (
                <li key={result.timestamp}>{result.transcript}</li>
                ))}
                {interimResult && <li>{interimResult}</li>}
            </ul>
        </div>
    )
}

export default SpeechToText