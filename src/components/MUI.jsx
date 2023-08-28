import React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

function MUI() {
  const [state, setState] = React.useState({
    bruno: false,
    diogo: false,
    bernardo: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { bruno, diogo, bernardo } = state;
  const error = [bruno, diogo, bernardo].filter((answer) => answer).length !== 2;

  return (
    <div>
      <div className="materialUI">
        <div className="Box-1">{/* box/list example here */}</div>

        <div className="Stack-2">{/* email stack example here */}</div>
      </div>

      <div className="materialUI">
        <div className="ImageList-3">{/* image-list example here */}</div>

        <div className="Checkbox-4">
          <Box sx={{ display: 'flex' }}>
            <FormControl
              required
              error={error}
              component="fieldset"
              sx={{ m: 3 }}
              variant="standard"
            >
              <FormLabel component="legend">Assign Responsability</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={bruno} onChange={handleChange} name="bruno" />}
                  label="Bruno Rocha"
                />
                <FormControlLabel
                  control={<Checkbox checked={diogo} onChange={handleChange} name="diogo" />}
                  label="João Gonçalves"
                />
                <FormControlLabel
                  control={<Checkbox checked={bernardo} onChange={handleChange} name="bernardo" />}
                  label="Bernardo de Melo"
                />
              </FormGroup>
              <FormHelperText>You need to pick two</FormHelperText>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default MUI;

// Other simple list example with different type style changes

/* 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const style = {
    width: '250px',
    bgcolor: '#ffe4e4',
    // borderRadius: '10px',
    // boxShadow: 10,
  };

    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
 */

// Already imported itemData for the imageList example

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
