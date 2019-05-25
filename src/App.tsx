import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import './App.css';
import { CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './context/AuthContext';
import { auth } from './firebase';
const styles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

function App() {
  const { initializing, user } = useAuth();
  console.log({ initializing, user });
  return (
    <AuthContext.Provider value={{ user }}>
      <Container style={styles} fixed>
        {initializing ? (
          <Typography variant="h4" color="textPrimary" gutterBottom>
            Loading the Microverse... 〽️👽👨‍🔬👦
          </Typography>
        ) : (
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
        )}
      </Container>
    </AuthContext.Provider>
  );
}

export default App;
