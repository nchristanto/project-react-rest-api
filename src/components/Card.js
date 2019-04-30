import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {getMovies} from '../utils/api'

const style = {

  container:{
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    
  }
  ,
  card: {
    width: "300px",
    height: "600px",
    paddingTop: "20px",
    marginTop: "50px"
    
  },
  media: {
    height: "500px" 
  },
  content: {
    width: "300px",
    height: "90px"
  }, 
  title: {
    fontFamily: "Roboto, san-serif",
    fontSize: "25px", 
    maxWidth: "400px",
    textAlign: "center",
    marginTop: "20px",

  },
  description: {
    width: "150px"
  }
}

class MovieCard extends React.Component{

  state = {
    movies : []
  }

  componentDidMount() {

       getMovies().then((result) => {
         this.setState({
           movies: result
         })
       })
   
  }
  
  render(){
    const moviesList = () => this.state.movies.map((item, index) => {
      return (
          <div>
          
            <CardActionArea key={index} style={style.card} >
              <CardMedia style={style.media}
              image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              title="Contemplative Reptile"
            />
            <CardContent style={style.content}>
              <Typography style={style.title}  gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography style={style.description} component="p">
              
              </Typography>
            </CardContent>  
            </CardActionArea>
          
        </div>
        )
    }) 
    
    return(   
      <div>
        <Card style={style.container}>  {moviesList()} </Card>
         
      </div>
    )
  }
}

export default MovieCard

