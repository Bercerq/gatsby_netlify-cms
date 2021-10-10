import React, { PureComponent } from "react"

// Note that control component of a custom widget can't be
// a functional component. It will not work for some reason.
export class CustomWidgetControl extends PureComponent {

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="my custom widget you"></input>
        </div>
        <div>
          <input type="text" placeholder="my custom widget you"></input>
        </div>
        <button>submit</button>
      </div>
    )
  }
}
