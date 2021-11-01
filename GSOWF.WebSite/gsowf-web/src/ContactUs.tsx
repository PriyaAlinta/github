import * as React from 'react';
import './index.css';
import './ContactUs.css';
import { CurrentPage } from './Models';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';
import { Mailbox, Envelope, Phone } from 'react-bootstrap-icons';

export default class ContactUs extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid nwisFont">
        <PageHeader page={CurrentPage.ContactUs} />

        <div className="row contactBanner" style={{backgroundImage: "url(/images/WhoWeAre.jpg)"}}>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="pt-4 pb-3 homeMainDiv">

              <div className="card">
                <div className="card-body" style={{padding: "35px"}}>
                  <p className="card-text">
                    Alinta DEWAP welcomes the feedback from interested parties.
                  </p>

                  <div className="card" style={{margin: "30px 0 0 0"}}>
                    <div className="card-header">
                      <div className="row">
                        <div className="col"><h4><Envelope className="mr-2 contactIcon"/> Email</h4></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        For questions related to NWIS market consultations : Email us at <a href="mailto:NWISmarketconsultation@alintaenergy.com.au">NWISmarketconsultation@alintaenergy.com.au</a>
                      </p>
                      <p className="card-text">
                        For NWIS network access queries : Email us at <a href="mailto:NWISnetworkaccessenquiries@alintaenergy.com.au">NWISnetworkaccessenquiries@alintaenergy.com.au</a>
                      </p>
                    </div>
                  </div>

                  <div className="card mt-3">
                    <div className="card-header">
                      <div className="row">
                        <div className="col"><h4><Mailbox className="mr-2 contactIcon"/> Postal Address</h4></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">Alinta Energy</p>
                      <p>Locked Bag 55</p>
                      <p>Perth WA BC 6849</p>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>

        <PageFooter />
      </div>
    );
  }
}
