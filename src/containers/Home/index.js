import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/UI/Card';
import './style.css';
import RecentPosts from './RecentPosts';



const Home = props => {
    // return <Sidebar width={'100%'} />;
    const gallaryHeight=450;
    const gallaryStyle = {
        height:gallaryHeight+'px',
        overflow:'hidden'
    };

    const sideImageHeight = gallaryHeight/3;

    return (
        <div>
            <Card>
                <div className="gallaryPost" style={gallaryStyle}>
                    <section style={{width:'70%'}}>
                        <div className="gallaryImage">
                            <img alt="" src={require('../../assets/blog-images/team.jpg')} />        
                        </div>
                    </section>
                    <section className="sideImageWrapper" style={{width:'30%'}}>
                        
                        <div className="gallaryImage" style={{height:`${sideImageHeight}px`}}>
                            <img alt="" src={require('../../assets/blog-images/mug.jpg')} />        
                        </div>
                        <div className="gallaryImage" style={{height:`${sideImageHeight}px`}}>
                            <img alt="" src={require('../../assets/blog-images/blog.jpg')} />        
                        </div>
                    </section>
                </div>
            </Card>   
            <section className="HomeContainer">
                <RecentPosts style={{width:'70%'}} />
                <Sidebar />
            </section>   
        </div>
    )
}

export default Home;