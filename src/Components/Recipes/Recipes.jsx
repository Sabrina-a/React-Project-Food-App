import PreviousSearches from "../PreviousSearches/PreviousSearches"
import RecipeCard from "../RecipeCard/RecipeCard"
export default function Recipes(){
    const recipes=[
    {
        title:"Chicken Pan Pizza",
        image:'../../img/gallery/img_1.jpg',
        authorImg:'../../img/top-chiefs/img_1.jpg'
    },
    {
        title:"Chicken Pan Pizza",
        image:'../../img/gallery/img_1.jpg',
        authorImg:'../../img/top-chiefs/img_1.jpg'
    },
    {
        title:"Spaghetti and Meatballs",
        image:'../../img/gallery/img_1.jpg',
        authorImg:'../../img/top-chiefs/img_1.jpg'
    },
    {
        title:"American Cheese Burger",
        image:'../../img/gallery/img_1.jpg',
        authorImg:'../../img/top-chiefs/img_1.jpg'
    },
    {
        title:"Mutton Biriyani",
        image:'../../img/gallery/img_1.jpg',
        authorImg:'../../img/top-chiefs/img_1.jpg'
    },
].sort(()=>Math.random() - 0.5)
    return(
     <div>
         <PreviousSearches/>
         <div className="recipes-container" >
                {/* <RecipeCard/> */}
                {recipes.map((recipe,index)=>(
                    <RecipeCard key={index} recipe={recipe} />
                )
                )}
         </div>
     </div>
    )
}