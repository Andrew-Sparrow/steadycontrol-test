import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';

const FIRST_ITEM = 0;

const getCityData = (citizenCityID, cityList) => {
  const cityData = cityList.filter((city) => city.id === citizenCityID);
  return cityData;
};

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9rgba(0, 0, 0, 0.87)',
    color: '#f5f5f9',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function Citizen(props) {
  let city = getCityData(props.cityID, props.cityList);
  city = city[FIRST_ITEM];
  const cityDescription = city.name.concat(', ', city.data, ' жителей'); // Москва, 10000000 жителей

  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">{cityDescription}</Typography>
        </React.Fragment>
      }
      placement="top-start"
      aria-label="citizen">
        <TreeItem nodeId={props.nodeIdItem} label={props.labelItem} />
    </HtmlTooltip >
  );
}

Citizen.propTypes = {
  nodeIdItem: PropTypes.string,
  labelItem: PropTypes.string,
  cityList: PropTypes.array,
  cityID: PropTypes.number,
};
