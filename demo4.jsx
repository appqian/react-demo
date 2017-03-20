// import React from ('react');
var Hello = React.createClass({
    getInitialState:function(){
        return {
            name:'zhangan'
        }
    },
    render:function(){
        return (
            <div name={this.props.name}>234</div>
        )
    }
});
var World = React.createClass({

});
ReactDOM.render(<Hello/>,document.getElementById('box'));