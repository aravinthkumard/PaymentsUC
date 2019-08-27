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
import { StyleSheet, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Avatar } from "react-native-elements";

class CreditCardTransaction extends Component {
  static navigationOptions = {
    title: "Transactions"
  };

  render() {
    return (
      <Content>
        <Card>
          <CardItem header button onPress={() => alert("This is Card Header")}>
            <Grid>
              <Row>
                <Col>
                  <Text style={{ fontSize: 18, marginBottom: 10 }}>
                    CREDIT CARD
                  </Text>
                  <Text style={{ color: "#383738" }}>**** **** **** 0721</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={{ fontSize: 25 }}>£453.50</Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 10 }}>
                <Col>
                  <Text style={{ color: "#383738" }}>Credit limit</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "#383738" }}>£1500.00</Text>
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
                    <Icon name="ios-card" style={{ color: "#00402e" }} />
                  </Row>
                  <Row style={{ height: 20 }}>
                    <Text style={{ color: "#383738" }}>Manage cards</Text>
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
        <Separator bordered style={{ height: 50 }}>
          <Text>March 2019</Text>
        </Separator>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Mon 11</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Tesco Direct</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£30.10</Text>
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
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>GBK POS</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£5.57</Text>
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
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Kings Arms</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£22.67</Text>
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
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Nero POS</Text>
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
                <Text style={{ color: "#383738" }}>Fri 1</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Gather & Gather</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£17.70</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
        <Separator bordered style={{ height: 50 }}>
          <Text>February 2019</Text>
        </Separator>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Wed 25</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>H&M POS</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£62.75</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
      </Content>
    );
  }
}

export default CreditCardTransaction;
