import React, {useState} from "react";
import Details from "./components/Task/Details";
import DetailsDisplay from "./components/Task/DetailsDisplay";
import PropsTypesExample from "./components/Task/PropsTypesExample";
import UseEffectExample from "./components/Task/UseEffectExample";
import ArrayMethods from "./components/JavaScriptExamples/ArrayMethods";
import ReduxDemo from "./components/Redux/ReduxDemo";
import Greeting from "./components/Testing/Jest/Greeting";
import Async from "./components/Testing/Jest/Async";
// import FormatDate from "./components/TypescriptExamples/FormatDate"
// import MessageProps from "./components/TypescriptExamples/MessageProps";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/RouterExample/Pages/HomePage";
import Products from "./components/RouterExample/Pages/Products";
import Navbar from "./components/RouterExample/NavBar";
import Books from "./components/RouterExample/Pages/Books";
import Furnitures from "./components/RouterExample/Pages/Furnitures";
import BookDetails from "./components/RouterExample/Pages/BookDetails";
import FurnitureDetails from "./components/RouterExample/Pages/FurnitureDetails";
import StudentRegistration from "./components/FormikExample/StudentRegistration";
import StudentDetails from "./components/FormikExample/StudentDetails";
import Navigation from "./components/FormikExample/Navigation";
import APIDemo from "./components/API/APIDemo";
import './App.css'
import Registration from "./components/FormikForm/Registration";
import NavigationBar from "./components/FormikForm/NavigationBar";
import RegistrationForm from "./components/FormikForm/RegistrationForm";
import RegistrationDetails from "./components/FormikForm/RegistrationDetails";

function App() {
  
  const [newData, setNewData] = useState([]);

  const addDetailsHandler = (data) => {
    const values = [...newData];
    values.push(data)
    setNewData(values);
  }

  return (
    <div>
      {/* <Details onAdding={addDetailsHandler} />
      <DetailsDisplay showData={newData} />
      <PropsTypesExample name={'Arijeet' } age={30} />
      <UseEffectExample />
      <ArrayMethods />
      <ReduxDemo />
      <Greeting />
      <Async />
      <FormatDate date={new Date()} />
      <MessageProps text={100} important={false}/> */}
      {/* <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />}>
            <Route path="books" element={<Books />}>
              <Route path=":bookId" element={<BookDetails />} />
            </Route>
            <Route path="furnitures" element={<Furnitures />}>
              <Route path=":furnitureId" element={<FurnitureDetails />} />
            </Route>
          </Route>
        </Routes>
      </div> */}
      {/* <Navigation /> */}
      {/* <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/registration"
            element={<StudentRegistration onAdding={addDetailsHandler} />}
          />
          <Route
            path="/details"
            element={<StudentDetails showData={newData} />}
          />
        </Routes>
      </div> */}
      {/* <APIDemo /> */}
      {/* <Registration/> */}
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/registration"
            element={<RegistrationForm onAdding={addDetailsHandler} />}
          />
          <Route
            path="/details"
            element={<RegistrationDetails displayData={newData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
