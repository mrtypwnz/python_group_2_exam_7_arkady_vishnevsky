import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function Product(props) {
    return (
        <div>
                  <Card className="d-inline-flex col-lg-4">
                    <CardBody>
                          <CardTitle>{props.children}</CardTitle>
                          <CardSubtitle>{props.name}</CardSubtitle>
                          <CardText>Price: {props.price}</CardText>
                          <Button onClick={props.addFood}>Добавить</Button>
                    </CardBody>
                  </Card>
        </div>
    );

}

export default Product