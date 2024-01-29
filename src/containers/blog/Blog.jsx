import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog1, blog2, blog3, blog4 } from './imports'

const Blog = () => {
  return (
    <div className="bpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className=" gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article />
        </div>

        <div className="gpt3__blog-container_groupB">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Blog
