import ElementCreator from '../components/element-creator';
import { IDataLevel } from '../types/types';

class HtmlView {
  constructor(data: IDataLevel[], level: number) {
    this.createView(data, level);
    this.mouseoverCode();
    this.mouseoutCode();
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

  private mouseoverCode(): void {
    const editorCode = document.querySelector('.editor__code-html');
    editorCode?.addEventListener('mouseover', (event) => {
      if (event.target instanceof HTMLElement) {
        const code = event.target.closest('.code');
        const id = event.target.dataset.id;
        code?.classList.add('lighting-code');
        document.querySelector(`.shape[data-id='${id}']`)?.classList.add('hover');
        document.querySelector(`.shape-help[data-id='${id}']`)?.classList.add('shape-help-active');
      }
    });
  }

  private mouseoutCode(): void {
    const editorCode = document.querySelector('.editor__code-html');
    editorCode?.addEventListener('mouseout', (event) => {
      if (event.target instanceof HTMLElement) {
        const code = event.target.closest('.code');
        const id = event.target.dataset.id;
        code?.classList.remove('lighting-code');
        document.querySelector(`.shape[data-id='${id}']`)?.classList.remove('hover');
        document.querySelector(`.shape-help[data-id='${id}']`)?.classList.remove('shape-help-active');
      }
    });
  }
}

export default HtmlView;
