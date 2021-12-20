import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';

const HttpRequestSmuggling = props => {

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-12">
                    <p><b>Summary:</b> HTTP Request Smuggling occurs when the attacker sends a specially crafted request that causes the front-end proxies and back-end servers to desynchronize.  This vulnerablity occurs when the front-end proxies interpret the request as a single request while the back-end servers interpret it as two separate requests (or vice versa).</p>
                    <p><b>Variations:</b></p>
                    <ul>
                        <li>CL.TE -- The front-end server uses the Content-Length header and the back-end server uses the Transfer-Encoding header.</li>
                        <li>TE.CL -- The front-end server uses the Transfer-Encoding header and the back-end server uses the Content-Length header.</li>
                        <li>TE.TE -- The front-end and back-end servers both support the Transfer-Encoding header, but one of the servers can be induced not to process it by obfuscating the header in some way.</li>
                    </ul>
                    <p><b>Goal(s):</b></p>
                    <ol>
                        <li>Byass front-end security controls (Ex: Access /admin endpoint that would normally return a 403).</li>
                        <li>Reveal changes the front-end makes to incoming requests.</li>
                        <li>Capture the requests of other users.</li>
                        <li>Increase the impact of reflected XSS by using HTTP request smuggling to deliver the XSS payload.</li>
                        <li>Increase the impact of an internal open-redirect to a wide-open redirect.</li>
                        <li>Leverage HTTP request smuggling to perform web cache poisoning/deception.</li>
                    </ol>
                    <p><b>Methodology - Identifying Vulnerabilities:</b></p>
                    <ol>
                        <li>Use the HTTP Smuggle Probe extension.</li>
                        <li>More to come...</li>
                    </ol>
                    <p><b>Methodology - Exploiting Vulnerabilities:</b></p>
                    <ol>
                        <li>This will be added later...</li>
                    </ol>
                </div>
            </div>
        </div>
    );

}

export default HttpRequestSmuggling;