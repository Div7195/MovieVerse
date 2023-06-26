import MovieItem from "./MovieItem";
import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import fetch from "node-fetch";
import { Link } from "react-router-dom";
let trendingMovies = [];
const moviesTemp = [
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },
    {
        imageSrc : 'https://www.themoviedb.org/t/p/w220_and_h330_face/3rINdUPSy9AklJg74jWHOyUXuZd.jpg',
        movieName : 'Lord Of Rings',
        releaseDate : '10th jan',
        rating : '87%'
    },

]







const MovieList = (props) => {
    console.log('end')
    const [movies, setMovies] = useState(moviesTemp);
    let url = '';
    
    if(props.data === 'trending'){
     url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    }else if(props.data === 'nowplaying'){
        url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    }else if(props.data === 'upcoming'){
        url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    }
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI5MTRjZjNlNDc2ZWNjNDVjMzU5ZDQwN2NhYmEwYiIsInN1YiI6IjY0OTM0ZmQwOWEzNThkMDBjNTk1ZmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18srMUd5KoumpgOwzSmsRzbXT3StAk7i5uazf_J8Vds'
        }
      };
      useEffect(() => {
        
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            trendingMovies = json.results.map(({original_title, poster_path, release_date ,vote_average, id}) => { return {movieName : original_title, imageSrc: "https://image.tmdb.org/t/p/w500" + poster_path, releaseDate:release_date, rating : vote_average, id:id}});
            setMovies(trendingMovies);
        }).catch(err => console.error('error:' + err));
    },[]);

    return (
        <>
        <div  style = {{display: 'flex',
            overflowX:'scroll',
            marginLeft:'50px', 
            marginRight:'60px',
            marginTop:'10px',
            
            }}
            >
        {
            movies && movies.length > 0 ? movies.map(movie => (
                <Link to={`/movie/${movie.id}`} style={{textDecoration:'none' , color:'inherit'}}>
                        <MovieItem  movie = {movie}/>
                 </Link>
    ))
    :
            <Box style={{ color:'#878787', margin:'30px 80px', fontSize:18 }}>No data available to display</Box>
            
    }
        </div>
        
            </>
    )
}

export default MovieList;