import { dataHTMLViewer } from '../data/dataExampleLayout';
class htmlViewer {
  addLayout(data: Record<string, string>, level: number) {
    const htmlEditor: HTMLElement | null = document.querySelector('.editor__code-html');
    if (htmlEditor) {
      htmlEditor.innerHTML = data[level];
    }
  }
}

export default htmlViewer;
