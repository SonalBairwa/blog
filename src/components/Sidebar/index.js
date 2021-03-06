import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPostData from '../../assets/data/post.json';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Sidebar = (props) =>{

    const[posts,setPosts]=useState([]);
   useEffect(()=>{
      const posts = blogPostData.data;
      setPosts(posts);
   },[posts]);

    return (
        <div className="sidebarContainer" style={{width:props.width}}>
            <div>
            <Card>
                <div className="cardHeader">
                    <span>About Us</span>        
                </div>
                <div className="cardImageContainer">
                    <img alt="" src={require('../../assets/blog-images/shree.jpg')} />        
                </div>
                <div className="cardBody">
                    <p className="personalBio">
                    I am Sonal Bairwa , this is my first blog in React. React is very good and easy to learn.Hope you like my blog.
                    </p>
                </div>
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                
                    <div className="recentPosts">
                        {
                            posts.map(post=>{
                                    return(
                                        <NavLink key={post.id} to={`/post/${post.slug}`}>
                                            <div className="recentPost">
                                                <h3 className="">{post.blogTitle}</h3>
                                                <span>{post.postedOn}</span>
                                            </div>
                                        </NavLink>
                                    );
                            })
                        }
                    </div>
                
            </Card>
            <Card>
                <div className="cardHeader">
                    <span>Wooden</span>
                </div>
                <div className="cardImageContainer">
                    <img alt="" src={require('../../assets/blog-images/wooden.jpg')} />        
                </div>
            </Card>
            </div> 
        </div>
        
    )
}

export default Sidebar;
