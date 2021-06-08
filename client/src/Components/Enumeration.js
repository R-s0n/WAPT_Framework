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
                        {
                        urls.map((tab, i) => {return (
                            <li className="mr-3 nav-item" key={i}>
                            { i === activeEndpointTab ?
                            <button className="border border-info nav-link btn btn-primary text-secondary active" aria-current="page" href="#">{tab}</button> :
                            <button className="border border-info nav-link btn btn-primary text-secondary" onClick={()=>setActiveEndpointTab(i)}aria-current="page" href="#">{tab}</button>
                            }
                            </li>
                        )})
                        }
                    </ul>
                </div>
            </div>
        </nav>
        <div className="bg-secondary checklistStyle">
            <ul style={{listStyleType: "none"}}>
            {
                loaded && urlData.endpoints.map((endpoint, i) => { return (
                    <li key={i}>{endpoint.endpoint}</li>
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