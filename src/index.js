class EventBus {
  constructor() {
    /**
     * Initialize and Attach Eventbus to window if not done
     */
    if (!window.EventBus) {
      window.EventBus = {}
    }
  }

  /**
   * Add to the list of subscribers, if already added reject and throw error
   * args - unique key and object
   * return type void
   */

  static getInstance(WrappedComponent) {
    if (!WrappedComponent.prototype.isReactComponent) {
      return this;
    }
    const ref = this.instanceRef;
    return ref.getInstance ? ref.getInstance() : ref;
  }


  static subscribe = (name, method) => {
    if (!window.EventBus) {
      window.EventBus = {}
    }
    // console.log(Component)
    // if (!Component.prototype.observeEvent) {
    //   throw new Error(`Callback method not added to ${Component.name}`)
    // }
    // if (Component.prototype.observeEvent.length < 2) {
    //   throw new Error('Callback method does not have supporting args length')
    // }

    // window.EventBus[Component.name] = Component.prototype.observeEvent;
    window.EventBus[name] = method
  }

  /**
   * Checks whether subscriber is already attached
   * args - unique key and object
   * return type - boolean
   */
  static isSubscriberAttached = (Component) => {
    if (window.EventBus[Component.name]) {
      return true
    }
    return false
  }

  /**
   * Remove from list of subscribers and if already added otherwise throw error
   */
  static unsubscribe = (Component) => {
    delete window.EventBus[Component.name]
  }

  /**
   * Checks if events bus attached to window if not throws error(internal error, constructor didn't work)
   * Finds in the list of subscribers and sends
  */
  static sendEvent(ComponentName, key, val) {
    if (!window.EventBus) {
      throw new Error('Eventbus is not initialized, use HOC(withEventBus) to initialize')
    }
    const _callback = window.EventBus[ComponentName];
    if (!_callback) {
      throw new Error(` ${ComponentName} not subscribed `)
    }
    _callback(key, val)
  }

}

export default EventBus;