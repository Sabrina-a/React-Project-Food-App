import CustomImage from "../CustomImage/CustomImage";
import img1 from '../../img/gallery/img_1.jpg';
import img2 from '../../img/top-chiefs/img_1.jpg';
export default function RecipeCard({recipe}){
    return(
        <div className="recipe-card">
           <CustomImage imgSrc={recipe.image} pt='65%'/> 
           <div className="recipe-card-info" >
                <img className="auther-img" src={img2} alt="cheif" />
                <p className="recipe-title" >{recipe.title}</p>
                <p className="recipe-desc" >Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <a href="#!" className="view-btn" > VIEW RECIPE </a>
           </div>
        </div>
    )
}