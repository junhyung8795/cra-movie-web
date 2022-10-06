import Movie from "../components/Movie";
import { useState, useEffect} from "react";
import styles from "../css/Home.module.css";


function Home () {
    const [loading, setLoading]=useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() =>{
      const json = await
        (await fetch(
          "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
        )).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
      getMovies();
      }
    , [])
    console.log(movies);
    console.log(typeof(movies));
    console.log(loading);
    return (
      <div className={styles.background}>
        <img src="data:image/jpeg;base64,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" 
        className={styles.backgroundPicture} />
        {loading ? <h1 className={styles.loading}>LOADING...</h1> : 
        <div>
          <div className={styles.header}>
            <h1 >This is our recommendation!</h1>
          </div>
          <div className={styles.movieGrid}>
          {movies.map((movie)=>
          <Movie 
          id={movie.id}
          key={movie.id}
          medium_cover_image={movie.medium_cover_image} 
          title={movie.title}
          rating={movie.rating}
          />
          )}
          </div>
        </div>
        }
      </div>
    );
}

export default Home;