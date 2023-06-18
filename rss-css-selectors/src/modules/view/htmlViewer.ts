import { dataHTMLViewer } from '../data/dataExampleLayout';
class htmlViewer {
  addLayout(data: Record<string, string>, level: number) {
    const htmlEditor: HTMLElement | null = document.querySelector('.html');
    if (htmlEditor) {
      htmlEditor.innerHTML = data[level];
    }
  }
}

export default htmlViewer;
