import React from 'react';
import '../Component.css';

const Dashboard = props => {
    const thisFqdn = props.thisFqdn;
    const formatUpdated = thisFqdn.updatedAt.replace(/([A-Z])+/g, " ").replace(/(\.[0-9]+)/g, " GMT");
    
    return (
        <div className="bg-secondary dashboard">
            <div className="row ml-5 pl-5">
                <div className="col-6 mb-3">
                    <h2>FQDN: {thisFqdn.fqdn}</h2>
                </div>
                <div className="col-6 mb-3">
                    <h3>Data Last Updated: {formatUpdated}</h3>
                </div>
            </div>
            <div className="row ml-5 pl-5">
                <div className="col-4">
                    <h4>Subdomain Count:</h4>
                    <ul>
                        <li>amass: {thisFqdn.recon.subdomains.amass.length}</li>
                        <li>assetfinder: {thisFqdn.recon.subdomains.assetfinder.length}</li>
                        <li>ctl: {thisFqdn.recon.subdomains.ctl.length}</li>
                        <li>gau: {thisFqdn.recon.subdomains.gau.length}</li>
                        <li>github-search: {thisFqdn.recon.subdomains.githubSearch.length}</li>
                        <li>gospider: {thisFqdn.recon.subdomains.gospider.length}</li>
                        <li>hakrawler: {thisFqdn.recon.subdomains.hakrawler.length}</li>
                        <li>shosubgo: {thisFqdn.recon.subdomains.shosubgo.length}</li>
                        <li>shuffledns: {thisFqdn.recon.subdomains.shuffledns.length}</li>
                        <li>subdomainizer: {thisFqdn.recon.subdomains.subdomainizer.length}</li>
                        <li>subfinder: {thisFqdn.recon.subdomains.subfinder.length}</li>
                        <li>sublist3r: {thisFqdn.recon.subdomains.sublist3r.length}</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>Total Unique Subdomains: {thisFqdn.recon.subdomains.consolidated.length}</h5>
                    <h5>New Unique Subdomains ({thisFqdn.recon.subdomains.consolidatedNew.length}):</h5>
                    <div style={{width: '300px', height: '300px', padding: '5px', border: '1px solid black', overflowY: 'scroll'}}>
                        {
                            thisFqdn.recon.subdomains.consolidatedNew.map((subdomain, i) => {
                                return (
                                    <a style={{display: "block"}} href={"https://"+subdomain} key={i} target="_blank" rel="noreferrer">{subdomain}</a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-4">
                    <h5>Live Domains: {thisFqdn.recon.subdomains.httprobe.length}</h5>
                    <h5>New Live Domains ({thisFqdn.recon.subdomains.httprobeAdded.length}):</h5>
                    <div style={{width: '300px', height: '130px', padding: '5px', border: '1px solid black', overflowY: 'scroll'}}>
                        {
                            thisFqdn.recon.subdomains.httprobeAdded.map((subdomain, i) => {
                                return (
                                    <a style={{display: "block"}} href={subdomain} key={i} target="_blank" rel="noreferrer">{subdomain}</a>
                                )
                            })
                        }
                    </div>
                    <h5>Domains Taken Down ({thisFqdn.recon.subdomains.httprobeRemoved.length}):</h5>
                    <div style={{width: '300px', height: '130px', padding: '5px', border: '1px solid black', overflowY: 'scroll'}}>
                        {
                            thisFqdn.recon.subdomains.httprobeRemoved.map((subdomain, i) => {
                                return (
                                    <a style={{display: "block"}} href={subdomain} key={i} target="_blank" rel="noreferrer">{subdomain}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="row ml-5 pl-5">
                <div className="col-4">
                    <h5>Active Web Servers: {thisFqdn.recon.subdomains.masscanLive.length}</h5>
                    <div style={{width: '300px', height: '300px', padding: '5px', border: '1px solid black', overflowY: 'scroll'}}>
                        {
                            thisFqdn.recon.subdomains.masscanLive.map((server, i) => {
                                return (
                                    <div key={i}>
                                    <a href={server} className="m-0 mt-2" target="_blank" rel="noreferrer">{server}</a><br/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-4">
                    <h5>New Servers: {thisFqdn.recon.subdomains.masscanAdded.length}</h5>
                    <div style={{width: '300px', height: '300px', padding: '5px', border: '1px solid black', overflowY: 'scroll'}}>
                        {
                            thisFqdn.recon.subdomains.masscanAdded.map((server, i) => {
                                return (
                                    <div key={i}>
                                    <a href={"http://"+server} className="m-0 mt-2" target="_blank" rel="noreferrer">{server}</a><br/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;