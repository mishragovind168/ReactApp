import React from "react";
import propTypes from "prop-types";

const date = new Date().toUTCString();

NewsItems.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    publishedAt: propTypes.any,
    urlToImage: propTypes.string,
    url: propTypes.string
}

NewsItems.defaultProps ={
    title: "News",
    description: "Not Found",
    publishedAt: `${date}`,
    urlToImage: "/",
    url: "/"
}

export default function NewsItems(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.urlToImage} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-date">{props.publishedAt}</p>
                    <a href={props.url} className="btn btn-primary">Read More</a>
                </div>
        </div>
    );
}