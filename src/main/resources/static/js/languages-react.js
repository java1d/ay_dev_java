var App = React.createClass({

  loadFromServer: function () {
    var self = this;
    $.ajax({
      url: "http://localhost:8080/api/languages"
    }).then(function (data) {
      console.log('App.loadFromServer setState ' + data);
      self.setState({languages: data._embedded.languages});
    });
  },

  getInitialState: function () {
    console.log('App.getInitialState');
    return {languages: []};
  },

  componentWillMount: function() {
    console.log('App.componentWillMount');
  },

  componentDidMount: function () {
    console.log('App.componentDidMount');
    this.loadFromServer();
  },

  handleLanguageRemove: function( language ) {
    console.log('App.handleLanguageRemove ' + language);
    var index = -1;
    var clength = this.state.languages.length;
    for( var i = 0; i < clength; i++ ) {
        if( this.state.languages[i].code === language.code ) {
            index = i;
            break;
        }
    }
    this.state.languages.splice( index, 1 );
    this.setState( {languages: this.state.languages} );
  },

  render() {
    console.log('App.render '+this.state.languages.length);
    return ( <LanguagesTable languages={this.state.languages} onLanguageRemove={this.handleLanguageRemove}/> );
  }
});

class LanguagesTable extends React.Component {

    constructor(props) {
        super(props);
        console.log('LanguagesTable.constructor '+props);
        this.state = {languages: this.props.languages.length};
        console.log('state '+this.state.languages.length);
        this.callback = this.props.onLanguageRemove;
    }

    render() {
        console.log('LanguagesTable#render '+this.props.languages);
        console.log('LanguagesTable#render '+this.props.onLanguageRemove);
        const thStyle = {
            float: 'right',
            paddingTop: '0.5rem',
            marginRight: '4.8rem'
        };

        var rows = [];
        var that = this;
        var callback = this.props.onLanguageRemove;
        this.props.languages.forEach(function(language) {
            rows.push(<LanguageRow language={language} onLanguageDelete={callback}/>);
        });
        console.log('rows ' + rows.length);
        var count = document.getElementById("globaltablecount");
        count.innerHTML = "Showing " + rows.length + " records";
        return (
          <table className='global-container-four__table tablesorter' id='global-table'>
            <thead>
              <tr>
                <th>
                 Code</th><th>Language Text</th><th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>);
    }

}

class LanguageRow extends React.Component {

    deleteRow() {
        window.alert(this.props.language.text);
        var self = this;
        $.ajax({
          url: self.props.language._links.self.href,
          type: 'DELETE',
          success: function(result) {
            console.log(self.props.language);
            self.props.onLanguageDelete(self.props.language);
          },
          error: function(xhr, ajaxOptions, thrownError) {
            toastr.error(xhr.responseJSON.message);
          }
        });
    }

    render() {
        console.log('LanguageRow#render '+this.props.onLanguageDelete);
        return (
            <tr>
                <td>{this.props.language.code}</td>
                <td>{this.props.language.text}</td>
                <td><div className="global-table__button-container"><button id="buttonbin1" className="global-table__button--deleterow" onClick={this.deleteRow.bind(this)}><i className="fa fa-trash global-table__button--icon" aria-hidden="true"></i></button></div></td>
            </tr>
        );
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);