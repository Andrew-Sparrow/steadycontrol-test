import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const [state, setState] = React.useState({isToggleOn: true});

  const handleToggle = () => {
    setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  return (
    <div className={classes.root}>
      {/*<Button variant="contained" color="primary" onClick={() => { alert('clicked') }}>*/}
      <Button variant="contained" color="primary" onClick={() => handleToggle()}>
        {state.isToggleOn ? 'Collapse All' : 'Expand All'}
      </Button>
    </div>
  );
}
