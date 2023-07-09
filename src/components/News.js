import React from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component';
// import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News = (props) => {
  console.log(props.country, "country..............")
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  
  const updateNews = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parseData = await data.json()
    props.setProgress(70)
    console.log(parseData)
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    
    props.setProgress(100)
  }

  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsWorld`
    updateNews() 
    //  eslint-disable-next-line
  }, [])
  
  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parseData = await data.json()
    console.log(parseData)
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
    setLoading(false)


  };


  return (
    <>
      <div style={{marginTop:'5rem'}} className="container ">
        <h1 style={{marginTop:'5rem'}} className="text-center   mb-5 mt-4">NewsWorld - Top {capitalizeFirstLetter(props.category)} Headlines</h1>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="row justify-content-center">
            {articles.map(
              function (item,index) {
                return (

                  <div key={index} className="col-md-4 mf-3 ">
                    <Newsitem title={item.title ? item.title.slice(0,) : item.title} description={item.description} imageUrl={item.urlToImage} newsUrl={item.url} author={item.author} date={item.publishedAt} source={item.source.name} />
                  </div>

                )
              }
            )}
          </div>
        </InfiniteScroll>


      </div>
    </>
  )


}





News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News
