import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './style.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email'; 
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {/* {'Copyright © '} */}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  // const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className="footerContainer" >
        <section>
          <div>
              <Typography variant="h6" gutterBottom>
              Social
              </Typography>
              <a href="https://github.com/SonalBairwa/">
                  <img  className="searchIcon" src={require('../../assets/blog-images/git.png')} alt="Search" width="30" />
              </a>
              <a href="https://www.linkedin.com/in/sonal-bairwa-51004711a/">
                  <img  className="searchIcon" src={require('../../assets/blog-images/linkedin2.png')} alt="Search" width="30" />
              </a>
          </div>
        
        </section>
        <section>
        <Typography>Contact:</Typography> 
             <Grid container direction="row">
              <Grid ><PhoneIcon style={{marginRight:"10px"}}/></Grid>
              <Grid >+91 7483629227</Grid>
              </Grid>
              <Grid container direction="row">
              <Grid ><EmailIcon style={{marginRight:"10px"}}/></Grid>
              <Grid >bairwasonal20@gmail.com</Grid>
              </Grid>
           
        </section>
        </div>
        <Copyright />
      </Container>
    </footer>
  );
}

// Footer.propTypes = {
//   description: PropTypes.string,
//   title: PropTypes.string,
// };