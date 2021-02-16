/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

import React, { useState } from 'react';
import Search from './components/SearchBar/SearchBar'
import Posts from './components/Posts/Posts'

import Data from './dummy-data'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(Data)
  // const [search, setSearch] = useState('')

  const likePost = postId => {
    setPosts(posts.map(post => {
      return post.id === postId
        ? { ...post, likes: post.likes + 1 }
          : post
    }))
    /*
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.
     */
  };

  return (
    <div className='App'> 
      <Search
         
      />
      <Posts
        posts={posts}
        likePost={likePost}
      />
    </div>
  );
};

export default App;
