import React from "react";

const OrderByAphaButton = ({onSort}) => {
    return(
        <button className="btn btn-primary me-2" onClick={onSort}>
            Alfabetsk ordning
        </button>
    );
    
}

export default OrderByAphaButton