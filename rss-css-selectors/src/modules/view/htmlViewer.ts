import { dataHTMLViewer } from '../data/dataExampleLayout';
import { IDataLevel } from '../types';

class htmlViewer {
  addLayout(data: IDataLevel[], level: number) {
    const htmlEditor: HTMLElement | null = document.querySelector('.editor__code-html');
    if (htmlEditor) {
      htmlEditor.innerHTML = data[level].dataHTMLViewer;
    }
  }
}

export default htmlViewer;
