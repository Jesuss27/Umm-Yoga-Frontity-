import React from 'react'
import { styled } from "frontity"

export default function Testimonials() {
    return (
        <TestimonialsContainer>
            <div className="titles">
                <h1>
                    Testimonials
                </h1>
                <h3>
                    Lorem, ipsum dolor.
                </h3>
            </div>

            <Claims>

                <Claim>
                    <Chat>
                        <div className="text-box">
                            <p></p>
                        </div>
                        
                    </Chat>
                    <Triangle></Triangle>
                    <div className= "id">
                    <div className="circle-mask"></div>
                        <div className="name-title">
                            <h1>Name</h1>
                            <h4>title</h4>
                        </div>
                    </div>
                </Claim>

                <Claim>
                    <Chat>
                        <div className="text-box">
                            <p></p>
                        </div>
                        
                    </Chat>
                    <Triangle></Triangle>
                    <div className="id">
                    <div className="circle-mask"></div>
                        <div className="name-title">
                            <h1>Name</h1>
                            <h4>title</h4>
                        </div>
                    </div>
                </Claim>

                <Claim>
                    <Chat>
                        <div className="text-box">
                            <p></p>
                        </div>
                        
                    </Chat>
                    <Triangle></Triangle>
                    <div className="id">
                        <div className="circle-mask">

                        </div>
                        <div className="name-title">
                            <h1>Name</h1>
                            <h4>title</h4>
                        </div>
                    </div>
                </Claim>

            </Claims>
            
        </TestimonialsContainer>
    )
}

const TestimonialsContainer = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10vh 3vw;
`

const Claims = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:100%;
    background-color: blanchedalmond;
    width: 100%;
    margin: 10vh 0 0 0 ;

`

const Claim = styled.div`
    width:33%;
    height:100%;
    position:relative;
    .id{
        display:flex;
        align-items: center;
        width:100%;
        position:absolute;
        bottom:10vh;
    }
    .circle-mask{
        width:5em;
        height:5em;
        margin: 0vh 5vw;
        border-radius: 50%;
        background:white;
    }
`

const Chat = styled.div`
    width:100%;
    height:50%;
    background-color: #f00;
`
const Triangle = styled.div`
    margin-left:8vh;
  width: 0; 
  height: 0; 
  border-left: 3em solid transparent;
  border-right: 3em solid transparent;
  
  border-top: 3em solid #f00;
`