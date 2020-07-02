import React, { useEffect, useState } from "react";
import { Card, CardDeck, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Columns from "react-columns";
function App() {

    const [latest, setLatest] = useState([]);
    const [results, setResults] = useState([]);
    const [searchCountries, setSearchCountries] = useState("");
    useEffect(() => {
        axios
            .all([
                axios.get("https://corona.lmao.ninja/v2/all"),
                axios.get("https://corona.lmao.ninja/v2/countries?sort=country")

            ])
            .then(res => {
                setLatest(res[0].data);
                setResults(res[1].data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();

    const filterCountries = results.filter(item => {
        return searchCountries !== "" ? item.country.includes(searchCountries) : item;
    });

    const countries = filterCountries.map((data, i) => {
        const { country, cases, recovered, todayCases, todayDeaths, active, critical } = data;
        return (
            <Card bg="dark" text="white" key={i} className="text-center" style={{ margin: "10px" }}>
                <Card.Img variant="top" src={data.countryInfo.flag} width="300px" height="167px" />
                <Card.Body>
                    <Card.Title>{country} </Card.Title>
                    <Card.Text>Cases: {cases}</Card.Text>
                    <Card.Text>Recovered: {recovered}</Card.Text>
                    <Card.Text>Today's Cases: {todayCases}</Card.Text>
                    <Card.Text>Today's Deaths: {todayDeaths}</Card.Text>
                    <Card.Text>Active Cases: {active}</Card.Text>
                    <Card.Text>Critical Cases: {critical}</Card.Text>

                </Card.Body>
            </Card>
        );
    });

    var queries = [{
        columns: 1,
        query: "min-width : 500px"
    }, {
        columns: 3,
        query: "min-width: 1000px"
    }];

    return (
        <div className="container">
            <br />
            <h2 style={{ textAlign: "center", color: "white" }}>COVID-19 Live Updates<br /> <br />Global Stats</h2>



            <CardDeck>
                <Card style={{ margin: "10px" }} border="dark" className="text-center" bg="info" text="white">
                    <Card.Body>
                        <Card.Title>Cases</Card.Title>
                        <Card.Text>{latest.cases}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>{lastUpdated}</small>
                    </Card.Footer>
                </Card>

                <Card style={{ margin: "10px" }} border="dark" className="text-center" bg="danger" text="white">
                    <Card.Body>
                        <Card.Title>Deaths</Card.Title>
                        <Card.Text>{latest.deaths}</Card.Text>

                    </Card.Body>
                    <Card.Footer>
                        <small>{lastUpdated}</small>

                    </Card.Footer>
                </Card>
                <Card style={{ margin: "10px" }} border="dark" className="text-center" bg="success" text="white">
                    <Card.Body>
                        <Card.Title>Recovered</Card.Title>
                        <Card.Text>{latest.recovered}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>{lastUpdated}</small>

                    </Card.Footer>
                </Card>
            </CardDeck>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control onChange={e => setSearchCountries(e.target.value)} style={{ width: "50%", textAlign: "center", margin: "0 auto", alignItems: "center" }} type="text" placeholder="Search For a Country" />
                </Form.Group>
            </Form>
            <Columns style={{ textAlign: "center", margin: "0 auto", }} queries={queries}>{countries}</Columns>
        </div>
    )
};
export default App;