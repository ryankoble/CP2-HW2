import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
 start: {
   text:
     "Welcome, traveler! How would you like to get to your destination?",
   leftLabel: "Train",
   rightLabel: "Ship",
   centerLabel: "Airplane",
   leftPage: "onthetrain",
   rightPage: "ontheship",
   centerPage:"ontheairplane"
 },
 onthetrain: {
   text:
     "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
   leftLabel: "12E",
   rightLabel: "97C",
   centerLabel: "88D",
   leftPage: "death",
   rightPage: "life",
   centerPage: "thrive",
   image:
 "https://specials-images.forbesimg.com/imageserve/5d7254a944f2b2000803d3fe/960x0.jpg?fit=scale"
 },
  ontheship: {
   text:
   "Welcome aboard the scary ship! Please make your way to your seat. What's the number?",
 leftLabel: "12E",
 rightLabel: "97C",
 centerLabel: "88D",
 leftPage: "death",
 rightPage: "life",
 centerPage: "thrive",
 image:
 "https://i.pinimg.com/originals/c3/6c/6e/c36c6e47fd0519b6d8ef3da6a4227150.jpg"
 },

 ontheairplane: {
   text:
   "Welcome aboard the wobbly plane! Please make your way to your seat. What's the number?",
 leftLabel: "12E",
 rightLabel: "97C",
 centerLabel: "88D",
 leftPage: "death",
 rightPage: "life",
 centerPage: "thrive",
 image:
 "https://e3.365dm.com/17/02/2048x1152/a7b1af8d6ae3b2c248d616aed3f2bcacbc8472f8748181d1ef1fb0eceb2cda65_3896290.jpg"
 },

 death: {
   text:
   "You die.",
 },

 life: {
   text:
   "You live.",
 },

 thrive: {
   text:
   "You thrive.",
 }
};

// Constructor

class App extends Component {
 constructor(props) {
   super(props);

// Code J.D. Added -
// alert(pages.start.text)
// var pageName=onthetrain; (?)
//alert(pages[pageName].text)

   this.state = {
     page: "start"
   };
 }

 goToPage(pageName) {
   this.setState({
     page: pageName
   });
 }

 render() {
   var pageData = pages[this.state.page];
  
   return (
     <div className="App">
       <p>{pageData.text}</p>
       <button onClick={() => this.goToPage(pageData.leftPage)}>{pageData.leftLabel}</button>
       <button onClick={() => this.goToPage(pageData.rightPage)}>{pageData.rightLabel}</button>
       <button onClick={() => this.goToPage(pageData.centerPage)}>{pageData.centerLabel}</button>
       <p>{pageData.image}</p>
       <img src={pageData.image} width="600"></img>

     </div>
   );
  
 }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Class Excercise:
// 1. +Add Extra PAges
// 2. +Add Images
// 3. +Challenge arbitrary number of buttons.
// 4. Learn CSS Style Things
// You can also if Statements, array Buttons (Loop).

