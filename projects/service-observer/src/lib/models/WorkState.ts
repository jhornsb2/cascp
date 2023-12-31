import { Observable } from "rxjs";

/**
 * WorkState
 * @description
 * WorkState is a generic interface for a state of a work item.
 * @param I - The type of the id of the work item.
 * @param T - The type of the data of the work item.
 */
export interface WorkState<I, T> {
  /**
   * The id of the work item.
   */
  id: I;
  /**
   * The data that the work item retrieved.
   */
  data: T;
  /**
   * The error that the work item encountered.
   */
  error?: Error;
  /**
   * Whether the work item is working.
   */
  isWorking: boolean;
  /**
   * The observable that the work item is using to retrieve the data.
   */
  observable?: Observable<T>;
}