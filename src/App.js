import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

  const customers = [
    {
      'id' : 1,
      'image' : "http://placeimg.com/64/64/any",// 랜덤 이미지 64*64
      'name' : '나동빈',
      'birthday' : '911222',
      'gender' : '남',
      'job' : '대학생' 
    },
    {
      'id' : 2,
      'image' : "http://placeimg.com/64/64/any",// 랜덤 이미지 64*64
      'name' : '이순신',
      'birthday' : '961222',
      'gender' : '남',
      'job' : '프로그래머' 
    },
    {
      'id' : 3,
      'image' : "http://placeimg.com/64/64/any",// 랜덤 이미지 64*64
      'name' : '홍길동',
      'birthday' : '981222',
      'gender' : '남',
      'job' : '디자이너' 
    },
  ]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );

  }
}

export default App;
