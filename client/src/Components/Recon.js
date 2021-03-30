import React, {useState} from 'react';
import {ToastProvider} from 'react-toast-notifications';
import Sublist3r from './SubComponents/Sublist3r';
import Amass from './SubComponents/Amass';
import Assetfinder from './SubComponents/Assetfinder';
import Gau from './SubComponents/Gau';
import Ctl from './SubComponents/Ctl';
import Consolidator from './SubComponents/Consolidator';
import Httprobe from './SubComponents/Httprobe';
import Slackbot from './SubComponents/Slackbot';
import Subjack from './SubComponents/Subjack';
import EyeWitness from './SubComponents/EyeWitness';
import GithubOsint from './SubComponents/GithubOsint';
import GithubSearch from './SubComponents/GithubSearch';
import GithubBruteDork from './SubComponents/GithubBruteDork';
import '../Component.css';

const Recon = props => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <>
        <div className="bg-secondary checklistStyle">
            <ul>
                <li>Application / Server Information</li>
                <ul>
                    <li>Application Framework(s)</li>
                    <li>Server Info</li>
                    <li>SSL Info</li>
                </ul>
                <li>Subdomain Enumeration</li>
                <ul>
                    <li>Subdomain Scraping</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(0)}>Tool - Sublist3r</li>
                        <li onClick={(e)=>setCurrentStep(1)}>Tool - Amass</li>
                        <li onClick={(e)=>setCurrentStep(2)}>Tool - Assetfinder</li>
                        <li onClick={(e)=>setCurrentStep(3)}>Tool - GetAllUrls (gau)</li>
                        <li onClick={(e)=>setCurrentStep(4)}>Certificate Transparency Logs</li>
                    </ul>
                    <li>Link / JS Discovery</li>
                    <ul>
                        <li>Tool - GoSpider</li>
                        <li>Tool - hakrwler</li>
                        <li>Tool - SubDomainizer</li>
                    </ul>
                    <li>Subdomain Bruteforcing</li>
                    <ul>
                        <li>Build Custom Wordlist</li>
                        <li>Tool - Amass (Enum)</li>
                        <li>Tool - shuffleDNS</li>
                        <li>Tool - CommonSpeak2</li>
                        <li>Check for Alterations / Mutations</li>
                    </ul>
                    <li>Final Analysis and Misc.</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(5)}>Build List of Unique Subdomains</li>
                        <li onClick={(e)=>setCurrentStep(6)}>Check SubDomain Status - Httpprobe</li>
                        <li onClick={(e)=>setCurrentStep(8)}>Final Analysis - EyeWitness</li>
                        <li onClick={(e)=>setCurrentStep(7)}>Subdomain Takeover - Subjack</li>
                        <li onClick={(e)=>setCurrentStep(9)}>Configure Slackbot</li>
                    </ul>
                </ul>
                <li>OSINT - Search Engines</li>
                <ul>
                    <li>GitHub</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(10)}>Automated - Github-search</li>
                        <li onClick={(e)=>setCurrentStep(11)}>Manual Search - Languages</li>
                        <li onClick={(e)=>setCurrentStep(12)}>Automated - Github_Brute-Dork</li>
                        <li onClick={(e)=>setCurrentStep(11)}>Manual Search - Users</li>
                        <li onClick={(e)=>setCurrentStep(10)}>Automated - Gitrob</li>
                        <li onClick={(e)=>setCurrentStep(10)}>Automated - Github-search (Round Two)</li>
                        <li onClick={(e)=>setCurrentStep(11)}>Manual Search - Creative</li>
                    </ul>
                    <li>Google</li>
                    <li>Shodan</li>
                    <li>Censys</li>
                </ul>
                <li>Summary</li>
            </ul>
        </div>
        <div className="bg-secondary workTableStyle">
            {
                currentStep === 0 ?
                <ToastProvider><Sublist3r thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 1 ?
                <ToastProvider><Amass thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 2 ?
                <ToastProvider><Assetfinder thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 3 ?
                <ToastProvider><Gau thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 4 ?
                <ToastProvider><Ctl thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 5 ?
                <ToastProvider><Consolidator thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 6 ?
                <ToastProvider><Httprobe thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 7 ?
                <ToastProvider><Subjack thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
                        {
                currentStep === 8 ?
                <ToastProvider><EyeWitness thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 9 ?
                <ToastProvider><Slackbot thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
                        {
                currentStep === 10 ?
                <ToastProvider><GithubSearch thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 11 ?
                <ToastProvider><GithubOsint thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
                        {
                currentStep === 12 ?
                <ToastProvider><GithubBruteDork thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
        </div>
        </>
    )
}

export default Recon;