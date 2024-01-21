/**
 * Subject interface
 * @description Interface for Subject that will have observers registered to it.
 */
export interface Subject<T> {
  /**
   * Array of observers that will be notified when the subject changes.
   */
  observers: Observer<T>[];
  /**
   * Register an observer to the subject.
   * @param observer Observer to be registered to the subject.
   */
  registerObserver(observer: Observer<T>): void;
  /**
   * Remove an observer from the subject.
   * @param observer Observer to be removed from the subject.
   */
  removeObserver(observer: Observer<T>): void;
  /**
   * Notify all observers that the subject has changed.
   * @param value Value to be passed to the observers.
   */
  notifyObservers(value: T): void;
}

/**
 * Observer interface.
 * @description Interface for Observer that will be registered to a Subject.
 * @template T Type of value that will be passed to the observer.
 */
export interface Observer<T> {
  /**
   * Value that will be passed to the observer.
   */
  value: T;
  /**
   * Update the observer with a new value.
   * @param value New value to be passed to the observer.
   */
  update(value: T): void;
  /**
   * Callback function that will be called when the observer is registered to a subject.
   * @param subject Subject that the observer was registered to.
   */
  onRegister?(subject: Subject<T>): void;
  /**
   * Callback function that will be called when the observer is removed from a subject.
   * @param subject Subject that the observer was removed from.
   */
  onRemove?(subject: Subject<T>): void;
}