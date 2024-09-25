
import style from "./plan.module.css";
const Plan=()=>{
    return(
            <>
             <br />
        <br />
        <br /><br />
        <div className="planss"></div>
        <div className={`${style.hea}`}>
                <div className={`${style.hol}`}><h1>READY TO START</h1>
                </div>
                <h1 className={`${style.hea33}`}>YOUR JOURNEY</h1>
                 <div className={`${style.holi}`}><h1>NOW WITH US</h1>
             </div>
        </div>


        <div className={`${style.but}`}>

 <div className={`${style.bu1}`}>
            <button className={`${style.b1}`}> <h3>BASIC PLAN</h3>
            <ul>
            <li><img src="whiteTick.png" alt="error"
            width="20px" />  2 hours of excercises</li>
            <li><img src="whiteTick.png" alt="error" width="20px"/> Free consultaion to coaches</li>
            <li><img src="whiteTick.png" alt="error"width="20px" />Access to The Community</li>
           
        </ul>
        <button className={`${style.b2}`}>Join Now</button>
                
            </button>

        </div>

 <div className={`${style.bu2}`}>

        <button className={`${style.b55}`}> <h3>PREMIUM PLAN</h3>
            <ul>
            <li><img src="whiteTick.png" alt="error"
            width="20px" />  5 hours of excercises</li>
            <li><img src="whiteTick.png" alt="error" width="20px"/> Free consultaion to coaches</li>
            <li><img src="whiteTick.png" alt="error"width="20px" />Accessto minibar</li>
           
        </ul>
        <button className={`${style.b2}`}>Join Now</button>
                
            </button>
        </div>
 <div className={`${style.bu3}`}>
        <button className={`${style.b1}`}> <h3>PRO PLAN</h3>
            <ul>
            <li><img src="whiteTick.png" alt="error"
            width="20px" />  8 hours of excercises</li>
            <li><img src="whiteTick.png" alt="error" width="20px"/> Free consultaion to coaches</li>
            <li><img src="whiteTick.png" alt="error"width="20px" />Free Fitness Merchandises</li>
           
        </ul>
        <button className={`${style.b2}`}>Join Now</button>
                
            </button>


  </div>
<div className={`${style.color}`}></div>

<br />
<br />
<br />

        </div>
        <br /><br /><br /><br /><br />
        <hr className={`${style.brr}`}/>
        <br /><br />

            </>

    )
}

export default Plan;