import ElementCreator from '../components/element-creator';
import { IDataLevel } from '../types';

class htmlViewer {
  createView(data: IDataLevel[], level: number) {
    const code = new ElementCreator({
      tag: 'code',
      className: ['editor__code-html'],
    });
    code.appendNodeToDom(document.querySelector('.editor__code')!);
    code.setTextContent(data[level].dataHTMLViewer);
  }
}

export default htmlViewer;
