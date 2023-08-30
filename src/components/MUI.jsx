import React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

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

  /* variable called style can be appplied to multiple components */
  const style = {
    width: '250px',
    bgcolor: '#ffe4e4',
    borderRadius: '10px',
    boxShadow: 10,
  };

  return (
    <div>
      <div className="materialUI">
        <div className="Box-1">
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <DownhillSkiingIcon></DownhillSkiingIcon>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </div>

        <div className="Stack-2">
          <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
            <Badge color="error" badgeContent={99}>
              <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={100}>
              <MailIcon />
            </Badge>
            <Badge color="success" badgeContent={15} max={9}>
              <MailIcon />
            </Badge>
          </Stack>
        </div>
      </div>

      <div className="materialUI">
        <div className="ImageList-3">
                {/* you can use vw and vh to control responsiveness */}
          <ImageList sx={{ width: '30vw', height: '45vh' }}>
            <ImageListItem key="Subheader" cols={2}>
              <ListSubheader component="div">Fasting</ListSubheader>
            </ImageListItem>
              {/* map over your data, in this case is `itemData` 
              but it can be response from an API or Database */}
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>

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
                  label="Diogo Capitão"
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
