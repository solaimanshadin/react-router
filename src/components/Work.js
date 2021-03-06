import React from 'react';
import {
    Link
} from "react-router-dom";
const Work = (props) => {
    const {id, name,image} = props.work;
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <img className="card-img-top" src={image}  alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="text-center">
                        <Link to={'/work/'+ name} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;