import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function Product(props) {
    return (
        <div>
          <Card>
            <CardBody>
                  <CardTitle>{props.children}</CardTitle>
                  <CardSubtitle>{props.name}</CardSubtitle>
                  <CardText>Price: {props.price}</CardText>
                  <Button onClick={() => props.changeProduct(props.name, +1)}>Add to stash</Button>
            </CardBody>
          </Card>
        </div>
    );

}

export default Product