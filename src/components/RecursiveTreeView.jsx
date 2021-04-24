import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import React from "react";
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

  const renderTree = (nodes) => {
    return (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    );
  };

  const renderParent = (items) => {
    return items.map((item) => {
      return (
        <TreeItem key={item.id} nodeId={(item.id).toString()} label={item.name} >
          {Array.isArray(item.children) ? item.children.map((child) => renderTree(child)) : null}
        </TreeItem>
      )
    });
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderParent(props.data)}
    </TreeView>
  );
}

RecursiveTreeView.propTypes = {
  data: PropTypes.array,
};

RecursiveTreeView.defaultProps = {
  data: null,
};
