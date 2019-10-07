/**
 * Eventbus class
 */

class EventBus {

  constructor(){
    /**
     * Initialize and Attach Eventbus to window if not done
     */
  }
 
  /**
   * Add to the list of subscribers, if already added reject and throw error
   * args - unique key and object
   * return type void
   */
  static addSubscriber = (args) => {
    
  }

  /**
   * Checks whether subscriber is already attached
   * args - unique key and object
   * return type - boolean
   */
  static isSubscriberAttached = (args) => {

  }

  /**
   * Remove from list of subscribers and if already added otherwise throw error
   */
  static unsubscribe = (args) => {

  }

  /**
   * Checks if events bus attached to window if not throws error(internal error, constructor didn't work)
   * Finds in the list of subscribers and sends
  */
  static sendEvent(args){

  }

}

export default EventBus;