import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEmails } from '../actions/index'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ItemDetail extends Component {
  componentWillMount() {
    if (this.props.selected) {
      this.props.getEmails()
    }
  }

  render() {
    const emails = this.props.emails
    const selected = this.props.selected
    if (!selected) {
      return (
        <div className="col-sm-8 detail-view">
          <br />
          <div>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              <div className="preload-symbol">
                <p>
                  <i className="fas fa-envelope" />
                </p>
                <p>Choose from contacts list to read mail</p>
              </div>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      )
    }

    const { sender, subject, datetime, body, address } = emails[selected]
    return (
      <div className="col-sm-8 detail-view">
        <br />
        <div>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <div className="email-area" key={selected}>
              <div className="email-subject">{subject}</div>
              <hr />
              <div className="email-meta justify-content-between">
                <small className="mail-sender">{sender}</small>
                <small className="mailblue">&emsp;{address}</small>
                <span className="badge badge-info">{datetime}</span>
              </div>
              <br />
              <div className="email-body">
                <p>{body}</p>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    emails: state.emails,
    selected: state.activeEmail
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getEmails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
