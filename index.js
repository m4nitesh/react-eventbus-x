/**
 * Eventbus class
 */

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
  static addSubscriber = (Component) => {
    if (!Component.prototype.getEvent) {
      throw new Error('Callback method not added to Component')
    }
    window.EventBus[Component.name] = Component.prototype.getEvent;
  }

  /**
   * Checks whether subscriber is already attached
   * args - unique key and object
   * return type - boolean
   */
  static isSubscriberAttached = (Component) => {
    if (window.EventBus[Component.name] == '') {

    }
  }

  /**
   * Remove from list of subscribers and if already added otherwise throw error
   */
  static unsubscribe = (Component) => {

  }

  /**
   * Checks if events bus attached to window if not throws error(internal error, constructor didn't work)
   * Finds in the list of subscribers and sends
  */
  static sendEvent(key, val) {
    Location
  }

}

export default EventBus;