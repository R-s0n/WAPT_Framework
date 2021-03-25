import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useToasts} from 'react-toast-notifications';
import SubDomainResults from '../HelperComponents/SubDomainResults';
import SubDomainForm from '../HelperComponents/SubDomainForm';

const Gau = props => {
    const [formCompleted, setFormCompleted] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        const fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist', {fqdnId})
            .then(res=>{
                if (res.data !== null){
                    const tempArr = res.data.gau;
                    if (tempArr.length > 0){
                        setFormCompleted(true);
                    }
                }
            })
    }, [props.thisFqdn._id, props])

    const thisFormCompleted = (completed) => {
        setFormCompleted(completed);
    }

    const copyToClipboard = e => {
        navigator.clipboard.writeText(e.target.innerText)
        addToast(`Copied "${e.target.innerText}" to Clipboard`, {appearance:'info',autoDismiss:true});
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <p><b>DETAILS: </b>Getallurls (gau) fetches known URLs from AlienVault's Open Threat Exchange, the Wayback Machine, and Common Crawl for any given domain. Inspired by Tomnomnom's waybackurls.</p>
                    <p><b>GOAL: </b>Identify valid sub-domains of the current FQDN to help build a complete picture of the application.</p>
                    <p><b>DOWNLOAD / INSTALL: </b><span onClick={copyToClipboard}>GO111MODULE=on go get -u -v github.com/lc/gau</span></p>
                    <p><b>RUN: </b><span onClick={copyToClipboard}>sudo gau -subs {props.thisFqdn.fqdn} | cut -d / -f 3 | sort -u &gt; gau.{props.thisFqdn.fqdn}.txt; cat gau.{props.thisFqdn.fqdn}.txt | xclip -i -selection clipboard</span></p>
                </div>
            </div>
            <div className="row">
            {
                    formCompleted === false ?
                    <SubDomainForm thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="gau"/> :
                    <SubDomainResults thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="gau"/>
                }
            </div>
        </div>
    )
}

export default Gau;