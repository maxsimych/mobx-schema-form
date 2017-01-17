import React from 'react';
import ActionLink from 'react-toolbox/lib/link';
import asSchemaField from './asSchemaField';
import { formShape } from './schemaFormPropTypes';

class BoolLink extends React.Component {
  onClick = () => {
    this.props.onChange(!this.props.value);
  };

  render() {
    let label = this.props.formField.titleMap[0];

    if (this.props.value) {
      label = this.props.formField.titleMap[1];
    }

    return (
      <ActionLink {...this.props.formField.props} onClick={this.onClick}>{label}</ActionLink>
    );
  }
}

BoolLink.propTypes = {
  formField: formShape,
  value: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};

export default asSchemaField(BoolLink);
