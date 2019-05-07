import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { login } from '../../api';

export default function() {
  const [loginData, setLoginData] = useState();

  const handleOnSubmit = async e => {
    e.preventDefault();
    login(loginData);
  };

  const handleOnChange = e => {
    const {
      target: { name, value }
    } = e;

    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleOnSubmit}>
          <Segment stacked>
            <Form.Input
              name="email"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleOnChange}
            />
            <Form.Input
              name="password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handleOnChange}
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
