import React, { Component } from 'react';
import Slider  from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class Popularity extends Component {
  constructor(props) {
		super(props)
		const { value } = this.props
		this.state = { value }
	}
  setValue(e) {
    this.setState({ value: e })
  }
  update(e) {
    this.setState({ value: e })
    this.props.setFontsize(e, this.props.itemName)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }
  render() {
    return (
      <div className="popularity">
        <span className="h2">Popularity</span>
        <Slider max={5} step={1} value={this.state.value} handlehandle={handle} onChange={this.setValue.bind(this)} onAfterChange={this.update.bind(this)}/>
      </div>
    );
  }
}

export default Popularity;