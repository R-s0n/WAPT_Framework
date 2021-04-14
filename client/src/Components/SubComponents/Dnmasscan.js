import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useToasts} from 'react-toast-notifications';
import SubDomainForm from '../HelperComponents/SubDomainForm';
import SubDomainResults from '../HelperComponents/SubDomainResults';


const Dnmasscan = props => {
    const [formCompleted, setFormCompleted] = useState(false);
    const [subdomainList, setSubdomainList] = useState([])
    const [loaded, setLoaded] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        setFormCompleted(false);
        axios.post('http://localhost:8000/api/fqdn', {_id:props.thisFqdn._id})
            .then(res=>{
                if (res.data !== null){
                    const tempArr = res.data.recon.subdomains.masscan;
                    if (tempArr.length > 0){
                        setSubdomainList(res.data.recon.subdomains.masscan)
                        setFormCompleted(true);
                    }
                }
                setLoaded(true);
            })
    }, [props])
    
    const copyToClipboard = e => {
        navigator.clipboard.writeText(e.target.innerText)
        addToast(`Copied "${e.target.innerText}" to Clipboard`, {appearance:'info',autoDismiss:true});
    }

    const addDnmasscanData = (list) => {
        const tempFqdn = props.thisFqdn;
        tempFqdn.recon.subdomains.masscan = list.split("\n");
        axios.post('http://localhost:8000/api/fqdn/update', tempFqdn)
            .then(res=>{
                setSubdomainList(res.data.recon.subdomains.masscan)
                setFormCompleted(true);
            })
            .catch(err=>console.log(err));
    }

    const deleteDnmasscanData = () => {
        const tempFqdn = props.thisFqdn;
        tempFqdn.recon.subdomains.masscan = [];
        axios.post('http://localhost:8000/api/fqdn/update', tempFqdn)
            .then(res=>{
                setSubdomainList(res.data.recon.subdomains.masscan)
                setFormCompleted(false);
            })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <p><b>DETAILS: </b></p>
                    <p><b>GOAL: </b></p>
                    <p><b>DOWNLOAD: </b><span onClick={copyToClipboard}></span></p>
                    <p><b>INSTALL: </b><span onClick={copyToClipboard}></span></p>
                    <p><b>RUN: </b><span onClick={copyToClipboard}></span></p>
                </div>
            </div>
            <div className="row">
                {
                    loaded && formCompleted === false ?
                    <SubDomainForm thisFqdn={props.thisFqdn} thisScanner="masscan" formFunction={addDnmasscanData}/> :
                    <SubDomainResults thisFqdn={props.thisFqdn} resultsFunction={deleteDnmasscanData} subdomainList={subdomainList} thisScanner="masscan"/>
                }
            </div>
        </div>
    )
}

export default Dnmasscan;