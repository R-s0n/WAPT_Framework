import React, {useState, useEffect} from 'react';
import {useToasts} from 'react-toast-notifications';
import axios from 'axios';

const SubDomainResults = props => {
    const [subdomains, setSubdomains] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const {addToast} = useToasts()

    useEffect(()=>{
        const fqdnId = props.thisFqdn._id;
        axios.post('http://localhost:8000/api/subdomainlist', {
            fqdnId
        })
            .then(res=>{
                let scanner = props.thisScanner;
                setSubdomains(res.data[scanner]);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    }, [props.thisFqdn._id, props.thisScanner])

    const deleteSubdomains = (e) => {
        let data = {};
        let scanner = props.thisScanner;
        data["fqdnId"] = props.thisFqdn._id;
        data[scanner] = [];
        console.log(data);
        axios.post('http://localhost:8000/api/subdomainlist/update', data)
            .then(res=>props.thisFormCompleted(false))
            .catch(err=>console.log(err))
    }

    const resultsStyle = {
        height: '400px',
        width: '1200px',
        overflowY: 'scroll',
        border: '1px solid black',
        padding: '10px'
    }

    const copyListToClipboard = (e) => {
        let copyString = "";
        subdomains.map((fqdn, i)=>{
            return (copyString += fqdn + "\n")
        })
        navigator.clipboard.writeText(copyString);
        addToast(`Subdomain List copied to Clipboard`, {appearance:'info',autoDismiss:true});
    }

    return (
        <div className="row mt-1">
            <div className="col-12">
                <h5>Results:</h5>
                <div style={resultsStyle}>
                {
                    loaded === true ?
                    subdomains.map((subdomain, i)=>{
                        return (
                            <p key={i} style={{marginBottom:'1px', marginLeft:'15px'}}><a href={subdomain} target="_blank" rel="noreferrer">{subdomain}</a></p>
                        )
                    }) :
                    ''
                }
                </div>
            </div>
            <div className="col-4 mt-2">
                <button className="btn btn-primary" onClick={deleteSubdomains}>Delete</button>
                <button className="btn btn-primary ml-5" onClick={copyListToClipboard}>Copy</button>
            </div>
        </div>
    )
}

export default SubDomainResults;