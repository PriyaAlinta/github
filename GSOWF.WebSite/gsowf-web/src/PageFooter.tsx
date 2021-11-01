import React from 'react';
import { useHistory } from 'react-router-dom';

function PageFooter() {
  const history = useHistory();

  return (
    <div className="row footer pt-2">
        <div className="col">
          <button className="btn btn-link shadow-none" aria-label="index.html" onClick={()=>history.push('/')}>
            <img alt="Alinta"
              aria-label="Alinta Energy Logo" width="200px" height="auto" loading="lazy" src="alinta_white_logo.svg"/>
          </button>
        </div>
        <div className="col-auto mr-5">
          <ul className="nav">
            <li className="nav-item">
              <button className="btn btn-link nav-link text-center w-100 shadow-none" aria-current="page" onClick={()=>history.push('/')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-center w-100 shadow-none" aria-current="page" onClick={()=>history.push('OurNetwork')}>Our Network</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-center w-100 shadow-none" onClick={()=>history.push('PublicationsConsultations')}>Consultations</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-center w-100 shadow-none" onClick={()=>history.push('ContactUs')}>Contact us</button>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default PageFooter;
