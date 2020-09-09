import React from 'react';
import './style.css'; 
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Avatar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
  }));


const Logo=(props)=> {
    const classes = useStyles();
    return (
        <div className="logo">
            <div className="profile">
                <Avatar alt="Sonal Bairwa" className={classes.large} style={{display:"inline-flex",}}  src={require('../../assets/blog-images/sonal_profile.jpg')} />
            </div>
            <h1 href="#">Sonal Bairwa</h1>
            <h3>Full-Stack Developer</h3>
            <h3>PHP | Python | React</h3>
            
        </div>
    )
}

export default Logo;
