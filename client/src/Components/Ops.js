import React, {useState} from 'react';
import {ToastProvider} from 'react-toast-notifications';
import '../Component.css';
import HopHeaders from './SubComponents/HopHeaders';
import CachePoisoning from './SubComponents/CachePoisoning';



const Ops = props => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <>
        <div className="bg-secondary checklistStyle pt-4 ml-4">
            <ul>
                <li>Reverse Proxy Testing</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(0)}>Abusing Hop-by-Hop Headers</li>
                    <li onClick={(e)=>setCurrentStep(1)}>Web Cache Poisoning</li>
                    <li onClick={(e)=>setCurrentStep(2)}>Web Cache Deception</li>
                    <li onClick={(e)=>setCurrentStep(3)}>HTTP Request Smuggling</li>
                    <li onClick={(e)=>setCurrentStep(4)}>H2C Smuggling</li>
                    <li onClick={(e)=>setCurrentStep(5)}>Server-Side Inclusion</li>
                    <li onClick={(e)=>setCurrentStep(6)}>Uncovering Cloudflare</li>
                </ul>
                <li>IIS Testing</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(10)}>TBD</li>
                </ul>
                <li>AWS S3 Bucket Testing</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(11)}>TBD</li>
                </ul>
            </ul>
        </div>
        <div className="bg-secondary workTableStyle">
            {
                currentStep === 0 ?
                <ToastProvider><HopHeaders thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 1 ?
                <ToastProvider><CachePoisoning thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
        </div>
        </>
    )
}

export default Ops;