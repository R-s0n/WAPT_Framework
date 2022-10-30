# WAPT_Framework

_NOTE: This framework is designed to be used with the [Wildfire Toolkit](https://github.com/R-s0n/Wildfire-Toolkit)_

The Web Application Penetration Testing (WAPT) Framework is a full stack application designed to act as a Command & Control center for web app pen testing and bug bounty hunting.  The tool works by allowing users to add Fully-Qualified Domain Names (FQDNs), more commonly referred to as "Seeds" or "Roots" in bug bounty hunting.  These FQDNs are then scanned using `wildfire.py` from the [Wildfire Toolkit](https://github.com/R-s0n/Wildfire-Toolkit) with the results of the scans being stored and managed in the WAPT Framework.  

*Check out my LinkedIn posts like [this one](https://www.linkedin.com/feed/update/urn:li:activity:6849314055283466240/) for more information on how I search for bugs and where this framework falls into the bigger picture of my methodology!*

### Install

__NOTE: This app requres Node 14.x and NPM 6.x to install successfully__

*I recommend installing this framework on a Windows machine since it's simpler to install and use older versions of Node/NPM.*

#### Windows (Tested on Windows 10 Workstation and Windows Server 2016)

Downloading/Install Git for Windows:
https://gitforwindows.org/

Download/Install Node (NPM will be included):
https://nodejs.org/en/blog/release/v14.17.3/

Download/Install MongoDB:
https://www.mongodb.com/try/download/community

Install Server NPM Packages (From Root Directory):
`npm install`

Insall Client NPM Packages (From `client` Directory):
`npm install`

Install nodemon:
`npm install -g nodemon`

### Run

Server (Root Directory):
`nodemon server.js`

Client (`client` Directory):
`npm run start`
