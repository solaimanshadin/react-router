import React from 'react';

const WorkDetail = () => {
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src="https://dummyimage.com/600x400/cfcfcf/000000.png" alt=""/> 
                </div>
                <div className="col-md-6">
                    <h4><strong>Name: </strong> This the name of selected project</h4>
                    <p><strong>Id: </strong> the_id</p>
                    <p className="border-top pt-5"><strong>Description:</strong> Description of the selected project.</p>
                </div>
            </div>          
        </div>
    );
};

export default WorkDetail;