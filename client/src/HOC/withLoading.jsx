import React, { PureComponent } from "react";

import Spinner from "../components/Common/Spinner";

const STATE_LOADED = "STATE_LOADED";
const STATE_LOADING = "STATE_LOADING";
const STATE_SPINNING = "STATE_SPINNER";

const withLoading = WrappedComponent =>
  class extends PureComponent {
    constructor(props) {
      super(props);

      this.state = { state: STATE_LOADING };
    }

    componentDidMount() {
      this.props.fetchData().then(() => this.setState({ state: STATE_LOADED }));

      this.timeout = setTimeout(() => {
        this.setState(prevState => {
          return {
            state:
              prevState.state === STATE_LOADING ? STATE_SPINNING : STATE_LOADED
          };
        });
      }, 300);
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    render() {
      switch (this.state.state) {
        case STATE_LOADING:
          return null;
        case STATE_SPINNING:
          return <Spinner />;
        case STATE_LOADED:
          const { fetchData, ...props } = this.props;

          return <WrappedComponent {...props} />;
      }
    }
  };

export default withLoading;
