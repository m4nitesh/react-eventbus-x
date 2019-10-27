import * as React from 'react';
import EventBus from './index'


const withEventBus = (args) => {
    return (Component) => {
        return class WithEventBus extends React.Component {
            eventBus = null;
            constructor(props) {
                super(props)
                if (this.eventBus == null) {
                    this.eventBus = new EventBus()
                }
            }

            componentDidMount() {
                this.eventBus.subscribe(Component)
            }

            componentWillUnmount() {
                this.eventBus.unsubscribe(Component)
            }

            render() {
                return <Component {...this.props} />
            }
        }
    };
}

export default withEventBus;
