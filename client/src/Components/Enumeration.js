import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Component.css';

const Enumeration = props => {
    const [urls, setUrls] = useState(props.thisFqdn.targetUrls)
    const [activeEndpointTab, setActiveEndpointTab] = useState(0);
    const [urlData, setUrlData] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        setLoaded(false);
        axios.post('http://localhost:8000/api/url/auto', {url:props.thisFqdn.targetUrls[activeEndpointTab]})
        .then(res=>{
            setUrlData(res.data);
            setLoaded(true);
        })
        .catch(err=>console.log(err))
    }, [activeEndpointTab]);

    return (
        <>
        <nav style={{borderBottom: '2px groove #284B63'}} className="pl-2 navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-lg-0">
                        <h5 className="text-secondary ml-4">Target URL : &nbsp;&nbsp;{urls[0]}</h5>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="bg-secondary checklistStyle">
            <ul style={{listStyleType: "none"}}>
            {
                loaded && urlData.endpoints.map((endpoint, i) => { return (
                    <>
                    <li key={i}><a href={urlData.url + endpoint.endpoint} target="_blank" rel="noreferrer">{endpoint.endpoint}</a></li>
                    <ul style={{listStyleType: "none"}}>
                    {
                        endpoint.arjun.params.map((param, j) => { return (
                            <li key={j}>GET --   {param}</li>
                        )})
                    }
                    </ul>
                    <ul style={{listStyleType: "none"}}>
                    {
                        endpoint.arjunPost.params.map((param, j) => { return (
                            <li key={j}>POST --   {param}</li>
                        )})
                    }
                    </ul>
                    <ul style={{listStyleType: "none"}}>
                    {
                        endpoint.arjunJson.params.map((param, j) => { return (
                            <li key={j}>JSON --   {param}</li>
                        )})
                    }
                    </ul>
                    </>
                )})
            }        
            </ul>
        </div>
        <div className="bg-secondary workTableStyle">
        </div>
        </>
    )
}

export default Enumeration;