import React from 'react';

const Work = (props) => {
    const {id, name,image} = props.work;
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <img className="card-img-top" src={image}  alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="text-center">
                        <button className="btn btn-success">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;