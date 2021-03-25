import React, {useState} from 'react';
import axios from 'axios';

const SubDomainForm = props => {
    const [formData, setformData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const subdomainArray = formData.split("\n");
        let data = {};
        let scanner = props.thisScanner;
        data["fqdnId"] = props.thisFqdn._id;
        data[scanner] = subdomainArray;
        console.log(data);
        axios.post('http://localhost:8000/api/subdomainlist/update', data)
            .then(res=>{
                props.thisFormCompleted(true);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div className="row mt-5">
            <div className="col-12">
                <form className="form-floating ml-3" onSubmit={handleSubmit}>
                    <label>Paste contents of {props.thisScanner}.{props.thisFqdn.fqdn}.txt here:</label>
                    <textarea className="form-control" style={{height:"300px", width:"600px"}} placeholder="example.com&#x0a;dev.example.com&#x0a;beta.example.com&#x0a;..." onChange={(e)=>setformData(e.target.value)}></textarea>
                    <button className="btn btn-primary mt-2" type="submit">Add Subdomains</button>
                </form>
            </div>
        </div>
    )
}

export default SubDomainForm