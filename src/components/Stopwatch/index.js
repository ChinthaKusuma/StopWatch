// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {mnt: 0, sec: 0}

  clearTimer = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({
      sec: prevState.sec + 1,
    }))
  }

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    this.clearTimer()
  }

  onReset = () => {
    this.clearTimer()
    this.setState({
      sec: 0,
      mnt: 0,
    })
  }

  stopWatch = () => {
    const {mnt, sec} = this.state
    const val = mnt * 60 + sec
    const mnts = Math.floor(val / 60)
    const secs = Math.floor(val % 60)
    const sec1 = secs > 9 ? {secs} : `0${secs}`
    const mnt1 = secs > 9 ? {mnts} : `0${mnts}`
    const time = `${mnt1}:${sec1}`

    return (
      <div className="one12">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
          alt="stopwatch"
          className="img1"
        />
        <h1 className="heading">{time}</h1>
        <div className="">
          <button className="btn1" type="button" onClick={this.onStart}>
            Start
          </button>
          <button className="btn2" type="button" onClick={this.onStop}>
            Stop
          </button>
          <button className="btn3" type="button" onClick={this.onReset}>
            Reset
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="bgContainer">
        <div className="c1">
          <div className="c2">
            <h1 className="heading">Stopwatch</h1>
            <div className="c3">{this.stopWatch()}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
