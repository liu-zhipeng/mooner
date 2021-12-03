import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props { }

const HeaderTop: React.FC<Props> = () => {
    return (
        <Box>
            <Header>
               <div className="priceblock">
                   <div className="price">
                       <h3>MOONER <span>+1.13%</span></h3>
                        <h4>$58172</h4>
                   </div>
                   <div className="price">
                       <h3>MOONER <span>+1.13%</span></h3>
                        <h4>$58172</h4>
                   </div>
                   <div className="price">
                       <h3>MOONER <span>+1.13%</span></h3>
                        <h4>$58172</h4>
                   </div>
                   <div className="price">
                       <h3>MOONER <span>+1.13%</span></h3>
                        <h4>$58172</h4>
                   </div>
               </div>
               <div className="btnOuter">
                   <button>Add a coin</button>
                   <button className="contained">Promote | Traffic Stats</button>
               </div>
            </Header>
            
        </Box>
    );
};

const Box = styled.div`
    background:#181d23;
    .btnOuter{
        display:flex;
        button{
            margin-left:20px;
            background:#232a32;
            &.contained{
                background:#9488f0
            }
        }
    }
    .priceblock{
        display:flex;
        .price{
            h3,h4{margin:0;}
            border-radius:10px;
            border:2px solid #2d2b40;
            padding:5px 12px;
            margin-right:10px;
            h3{
                color:#8d83e0;
                font-weight:600;
                span{
                    font-weight:500;
                    font-size:12px;
                    color:#1e884a
                }
            }
            h4{
                font-weight:600;
                font-size:15px;
            }
        }
    }

    @media screen and (max-width:1050px){
        .priceblock{
            margin-bottom:20px;
        }
    }
    @media screen and (max-width:580px){
        .priceblock{
            flex-flow:wrap;
            justify-content:center;
            align-items:center;
            .price{
                margin:10px;
            }
        }
    }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding:10px 40px;
  @media screen and (max-width:1050px){
        flex-direction:column;
    }
    
`;


export default HeaderTop;
