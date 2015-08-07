export default function components(React){
  class Metronome extends React.Component{
    static defaultProps = {
      initial: 0,
      period: 1000,
      onTick: () => {}
    }
    state = {
      value: this.props.initial || 0
    }
    componentWillMount(){
      this.intval = setInterval(() => (this.props.onTick(this.state.value + 1), this.setState({value: this.state.value + 1})), this.props.period);
    }
    componentWillReceiveProps(nextProps){
      clearInterval(this.intval);
      this.intval = setInterval(() => this.setState({value: this.state.value + 1}), nextProps.period);
    }
    render(){
      return this.props.children(this.state.value);
    }
    componentWillUnmount(){
      clearInterval(this.intval);
    }
  }

  return {Metronome};
}
