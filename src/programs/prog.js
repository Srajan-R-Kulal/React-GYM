
import style from "./prog.module.css";
const Prog=()=>{
    return(
        <>
        <br />
        <br />
        <br /><br />
        <div className="programss"></div>
        <div className={`${style.hea}`}>
        <div className={`${style.hol}`}><h1>EXPLORE OUR</h1>
        </div>
        <h1 className={`${style.hol33}`}>PROGRAMS</h1>
        <div className={`${style.holi}`}><h1>TO SHAPE YOU</h1>
        </div>
</div>

<div className={`${style.but}`}>

            <div className={`${style.but1}`}>
                <button><h2>Strength Training</h2>
                <p>In this program, you are trained to
                     improve your strength through many 
                     exercises.</p>
                     <h2>Join know  <img src="rightArrow.png" alt="error" 
                     width="13  "/> </h2></button>

            </div>
            <div className={`${style.but2}`}>

            <button><h2>Cardio Training</h2>
                <p>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p> <h2>Join know  <img src="rightArrow.png" alt="error" 
                     width="13  "/> </h2></button>

            </div>
            <div className={`${style.but3}`}>

            <button><h2>Fat Burning</h2>
                <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p> <h2>Join know  <img src="rightArrow.png" alt="error" 
                     width="13  "/> </h2></button>

            </div>
            <div className={`${style.but4}`}>

            <button><h2>Health Fitness</h2>
                <p>This programs is designed for those who exercises only for their body fitness not body building.</p> <h2>Join know  <img src="rightArrow.png" alt="error" 
                     width="13  "/> </h2></button>

            </div>



</div>
        </>


    )
}

export default Prog;