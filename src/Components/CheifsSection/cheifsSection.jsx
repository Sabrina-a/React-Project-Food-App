import CheifCard from "../CheifCard/CheifCard" 
import img1 from '../../img/top-chiefs/img_1.jpg'
import img2 from '../../img/top-chiefs/img_2.jpg'
import img3 from '../../img/top-chiefs/img_3.jpg'
import img4 from '../../img/top-chiefs/img_4.jpg'
import img5 from '../../img/top-chiefs/img_5.jpg'
import img6 from '../../img/top-chiefs/img_6.jpg'

export default function CheifsSection(){

    const cheifs=[
        {
            name:'Juan Carlos',
            img:'../../img/top-chiefs/img_2.jpg',
            recipesCount:"10",
            cuisine:"Maxican"
        },
        {
            name:'John Doe',
            img:img2,
            recipesCount:"05",
            cuisine:"Maxican"
        },
        {
            name:'Erich Maria',
            img:img3,
            recipesCount:"13",
            cuisine:"Maxican"
        },
        {
            name:'Chris Brown',
            img:img4,
            recipesCount:"08",
            cuisine:"Maxican"
        },
        {
            name:'Blake Liveli',
            img:img5,
            recipesCount:"09",
            cuisine:"Maxican"
        },
        {
            name:'Ben Affleck',
            img:img6,
            recipesCount:"04",
            cuisine:"Maxican"
        },
    ]
    return(
        <div className="section cheifs" >
                <h1 className="title" >Our Top Cheifs</h1>
                <div className="top-cheifs-container">
                 {
                     cheifs.map(cheif=> (<CheifCard key={cheif.name} cheif={cheif}  />))
                 }

                </div>
        </div>
    )
}