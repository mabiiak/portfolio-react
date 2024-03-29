import styled from 'styled-components';
import {
  background,
  backgroundCards,
  backgroundSide,
  colorText,
} from './Color';

export const ProjectsSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(180deg, #2C2C2C 40vh, rgb(0, 0, 0, 0) 0);
  background-repeat: repeat;
  width: 100vw;

  #title {
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 15vh;
    width: 100vw;
    background-color: ${backgroundSide};
  
    p {
      font-size: 2rem;
      color: ${background};
    }

    img {
      width: 2rem;
    }
  }
`;

export const CardProject = styled.div`
  display: flex;
  width: 60%;
  height: 338px;
  min-height: 338px;
  min-width: 820px;
  margin-bottom: 3%;
  background-color: ${background};

  #about-project {
    display: flex;
    flex-direction: column;
    align-items: left;
    color: ${colorText};
    margin: 0 3%;
    justify-content: space-around;

    #name-project {
      font-size: 1.5rem;
      margin-top: 5%;
      margin-bottom: 0;
    }
  
    #description {
      overflow: auto;
      font-size: 0.8rem;
      word-wrap: break-word;
    }

    #description::-webkit-scrollbar {
      width: 10px;
    }
    
    #description::-webkit-scrollbar-thumb {
      background-color: ${backgroundCards};
    }

    #buttons {
      display: flex;
      height: 15%;
      width: 100%;
      justify-content: space-between;
      
      a {
        margin: 1%;
        display: flex;
        background-color: ${backgroundCards};
        padding: 2%;
        width: 30%;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 850px) {
    min-width: 290px;
    height: 55%;
    flex-direction: column;
    width: 80vw;
    margin-bottom: 15%;
    
    #about-project {
      position: relative;
      top: -5vh;
      justify-content: space-around;

      #description {
        font-size: 1rem;
      }

      #buttons {
        margin-top: 5%;
        a {
          width: 15%;
          height: 15%;

        }
      }

       #buttons > a > img {
          width: 55%;
          height: 55%;

        }
    }
  }
`;
