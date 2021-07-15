import React from 'react'
import { styled } from "frontity"
import  { TiSocialInstagram } from "react-icons/ti";
import  { TiSocialFacebook } from "react-icons/ti";
import  { TiSocialYoutube } from "react-icons/ti";




export default function Nav() {
    return (
        <>
        <StyledNav>
            <div className="socials">
                <TiSocialInstagram size={28} />
                <TiSocialFacebook size={28}  />
                <TiSocialYoutube size={28} />
            </div>

            <div className="logo">
                <h1>UMM</h1>
            </div>

            <div className="links">
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Schedule</li>
                </ul>
            </div>
            
        </StyledNav>
        </>
    )
}

const StyledNav = styled.nav`
    cursor:pointer;
    padding:0px 40px;
    background-color: white;
    display:flex;
    justify-content:space-between;
    align-items: center;
    height:8vh;
    .socials{
        display:flex;
        justify-content: space-between;
        width:33%;
        color:#707070
    }
    .logo{
        text-align: center;;
        width:33%;
    }
    .links{
        color:#707070;
        width:33%;
        display:flex;
        ul{
            width:100%;
            display:flex;
            justify-content: space-between;
            text-decoration:none;
            li{
                list-style: none;
            }
        }
    }


`
