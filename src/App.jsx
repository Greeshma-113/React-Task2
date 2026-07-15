import React from 'react'
import Student from './Components/Student'
import BookCard from './Components/BookCard'
import EmployeeCard from './Components/EmployeeCard'
import Button from './Components/Button'
import CourseCard from './Components/CourseCard'
import MovieCard from './Components/MovieCard'
import ProductCard from './Components/ProductCard'
import ProfileCard from './Components/ProfileCard'

const App = () => {
  return (
    <div>

      <Student Name="Nandini" Age={20} Course="Computer Science" />
      <Student Name="Rahul" Age={21} Course="React JS" />
      <EmployeeCard Name="Siva" Designation="Developer" Salary={20000} Department="IT"/>
      <EmployeeCard Name="Ravi" Designation="Tester" Salary={25000} Department="CSE"/>
      <BookCard Title="Story" Author="Prabha" Price={150} Category="Horror"/>
      <BookCard Title="Java Basics" Author="James" Price={500} Category="Programming"/>
      <CourseCard Course="React JS" Trainer="Prabha" Duration="3 Months" Fee={10000}/>
      <MovieCard Title="Bahubali" Poster="https://via.placeholder.com/150" Rating={9.2} Genre="Action"/>
      <ProductCard Name="Laptop" Price={65000}/>
      <ProductCard Name="Mobile"Price={25000}/>
      <ProfileCard Image="" Name="Nandini" Role="Software Engineer" Location="Hyderabad"/>
      <Button Text="Click Me" />

    </div>
  )
}

export default App