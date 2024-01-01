import { Subject } from "./Subject";

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