class Football extends React.Component {
  shoot = () => {
    alert(this);
  }
  render() {
    return ( 
        <button onCLick={this.shoot}>Take the shot</button>;
    )
  }
}

ReactDOM.render(<Football />, document.getElementById("root"));
