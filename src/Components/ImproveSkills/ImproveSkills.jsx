import img1 from '../../img/gallery/img_10.jpg'
export default function ImproveSkills(){
  let obj={img:img1} ;
    const list =[
        'Learn new recepies',
        'Experiment with food',
        'Write your own recepies',
        'Know nutrition facts',
        'Get cooking tips',
        'Get ranked'
    ]
    return(
        <div className="section improve-skills">
                    <div className="col img">
                        <img src={obj.img}/>
                   </div>
            <div className="col typography">
                <div className="title">Improve Your Culinary Skills</div>
                {
                    list.map((item,index)=>(
                        <p className="skill-item" key={index} >{item}</p>
                    ))
                }
                 <button className="btn">SIGNUP NOW</button>
            </div>

    </div>
    )
}