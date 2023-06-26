export interface IDataLevel {
  level: number;
  taskTitle: string;
  taskName: string;
  taskDescription: string;
  attribute: string;
  correction: string;
  example: string;
  dataExampleLayout: string;
  dataHTMLViewer: string;
  correctSeletor: string;
}

export interface IElement {
  tag: string;
  className: string[];
  textContent?: string;
  id?: string;
  type?: string;
  src?: string;
  alt?: string;
}
