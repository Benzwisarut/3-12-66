import React from 'react'
import MainLayout from '../layout/MainLayout';
import MyButton from '../MyButton';

const Home = () => {
  return (
    <MainLayout>
      <div className="mt-4 p-5 bg-danger text-white rounded">
        <h1>วันพระวันเจ้าไม่เว้นกันเล๊ยยยย</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton text="Danger" color="primary"/>
      <MyButton text="informtion" color="danger"/>
      <MyButton text="primaryr" color="success"/>

    </MainLayout>

  )
}

export default Home