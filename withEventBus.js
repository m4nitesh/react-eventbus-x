import * as React from 'react';
import EventBus from './index'


const withEventBus = (args) => {
    return (Component) => {
        class WithEventBus extends React.Component {
            reference = null;
            constructor() {
                if( this.reference == null){
                    this.reference = new EventBus()
                }

            }
            render() {
                return <div>
                    Hello
                </div>
            }
        }
    };
}