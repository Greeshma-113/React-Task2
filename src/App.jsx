import React from "react";
import LaptopCard from "./Components/LaptopCard";
import MobileCard from "./Components/MobileCard";
import CarCard from "./Components/CarCard";
import FlightCard from "./Components/FlightCard";
import HotelCard from "./Components/HotelCard";
import DoctorCard from "./Components/DoctorCard";
import MedicineCard from "./Components/MedicineCard";
import FoodCard from "./Components/FoodCard";
import MovieCard from "./Components/MovieCard";
import CourseCard from "./Components/CourseCard";
import BookCard from "./Components/BookCard";
import CustomerCard from "./Components/CustomerCard";
import PlayerCard from "./Components/PlayerCard";
import TeacherCard from "./Components/TeacherCard";
import BankAccountCard from "./Components/BankAccountCard";
import BusTicketCard from "./Components/BusTicketCard";
import OrderCard from "./Components/OrderCard";
import EmployeeCard from "./Components/EmployeeCard";
import JobCard from "./Components/JobCard";
import QuizCard from "./Components/QuizCard";
import TaskCard from "./Components/TaskCard";
import NotificationCard from "./Components/NotificationCard";
import WeatherCard from "./Components/WeatherCard";
import PaymentCard from "./Components/PaymentCard";
import StudentCard from "./Components/StudentCard";
import ProductCard from "./Components/ProductCard";
import RestaurantCard from "./Components/RestaurantCard";
import GymMemberCard from "./Components/GymMemberCard";
import SubscriptionCard from "./Components/SubscriptionCard";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
    <LaptopCard brand="Dell" ram={16} />
    <MobileCard name="Samsung S25" is5G={true} />
    <CarCard name="Tesla" fuel="Electric" />
    <FlightCard flight="Indigo" seats={20} />
    <HotelCard name="Taj" breakfast={true} />
    <DoctorCard name="Dr. Ravi" available={true} />
    <MedicineCard name="Antibiotic" prescription={true} />
    <FoodCard name="Pizza" veg={true} />
    <MovieCard name="Movie X" rating="Adult" />
    <CourseCard course="React" enrollments={1500} />
    <BookCard title="React Guide" quantity={0} />
    <CustomerCard name="Bhavya" points={1200} />
    <PlayerCard name="Virat" isCaptain={true} />
    <TeacherCard name="Dr. Rao" designation="Head of Department" />
    <BankAccountCard name="Bhavya" balance={800} />
    <BusTicketCard passenger="Bhavya" status="Confirmed" />
    <OrderCard orderId="ORD101" status="Pending" />
    <EmployeeCard name="Rahul" experience={12} />
    <JobCard company="Google" vacancies={10} />
    <QuizCard title="React Quiz" completed={false} />
    <TaskCard task="Complete React" priority="High" />
    <NotificationCard message="Payment Successful" type="Success" />
    <WeatherCard city="Hyderabad" temperature={38} />
    <PaymentCard amount={5000} paid={true} />
    <StudentCard name="Bhavya" marks={98} />
    <ProductCard product="Laptop" orderValue={800} />
    <RestaurantCard
      name="Paradise"
      homeDelivery={true}
    />
    <GymMemberCard
      name="Bhavya"
      expired={true}
    />
    <SubscriptionCard
      user="Bhavya"
      status="Active"
    />
    <Dashboard />;
    </>
  );
}

export default App;