import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useToasts} from 'react-toast-notifications';
import SubDomainForm from '../HelperComponents/SubDomainForm';
import SubDomainResults from '../HelperComponents/SubDomainResults';


const Httprobe = props => {
    const [formCompleted, setFormCompleted] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        const fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist', {fqdnId})
            .then(res=>{
                if (res.data !== null){
                    const tempArr = res.data.httprobe;
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
                    <p><b>DETAILS: </b>Take a list of domains and probe for working http and https servers.</p>
                    <p><b>GOAL: </b>Iterate through the list of unique FQDNs to identify all domain names that are being hosted on live servers.</p>
                    <p><b>DOWNLOAD / Install: </b><span onClick={copyToClipboard}>go get -u github.com/tomnomnom/httprobe</span></p>
                    <p><b>RUN: </b><span onClick={copyToClipboard}>cat consolidated.{props.thisFqdn.fqdn}.txt | httprobe &gt; httprobe.{props.thisFqdn.fqdn}.txt; cat httprobe.{props.thisFqdn.fqdn}.txt | xclip -i -selection clipboard</span></p>
                </div>
            </div>
            <div className="row">
                {
                    formCompleted === false ?
                    <SubDomainForm thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="httprobe"/> :
                    <SubDomainResults thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="httprobe"/>
                }
            </div>
        </div>
    )
}

export default Httprobe;