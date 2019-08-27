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

class LoanTransaction extends Component {
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
                    PERSONAL LN
                  </Text>
                  <Text style={{ color: "#383738" }}>72-01-31 96661955</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "#dc2a4d", fontSize: 25 }}>
                    -£15,000.00
                  </Text>
                </Col>
              </Row>
              <Row style={{ marginTop: 10 }}>
                <Col>
                  <Text style={{ color: "#383738" }}>Term remaining</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={{ color: "#383738" }}>22 months</Text>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>

        <Separator bordered style={{ height: 50 }}>
          <Text>March 2019</Text>
        </Separator>
        <ListItem>
          <Grid>
            <Row>
              <Col>
                <Text style={{ color: "#383738" }}>Wed 6</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Loan Princial Direct Debit</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£550.56</Text>
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
                <Text style={{ color: "#383738" }}>Wed 6</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <Text>Loan drawdown</Text>
              </Col>
              <Col style={{ alignItems: "flex-end" }}>
                <Text>-£15,000.00</Text>
              </Col>
            </Row>
          </Grid>
        </ListItem>
      </Content>
    );
  }
}

export default LoanTransaction;
