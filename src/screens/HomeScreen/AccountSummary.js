import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Thumbnail,
  Card,
  CardItem,
  Body,
  Separator,
  ListItem
} from "native-base";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar } from "react-native-elements";

class Transactioncomponent extends Component {
  static navigationOptions = {
    title: "Transactions"
  };

  render() {
    return (
      <Content>
        <Card>
          <CardItem
            header
            button
            onPress={() => alert("Pressed account details")}
          >
            <Grid>
              <Row>
                <Col>
                  <Text style={{ fontSize: 18, marginBottom: 10 }}>
                    LLOYDS CLASSIC
                  </Text>
                  <Text style={{ color: "#383738" }}>77-66-01 878754566</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 25 }}>£12,181.90</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 10 }}>
                <Col>
                  <Text style={{ color: "#383738" }}>Available balance</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "#383738" }}>£11,422.90</Text>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
        <Grid style={{ margin: 5 }}>
          <Row>
            <Col
              style={{
                alignItems: "center",
                borderRightColor: "#00402e",
                borderRightWidth: 1
              }}
            >
              <Button transparent>
                <Grid style={{ alignItems: "center" }}>
                  <Row style={{ height: 25 }}>
                    <Icon name="ios-timer" style={{ color: "#00402e" }} />
                  </Row>
                  <Row style={{ height: 20 }}>
                    <Text style={{ color: "#383738" }}>Standing orders</Text>
                  </Row>
                </Grid>
              </Button>
            </Col>
            <Col
              style={{
                alignItems: "center",
                borderRightColor: "#00402e",
                borderRightWidth: 1
              }}
            >
              <Button transparent>
                <Grid style={{ alignItems: "center" }}>
                  <Row style={{ height: 25 }}>
                    <Icon name="ios-calendar" style={{ color: "#00402e" }} />
                  </Row>
                  <Row style={{ height: 20 }}>
                    <Text style={{ color: "#383738" }}>Direct debits</Text>
                  </Row>
                </Grid>
              </Button>
            </Col>
            <Col style={{ alignItems: "center" }}>
              <Button transparent>
                <Grid style={{ alignItems: "center" }}>
                  <Row style={{ height: 25 }}>
                    <Icon name="ios-today" style={{ color: "#00402e" }} />
                  </Row>
                  <Row style={{ height: 20 }}>
                    <Text style={{ color: "#383738" }}>Statements</Text>
                  </Row>
                </Grid>
              </Button>
            </Col>
          </Row>
        </Grid>
        <Separator bordered style={{ height: 50, color: "#a6a6a6" }}>
          <Text>March 2019</Text>
        </Separator>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Mon 11</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,422.90</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Gather & Gather</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£10.10</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Sun 10</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,433.00</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Pret A Manager</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£1.90</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Sat 9</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,434.90</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Munich Bar</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£55.00</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Fri 8</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,489.90</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Tesco Direct</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£1.10</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Thu 7</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,491.00</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Costa</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£8.50</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Sat 2</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,499.50</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Pizza Express</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£25.50</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Fri 1</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,525.00</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Cini World</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£6.70</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <Separator bordered style={{ height: 50, color: "#a6a6a6" }}>
          <Text>February 2019</Text>
        </Separator>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Thu 28</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£11,531.70</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>SAL UK GBP</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>+£3531.70</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Wed 25</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#383738" }}>£8000.00</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Gather & Gather</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£10.50</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
      </Content>
    );
  }
}

export default Transactioncomponent;
