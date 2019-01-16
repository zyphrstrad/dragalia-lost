import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StatsName from '../../statsPanel/stats/StatsName';
import Slider from './Slider';
import { updateHalidom } from "../../../../redux/actions/actions";
import facility from '../../../../redux/actions/internationlization/facility'

const mapStateToProps = (state) => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHalidom: (field, index, level) => dispatch(updateHalidom(field, index, level)),
  };
}

class Facility extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_path: `${process.env.PUBLIC_URL}/image`
    }
    this.levelDecrement = this.levelDecrement.bind(this);
    this.levelIncrement = this.levelIncrement.bind(this);
  }

  levelDecrement = () => {
    let { field, index, item: { level }, updateHalidom } = this.props;
    level = parseInt(level, 10) - 1;
    if (level >= 0) {
      updateHalidom(field, index, level)
    }
  }

  levelIncrement = () => {
    let { field, index, item: { level }, updateHalidom } = this.props;
    level = parseInt(level, 10) + 1;
    if (level <= 30) {
      updateHalidom(field, index, level)
    }
  }

  render() {
    const { field, index, item: { id, level, image } } = this.props;
    const { image_path } = this.state;
    return (
      <tr>
        <td>
          <img
            className="l"
            alt={image}
            src={`${image_path}/facility/${image}`}
          />
        </td>
        <td>
          <StatsName
            section="facility"
            name={facility[id]}
          />
        </td>
        <td>{level}</td>
        <td>
          <div className="row">
            <img
              alt="minus.png"
              src={`${image_path}/icon/minus.png`}
              onClick={this.levelDecrement}
              style={{ display: "inline-block", verticalAlign: "middle", marginRight: "10px" }}
            />
            <Slider
              field={field}
              index={index}
              level={level}
            />
            <img
              alt="plus.png"
              src={`${image_path}/icon/plus.png`}
              onClick={this.levelIncrement}
              style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "10px" }}
            />
          </div>
        </td>
      </tr>
    );
  }
}


Facility.propTypes = {
  item: PropTypes.object,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Facility);