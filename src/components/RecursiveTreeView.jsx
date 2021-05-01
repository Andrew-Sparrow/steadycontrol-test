import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import React, {Component, useEffect} from "react";
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function RecursiveTreeView(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const renderTree = (nodes) => {
    return (
      <TreeItem key={nodes.id} nodeId={(nodes.id)} label={nodes.name}>
        {(Array.isArray(nodes.children) || ((Array.isArray(nodes.children) && nodes.children.length !== 0))) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  const renderParent = (items) => {
    return items.map((item) => {
      return (
        <TreeItem key={item.id} nodeId={(item.id)} label={item.name} >
          {(item.children.length !== 0) ? item.children.map((child) => renderTree(child)) : null}
        </TreeItem>
      )
    });
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      // expanded={props.expandedItem ? props.expandedItem : expanded}
      onNodeToggle={handleToggle}
    >
      {renderParent(props.dataTree)}
    </TreeView>
  );
}

RecursiveTreeView.propTypes = {
  dataTree: PropTypes.array,
  // expandedItems: PropTypes.array,
};

RecursiveTreeView.defaultProps = {
  dataTree: [],
};
