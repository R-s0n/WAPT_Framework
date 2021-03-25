import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useToasts} from 'react-toast-notifications';
import SubDomainResults from '../HelperComponents/SubDomainResults';
import SubDomainForm from '../HelperComponents/SubDomainForm';

const Ctl = props => {
    const [formCompleted, setFormCompleted] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        const fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist', {fqdnId})
            .then(res=>{
                if (res.data !== null){
                    const tempArr = res.data.ctl;
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
                    <p><b>DETAILS: </b>Gets all subdomains to a domain by querying the database of the crt.sh Certificate Transparency search engine.</p>
                    <p><b>GOAL: </b>Identify valid sub-domains of the current FQDN to help build a complete picture of the application.</p>
                    <p><b>DOWNLOAD / INSTALL: </b><span onClick={copyToClipboard}>git clone https://github.com/hannob/tlshelpers.git</span></p>
                    <p><b>RUN: </b><span onClick={copyToClipboard}>sudo ./getsubdomain {props.thisFqdn.fqdn} | xclip -i -selection clipboard</span></p>
                </div>
            </div>
            <div className="row">
            {
                    formCompleted === false ?
                    <SubDomainForm thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="ctl"/> :
                    <SubDomainResults thisFqdn={props.thisFqdn} thisFormCompleted={thisFormCompleted} thisScanner="ctl"/>
                }
            </div>
        </div>
    )
}

export default Ctl;