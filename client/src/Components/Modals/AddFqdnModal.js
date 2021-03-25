import axios from 'axios';
import React, {useState} from 'react';

const AddFqdnModal = props => {
    const [newFqdn, setNewFqdn] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/fqdn/new', {
            fqdn:newFqdn
        })
            .then(res=>{
                props.setFqdns([...props.fqdns, res.data]);
                props.setNoFqdns(false);
                axios.post('http://localhost:8000/api/subdomainlist/new', {fqdnId:res.data._id})
                    .then(res=>{
                        console.log(res);
                        axios.post('http://localhost:8000/api/urllist/new', {fqdnId:res.data.fqdnId})
                            .then(res=>console.log(res))
                            .catch(err=>console.log(err))
                    })
                    .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))
    }

    return (
        <>
        <h1>Add FQDN</h1>
        <p>Enter a new FQDN</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label>New FQDN:</label>
                <input type="text" onChange={(e)=>setNewFqdn(e.target.value)} />
            </div>
            <input type="submit" value="Add" />
        </form>
        </>
    );
}

export default AddFqdnModal;