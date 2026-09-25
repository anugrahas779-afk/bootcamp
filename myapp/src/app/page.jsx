import { PROXY_FILENAME } from 'next/dist/lib/constants';
import { Gowun_Dodum } from 'next/font/google';
import React from 'react'

const page = () => {

  let name = "Anugraha";

  const greet = (a) => console.log("My name is:",a);
  greet(name);

  const add = (a,b) => {
    return a + b;
    
  };

  console.log("addition",add(2,7));

  const student = {
    name:"augraha",
    age:20,
    branch:"cl",
    roll: 13

  };

  console.log(student);

  const arr = [ { 
    name:"augraha",
    age:20,
    branch:"cl",
    roll: 13
  },
  {
    name:"hena",
    age:20,
    branch:"cl",
    roll: "25" 

  } 
]
console.log(arr)

const insta = [
  {
    name:"mattlard",
    posts:"754",
    followers: "1.1M",
    following: "1900",
    bio:"self taught pastry",
    threads:"@mattlard"
  }
]
console.log(insta)

const posts = [
  {
  username:"cherry",
  likes:"56",
  comments:["hi","hello"],
  share:12,
  image:"url"
  }
]
console.log(posts)

const check = (num) => {
  if(num<0){
    console.log("negative")
  }
  else if(num>0){
    console.log("positive")   
  }
  else{
    console.log("zero")
  }
 
}
check(8) 


  const youtube = [
    {
      video_name:"Introducing Aeris | Defeat Boring | Brand Film",
      channel_name:"TATA.CARS",
      subscribers:"511k",
      likes:285,
      views:3979,
      date:"sep 25,2026",
      hashtags:["tataseries","defeatboring","tatacars"],
      decription:["introducing aeirs","such a nice car"],
      comments : [
       {

        name:"priya",
        comments_text:"Nice",
        replay:"thanks"
       },
       {
        name:"Anu",
        comments_text:"nice",
        replay:"ty"
       }
      ]
    }
  ]


  console.log(youtube)

const  mName= "anu"

 return (
    <div>
      <div>
         <h2 className='text-7xl text-pink-700' > this is my first js project</h2>
        <p className='text-8xl text-amber-700'>{mName}</p>
       </div>
    </div>
  )
}

export default page