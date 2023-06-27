import React, { useEffect, useState ,useContext } from "react";
import { styled, Box, Typography } from "@mui/material"
import fetch from "node-fetch";
import { Link, useParams, useSearchParams, useNavigate  } from "react-router-dom";
import {Grid} from "@mui/material"
import MovieItem from "../home/movieItems/MovieItem";
import { DataContext } from '../../context/DataProvider'
import { API } from "../../service/api";


const SideBarContainer = styled(Box)`
    display:inline-block;
    width:290px;
    background:#242e34;
    height:100%;
    overflow-y: auto;
    position: fixed;
    
`
const ListSubHeading = styled(Typography)`
    color:#c6cbd3;
    font-size:13px;
    padding: 5px 5px 5px 15px;
    margin-top:20px;
`
const ListItem = styled(Link)`
    color:#fff;
    padding: 5px 5px 5px 15px;
    &:hover{
        background-color:#303b42;
    }
    cursor:pointer;
    border-radius:10px;
    text-decoration:none;
    margin-top:3px;
    font-size:18px;
    font-family: 'Roboto Condensed', sans-serif;
`
const MainContenBox = styled(Box)`
    margin-left:290px;
    display:inline-block;
    position:absolute;
    top:70px;
    `

const Library = () => {
    const {setAccount} = useContext(DataContext);
    const {account}=useContext(DataContext);
    const obj = {
        userId:account.id,
      }
    const [movies, setMovies] = useState([]);
    
    const [searchParams] = useSearchParams();
    const list = searchParams.get('list');
    
    const {choice} = useParams();
    const navigate = useNavigate();


    const handleLogout = () => {
        setAccount({username : '', loggedIn:false, id:''});
    }
    
    
    useEffect(() => {

        const fetchOneWatchLater = async(s) => {
            
            const url = `https://api.themoviedb.org/3/movie/${s}?language=en-US`;
                const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI5MTRjZjNlNDc2ZWNjNDVjMzU5ZDQwN2NhYmEwYiIsInN1YiI6IjY0OTM0ZmQwOWEzNThkMDBjNTk1ZmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18srMUd5KoumpgOwzSmsRzbXT3StAk7i5uazf_J8Vds'
                }
                };

                try {
                    const res = await fetch(url, options);
                    const json = await res.json();
                
                    const movieObj = {
                      movieName: json.original_title,
                      imageSrc: "https://image.tmdb.org/t/p/w500" + json.poster_path,
                      releaseDate: json.release_date,
                      rating: json.vote_average,
                      id: s,
                    };
                
                    return movieObj;
                  } catch (error) {
                    // Handle error here
                    console.error(error);
                    return null;
                  }
        }
        const fetchOneFavorite = async(s) => {
            
            const url = `https://api.themoviedb.org/3/movie/${s}?language=en-US`;
            const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI5MTRjZjNlNDc2ZWNjNDVjMzU5ZDQwN2NhYmEwYiIsInN1YiI6IjY0OTM0ZmQwOWEzNThkMDBjNTk1ZmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18srMUd5KoumpgOwzSmsRzbXT3StAk7i5uazf_J8Vds'
            }
            };

            try {
                const res = await fetch(url, options);
                const json = await res.json();
            
                const movieObj = {
                  movieName: json.original_title,
                  imageSrc: "https://image.tmdb.org/t/p/w500" + json.poster_path,
                  releaseDate: json.release_date,
                  rating: json.vote_average,
                  id: s,
                };
            
                return movieObj;
              } catch (error) {
                // Handle error here
                console.error(error);
                return null;
              }
    }


        const fetchWatchLaterMovieDetails = async(list) => {
            
            let movieList = [];
            for(let i = 0;i<list.length;i++){
                let movieObj = await fetchOneWatchLater(list[i]);
                movieList.push(movieObj)
            }
            return movieList;
        }
        const fetchFavoriteMovieDetails = async(list) => {
            let movieList = [];
            for(let i = 0;i<list.length;i++){
                let movieObj = await fetchOneFavorite(list[i]);
                movieList.push(movieObj)
        }
        return movieList;
    }
        const fetchData=async ()=>{
            
            let favList = [];
            let watchLaterList = [];
            let response  = await API.getWatchLater({userId:account.id});
        if(response.isSuccess){
            console.log('Fetched string list')
            console.log(response.data)
            for(let i = 0;i<response.data.length;i++){
                watchLaterList.push(response.data[i]);
            }
          }else{
            console.log('cant get string list')
          }
       let response2 = await API.getFavorite({userId:account.id});
        if(response2.isSuccess){
            console.log('Fetched string list')
            for(let i = 0;i<response2.data.length;i++){
                favList.push(response2.data[i]);
            }
            }else{
                console.log('cant get string list')
            }
          
        
          if(searchParams.get('list') === 'watchlater'){
            let tempList = await fetchWatchLaterMovieDetails(watchLaterList);
            console.log(tempList)
            setMovies(tempList);
            
            }else{
            let tempList = await fetchFavoriteMovieDetails(favList);
            console.log(tempList)
            setMovies(tempList) 
            }
    }

    fetchData();
}, [list])
    






    return(
        <>
        <SideBarContainer >
        <Box style = {{display:'flex', flexDirection:'column' }}>
        <ListSubHeading>Library</ListSubHeading>
        <ListItem to = {`?list=favorites`}>Favorites</ListItem>
        <ListItem to = {`?list=watchlater`}>Watch Later</ListItem>
        <ListSubHeading >Logout yourself</ListSubHeading>
        <ListItem to = {`/`} onClick={()=>handleLogout()}>Logout</ListItem>
        </Box>
        </SideBarContainer>
        <MainContenBox>
        
    <Grid container>
    <Grid container item lg={12} sm={12} xs={12}>
        {
            console.log(movies)
        }
        {
            
            movies && movies.length > 0 ? movies.map(movie => (
                <Grid item lg={2} sm={3} xs={12}>
                    <Link to={`/movie/${movie.id}`} style={{textDecoration:'none' , color:'inherit'}}>
                        <MovieItem  movie = {movie}/>
                 </Link>
                </Grid>
            ))
            :
            console.log('no data to show')
        }
        </Grid>
        </Grid>
    </MainContenBox>
        </>
    )
}
export default Library;