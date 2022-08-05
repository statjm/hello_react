import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function Detail(){
    // const [movie, setMovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    // await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    return <h1>Detail</h1>;
}

export default Detail;