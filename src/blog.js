import React from 'react';

function Blog(props) {
  const sidebar = (
    <ul>
      { props.posts.map((post) =>(
        <li key={post.id}>
          {post.title}
        </li>
      )    
      )}
    </ul>
  );
  const content = props.posts.map((post) => {
    if(post.id) {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      )
    } else {
      return (
        <div key={post.id}>
          hahahhhahhah
          <p>{post.content}</p>
        </div>
      )
    }   
  }  
  );
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}

export default Blog;