import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import f_articles from '../../../data/featuredArticles';

// css
import { FeaturedArticlesContainer } from './HomeCSS';

const FeaturedArticles = () => {
  return (
    <FeaturedArticlesContainer>
      <h1>Featured articles</h1>

        
      <div className="container">
        {f_articles.map((a, i) => (
          <NavLink to={a.link} key={i} className="card"> 
            <div className="card-title"><h3>{a.name}</h3></div>
            <div className="imgBox">
              <img src={a.img} alt="" />
            </div>
          </NavLink>
        ))}
      </div>


    </FeaturedArticlesContainer>
  )
}

export default FeaturedArticles
