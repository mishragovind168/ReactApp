import React, { useState, useEffect } from 'react';
import NewsItems from "./NewsItems";
import propTypes from "prop-types"


export default function NewsPage(){

    // static defaultProps ={
    //     coun
    // }

    // static propTypes={

    // }
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0ed5c729b8794bf7be813302c891f3c1&PageSize=18');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the first render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


    return(
        <>
            <div className="container my-3">
                <h1>DailyNews- Top HeadLines</h1>
               
                <div className="row">
                    {data.articles.map((element)=>{
                        return <div className="col-md-4 my-1" key={element.url}>
                        <NewsItems title={element.title?((element.title.length >100)?`${element.title.slice(0,100)}...`:element.title):""} 
                                   description={element.description?((element.description.length >200) ?`${element.description.slice(0,200)}...`:element.description):""} 
                                   urlToImage={element.urlToImage?element.urlToImage:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} 
                                   url={element.url}
                                   publishedAt={element.publishedAt?new Date(element.publishedAt).toUTCString():null}/>
                    </div>
                    })}
                </div>
                {/* <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" disabled={this.state.page <=1} onClick={this.handelOnClickPrev}>Provious</button>
                    <button type="button" className="btn btn-primary" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/18)} onClick={this.handelOnClickNext}>Next</button>
                </div> */}
            </div>
            
            </>
    );
}
