import { Observer } from "./Observer";

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