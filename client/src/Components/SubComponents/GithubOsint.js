import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UrlForm from '../HelperComponents/UrlForm';

const GithubOsint = props => {
    const [urls, setUrls] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.post('http://localhost:8000/api/urllist', {fqdnId: props.thisFqdn._id})
            .then(res=>{
                const urlArray = [];
                urlArray.push(props.thisFqdn.fqdn);
                for (const url of res.data?.eyeWitness){
                    let temp = url.replace("http://", "").replace("https://", "").replace("/", "");
                    urlArray.push(temp);
                }
                setUrls(urlArray);
                setLoaded(true);
                console.log(urlArray);
            })
    }, [props.thisFqdn._id])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <p><b>DETAILS: </b>The links below can be used search for source code on GitHub.</p>
                    <div style={{padding: '10px', height: '225px', width: '1000px', overflowY: 'scroll', border: '1px solid black'}}>
                        {
                            loaded && urls.map((url, i)=>{
                                return (
                                    <div key={i}>
                                    <p className="m-0"><a href={`https://github.com/search?q=%E2%80%9C${url}%E2%80%9D`} target="_blank" rel="noreferrer">{url}</a></p>
                                    <p className="m-0"><a href={`https://github.com/search?q=%E2%80%9Cdev.${url}%E2%80%9D`} target="_blank" rel="noreferrer">dev.{url}</a></p>
                                    <p className="m-0"><a href={`https://github.com/search?q=%E2%80%9C${url}%E2%80%9D%E2%80%9Ddev%E2%80%9D`} target="_blank" rel="noreferrer">"dev" "{url}"</a></p>
                                    <p className="m-0"><a href={`https://github.com/search?q=%E2%80%9C${url}%E2%80%9D%20API_key`} target="_blank" rel="noreferrer">"{url}" API_key</a></p>
                                    <p className="m-0"><a href={`https://github.com/search?q=%E2%80%9C${url}%E2%80%9D%20password`} target="_blank" rel="noreferrer">"{url}" password</a></p>
                                    <p className="m-0"><a href={`https://github.com/search?q=%E2%80%9Cdev.${url}%E2%80%9D%20authorization`} target="_blank" rel="noreferrer">"{url}" authorization</a></p>
                                    </div>
                                )
                            })
                        }
                        

                    </div>
                </div>
            </div>
            <div className="row">
                <UrlForm thisFqdn={props.thisFqdn} thisScanner="Github"/>
            </div>
        </div>
    )
}

export default GithubOsint;