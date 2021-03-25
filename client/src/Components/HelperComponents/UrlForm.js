import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UrlForm = props => {
    const [url, setUrl] = useState("");
    const [urlList, setUrlList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.post('http://localhost:8000/api/urllist', {fqdnId:props.thisFqdn._id})
            .then(res=>{
                setUrlList(res.data[props.thisScanner]);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    }, [props.thisFqdn, props.thisScanner])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {};
        let scanner = props.thisScanner;
        let currentUrls = urlList;
        currentUrls.push(url);
        data["fqdnId"] = props.thisFqdn._id;
        data[scanner] = currentUrls;
        console.log(data);
        axios.post('http://localhost:8000/api/urllist/update', data)
            .then(res=>{
                console.log(res.data);
                setLoaded(false);
                setUrl("");
                setUrlList(currentUrls);
                setLoaded(true);
            })
            .catch(err=>console.log(err));
    }

    const deleteUrl = (index) => {
        setLoaded(false);
        let data = {};
        let scanner = props.thisScanner;
        let currentUrls = urlList.filter((url, i) => {
            return i !== index
        });
        data["fqdnId"] = props.thisFqdn._id;
        data[scanner] = currentUrls;
        console.log(data);
        axios.post('http://localhost:8000/api/urllist/update', data)
            .then(res=>{
                setUrlList(currentUrls)
                console.log(res);
                setLoaded(true);
            })
    }

    return (
                <>
                <div className="col-12 mt-4">
                    <div style={{padding: '10px', height: '300px', width: '1000px', overflowY: 'scroll', border: '1px solid black'}}>
                        {
                            loaded && urlList.map((url, i)=>{
                                return(
                                    <p key={i}><button className="btn btn-primary" onClick={(e)=>deleteUrl(i)}>Delete</button>{url}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-12 mt-3 ml-5">
                    <form onSubmit={handleSubmit}>
                    <div className="col-10">
                        <label htmlFor="notableUrl" className="form-label">Notable URL</label>
                        <input value={url} type="text" className="form-control" id="notableUrl" aria-describedby="notableUrlSubtext" onChange={(e)=>setUrl(e.target.value)} />
                    </div>
                    <div className="col-2 mt-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </form>
                </div>
                </>
    )
}

export default UrlForm;