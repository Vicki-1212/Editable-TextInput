import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {inputText: '', isShow: false}

  onchangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  render() {
    const {inputText, isShow} = this.state
    const btnText = isShow ? 'Edit' : 'Save'
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isShow ? (
              <p className="paragraph">{inputText}</p>
            ) : (
              <input
                type="text"
                className="input-field"
                value={inputText}
                onChange={this.onchangeInputText}
              />
            )}
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
