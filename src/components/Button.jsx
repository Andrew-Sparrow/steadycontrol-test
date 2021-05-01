import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({isExpand: true});

  const handleToggle = () => {
    setState(prevState => ({
      isExpand: !prevState.isExpand
    }));
    props.expandEverything();
  };

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={() => handleToggle()}>
        {state.isExpand ? 'Expand All' : 'Collapse All'}
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  expandEverything: PropTypes.func,
};
