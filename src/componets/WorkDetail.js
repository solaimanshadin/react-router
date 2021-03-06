import React from 'react';

const WorkDetail = () => {
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src="https://imgur.com/X3h3ei5.png" alt=""/> 
                </div>
                <div className="col-md-6">
                    <h1>Name: This the name of selected product</h1>
                    <p>Id: the_id</p>
                </div>
            </div>          
        </div>
    );
};

export default WorkDetail;