import React from 'react'

export default function Primary(props) {
    return (
        <div className="Primary">
            <input
              name="emailAddress"
              type="text"
              placeholder="Email Address"
              required
              onChange={(evt) => {
                props.setNewEmail(evt.target.value)
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={(evt) => {
                props.setNewPassword(evt.target.value)
              }}
            />
            <input
              name="passwordConfirm"
              type="password"
              placeholder="Retype your password"
              required
              onChange={(evt) => {
                props.setConfirmPassword(evt.target.value)
              }}
            />
            <button
              disabled={props.submit}
              value="Submit"
              onClick={() => {
                props.setAdditionalPage(true)
              }}
            >
              Sign Up
            </button>
          </div>
    )
}
