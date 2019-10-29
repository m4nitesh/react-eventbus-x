class EventBus {

  /**
   * Init eventbus by attaching to window
   */
  initBus() {
    if (!window.EventBus) {
      window.EventBus = {}
    }
  }

  /**
   * Get singleton instance of EventBus
   */
  static getInstance() {
    initBus()
    return this
  }


  /**
   * Add to the list of subscribers, if already added reject and throw error
   * args - unique key and object
   * return type void
   */
  subscribe = (eventKey, _callback) => {
    if (!_callback) {
      throw new Error(`Callback method not added to ${eventKey}`)
    }
    if (_callback.length < 2) {
      throw new Error('Callback method does not have supporting args length')
    }
    window.EventBus[eventKey] = _callback
  }

  /**
   * Checks whether subscriber is already attached
   * args - unique key and object
   * return type - boolean
   */
  isSubscriberAttached = (eventKey) => {
    if (window.EventBus[eventKey]) {
      return true
    }
    return false
  }

  /**
   * Remove from list of subscribers and if already added otherwise throw error
   */
  unsubscribe = (eventKey) => {
    delete window.EventBus[eventKey]
  }

  /**
   * Checks if events bus attached to window if not throws error(internal error, constructor didn't work)
   * Finds in the list of subscribers and sends
  */
  sendEvent(eventKey, dataKey, val) {
    if (!window.EventBus) {
      throw new Error('Eventbus is not initialized, use getInstance')
    }
    const _callback = window.EventBus[eventKey];
    if (!_callback) {
      throw new Error(` ${eventKey} not subscribed `)
    }
    _callback(dataKey, val)
  }

}

export default EventBus;