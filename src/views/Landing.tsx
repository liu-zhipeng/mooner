import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import HeaderTop from "./components/Header";


interface Props { }

const Landing: React.FC<Props> = () => {
    return (
        <Box>
          <HeaderTop/>
            <div className="centercard">
              <Card/>
              <Card/>
            </div>
        </Box>
    );
};

const Box = styled.div`
  .centercard{
    display:flex;
    justify-content:center;
    margin-top:80px;
  }
  
  @media screen and (max-width:900px){
    .centercard{
      flex-direction:column;
      align-items: center;
    }
}
@media screen and (max-width:580px){
  .centercard{
    
    margin:0 5%;
    margin-top:80px;
  }
}
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px 50px;
  .left {
    margin-left: 6%;
    img {
      height: 60px;
      width: auto;
    }
    .line{
        display:none;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu {
      a {
        margin-right: 16px;
      }
    }
    .line {
      height: 2px;
      background-color: #b48d43;
      width: 200px;
    }
  }
  @media screen and (max-width:960px){
    flex-direction:column;
    .right {
        padding:0 14px;
        .menu {
            display: flex;
            justify-content: center;;
            flex-flow:wrap;
            a {
              margin: 5px 8px;
            }
          }
        .line{
            display:none !important;
        }
    }
    .left {
        margin-left: 6%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:30px;
        width:100%;
        .line {
            height: 2px;
            background-color: #b48d43;
            display:block !important;
            width: 40% !important;
            max-width: 200px !important;
          }
      }
    }
    @media screen and (max-width:500px){
        .left{
            img {
                height: 40px;
              }
        }
    }
    
`;

const Whitepaper = styled.div`
  background-color: #e1e1e1;
  text-align: right;
  padding: 34px 45px 34px 0;
  margin-right: 6%;
  h1 {
    margin-top: 0;
    margin-bottom: 10px;
  }
  a {
    background-color: #b99653;
    padding: 10px 16px;
    color: #fff;
    display: block;
    width: fit-content;
    margin-left: 15px;
  }
  .btnlink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .line {
      height: 2px;
      background-color: #b48d43;
      width: calc(100% - 170px);
    }
  }
`;

const Features = styled.div`
  margin: 50px 6% 0;
  .cardOuter {
    display: flex;
    flex-flow: wrap;
    width: 100%;

    .cardd {
      width: 33.33%;
      box-sizing: border-box;
      border: 6px solid #eaeaea;
    }
  }
  @media screen and (max-width:1300px){
    .cardd {
        width: 50% !important;
      }
    }
    @media screen and (max-width:768px){
        .cardd {
            width: 100% !important;
          }
        }
    }
`;

const Footer = styled.div`
  background-color: #343434;
  color: #cdcdcd;
  padding: 80px 6% 50px;
  margin-top: 60px;
  h1 {
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 3px;
  }
  a {
    text-decoration: underline;
  }
  .bottom {
    color: #808080;
    margin-top: 60px;
  }
  .rowOuter {
    display: flex;
    align-items: flex-end;
    .fcol {
      padding-left: 80px;
      img {
        height: 100px;
        width: auto;
        margin-bottom: -10px;
      }
    }
  }
`;

export default Landing;
