export interface IDataLevel {
  level: number;
  taskName: string;
  taskDescription: string;
  attribute: string;
  correction: string;
  example: string;
  dataExampleLayout: string;
  dataHTMLViewer: string;
}

export interface IElement {
  tag: string;
  className: string[];
  textContent?: string;
  src?: string;
  alt?: string;
}
