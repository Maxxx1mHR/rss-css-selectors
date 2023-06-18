export const dataExampleLayout = {
  1: `<round data-id="1" class="shape round" data-tooltip="<round></round>"></round>
      <round data-id="2" class="shape round" data-tooltip="<round></round>"></round>`,

  2: `<square data-id="1" class="shape square"  data-tooltip="<square></square>"></square>
      <round data-id="2" class="shape round" data-tooltip="<round></round>"></round>
      <square data-id="3" class="shape square" data-tooltip="<square></square>"></square>`,

  3: `<round data-id="1" id="border" class="shape round border" data-tooltip='<round id="border"></round>'></round>
      <round data-id="2" class="shape round" data-tooltip="<round></round>"></round>
      <square data-id="3" class="shape square" data-tooltip="<square></square>"></square>`,

  4: `<square data-id="1" class="shape square" data-tooltip="<square></square>"></square>
      <round data-id="2" class="shape round" data-tooltip="<round></round>">
        <point data-id="3" class="shape point" data-tooltip="<point></point>"></point>
      </round>
      <point data-id="4" class="shape point" data-tooltip="<point></point>"></point>`,

  5: `<square data-id="1" class="shape square" data-tooltip="<square></square>">
        <blue data-id="2" class="shape blue" data-tooltip="<blue></blue>"></blue>
      </square>
      <round data-id="3" id="border" class="shape round border" data-tooltip='<round id="border"></round>'>
        <rectangle data-id="4" class="shape rectangle" data-tooltip="<rectangle></rectangle>"></rectangle>
      </round>
      <round data-id="5" class="shape round" data-tooltip="<round></round>">
        <rectangle data-id="6" class="shape rectangle" data-tooltip="<rectangle></rectangle>"></rectangle >
      </round>
      `,
};

export const dataHTMLViewer = {
  1: `
  &ltdiv class="boat"&gt
    <round data-id="1" class="code">&ltround/&gt</round>
    <round data-id="2" class="code">&ltround/&gt</round>
  &lt/div&gt
  `,
  2: `
  &ltdiv class="boat"&gt
    <square data-id="1" class="code">&ltsquare/&gt</square>
    <round data-id="2" class="code">&ltround/&gt</round>
    <square data-id="3" class="code">&ltsquare/&gt</square>
  &lt/div&gt
  `,
  3: `
  &ltdiv class="boat"&gt
    <square data-id="1" id="border" class="code">&ltsquare id="border"/&gt</square>
    <round data-id="2" class="code">&ltround/&gt</round>
    <square data-id="3" class="code">&ltsquare/&gt</square>
  &lt/div&gt
  `,
  4: `
  &ltdiv class="boat"&gt
    <square data-id="1" class="code">&ltsquare/&gt</square>
    <round data-id="2" class="code">&ltround&gt
      <point data-id="3" class="code">&ltpoint/&gt</point>
    &lt/round&gt</round>
    <point data-id="4" class="code">&ltpoint/&gt</point>
  &lt/div&gt`,
  5: `
  &ltdiv class="boat"&gt
    <square data-id="1" class="code">&ltsquare&gt
      <blue data-id="2" class="code">&ltblue/&gt</blue>
    &ltsquare/&gt</square><round data-id="3" id="border" class="code">
    &ltround id="border"&gt
      <rectangle data-id="4" class="code">&ltrectangle/&gt</rectangle>
    &lt/round&gt</round>
    <round data-id="5" class="code">&ltround&gt
      <rectangle data-id="6" class="code">&lt/rectangle/&gt</rectangle >
    &lt/round&gt</round>
  &lt/div&gt`,
};
