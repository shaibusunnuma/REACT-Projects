import React, { useState, useEffect } from 'react';
import Review from './Review';
import reviews from './data'


function App() {
  const [reviews, setReviews] = useState([]);

  return <main>
    <section className='container'>
      <div className='title'>
        <h2>our reviews</h2>
        <div className='underline'></div>
      </div>
      <Review/>
    </section>
    
  </main>;
}

export default App;
