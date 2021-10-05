import React from 'react';
import { articles, videos } from './PublicationData';

const Publications = () => {
  return (
    <article>
      <h1 className="section_title">My Publications</h1>
      <section className="flex_wrap_row">
        <a href="#Videos">
          <button type="button" className="title find_out_more">
            Videos
          </button>
        </a>
        <a href="#Articles">
          <button type="button" className="title find_out_more">
            Articles
          </button>
        </a>
      </section>
      <article id="#Videos">
        {/* <h2>Videos</h2> */}
        <section className="project_grid">
          {videos.map((video) => {
            return (
              <section className="box white" key={video.title}>
                <div className="video_wrapper">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="responsive-iframe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="title">{video.title}</h3>
                <p>Published: {video.date}</p>
              </section>
            );
          })}
            {articles.map((article) => {
            return (
              <section className="box white" key={article.title}>
                 <img
          className="image_wrapper"
          src={article.image.src}
          alt={article.image.alt}
        />
                <h3 className="title">{article.title}</h3>
                <p>
                  Published: {article.date} on {article.where}
                </p>
                <p>{article.descripition}</p>
                <a href={article.src}><button type="button" className="find_out_more">Read More</button></a>
              </section>
            );
          })}
        </section>
      </article>
      {/* <article id="#Articles">
        <h2>Articles</h2>
        <section className="project_grid">
          {articles.map((article) => {
            return (
              <section className="box white" key={article.title}>
                <img
          className="image_wrapper"
          src={article.image.src}
          alt={article.image.alt}
        />
                <h3 className="title">{article.title}</h3>
                <p>
                  Published: {article.date} on {article.where}
                </p>
                <p>{article.descripition}</p>
                <a href={article.src}>Read More</a>
              </section>
            );
          })}
        </section>
      </article> */}
    </article>
  );
};

export default Publications;
