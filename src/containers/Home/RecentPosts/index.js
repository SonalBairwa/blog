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
            <div className="postImageWrapper">
                <img alt="" src={require('../../../assets/blog-images/blog.jpg')} />        
            </div>
            <div style={{textAlign:"center"}}>
                <span>Features</span >
                <h2>Khoya Khoya Chand</h2>
                <span>published on 20,July 2020</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters yielding he cattle greater were evening. Sixth make moving the multiply dominion creature beast made subdue lights him. Green of lights in their first. It there winged called after upon him. Bring one was upon Life moving. Them beast first all lights place air creature. </p>
                <button>Read More</button>
            </div>
        </Card> 
        <Card style={{marginBottom:'20px'}}>Post 2</Card>  
    
    </div>
   )

 }

export default RecentPosts