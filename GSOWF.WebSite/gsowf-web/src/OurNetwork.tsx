import * as React from 'react';
import './index.css';
import './OurNetwork.css';
import { CurrentPage } from './Models';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

export default class OurNetwork extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid nwisFont">
        <PageHeader page={CurrentPage.OurNetwork}/>

        <div className="row networkBanner" style={{backgroundImage: "url(/images/network.jpg)"}}>
        </div>
  
        <div className="row networkContent" style={{margin: "60px auto 30px auto"}}>
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-auto alintaIcon ml-3 mr-2" style={{backgroundImage: "url(/images/house-electricity-icon.svg)"}}></div>
                  <div className="col"><h4>Our System</h4></div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="documents/ADEWAP System Description 2021.pdf" target="blank">System Description</a></li>
                <li className="list-group-item"><a href="documents/ADEWAP Network Single Line Diagram 2021.pdf" target="blank">Single Line Diagram</a></li>
              </ul>
              </div>
            </div>            
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-auto alintaIcon ml-3 mr-2" style={{backgroundImage: "url(/images/charger.svg)"}}></div>
                  <div className="col"><h4>Connect to our Network</h4></div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="documents/ADEWAP User Access Guide 2021.pdf" target="blank">User Access Guide</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP Services and Pricing Policy 2021.pdf" target="blank">Services and Pricing Policy</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP Queueing Policy 2021.pdf" target="blank">Queueing Policy</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP Sample ETAC 2021.pdf" target="blank">Sample ETAC</a></li>
                </ul>
              </div>
            </div>   
          </div>
        </div>
        <div className="row networkContent" style={{margin: "0 auto 60px auto"}}>
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-auto alintaIcon ml-3 mr-2" style={{backgroundImage: "url(/images/business-deal-handshake.svg)"}}></div>
                  <div className="col"><h4>Network Development</h4></div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="documents/ADEWEP Network Planning Standards 2021.pdf" target="blank">Network Planning Standards</a></li>
                <li className="list-group-item"><a href="documents/ADEWAP Contributions Policy 2021.pdf" target="blank">Contributions Policy</a></li>
              </ul>
              </div>
            </div>            
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-auto alintaIcon ml-3 mr-2" style={{backgroundImage: "url(/images/business-contract-approve1.svg)"}}></div>
                  <div className="col"><h4> </h4></div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="documents/ADEWAP Ringfencing Rules 2021.pdf" target="blank">Ringfencing Rules</a></li>
                </ul>
              </div>
            </div>   
          </div>
        </div>
              
        <PageFooter/>
      </div>
    );
  }
}
