import React, { Component } from 'react';
// import {BrowserRouter as Router,
//         Switch,
//         Route} from 'react-router-dom'
// import logo from './logo.svg';
import { Navbar, Media } from 'reactstrap'
import SidebarItem from '../../components/SidebarItem/SidebarItem'
import BottomSidebarItem from '../../components/BottomSideBarItem/BottomSideBarItem'
import person from './assets/personIcon.svg'
import PlayerSelector from '../../components/PlayersSelector/PlayersSelector'
import clockIcon from './assets/clockIcon.svg'
import GameLengthSelector from '../../components/GameLengthSelector/GameLengthSelector';
import './MainPage.css'
import Game from './Game'
import GameCard from '../../components/GameCard/GameCard';
import chessImage from './assets/king.png'
import rookImage from './assets/rook.jpg'
// import './App.css';
// import { render } from 'react-dom';



class MainPage extends Component {

  constructor(props) {
    super(props);

    this.getFilterButtons = this.getFilterButtons.bind(this);
    this.switchBool = this.switchBool.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateMinutes= this.updateMinutes.bind(this);
    this.updatePlayersSelected = this.updatePlayersSelected.bind(this);
    this.allGames = [new Game("test1", 2, 4, 90, [], chessImage), new Game("test2", 2, 4, 90, [], rookImage), new Game("test3", 2, 4, 90, [], chessImage), new Game("test4", 2, 4, 90, [], chessImage),
    new Game("test5", 2, 4, 90, [], chessImage),new Game("test6", 2, 4, 90, [], chessImage),new Game("test7", 2, 4, 90, [], chessImage),];
    this.state = {
      toggle: false,
      textInput: "",
      newTagName: "",
      sideBarNames: ["Dice", "Strategy"],
      minutes: 20, // default value, magic number
      playersSelected: 4 // default value, magic number
    };
  }

  switchBool = () => {
    this.setState({
      toggle: !this.state.toggle
    })
    console.log("switched", this.state.toggle)

  }
  onTextSubmit = (value) => {
    var temp = this.state.sideBarNames;
    temp.push(value);
    console.log(value);
    this.setState({
      sideBarNames: temp
    })
  }

  onTextChange = (event) => {
    this.setState({ newTagText: event.target.value });
  }

  onChange = (event) => {
    console.log(event)
    this.setState({
      textInput: event.target.value
    })
  }

  getFilteredGameCards = () => {
    var filteredGames = this.allGames;
    return filteredGames.map(function (v, i) {
      return <GameCard gameName={v.name} gameImage={v.image} />
    })
  }

  getFilterButtons = () => {
    return this.state.sideBarNames.map(function (v, i) {
      return <SidebarItem buttonText={v}  buttonColor="#6B8CE6" />
    })
  }

  updateMinutes = (num) => {
    this.setState({
      minutes: num
    })
  }

  updatePlayersSelected = (num) => {
    this.setState({
      playersSelected: num
    })
  }

  // componentDidUpdate = () => {
  //   console.log("main page updated, its state is now")
  //   console.log(this.state)
  // }

  // function getBool() {
  //   console.log("got bool", testBoolean)
  //   return testBoolean;
  // }
  // prim color #4476FF
  // secondary color #6B8CE6
  // 
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Navbar style={{ backgroundColor: "#4476FF", margin: "0pt", textAlign: "center" }}>
          <h1 className="gameChestText">Game Chest</h1>
        </Navbar>
        <div style={{ width: "100%", display: "table", height: "50.8rem" }}>
          <div style={{ display: "" }}>
            <div style={{ width: "16vw", float: "left", borderStyle: "solid", borderColor: "#707070", borderWidth: "5px", textAlign: "center", height: "780px" }}>
              <SidebarItem buttonText="Filter By" buttonColor="#4476FF" />
              <div style={{ backgroundColor: "black", height: "6px" }} />
              {this.getFilterButtons()}
              <BottomSidebarItem buttonText="Add Tag" buttonColor="#4476FF" value={this.state.newTagName} onChange={this.onTextSubmit}>
              </BottomSidebarItem>
            </div>
            <div style={{ display: "block" }}>
              <div style={{ backgroundColor: "#6B8CE6", marginLeft: "16.5vw", borderColor: "#F5F5F5", borderStyle: "solid", borderWidth: "5px", height: "85px", boxSizing: "border-box" }}>
                <b className="gameChestText" style={{ float: "left", fontSize: "35pt", marginLeft: "0.2em" }}>Players</b>
                <PlayerSelector updatePlayers={this.updatePlayersSelected}/>
                <div style={{ float: "right" }}>
                  <GameLengthSelector minutesUpdated={this.updateMinutes}/>
                  {/* <Media object src={clockIcon} width="67" height="67" ></Media> */}
                </div>
              </div>
            </div>
            <div className="grid-container">
              {this.getFilteredGameCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
