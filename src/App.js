import React, { Component } from 'react'
import { number, array, func} from 'prop-types'
import { connect } from 'react-redux'

import { increase, decrease, removeItem } from './store/ducks/age/actions'
import { changeTitle } from './store/ducks/title/actions'

export class App extends Component {
  static propTypes = {
    age: number,
    history: array,
    increase: func,
    decrease: func,
    removeItem: func
  }

  render() {
    const { age, history, increase, decrease, removeItem, title, changeTitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={() => changeTitle('My new Title from another reducer')}>Change title</button>
        <br />
        {age}
        <button onClick={() => increase(5)}>increase</button>
        <button onClick={() => decrease(1)}>decrease</button>
        <hr />
        <h3>history</h3>
        {console.log(history)}
        <ul>
          {history.map(item => (
            <li onClick={() => removeItem(item.id)} key={item.id}>{item.age}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  age: state.ageReducer.age,
  history: state.ageReducer.history,
  title: state.titleReducer.title
})

const mapDispatchToProps = {
  increase,
  decrease,
  removeItem,
  changeTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
