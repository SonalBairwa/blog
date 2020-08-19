import React from 'react';
import Card from '../../../components/UI/Card';
import './style.css';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom:'20px'}}>
            {/* <section className="featurePost">
                <FeaturePost style={{marginRight:"20px"}} />
                <FeaturePost style={{marginLeft:"20px"}} />
            </section>  */}
            <div className="postImageWrapper">
                <img alt="" src={require('../../../assets/blog-images/hog1.jpg')} />        
            </div>
            <div style={{textAlign:"center"}}>
                <span>Features</span >
                <h2>Hogenakkal Waterfalls</h2>
                <span>published on 20,July 2020</span>
                <p>Hogenakkal Falls is a waterfall in South India on the Kaveri river on the border between Dharmapuri district of Tamil Nadu and Chamrajnagar district of Karnataka. It is located 127 km from Bangalore, 165 km from Kollegal, 147 km from Kolar, 152 km from Kolar Gold Fields and 46 km from Dharmapuri.</p>
                <button>Read More</button>
            </div>
        </Card> 
        <Card style={{marginBottom:'20px'}}>Post 2</Card>  

    </div>
   )

 }

export default RecentPosts