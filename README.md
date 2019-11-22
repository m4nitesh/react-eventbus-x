# react-eventbus-x
Event bus for React

Usecase limited to conditions when component(view) need to updated imperatively as opposed to the declartive way by provided and recommended by React

To attach:
Attach your callback method to eventbus (Eventbus.getInstance()) and then instanse.subscribe(eventkey,_callback)

To post:
Eventbus.getInstance().sendEvent(eventKey, uniqueKey, data) where unique is optional (can used for identifying different sources)

