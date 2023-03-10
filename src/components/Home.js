import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import RestaurantCard from "./RestaurantCard";

function Home() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await fetch("/restaurants.json")
      .then((data) => data.json())
      .then((data) => setData(data.restaurants));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Row>
        {data.map((item) => (
          <Col sm={12} md={8} lg={6} xl={3}>
            <RestaurantCard item = {item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Home;
