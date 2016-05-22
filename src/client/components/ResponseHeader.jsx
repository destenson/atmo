import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';

@observer
class Header extends Component {
  handleKeyChange = (e) => {
      this.props.header.setKey(e.target.value);
  }

  handleValueChange = (e) => {
    this.props.header.setValue(e.target.value);
  }

  render () {
    return (
      <tr>
        <td>
          <div className="ui transparent input">
            <input type="text" placeholder="Key" value={this.props.header.key} onChange={this.handleKeyChange}/>
          </div>
        </td>
        <td>
          <div className="ui transparent input">
            <input type="text" placeholder="Value" value={this.props.header.value} onChange={this.handleValueChange}/>
          </div>
        </td>
        <td>
          <i className="close link icon"></i>
        </td>
      </tr>
    );
  }
}

Header.propTypes = {
  headerKey: PropTypes.string,
  value: PropTypes.string
}

export default Header;
