
import style from "./why.module.css";
const Why=()=>{
    return(
        <>
        <br /><br /><br /><br /><br /><br />
        <div className="whyy"></div>
        <div className={`${style.full}`}>
        <div className={`${style.left}`}>
             <div className={`${style.lef1}`}>
             <div className={`${style.lef11}`}>
                <img src="image1.png" alt="error" 
                height="550"
                width="250"/>

             </div>
             <div className={`${style.lef12}`}>
             <div className={`${style.lef123}`}>
                <img src="image2.png" alt="error"
                height="290"
                width="450" />
                </div>

                <div className={`${style.lef21}`}>

                <div className={`${style.lef222}`}>

                    <img src="image3.png" alt="error"
                    height="180"
                    width="200" />
                </div>
                <div className={`${style.lef223}`}>

                    <img src="image4.png" alt="error" 
                    height="180"
                    width="200"/>

                    
                </div>

                </div>
                
             </div>

             </div>



        </div>
             <div className={`${style.right}`}>
            <h2>SOME REASONS</h2>
            <div className={`${style.ho}`}>
                    <div className={`${style.hol}`}>
                        <h1>WHY</h1>
                     </div>
                    <div className={`${style.hol2}`}>
                    <h1> CHOOSE US?</h1>
                    </div>
            </div>
            <ul>
            <li><img src="tick.png" alt="error"
            width="20px" />  OVER 140+ EXPERT COACHS</li>
            <li><img src="tick.png" alt="error" width="20px"/> SMARTER AND FASTER THAN BEFORE</li>
            <li><img src="tick.png" alt="error"width="20px" />1 FREE PROGRAM FOR NEW MEMBER</li>
            <li><img src="tick.png" alt="error"width="20px" />RELIABLE PARTNERS</li>
        </ul>
            
        </div>


       


        </div>
       
        
        </>

    )
}

export default Why;