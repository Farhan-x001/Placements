import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './student.css';
export default function Student() {

    return (
     <div className="startup">
        <div className='head'>
        <h1>Welcome to Ayush-Startups</h1>
        </div>
        <br></br >
        <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="carousel" // Add a custom CSS class for styling
      >
        <div>
          <img src="https://i.ibb.co/zZNt3vp/AYUSH-Business.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://i.ibb.co/KqSDCbW/2.png" alt="Image 2" />
        </div>
        <div>
          <img src="https://i.ibb.co/30Hq4hn/3.png" alt="Image 3" />
        </div>
        <div>
          <img src="https://i.ibb.co/30Hq4hn/3.png" alt="Image 4" />
        </div>
      </Carousel>
      <div className='head2'>
        <h1>ABOUT AYUSH STARTUPS:</h1>
        </div>
            <div className="investinfo">

                <h2>Introduction to Ayush Startups:</h2>
                <br></br>
                <p>Ayush startups are a dynamic and innovative force within the realm of holistic healthcare. These ventures are revitalizing ancient healing traditions, such as Ayurveda, Yoga, Unani, Siddha, and Homeopathy, by blending them with contemporary science and technology. Ayush startups exemplify a commitment to holistic well-being and preventative healthcare, offering a wide array of products and services, from herbal remedies and wellness supplements to cutting-edge wellness apps and personalized health solutions. This burgeoning sector has not only experienced rapid growth but has also garnered global recognition for its role in promoting natural and sustainable healthcare practices</p>
                <br></br>
                <p>The Ayush startup ecosystem is not just reshaping the healthcare landscape; it is also contributing significantly to economic development. These startups are hubs of innovation, generating employment opportunities and demonstrating export potential. As the world increasingly embraces holistic approaches to health and well-being, Ayush startups stand at the forefront, pioneering a new era of personalized healthcare that resonates with individuals seeking balance, harmony, and natural remedies. In the coming years, Ayush startups are poised to play an integral role in redefining the future of healthcare and wellness, offering age-old wisdom tailored to meet the demands of the modern world.</p>
                <br></br>
            </div>
            <div className='investimg'>
    <img
          className="investimg"
          src="https://i.ibb.co/Hn2Fxqh/ayush-start.jpg"
          alt=""
        />
    </div><div className='patners'>
    <center> <h1>Our patners</h1></center>
        
        </div>
            <div className="investors-cabin" >
                <div className="startup-details2">
                    <center>
                    <h2>Dabuar</h2></center>
                    <div className='logo2'>
                    <img src="https://i.ibb.co/MDBgzBt/ayush-dabur.jpg" alt="Image 1" />
                    </div>
                </div>
            </div>
            <div className="investors-cabin1" >
                <div className="startup-details1">
                <center>
                    <h2>Himalaya</h2></center>
                    <div className='logo1'>
                    <img src="https://i.ibb.co/mqRXtTT/ayush-hi.jpg" alt="Image 1" />
                    </div>
                </div>
            </div>
            <div className="investors-cabin2" >
                <div className="startup-details2">
                <center>
                    <h2>mamaearth</h2></center>
                    <div className='logo'>
                     <img src="https://i.ibb.co/JcjpFL4/ayush-mamba.jpg" alt="Image 1" />
                    </div>
                </div>
            </div>
            
            <form action="#" method="post">
      <div>
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          name="studentId"
          placeholder="Enter Student ID"
          required
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter First Name"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter Last Name"
          required
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          placeholder="Select Date of Birth"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter Phone Number"
          required
        />
      </div>
      <div>
        <label htmlFor="departmentId">Department ID:</label>
        <input
          type="text"
          id="departmentId"
          name="departmentId"
          placeholder="Enter Department ID"
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
        </div>
    );
    
}
