import React from 'react';
import './style.css';
// import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import './style.css';
import RecentPosts from './RecentPosts';
import blogData from '../../assets/data/post.json';
import Layout from '../../components/Layout';

const SideImage = (props)=>{
    return (
        <div className="gallaryImage" style={{height:`${props.height}px`}}>
            <img alt="" src={props.src} />        
        </div>
    );
}

const ImageGallary= (props) => {
    return (
        <div className="gallaryPost" style={props.gallaryStyle}>
        <section style={{width:'70%'}}>
            <div className="gallaryImage">
                <img alt="" src={require('../../assets/blog-images/'+props.imagesArray[0])} />        
            </div>
        </section>
        <section className="sideImageWrapper" style={{width:'30%'}}>
            <SideImage 
                height= {props.sideImageHeight}
                src={require("../../assets/blog-images/"+props.imagesArray[1])} 
            />
            <SideImage 
                height={props.sideImageHeight}
                src={require("../../assets/blog-images/"+props.imagesArray[2])} 
            />
            <SideImage 
                height={props.sideImageHeight}
                src={require("../../assets/blog-images/"+props.imagesArray[3])} 
            />
        </section>
    </div>
   
    )

 }

const Home = props => {
    // return <Sidebar width={'100%'} />;
    const gallaryHeight=450;
    const gallaryStyle = {
        height:gallaryHeight+'px',
        overflow:'hidden'
    };

    const sideImageHeight = gallaryHeight/3;
    const imgArray = blogData.data.map(post=>post.blogImage)

    return (
        <div>
            <Card>
                <ImageGallary 
                largeWidth = "70%"
                smallWidth = "30%"
                sideImageHeight = {sideImageHeight}
                gallaryStyle = {gallaryStyle}
                imagesArray ={imgArray}
                />
                
            </Card>   
            <section className="HomeContainer">
                <Layout>
                    <RecentPosts style={{width:'70%'}} />
                </Layout>
            </section>   
        </div>
    )
}

export default Home;