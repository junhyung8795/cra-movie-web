import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import styles from "../css/Movie.module.css";
function Movie ({id, medium_cover_image, title, rating}) {

    return (
        <div className={styles.movieBackground}>
          <img className={styles.img} src={medium_cover_image} alt={title} />
          <h2>
            <Link to={`/movie/${id}`} className={styles.title}>{title}</Link>   
          </h2>
            {parseFloat(rating) >= 9 ?  
          <div style={{display:"flex",
          alignItems:"center",
          }}>
            <h1 style={{
              fontSize:60,
              color:"yellow",
            }}>{rating}/
            </h1>
            <h3 style={{
              fontSize: 30,
            }}>10</h3>
          </div>: 
          <div style={{display:"flex",
           alignItems:"center",
           }}>
            <h1 style={{
              fontSize:60,
            }}>{rating}/</h1>
            <h3 style={{
              fontSize: 30,
            }}>10</h3>
          </div>
          }
        </div>);
}


Movie.propTypes ={
    id:PropTypes.number.isRequired,
    medium_cover_image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
}
export default Movie;