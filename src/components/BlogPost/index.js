import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPostData from '../../assets/data/post.json';

const BlogPost = (props) => {
   const[post,setPost]=useState({
      id:'',
      blogCategory:'',
      blogTitle  :'',
      slug:'',
      postedOn:'',
      author:'',
      blogImage:'',
      blogText:''
   });
   const [postId,setPostId] = useState('');
   useEffect(()=>{
      const postId=props.match.params.postId;
      const post = blogPostData.data.find(post=>post.id==postId);
      setPost(post);
      setPostId(postId);
   },[post,props.match.params.postId]);

   if(post.blogImage=='') return null;

    return (
            <Card style={{width:'70%'}}>
                 <div className="postHeader">
    <span className="postCategory">{post.blogCategory}</span>
    <h1 className="postTitle">{post.blogTitle}</h1>
    <span className="postedOn">posted on {post.postedOn} by {post.author}</span>
                 </div>
                 <div className="imageContainer">
                    <img className="image" alt="Post Image" src={require(`../../assets/blog-images/`+post.blogImage)} />
                 </div>
                 <div className="postContent">
                     <h3>{post.slug}</h3>
                     <p>{post.blogText}</p>
                 </div>
            </Card>    
    )
}

export default BlogPost;
