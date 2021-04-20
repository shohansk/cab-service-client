import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import './Blogs.css'


const blogData = [
    {
        title : 'Book a car it was a good service',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Hero ',
        authorImg : wilson,
        date : '2 April 2020'
    },
    {
        title : 'Wash my car ',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Kibria alam',
        authorImg : wilson,
        date : '05 May 2020'
    },
    {
        title : 'Fixed My Car',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Mizan ali',
        authorImg : wilson,
        date : '13 April 2021'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;