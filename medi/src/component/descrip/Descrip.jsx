import React from 'react';
import './descrip.css';

const Descrip = () => {
    return (
        <section className="descrip">
            <div className="descrip-container">
                <h2 className="descrip-title">About MediPharma</h2>
                <p className="descrip-text">
                    At MediPharma, we are dedicated to providing top-quality healthcare solutions. 
                    From medicines to medical services, we ensure that your health needs are met with care and professionalism.
                </p>
                <div className="descrip-cards">
                    <div className="descrip-card">
                        <h3>Reliable Pharmacy</h3>
                        <p>Access a wide range of trusted medicines and healthcare products at our pharmacy.</p>
                    </div>
                    <div className="descrip-card">
                        <h3>Expert Medical Services</h3>
                        <p>Consult with certified medical professionals for personalized care and advice.</p>
                    </div>
                    <div className="descrip-card">
                        <h3>Customer Support</h3>
                        <p>Our friendly support team is available to assist you 24/7 with your healthcare needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Descrip;
