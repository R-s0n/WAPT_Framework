import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useToasts} from 'react-toast-notifications';
import SubDomainResults from '../HelperComponents/SubDomainResults';
import SubDomainForm from '../HelperComponents/SubDomainForm';

const Assetfinder = props => {
    const [formCompleted, setFormCompleted] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        const fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist', {fqdnId})
            .then(res=>{
                if (res.data !== null){
                    const tempArr = res.data.assetfinder;
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
                    <p><b>DETAILS: </b>Find domains and subdomains potentially related to a given domain. (straight to the point as usual, Tomnomnom!)</p>
                    <p><b>GOAL: </b>Identify valid sub-domains of the current FQDN to help build a complete picture of the application.</p>
                    <p><b>DOWNLOAD / INSTALL: </b><span onClick={copyToClipboard}>go get -u github.com/tomnomnom/assetfinder</span></p>
                    <p><b>RUN: </b><span onClick={copyToClipboard}>sudo assetfinder --subs-only {props.thisFqdn.fqdn} &gt; assetfinder.{props.thisFqdn.fqdn}.txt; cat assetfinder.{props.thisFqdn.fqdn}.txt | xclip -i -selection clipboard</span></p>
                </div>
            </div>
            <div className="row">
            {
                    formCompleted === false ?
                    <SubDomainForm thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="assetfinder"/> :
                    <SubDomainResults thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="assetfinder"/>
                }
            </div>
        </div>
    )
}

export default Assetfinder;