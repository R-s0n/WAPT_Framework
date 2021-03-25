import React, {useState, useEffect} from 'react';
import {useToasts} from 'react-toast-notifications';
import axios from 'axios';

const Consolidator = props => {
    const [consolidatedList, setConsolidatedList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        let fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist', {fqdnId})
            .then(res=>{
                setConsolidatedList(res.data.consolidated);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    }, [props.thisFqdn._id])
    
    const buildConsolidatedList = (sublist3r, amass, assetfinder, gau) => {
        let consolidated = [];
        for (let i=0; i<sublist3r.length; i++){
            if (!consolidated.includes(sublist3r[i])){
                consolidated.push(sublist3r[i]);
            }
        }
        for (let i=0; i<amass.length; i++){
            if (!consolidated.includes(amass[i])){
                consolidated.push(amass[i]);
            }
        }
        for (let i=0; i<assetfinder.length; i++){
            if (!consolidated.includes(assetfinder[i])){
                consolidated.push(assetfinder[i]);
            }
        }
        for (let i=0; i<gau.length; i++){
            if (!consolidated.includes(gau[i])){
                consolidated.push(gau[i]);
            }
        }
        setConsolidatedList(consolidated);
        setLoaded(true);
        let fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist/update', {fqdnId, consolidated})
            .then(res=>{console.log(res.data)})
            .catch(err=>console.log(err))
    }
    
    const consolidate = () => {
        const fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist', {fqdnId})
            .then(res=>{
                buildConsolidatedList(res.data.sublist3r, res.data.amass, res.data.assetfinder, res.data.gau);
            })
            .catch(err=>console.log(err));
    }

    const copyListToClipboard = (e) => {
        let copyString = "";
        consolidatedList.map((fqdn, i)=>{
            return (copyString += fqdn + "\n")
        })
        navigator.clipboard.writeText(copyString);
        addToast(`Consolidated List copied to Clipboard`, {appearance:'info',autoDismiss:true});
    }

    const copyToClipboard = e => {
        navigator.clipboard.writeText(e.target.innerText)
        addToast(`Copied "${e.target.innerText}" to Clipboard`, {appearance:'info',autoDismiss:true});
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <p>This tool will consolidate any lists of subdomains that have been uploaded through the tools above.  Click the button below and a comprehensive list of all unique subdomains will be dynamically renderred.  This can take some time depending on the size of the lists, so please be patient.</p>
                    <p>After running the tool, paste the list in a newly created file using the following command: <span onClick={copyToClipboard}>vim consolidated.{props.thisFqdn.fqdn}.txt</span></p>
                    <button className="btn btn-primary" onClick={consolidate}>Consolidate</button>
                </div>
            </div>
            <div className="row mt-5">
                <div style={{width: '1000px', height: '500px', overflowY: 'scroll', border: '1px solid black'}}className="col-12">
                    { loaded === true ?
                        consolidatedList.map((subdomain, i)=>{
                            return (<p className="mb-1" key={i}>{subdomain}</p>)
                        }) :
                        ''
                    }
                </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={copyListToClipboard}>Copy</button>
        </div>
    )
}

export default Consolidator;