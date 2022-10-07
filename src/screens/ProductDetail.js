import { useParams } from "react-router-dom";

const ProductDetail=()=>{
    const params=useParams()
    return(
        <div>
            <h2>Product Details!</h2>
            <p>{params.productid}</p>
        </div>
    )
}

export default ProductDetail;