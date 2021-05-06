import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import React from "react";
import PropTypes from 'prop-types';
import ContainedButtons from "./Button";
import Citizen from "./Citizen";

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

  const setExpandAll = () => {
    setExpanded(props.expandedItems)
  };

  const setCollapseAll = () => {
    setExpanded([]);
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const renderTree = (node) => {
    console.log(node);
    return (
      Array.isArray(node.children) ?
        <TreeItem key={node.id} nodeId={(node.id)} label={node.name}>
          {
             node.children.map((item) => renderTree(item))
          }
        </TreeItem>
      : <Citizen key={node.nodeID} nodeIdItem={node.nodeID} tooltipId={node.tooltipID} labelItem={node.name}/>
    );
  };

  const renderParent = (items) => {
    return items.map((item) => {
      return (
        <TreeItem key={item.id} nodeId={item.id} label={item.name} >
          {item.children && (item.children.length !== 0) ? item.children.map((child) => renderTree(child)) : null}
        </TreeItem>
      )
    });
  };

  return (
    <>
      <ContainedButtons expandEverything={setExpandAll} collapseEverything={setCollapseAll}/>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        onNodeToggle={handleToggle}
      >
        {renderParent(props.dataTree)}
      </TreeView>
    </>
  );
}

RecursiveTreeView.propTypes = {
  dataTree: PropTypes.array,
  expandedItems: PropTypes.array,
};

RecursiveTreeView.defaultProps = {
  dataTree: [],
};
