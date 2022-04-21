import React from 'react';

import { Dialog } from '@ndustrial/nd-dialog-react';

interface State {
  showDialog: boolean;
}

class BasicComponent extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      showDialog: false
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ showDialog: true })}>
          Show Dialog
        </button>
        <Dialog isOpen={this.state.showDialog}>
          <button onClick={() => this.setState({ showDialog: false })}>
            Close Dialog
          </button>
          <p>Hello there. I am a dialog</p>
        </Dialog>
      </div>
    );
  }
}

export let DialogExample = () => <BasicComponent />;
