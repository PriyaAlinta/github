import * as React from 'react';
import './index.css';
import './PublicationsConsultations.css';
import { CurrentPage } from './Models';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

export default class PublicationsConsultations extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid nwisFont">
        <PageHeader page={CurrentPage.PublicationsConsultations}/>

        <div className="row pcBanner" style={{backgroundImage: "url(/images/working-with-us.jpg)"}}>
        </div>
  
        <div className="row networkContent" style={{margin: "60px auto"}}>
          <div className="col">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-auto alintaIcon ml-3 mr-2" style={{backgroundImage: "url(/images/business-deal-handshake.svg)"}}></div>
                  <div className="col"><h4>Consultations</h4></div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="documents/ADEWAP Invitation for Submission 2021.pdf?t=1" target="blank">ADEWAP Invitation for Submission 2021</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP System Description 2021.pdf" target="blank">ADEWAP System Description 2021</a></li>
                  <li className="list-group-item"><a href="documents/ADEWEP Network Planning Standards 2021.pdf" target="blank">ADEWEP Network Planning Standards 2021</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP User Access Guide 2021.pdf" target="blank">ADEWAP User Access Guide 2021</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP Contributions Policy 2021.pdf" target="blank">ADEWAP Contributions Policy 2021</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP Queueing Policy 2021.pdf" target="blank">ADEWAP Queueing Policy 2021</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP Services and Pricing Policy 2021.pdf" target="blank">ADEWAP Services and Pricing Policy 2021</a></li>
                  <li className="list-group-item"><a href="documents/ADEWAP Sample ETAC 2021.pdf" target="blank">ADEWAP Sample ETAC 2021</a></li>
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
