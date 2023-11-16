import '../commonStyle/common.css'; 
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ 
        minWidth: 300, 
        width: '80vw', 
        maxWidth: '800px', 
        margin: 'auto', 
        mt: 5,}}>
      <CardContent>
        <Typography sx={{ fontSize: 18, fontFamily: 'Normal', color: '#CF5704' }} color="text.secondary" gutterBottom>
          How To Play Our Wordle:
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontFamily: 'Normal',  color: '#CF5704' }}>
          Normal{bull}Easy{bull}Peasy{bull}Version
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2" sx={{ fontFamily: 'Normal' }}>
            <ul>
                <li>You have to guess the Wordle in 6 goes</li>
                <li>Each word has 6 letters</li>
                <li>Every word you enter must be in the valid word list. There are more than 10,000 words in this list, but only 10 are answers to a specific puzzle</li>
                <li>A correct letter turns green</li>
                <li>A correct letter in the wrong place turns yellow</li>
                <li>An incorrect letter turns gray</li>
                <li>Letters can be used more than once</li>
                <li>Answers are never plurals</li>
                <li>You must prove how clever you are by sharing your Wordle after you've completed it* </li>
            </ul>

        </Typography>
        <Typography variant="h5" component="div" sx={{ fontFamily: 'Normal', color: '#CF5704' }}>
          Hard{bull}As{bull}You{bull}Cry{bull}Version
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2" sx={{ fontFamily: 'Normal' }}>
            <ul>
                <li>You have to guess the Wordle in 5 goes</li>
                <li>Each word has 7 letters</li>
                <li>Rest is the same as Normal version</li>
                <li>It sounds easy right?* </li>
            </ul>
          <br />
          {'* Not really ^_^'}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
