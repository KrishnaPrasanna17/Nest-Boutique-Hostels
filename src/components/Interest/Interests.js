import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Interests.css'
import Sports from './Sports/Sports'
import Music from './Music/Music'
import Dance from './Dance/Dance'
import Travel from './Travel/Travel'
import Fitness from './Fitness/Fitness'
import Photography from './Photography/Photography'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.grey,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Sports"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Music" {...a11yProps('two')} />
          <Tab value="three" label="Dance" {...a11yProps('three')} />
          <Tab value="four" label="Travel" {...a11yProps('four')} />
          <Tab value="five" label="Fitness" {...a11yProps('five')} />
          <Tab value="six" label="Photography" {...a11yProps('six')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <Sports/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Music/>
      </TabPanel>
      <TabPanel value={value} index="three">
        <Dance/>
      </TabPanel>
      <TabPanel value={value} index="four">
        <Travel/>
      </TabPanel>
      <TabPanel value={value} index="five">
        <Fitness/>
      </TabPanel>
      <TabPanel value={value} index="six">
        <Photography/>
      </TabPanel>
    </div>
  );
}