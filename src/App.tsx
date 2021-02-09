import React from 'react';
import './App.css';
import Button from './components/Custom-Button/Custom-Button.component';
import InputField from './components/Custom-Inputs/Custom-Input.component';
import Hover from './components/Hover-Component/Hover.component';
import Neumorphism from './components/Neumorphism-Animation/Neumorphism.component';

const App: React.FC = () => {
  return (
    <div className="App">
      <InputField size="small" type="password" color="blue" padding="2em" placeholder="Small" shape="oblong" width="20%" />
      <Button name="shop now" color="#2f2a2a" backgroundcolor="#ffffff" width="200px" border="block" height="50px" />
      <Hover name="Akius" />
      
      <Neumorphism/>
    </div>
  );
}

export default App;
