import React, { useEffect, useState } from "react";
import styled from "styled-components";


interface Props { }

const Card: React.FC<Props> = () => {
    return (
        <Box>
            <img src="/velocity.png" className="velocity" alt="" />
            <div className="top">
                <h4>Staking</h4>
                <h5>Earn MOONER, stake MOONER</h5>
            </div>
            <div className="info">
                <div className="row">
                    <div>Token:</div>
                    <div>MOONER</div>
                </div>
                <div className="row">
                    <div>Period:</div>
                    <div>2 months</div>
                </div>
                <div className="row">
                    <div>APR:</div>
                    <div>20.00%</div>
                </div>
            </div>
            <div className="content">
                <div className="row">
                    <div>
                        <h4>Total Staked Tokens</h4>
                        <h1>24,000.00</h1>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <h4>Your Staked Tokens</h4>
                        <h1>4,000.00</h1>
                    </div>
                    <div className="caclbtn">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <h4>Your Share in Percentage</h4>
                        <h1>0.0045%</h1>
                    </div>
                </div>
                <div className="row stake">
                    <div>
                        <h4>Your Staked Tokens</h4>
                        <h1>4,000.00</h1>
                    </div>
                    <button>00:07:35</button>
                </div>
            </div>
            <div className="bottom">
                <img src="/rocket.png" alt="" />Secured by MOONER
            </div>
        </Box>
    );
};

const Box = styled.div`
    background-color: #181d23;
    border-radius:14px;
    max-width:400px;
    min-width:350px;
    margin:0 5%;
    position:relative;
    @media screen and (max-width:900px){
     margin-bottom:80px;
  }
  @media screen and (max-width:580px){
    min-width:unset;
  }
    .velocity{
        height:120px;
        width:auto;
        position:absolute;
        top:0;
        right:0;
        transform:translate(40%,-20%)
    }
    .row{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin:8px 0
    }
    .top{
        background-image: linear-gradient(90deg,rgba(147,135,239,0) 0%,   rgba(147, 135, 239, 0.3) 20%, rgba(147, 135, 239, 1)   50%, rgba(147,135,239,0.3) 80%,rgba(147,135,239,0) 100%);
        text-align:center;
        padding:20px 10px;
        overflow:hidden;
        border-top-left-radius:14px;
        border-top-right-radius:14px;
        h4{
            font-weight:22px;
            margin-top:0;
            margin-bottom:10px
        }
        h5{
            margin:0;
            color: #bcb4ff;
            font-size:16px;
            font-weight:500;
        }
    }
    .info{
        padding:20px 30px;
        background-image: radial-gradient(circle at center,  rgba(255,255,255,0.08) 0,  rgba(255,255,255,0.05),  rgba(255,255,255,0) 100%) ;
       
    }
    .content{
        padding:20px 30px;
        .row{
            margin:22px 0;
            h4,h1{margin:0}
            &.stake{
                button{
                    background:#8d83df;
                    box-shadow: 0 0 0 4px rgba(141, 131, 223, 0.3),
                    0 0 0 8px rgba(141, 131, 223, 0.1);
                }
            }
            .caclbtn{
                display:flex;
                button{
                    border-radius:12px;
                    background:transparent;
                    border:2px solid #8d83df;
                    color:#fff;
                    width:40px;
                    height:40px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    margin-left:10px;
                    cursor:pointer;
                }
            }
            h4{
                font-weight:500;
                font-size:16px;
                margin-bottom:5px
            }
            h1{
                font-size:20px;
                font-weight:600
            }
           
        }
    }

    .bottom{
        display:flex;
        align-items:Center;
        justify-content:Center;
        color: #363e48;
        margin: 10px 40px 30px;
        img{
            height:32px;
            margin-right:10px;
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

export default Card;
