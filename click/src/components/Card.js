import React from "react";
import { Grid, Row, Col,  } from 'react-bootstrap';

class Card extends React.Component {
render() {
    return (
   
      
        <Col className="column" xs={12} md={4}>      
          <img src={this.props.image}/>
        </Col>
     

    
    )
}
}

export default Card;