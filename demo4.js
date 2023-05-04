//Component example with Event handlers
function Football() {
    function shoot() {
        alert('Great Shot!')
    }

    return (
        <button onCLick={this.shoot}>Take the shot</button>
    )
}

class Football extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  render() {
    return (
        <button onCLick={shoot()}>Take the shot</button>
    )
  }
}
ReactDOM.render(<Football />, document.getElementById('root'));