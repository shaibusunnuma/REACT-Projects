import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index]

  const prevPerson = () =>{
    setIndex((index)=>{
      index = index-1;
      if(index < 0){
        index = people.length-1;
      }
      return index;
    }); 
    
  }

  const nextPerson = () =>{
    setIndex((index)=>{
      index = index+1;
      if(index > people.length-1){
        index = 0;
      }
      return index;
    });
  }

  const randomPerson = () =>{
    let newIndex = Math.floor(Math.random()*people.length);
    while(newIndex === index)
      newIndex = Math.floor(Math.random()*people.length);
    
    setIndex((index)=>{
      return newIndex;
    })
  }


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
        <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
      </div>
      <button className='random-btn' onClick={randomPerson}>suprise me</button>
    </article>
  );
};

export default Review;
