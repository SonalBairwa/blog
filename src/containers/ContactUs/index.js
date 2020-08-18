import React from 'react';
import Card from '../../components/UI/Card';
import './style.css';
import Footer from '../../components/Footer';
const ContactUs=(props)=> {
    return (
        <React.Fragment>
            <div className="contactUsContainer">
                <Card style={{height:'200px'}}>
                    <span>
                        Comming Soon....
                    </span>
                </Card>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default ContactUs;
