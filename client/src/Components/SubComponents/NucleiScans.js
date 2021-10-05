import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useToasts} from 'react-toast-notifications';
import SubDomainForm from '../HelperComponents/SubDomainForm';
import SubDomainResults from '../HelperComponents/SubDomainResults';


const Sublist3r = props => {
    const [formCompleted, setFormCompleted] = useState(false);
    const [subdomainList, setSubdomainList] = useState([])
    const [loaded, setLoaded] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        setFormCompleted(false);
        axios.post('http://localhost:8000/api/fqdn', {_id:props.thisFqdn._id})
            .then(res=>{
                if (res.data !== null){
                    const tempArr = res.data.recon.subdomains.sublist3r;
                    if (tempArr.length > 0){
                        setSubdomainList(res.data.recon.subdomains.sublist3r)
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

    const addSublist3rData = (list) => {
        const tempFqdn = props.thisFqdn;
        tempFqdn.recon.subdomains.sublist3r = list.split("\n");
        axios.post('http://localhost:8000/api/fqdn/update', tempFqdn)
            .then(res=>{
                setSubdomainList(res.data.recon.subdomains.sublist3r)
                setFormCompleted(true);
            })
            .catch(err=>console.log(err));
    }

    const deleteSublist3rData = () => {
        const tempFqdn = props.thisFqdn;
        tempFqdn.recon.subdomains.sublist3r = [];
        axios.post('http://localhost:8000/api/fqdn/update', tempFqdn)
            .then(res=>{
                setSubdomainList(res.data.recon.subdomains.sublist3r)
                setFormCompleted(false);
            })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-2">
                    <p>Vuln</p>
                </div>
            </div>
        </div>
    )
}

export default Sublist3r;