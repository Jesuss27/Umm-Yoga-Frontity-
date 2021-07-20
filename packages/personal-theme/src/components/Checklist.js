import React from 'react'
import { styled } from "frontity" 

export default function Checklist() {
    return (
        <Container2>
            <BigImage>
            <svg xmlns="http://www.w3.org/2000/svg" width="517.964" height="485.742" viewBox="0 0 517.964 485.742">
                <path id="Path_13" data-name="Path 13" d="M444.166,221.989c50.158,6.339,101.595-3.063,146.606,19.958,50.376,25.764,110.953,59.568,118.523,115.641,7.654,56.693-63.716,91.476-83.305,145.224-18.411,50.515,15.144,120.754-26.174,155.156-40.885,34.04-104.155,9.593-155.65-3.77C403.1,643.542,375.13,610.334,337.9,590c-45.386-24.79-110.121-22.61-135.332-67.764-25.58-45.816,1.556-101.676,12.02-153.1,12.01-59.017,2.62-135.5,53.325-168C318.97,168.415,384,214.385,444.166,221.989" transform="translate(-191.904 -189.515)" fill="#ffebdb"/>
                <h1>Hello</h1>
            </svg>




            </BigImage>

            <TextInfo>
                <h1>YOGA FOR ALL</h1>
                <h3>THIS IS A MEDIUM TITLE</h3>
                <Line></Line>

                <div className="list">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                            <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#fec5bb"/>
                        </svg>
                        <h4>THIS IS A MEDIUM TITLE</h4>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                            <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#fec5bb"/>
                        </svg>
                        <h4>THIS IS A MEDIUM TITLE</h4>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                            <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#fec5bb"/>
                        </svg>
                        <h4>THIS IS A MEDIUM TITLE</h4>
                    </li>
                
                
                </ul>
                </div>

            </TextInfo>

        </Container2>
    )
}

const Container2 = styled.div`
    height:100vh;
    display:flex;
    padding:0px 2vw;
`

const BigImage = styled.div`
    height:100%;
    width:48vw;
    display:flex;
    justify-content:center;
    align-items:center;
    svg{
        h1{
            color:black;
        }
    }

`
const Line = styled.div`
    height:3px;
    width:2em;
    background:#fec5bb;
    text-align:right;
`
const TextInfo = styled.div`
    height:100%;
    width:48vw;
    padding-top:15vh;
    display:flex;
    flex-direction: column;
    text-align: right;
    h1{
        font-size:60px;
    }
    h3{
        font-size:54px;
    }
    ul{
        margin-top:10vh;
        align-items:right;
        float:right;
    }
    li{
        margin-bottom:.75em;
        display:flex;
        font-size:36px;
        h4{
            margin-left:3em;
        }
    }

`