import React from 'react';
import styled from 'styled-components';

const Neumorphism = () => {

    const NeumorphismContainer = styled.div`
        background: #f0f0f0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;

      .box {
      border-radius: 20px;
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      box-shadow:  0 0 0 #cccccc,
                   0 0 0 #ffffff,
                    10px 10px 10px #cccccc inset,
                    -10px -10px 10px #ffffff inset;
      animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s infinite alternate;
      /* animation-fill-mode: forwards; */
    }

    @keyframes anime {
      0% {
        width: 60px;
        height: 60px;
        background: #f0f0f0;
        box-shadow:  0 0 0 #cccccc,
                     0 0 0 #ffffff,
                      10px 10px 10px #cccccc inset,
                      -10px -10px 10px #ffffff inset;
      }
      25% {
        width: 60px;
        height: 60px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      50% {
        width: 60px;
        height: 240px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      100% {
        width: 480px;
        height: 240px;
        background: #fafafa;
        box-shadow:  40px 40px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
      }
    }
    `
    return (
        <NeumorphismContainer>
            <div className="box"></div>
        </NeumorphismContainer>
    )
}

export default Neumorphism;
