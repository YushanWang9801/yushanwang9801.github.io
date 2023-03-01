import React from 'react';
import "./SingleBlog.css";
import useFirestore from '../../hooks/useFirestore';

function SingleBlog ({blog}) {
    const {docs} = useFirestore('project-images', blog.tag);
    const images = docs;

    var articles =[];
    var j = 0;
    for (var i = 0; i < blog.content.length; i++){
        if (blog.content[i].type === "title"){
            articles.push(<h3>{blog.content[i].content}</h3>)
        } else if (blog.content[i].type === "text"){
            articles.push(<p>{blog.content[i].content}</p>)
        } else if (blog.content[i].type === "image"){
            if(j < images.length){
                articles.push(<div className="article-image">
                                <img src={docs[j].url} />
                                </div>);
                j++;
            }
        } else if (blog.content[i].type === "subtitle"){
            articles.push(<h4>{blog.content[i].content}</h4>)
        }
    }


    return (
        <div className="SingleBlog">
            <main>
                <section>
                    <img src={`${blog.coverImage}`} alt={blog.imgalt} />
                    <h2>{blog.title}</h2>
                    <div class="h1-divider"></div>
                    <article>
                        {articles}
                    </article>
                </section>
            </main>
        </div>
    );
}

export default SingleBlog;