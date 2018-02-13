import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEmails, selectEmail, activateModal } from '../actions/index'
import { bindActionCreators } from 'redux'
import Spinner from 'react-spinkit'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Modal from 'react-modal'

class ItemList extends Component {
  componentWillMount() {
    if (!this.props.emails) {
      this.props.getEmails()
    }
  }

  toggleModal() {
    this.props.activateModal(!this.props.modalIsOpened)
  }

  renderEmailList() {
    if (this.props.emails) {
      const emails = this.props.emails
      const keys = Object.keys(emails)
      return keys.map(key => {
        return (
          <li
            className="list-group-item"
            key={key}
            onClick={() => this.props.selectEmail(key)}
          >
            <img className="sm-thumbnail" src={emails[key].avatar} alt="" />
            {emails[key].sender}
            <span className="badge badge-pill badge-success">work</span>
          </li>
        )
      })
    }
    return (
      <li className="list-group-item">
        <Spinner name="line-scale-party" />
      </li>
    )
  }

  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      },
      overlay: {
        backgroundColor: 'rgba(149, 225, 200, 0.55)'
      }
    }
    return (
      <ul className="list-group col-sm-4">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.renderEmailList()}
        </ReactCSSTransitionGroup>
        <div>
          <button
            className="btn btn-danger btn-block"
            onClick={() => this.toggleModal()}
          >
            Compose Mail
          </button>
          <Modal
            isOpen={this.props.modalIsOpened}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => this.toggleModal()}
            closeTimeoutMS={200}
            style={customStyles}
          >
            <h2>Compose mail</h2>
            <p>... working on it ...</p>
            <button onClick={() => this.toggleModal()}>Cancel</button>
          </Modal>
        </div>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    emails: state.emails,
    modalIsOpened: state.modal
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ activateModal, getEmails, selectEmail }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
