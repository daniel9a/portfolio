import React from "react"

import { FaRegSun, FaRegMoon } from "react-icons/fa"

// https://codepen.io/jo-asakura/pen/nhutb?editors=1100
const Toggle = ({ checked, onChange }) => (
  <div className="button-switch">
    {console.log(checked)}
    {console.log(onChange)}
    <button className="switch" id="switch-color" onClick={onChange}>
      {checked ? <FaRegMoon /> : <FaRegSun />}
    </button>

    {/* <input
      className="switch"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="switch-color"
    /> */}
  </div>
)

export default Toggle
