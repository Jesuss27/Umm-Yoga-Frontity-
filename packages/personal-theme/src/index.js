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
      :root{
        --color-text:#707070;
        --color-accent:#fec5bb;
        --color-secondary:#fec89a;
        --color-bg:#FBFAF9
        --color-secondary-bg:#FFD7BA
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
