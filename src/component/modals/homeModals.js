import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button outline color="danger" size="sm" onClick={this.toggle}>Test Modals{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div className='form-group'>
                <label>Username</label>
                <input className='form-control form-control-sm' type='username'></input>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input className='form-control form-control-sm' type='password'></input>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button outline color="success" size="sm" onClick={this.toggle}>Submit</Button>{' '}
            <Button outline color="secondary" size="sm" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;