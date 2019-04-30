import React from 'react'
import { Container, Row } from 'react-bootstrap'
// import { AppBar } from 'material-ui'
// import Appbar from '@material-ui/core/AppBar'
// import PropTypes from 'prop-types'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// class Card extends React.Component {
//   render() {
//     return (
//       <div>
//         <div title = "Movie Browser" />
//         <Container>
//           <Row>
//             <p>Search will go here</p>
//           </Row>
//           <Row>
//             <p>Movie list will go here</p>
//           </Row>
//         </Container>
//       </div>
//     )
//   }
// }

// export default Card; 

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Movie Browser
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Row>
          
        </Row>
        <Row>
         
        </Row>
      </Container>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
