import React, {useState} from 'react';
import {ToastProvider} from 'react-toast-notifications';
import '../Component.css';
import HopHeaders from './SubComponents/HopHeaders';
import CachePoisoning from './SubComponents/CachePoisoning';
import Cors from './SubComponents/Cors';
import CspBypass from './SubComponents/CspBypass';



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
                    <li onClick={(e)=>setCurrentStep(6)}>Uncovering Cloudflare</li>
                </ul>
                <li>HTTP Header Testing</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(8)}>Content Security Policy Bypass</li>
                    <li onClick={(e)=>setCurrentStep(9)}>CORS Misconfiguration/Bypass</li>
                </ul>
                <li>Cookie Testing</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(10)}>Basic Checks</li>
                    <li onClick={(e)=>setCurrentStep(11)}>Decode/Modify Cookie Values</li>
                    <li onClick={(e)=>setCurrentStep(12)}>Session Fixation</li>
                    <li onClick={(e)=>setCurrentStep(13)}>Cookie Tossing</li>
                    <li onClick={(e)=>setCurrentStep(14)}>Padding Oracle Attack</li>
                </ul>
                <li>IIS Testing https://www.youtube.com/watch?v=cqM-MdPkaWo</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(18)}>Find Hidden Applications 2:35</li>
                    <li onClick={(e)=>setCurrentStep(18)}>VHost Hopping 5:25</li>
                    <li onClick={(e)=>setCurrentStep(18)}>Local File Disclosure to DLLs 7:53</li>
                    <li onClick={(e)=>setCurrentStep(18)}>Local File Disclosure RCE 10:28</li>
                    <li onClick={(e)=>setCurrentStep(18)}>DNSpy 12:09</li>
                    <li onClick={(e)=>setCurrentStep(18)}>Complex XXE Vectors 14:05</li>
                </ul>
                <li>AWS S3 Bucket Testing</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(22)}>Identify S3 Bucket</li>
                    <li onClick={(e)=>setCurrentStep(22)}>CRUD Tests</li>
                    <li onClick={(e)=>setCurrentStep(22)}>Extract Backup</li>
                    <li onClick={(e)=>setCurrentStep(22)}>Bucket Juicy Data (w/ SSRF)</li>
                </ul>
                <li>DNS Testing</li>
                <ul>
                    <li onClick={(e)=>setCurrentStep(23)}>DNS Rebinding</li>
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
            {
                currentStep === 8 ?
                <ToastProvider><CspBypass thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 9 ?
                <ToastProvider><Cors thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
        </div>
        </>
    )
}

export default Ops;