import React from "react";

const OrderByGradeButton = ({onSort}) => {
    return(
        <button className="btn btn-primary " onClick={onSort}>
            Betygsordning
        </button>
    );
    
}

export default OrderByGradeButton