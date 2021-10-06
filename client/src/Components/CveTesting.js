import React, {useState} from 'react';
import {ToastProvider} from 'react-toast-notifications';
import '../Component.css';
import NucleiScans from './SubComponents/NucleiScans';


const CveTesting = props => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <>
        <div className="bg-secondary checklistStyle pt-4 ml-4">
            <ul>
                <li>Third-Party Scanning</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(0)}>Nuclei Scan Results</li>
                </ul>
                <li>Custom Scanning</li>
                <ul>
                    <li>CVE Scanning</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(1)}>Add CVE</li>
                        <li onClick={(e)=>setCurrentStep(2)}>CVE Scan Results</li>
                    </ul>
                </ul>
            </ul>
        </div>
        <div className="bg-secondary workTableStyle">
            {
                currentStep === 0 ?
                <ToastProvider><NucleiScans thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
        </div>
        </>
    )
}

export default CveTesting;