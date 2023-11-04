import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
// import curitiba from "./images/bologna.png";
import { product } from "./product";
import { Name } from "./components/Name";
import { Price } from "./components/Price";
import { Description } from "./components/Description";
import { Image } from "./components/Image";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Okiotor Igho";
  return (
    <main>
      <header>
        <h1>JSX and React Components Checkpoint</h1>
      </header>
      <div className="products">
        <Card className>
          <Card.Body>
            <Card.Img
              variant="top"
              src={product.path}
              width="100%"
              height={200}
            />
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>{product.price}</Card.Subtitle>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Add to cart</Button>
          </Card.Body>
        </Card>
        <article>
          <h3>Hello {name}</h3>
          {/* {name && <img src={curitiba}></img>} */}
        </article>
      </div>
    </main>
  );
}

export default App;
