import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from "prop-types";

export default function Citizen(props) {

  return (
    <Tooltip title="Citizen" placement="top-start" aria-label="citizen">
      <TreeItem nodeId={props.nodeIdItem} label={props.labelItem} />
    </Tooltip>
  );
}

Citizen.propTypes = {
  nodeIdItem: PropTypes.string,
  labelItem: PropTypes.string,
};
