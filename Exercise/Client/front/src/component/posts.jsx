import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://projectsfordiplay-j1a2--5000--6352fbed.local-corp.webcontainer.io/posts')
      .then(response => {
        setPosts(response.data);
        console.log(posts)
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {/* {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))} */}
    </div>
  );
}

export default Posts;