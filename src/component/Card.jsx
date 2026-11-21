import { Ellipsis } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
       <div className="upper">
        <img src={props.img}></img>
        <div className="heading">
            <h3>{props.name}</h3> 
            <h4>{props.dateposted}</h4>
        </div>    
        <button><Ellipsis /></button> 
       </div>
        <div className="tag">
          <h3>{props.tags[0]}</h3>
          <h3>{props.tags[1]}</h3>
          <h3>{props.tags[2]}</h3>
          
        </div>
        <h2>{props.h2}</h2>
        <p>{props.para}</p>
      </div>
        <div className="bottom">
          <div className="heading2">
            <h3>{props.pay}<span>/hr</span></h3>
            <h4>Hourly</h4>
        </div>
        <button>Apply now</button>
        </div>
    </div>
  )
}

export default Card