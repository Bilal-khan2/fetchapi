// import moment from 'moment';
import "./index.css"

let Post =(props ,i) =>(
    <div key={i} className="post">
        <div className="heading">
    <div className="postHeader">
    </div>
    <div>
       <h4>{props.name}</h4>  <br />

    </div>
    <div className="desc">
        {props.postDes}
    </div>
    </div>
    <div className="posttext">
        {props.postText}
    </div>
  
    </div>

);
export default Post;