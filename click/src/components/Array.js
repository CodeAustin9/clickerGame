import React from "react";
import Card from './Card';
import { Grid, Row, Col,  } from 'react-bootstrap';
import "./Card.css"

class Game extends React.Component {
    state = {
        array: ["http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200", 
        "http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200","http://via.placeholder.com/200x200", "http://via.placeholder.com/200x200",
        "http://via.placeholder.com/200x200"]
    }
    eventHandler = function

    shuffleArray= function() {
        for (var i = this.state.array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.state.array[i];
            this.state.array[i] = this.state.array[j];
            this.state.array[j] = temp;
        }
     }
    render() {
   
    var arrayList = this.state.array.map(function(image){
        return <div><Card image = {image}/></div>;
    })
    return<Grid> <Row className="show-grid">{arrayList}</Row></Grid>
}
};
export default Game;
