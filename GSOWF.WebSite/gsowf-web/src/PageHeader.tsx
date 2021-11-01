import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentPage } from './Models';

function PageHeader(props: any) {
  const history = useHistory();

  const activeItem = "btn btn-link nav-link text-center shadow-none active";
  const inactiveItem = "btn btn-link nav-link text-center shadow-none";
  const homeClass = props.page === CurrentPage.Home ? activeItem : inactiveItem;
  const networkClass = props.page === CurrentPage.OurNetwork ? activeItem : inactiveItem;
  const pcClass = props.page === CurrentPage.PublicationsConsultations ? activeItem : inactiveItem;
  const contactClass = props.page === CurrentPage.ContactUs ? activeItem : inactiveItem;

  return (
    <div className="row header">
      <div className="col-3">
        <button className="btn btn-link shadow-none" aria-label="index.html" onClick={()=>history.push('/')}>
          <img alt="Alinta"
            aria-label="Alinta Energy Logo" width="250px" height="auto" loading="lazy" src="alinta_default_logo.png"/>
        </button>
      </div>
      <div className="col-6">
        <ul className="nav nav-justified justify-content-center">
          <li className="nav-item">
            <button className={homeClass} aria-current="page" onClick={()=>history.push('/')}>Home</button>
          </li>
          <li className="nav-item">
            <button className={networkClass} aria-current="page" onClick={()=>history.push('OurNetwork')}>Our Network</button>
          </li>
          <li className="nav-item">
            <button className={pcClass} onClick={()=>history.push('PublicationsConsultations')}>Consultations</button>
          </li>
          <li className="nav-item">
            <button className={contactClass} onClick={()=>history.push('ContactUs')}>Contact us</button>
          </li>
        </ul>
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default PageHeader;
