import { Link } from "react-router-dom";
import React from 'react';
import './cabin.css';

export default function Cabin() {
  const user = true;
  return (
    <div className="write">
        <div className='head'>
        <h1>Welcome to Investor's Cabin</h1>
        </div>
        <br></br >
        <img
          className="writeImg"
          src="https://i.ibb.co/9GKpwXv/th-1.jpg"
          alt=""
        />
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        <br></br >
        <br></br >
        <div className="investors-cabin" >

      <div className="startup-details">
        <h2>Tech Innovators Inc.</h2>
        <p>
          A cutting-edge technology startup focused on innovation and AI
          solutions.
        </p>
        <h3>Founders</h3>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
        </ul>
        <h3>Funding Details</h3>
        <p>Funding Round: Series A</p>
        <p>Funding Amount: $5 million</p>
        <h3>Location</h3>
        <p>San Francisco, CA</p>
        <h3>Website</h3>
        <a
          href="https://www.techinnovators.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.techinnovators.com
        </a>
        <h3>Contact Information</h3>
        <p>Email: info@techinnovators.com</p>
      </div>
    </div>
    <div className="investors-cabin1" >
      <div className="startup-details1">
        <h2>Tech Innovators Inc.</h2>
        <p>
          A cutting-edge technology startup focused on innovation and AI
          solutions.
        </p>
        <h3>Founders</h3>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
        </ul>
        <h3>Funding Details</h3>
        <p>Funding Round: Series A</p>
        <p>Funding Amount: $5 million</p>
        <h3>Location</h3>
        <p>San Francisco, CA</p>
        <h3>Website</h3>
        <a
          href="https://www.techinnovators.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.techinnovators.com
        </a>
        <h3>Contact Information</h3>
        <p>Email: info@techinnovators.com</p>
      </div>
    </div>
    <div className="investors-cabin2" >
      <div className="startup-details2">
        <h2>Tech Innovators Inc.</h2>
        <p>
          A cutting-edge technology startup focused on innovation and AI
          solutions.
        </p>
        <h3>Founders</h3>
        <ul>
          <li>John Doe</li>
          <li>Jane Smith</li>
        </ul>
        <h3>Funding Details</h3>
        <p>Funding Round: Series A</p>
        <p>Funding Amount: $5 million</p>
        <h3>Location</h3>
        <p>San Francisco, CA</p>
        <h3>Website</h3>
        <a
          href="https://www.techinnovators.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.techinnovators.com
        </a>
        <h3>Contact Information</h3>
        <p>Email: info@techinnovators.com</p>
      </div>
    </div>
    <div className="investinfo">

      <h2>One of the fastest growing sectors in India</h2>
      <br></br>
      <p>The Ayush sector has grown 17% year on year between 2014 and 2020. The market size of the industry stands at $ 18.1 Bn from $ 2.85 Bn in 2014, clocking a phenomenal growth of almost 6 times. The sector likely to generate nearly 3 Mn job opportunities.</p>
      <br></br>
      <p>Share of sub-sectors in Ayush market size are Herbal Plants (43.35%), Nutraceuticals (24.65%), Pharmaceuticals (14.11%), Cosmeceuticals (8.37%), Plant Derivatives (5.14%) and Plant Extracts (4.39%). The sector of herbal medicine grew at the rate of 7.4 % per annum during 2014-20. Various sub-sectors, particularly, herbal pharmaceutical sector expanded at the rate of 18.5 % during the same period with the market share of 14.1 % in 2020. Nutraceuticals is the dominant sector in the industry accounting for 42.3% of the domestic market. Pharmaceuticals are also coming up with a share of 30% follow by herbal plants of 13.8%</p>
      <br></br>
      <p>Country’s exports in the sector expanded rapidly from $1.09 Bn in 2014 to $1.54 Bn in 2020, registering a robust growth rate of 5.9 % annually. The herbal pharmaceutical or medicament sector constituted 35.2% of Ayush exports in 2020, while the extracts and nutraceuticals sector shared around 22% export share each in the total, whereas medicinal and aromatic plant recorded 19.9% export share. India exports Ayush products to markets such as the USA, Nepal, Russia, Philippines, UAE, Kenya, Germany, Vietnam, China, Italy, The UK, Western Europe, Japan, Hong Kong etc</p>
    </div>
    <div className='investimg'>
    <img
          className="investimg"
          src="https://i.ibb.co/343x5W3/ayush-img.png"
          alt=""
        />
    </div>
    <button className="writeSubmit" type="submit"> 
          {user ? (
          <Link className="link" to="/settings">
              contact us!
          </Link>
          
        ) : (
          <ul className="topList">
            
            
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        </button>
    </div>
  );
}
