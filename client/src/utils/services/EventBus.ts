export interface CreatedEvent {
  detail: any;
}

const EventBus = {
  on(event: string, callback: EventListenerOrEventListenerObject) {
    document.addEventListener(event, callback);
  },
  dispatch(event: string, data?: CreatedEvent) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event: string, callback: EventListenerOrEventListenerObject) {
    document.removeEventListener(event, callback);
  },
};

export default EventBus;
