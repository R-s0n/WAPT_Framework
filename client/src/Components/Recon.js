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
import Shosubgo from './SubComponents/Shosubgo';
import Subfinder from './SubComponents/Subfinder';
import GithubSubdomains from './SubComponents/GithubSubdomains';
import GoSpider from './SubComponents/GoSpider';
import Hakrawler from './SubComponents/Hakrawler';
import SubDomainizer from './SubComponents/SubDomainizer';
import '../Component.css';

const Recon = props => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <>
        <div className="bg-secondary checklistStyle">
            <ul>
                <li>Subdomain Enumeration</li>
                <ul>
                    <li>Subdomain Scraping</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(0)}>Tool - Sublist3r</li>
                        <li onClick={(e)=>setCurrentStep(1)}>Tool - Amass</li>
                        <li onClick={(e)=>setCurrentStep(2)}>Tool - Assetfinder</li>
                        <li onClick={(e)=>setCurrentStep(3)}>Tool - GetAllUrls (gau)</li>
                        <li onClick={(e)=>setCurrentStep(4)}>Certificate Transparency Logs</li>
                        <li onClick={(e)=>setCurrentStep(5)}>Tools - Shosubgo</li>
                        <li onClick={(e)=>setCurrentStep(6)}>Tools - Subfinder</li>
                        <li onClick={(e)=>setCurrentStep(7)}>Tools - Github-Subdomains</li>
                        <li>Cloud Ranges</li>
                    </ul>
                    <li>Link / JS Discovery</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(8)}>Tool - GoSpider</li>
                        <li onClick={(e)=>setCurrentStep(9)}>Tool - Hakrawler</li>
                        <li onClick={(e)=>setCurrentStep(10)}>Tool - SubDomainizer</li>
                    </ul>
                    <li>Subdomain Bruteforcing</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(11)}>ShuffleDNS - Massive Wordlist</li>
                        <li onClick={(e)=>setCurrentStep(12)}>Build Custom Wordlist</li>
                        <li onClick={(e)=>setCurrentStep(13)}>ShuffleDNS - Custom Wordlist</li>
                    </ul>
                    <li>Final Analysis</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(14)}>Build List of Unique Subdomains</li>
                        <li onClick={(e)=>setCurrentStep(15)}>Check SubDomain Status - Httpprobe</li>
                        <li onClick={(e)=>setCurrentStep(16)}>Final Analysis - EyeWitness</li>
                    </ul>
                    <li>Miscellaneous</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(17)}>Subdomain Takeover - Subjack</li>
                        <li onClick={(e)=>setCurrentStep(18)}>Configure Slackbot</li>
                    </ul>
                </ul>
                <li>Sensitive Data Leakage (Do this manually while recon scripts are running.  Based on methodology by thegentleman)</li>
                <ul>
                    <li>GitHub</li>
                    <ul>
                        <li onClick={(e)=>setCurrentStep(24)}>Automated - Github-search</li>
                        <li onClick={(e)=>setCurrentStep(25)}>Manual Search - Languages</li>
                        <li onClick={(e)=>setCurrentStep(26)}>Automated - Github_Brute-Dork</li>
                        <li onClick={(e)=>setCurrentStep(27)}>Manual Search - Users</li>
                        <li onClick={(e)=>setCurrentStep(28)}>Automated - Gitrob</li>
                        <li onClick={(e)=>setCurrentStep(29)}>Automated - Github-search (Round Two)</li>
                        <li onClick={(e)=>setCurrentStep(30)}>Manual Search - Creative</li>
                    </ul>
                    <li>Google</li>
                    <li>Shodan</li>
                    <li>Censys</li>
                </ul>
                <li>Add Target URL</li>
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
                <ToastProvider><Shosubgo thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 6 ?
                <ToastProvider><Subfinder thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 7 ?
                <ToastProvider><GithubSubdomains thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 8 ?
                <ToastProvider><GoSpider thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 9 ?
                <ToastProvider><Hakrawler thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 10 ?
                <ToastProvider><SubDomainizer thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 14 ?
                <ToastProvider><Consolidator thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 15 ?
                <ToastProvider><Httprobe thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 16 ?
                <ToastProvider><EyeWitness thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 17 ?
                <ToastProvider><Subjack thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 18 ?
                <ToastProvider><Slackbot thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
                        {
                currentStep === 24 ?
                <ToastProvider><GithubSearch thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
            {
                currentStep === 25 ?
                <ToastProvider><GithubOsint thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
                        {
                currentStep === 26 ?
                <ToastProvider><GithubBruteDork thisFqdn={props.thisFqdn} /></ToastProvider> :
                ''
            }
        </div>
        </>
    )
}

export default Recon;