import React from "react";
import "./mainContainer.css";
import ContainBar  from "./containBar.js";
import CatoriList from "./list";

export function MainContainer(){
    return <div className = "containBar">
   <div className="leftContainer">
   <ContainBar name ="Categories" data = {<CatoriList/>}/>
       </div> 
   <div className="centerContainer">
       <ContainBar data = "👎 Cons:edious to convert plain CSS to inline stylesLots of inline styles make JSX unreadableYou can not use basic CSS features like animations, selectors, etc.Does not scale wellPlain CSSInstead of using inline styles, it's common to import a CSS stylesheet to style a component's elements.Writing CSS in a stylesheet is probably the most common and basic approach to styling a React application, but it shouldn't be dismissed so easily.Writing styles in plain CSS stylesheets is getting better all the time, due to an increasing set of features available in the CSS standard.This includes features like CSS variables to store dynamic values, all manner of advanced selectors to select child elements with precision, and new pseudo-classes like :is and :where.Here is our testimonial card written in plain CSS and imported at the top of our React application:"/>
       </div>
  <div className="rightContainer">
  <ContainBar name ="My Package" data ={<CatoriList/>}/>
      </div>  
    </div>
}