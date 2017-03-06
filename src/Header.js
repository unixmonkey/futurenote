import React, { Component } from 'react';

class Header extends Component {
  wellStyle() {
    return {
      paddingTop: '5px',
      paddingBottom: '5px',
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <header>
            <div className="well" style={this.wellStyle()}>
              Futurenote
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;
