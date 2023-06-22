import ElementCreator from '../components/element-creator';
import { IDataLevel } from '../types/types';

class HtmlView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
  }
  private createView(data: IDataLevel[], level: number): void {
    const code = new ElementCreator({
      tag: 'code',
      className: ['editor__code-html'],
      textContent: data[level].dataHTMLViewer,
    });
    const editorCode = document.querySelector('.editor__code');
    if (editorCode) {
      editorCode.innerHTML = '';
    }
    if (editorCode instanceof HTMLElement) {
      code.appendNodeToDom(editorCode);
    }
  }
}

export default HtmlView;
