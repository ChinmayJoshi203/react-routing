import { Fragment } from "react"
import { Link } from "react-router-dom";

const Product=()=>{
    return(
        <Fragment>
            <div>
                <h2>Products</h2>
                <ul>
                    <li>
                     <Link to='/products/p1'>A Book</Link>   
                    </li>
                    <li>
                       <Link to='/products/p2'>A Carpet</Link> 
                    </li>
                    <li>
                    <Link to='/products/p3'>A Bat</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Product;