import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


let videosList = [];
const VideosList = () => {
    const {id} = useParams();
    const [videos, setVideos] = useState(videosList);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI5MTRjZjNlNDc2ZWNjNDVjMzU5ZDQwN2NhYmEwYiIsInN1YiI6IjY0OTM0ZmQwOWEzNThkMDBjNTk1ZmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18srMUd5KoumpgOwzSmsRzbXT3StAk7i5uazf_J8Vds'
        }
        };
        fetch(url, options)
        .then(res => res.json())
        .then(json => {
            videosList = json.results.map(({key}) => {return {key:key}})
            setVideos(videosList);
    })
        .catch(err => console.error('error:' + err))


    },[])




    return (
        <>
            <div  style = {{display: 'flex',
            overflowX:'auto',
            marginLeft:'70px', 
            marginRight:'60px',
            marginTop:'10px',
            background:'#000',
            justifyContent:'space-between',
            borderRadius:'10px'
            }}
            >
        {
            videos && videos.length > 0 ? videos.map(video => (
                <iframe style={{marginRight:'20px', borderRadius:'10px'}} width="380" height="345" src={"https://www.youtube.com/embed/" + video.key+"?mute=1"}>
                </iframe>
    ))
    :
            <Box style={{ color:'#878787', margin:'30px 80px', fontSize:18 }}>No videos available to display</Box>
            
    }
        </div>
        </>
    )
}
export default VideosList;