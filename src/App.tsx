import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import './App.css';
import { CardContent, CardActions, Button, Typography } from '@material-ui/core';
const styles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function App() {
  return (
    <Container style={styles} fixed>
      <Card>
        <CardContent>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            Welcome to the Microverse!
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Get Started</Button>
          <Button>Docs</Button>
          <Button>Install</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;
