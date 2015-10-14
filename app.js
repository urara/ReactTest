var PersonTable = React.createClass({
  getInitialState:function(){
    return {
      data: [
        {"n":1, "fname":"George", "lname":"Washington"},
        {"n":2, "fname":"John", "lname":"Adams"},
        {"n":3, "fname":"Thomas", "lname":"Jefferson"},
        {"n":4, "fname":"James", "lname":"Madison"},
        {"n":5, "fname":"James", "lname":"Monroe"},
        {"n":6, "fname":"John", "mname":"Quincy", "lname":"Adams"},
        {"n":7, "fname":"Andrew", "lname":"Jackson"},
        {"n":8, "fname":"Martin", "lname":"Van Buren"},
        {"n":9, "fname":"William", "mname":"Henry", "lname":"Harrison"},
        {"n":10, "fname":"John", "lname":"Tyler"}
      ]
    }
  },
  render:function(){
    var rows = this.state.data.map(function(person){
      return <PersonRow data={person} />
    })
    return <table>{rows}</table>
  }
});

var PersonRow = React.createClass({
  render:function(){
    return (
      <tr>
        <td>{this.props.data.n}</td>
        <td>{this.props.data.fname}</td>
        <td>{this.props.data.mname}</td>
        <td>{this.props.data.lname}</td>
      </tr>
    )
  
  }
});


React.render(<PersonTable />, document.body);
