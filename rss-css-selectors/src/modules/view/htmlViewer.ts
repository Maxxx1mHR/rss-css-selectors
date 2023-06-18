import { dataHTMLViewer } from '../data/dataExampleLayout';
class htmlViewer {
  addLayout() {
    const htmlEditor: HTMLElement | null = document.querySelector('.editor__html');
    if (htmlEditor) {
      htmlEditor.innerHTML = dataHTMLViewer[1];
    }
  }
}

export default htmlViewer;
