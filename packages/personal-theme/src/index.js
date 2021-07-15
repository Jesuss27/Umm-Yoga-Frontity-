import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import{ connect, Global, css } from "frontity"



const Root = () => {
  return (
    <>
    <Global 
      styles={css`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      html{
        font-family: montserrat;
        background-color: #FBFAF9;
      }`} />
    <Nav />
    <Landing />
      
    </>
  );
};

export default {
  name: "personal-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
