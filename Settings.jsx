const { React }                 = require('powercord/webpack');
const { TextInput } = require('powercord/components/settings');

module.exports = class Settings extends React.Component {
  constructor (props) {
    super();

    this.settings = props.settings;
  }

  render () {
    var dval = JSON.stringify(JSON.stringify(this.settings.get("replacements")));
    dval = dval.substring(1, dval.length - 1);
    return (<div><TextInput note='Current replacements (Stringified JSON).' defaultValue={dval} required={true} onChange={val => this.settings.set('replacements', JSON.parse(val), 1234)}>Code</TextInput></div>);
  }
};
