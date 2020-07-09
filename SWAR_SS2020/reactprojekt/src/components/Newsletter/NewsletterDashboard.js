import React, {Component, useState, useEffect} from 'react'
import divWithClassName from "react-bootstrap/cjs/divWithClassName";


function NewsletterDashboard(props) {
    const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')));



    return (<div>
        {
            articles.map(article => {
                return (
                    <div className="container mt-5">
                <div className="card">
                    <h3 className="card-header">{article.title}</h3>
                    <div className="card-body">
                        <h5 className="card-title">{article.subtitle}</h5>
                        <p className="card-text">{article.content}</p>
                    </div>
                </div>
            </div>);}
            )
        }
        </div>
    )

}

export default NewsletterDashboard