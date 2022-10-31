import React, {/*useState*/} from 'react'

export default function About(props) {

    // const [mystyle,setmystyle]= useState({
    //     color: 'black',
    //     backgroundColor: 'white'

    // })
    let mystyle={
      color: props.mode==='dark'?'white':'black',
      backgroundColor: props.mode==='dark'?'blue':'white'
    }

     // const [btnText, setbtnText] = useState("Enable dark mode")

    //  const toggleStyle=()=>{
    //    if( mystyle.color==='black'){
    //        setmystyle({
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border:'4px solid white'

    //        })
    //        setbtnText("Enable light mode")
    //    }
    //    else {
    //        setmystyle({
    //         color: 'black',
    //         backgroundColor: 'white'
    //        })
    //        setbtnText("Enable dark mode");
    //    }
    // }
    return (
        
        <div classNameName="container" style={mystyle}>
        <h2 className="my-4">About us</h2>
            <div className="accordion" id="accordionExample" style={mystyle} >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        STATEMENT #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is HASNAIN AHMAD</strong> and he is the student of comsats university islamabad campus. He is not good in studies but he is a hard worker and wants to learn new things.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
