export interface IFlashMessage {
  type: IFlashTypes;
  messages: string[];
}

export enum IFlashTypes {
  error = 'error',
  info = 'info',
}
