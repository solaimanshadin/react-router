import React from 'react';
import { useParams } from 'react-router';
import works from '../fakeData/works.json';
const WorkDetail = () => {
    const { name } = useParams();
    const work = works.find(work => work.name == name)
    const {image, description} = work || {};


    if(!work){
        return <h1 className="my-5 text-center">Work not found!</h1>
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt=""/> 
                </div>
                <div className="col-md-6"> 
                    <h4>{name} </h4>
                    <p className="border-top pt-5"><strong>Description:</strong> {description}</p>
                </div>
            </div>          
        </div>
    );
};

export default WorkDetail;