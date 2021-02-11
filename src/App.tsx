import React from 'react';
import './App.css';
import Button from './components/Custom-Button/Custom-Button.component';
import InputField from './components/Custom-Inputs/Custom-Input.component';
import Hover from './components/Hover-Component/Hover.component';
import Identity from './components/Identity/Identity.component';
import Neumorphism from './components/Neumorphism-Animation/Neumorphism.component';
import Project from './components/Projects/Project.component';
import Wave from './components/Wave/Wave.component';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <InputField size="small" type="password" color="blue" padding="2em" placeholder="Small" shape="oblong" width="20%" /> */}
      <Button name="shop now" color="#2f2a2a" backgroundcolor="#ffffff" width="200px" border="block" height="50px" />
      <Hover name="Akius" />
      <Wave/>
      {/* <Neumorphism /> */}
      {/* <Identity  comment ="I love designing websites and keep things as simple as possible. My
          goals is to focus on minimalism and conveying the message that you
          want to send"/>
       */}
      <Project name = "Egoski ecommerce App" button_color = "inside-page__btn--city" card_front_color ="card-front__tp--city"/>
    </div>
  );
}

export default App;
