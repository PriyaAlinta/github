import * as React from 'react';
import { Accordion, Card } from "react-bootstrap";
import './index.css';
import './Home.css';
import { CurrentPage } from './Models';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

export default class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container-fluid nwisFont">
        <PageHeader page={CurrentPage.Home}/>

        <div className="row homeBanner" style={{backgroundImage: "url(/images/WEMStock.jpg)"}}>          
        </div>

        <div className="row">
          <div className="col-12">
            <div className="pt-4 pb-3 homeMainDiv">

              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <div className="row">
                      <div className="col-auto homeCardIcon ml-3 mr-2" style={{backgroundImage: "url(/images/house-electricity-icon.svg)"}}></div>
                      <div className="col"><h5 className="homeCardHeader">Alinta Energy – about us</h5></div>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="homeText">
                        <p>We are trusted by over 1 million Australians to power their homes.  We have a history of making energy simple & affordable.</p>
                        <p>We’ve been supplying energy to Australians for over 20 years. Alinta Energy owns and operates power stations and electrical and gas transmission assets across Australia and New Zealand.  In Western Australia, we operate in the Pilbara and the south west, including Perth.</p>
                        <p>We sell gas and electricity to over 1 million customers and we employ 800 people across Australia and New Zealand. As well as working to make energy more affordable, we’re underwriting or directly investing in 1,500MW of large scale renewable energy by 2025. These renewable generation and innovative projects across Australia include solar power, battery storage and major wind farm operations.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <div className="row">
                      <div className="col-auto homeCardIcon ml-3 mr-2" style={{backgroundImage: "url(/images/charger.svg)"}}></div>
                      <div className="col"><h5 className="homeCardHeader">Alinta Energy in the NWIS</h5></div>
                    </div>                    
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div className="homeText">
                        <p>ADEWAP Pty Ltd (ADEWAP) is the owner and operator of Alinta Energy’s Port Hedland assets and power supply operations.</p>
                        <p>ADEWAP owns and operates the Port Hedland Power Station and the ADEWAP 66kV transmission network (ADEWAP Network).  The ADEWAP Network connects the Port Hedland Power Station to the North West Interconnected System (NWIS) at Wedgefield and Murdoch Drive substations.</p>
                        <p>The Port Hedland Power Station is a large gas-fired power station.  ADEWAP supplies electricity from the Port Hedland Power Station to a small number of large use customers in the Port Hedland region.</p>
                        <p>The Western Australian Government has undertaken market reforms to enable competition in the NWIS.  As part of this process, ADEWAP’s Network is now a ‘covered network’ which makes it subject to new regulations under the Pilbara Networks Access Code (PNAC).</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <div className="row">
                      <div className="col-auto homeCardIcon ml-3 mr-2" style={{backgroundImage: "url(/images/business-contract-approve1.svg)"}}></div>
                      <div className="col"><h5 className="homeCardHeader">Pilbara Electricity Network Access Regulation</h5></div>
                    </div>                    
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <div className="homeText">
                        <p>Regulation of ADEWAP’s Port Hedland transmission network commenced on 1 July 2021.  This regulation is incorporated under the light-handed third-party network access regime of the PNAC.</p>
                        <p>Regulation under the PNAC focuses on the NWIS, which has three main operators of electricity networks: Alinta Energy, Horizon Power and Rio Tinto.  An Independent System Operator (ISO) performs power system oversight in accordance with the Pilbara Networks Rules (which includes administration of the Harmonised Technical Rules).</p>
                        <p>Alinta Energy is fully committed to the market reforms and PNAC regulations.  This website ensures that current and future customers in the NWIS have access to all relevant information on the ADEWAP Network.</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>

            </div>
          </div>
        </div>
              
        <PageFooter/>
      </div>
    );
  }
}
