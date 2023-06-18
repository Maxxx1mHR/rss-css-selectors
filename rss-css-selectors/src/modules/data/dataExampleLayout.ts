export const dataExampleLayout = {
  1: `<round data-id = "1" class="round" data-tooltip="<round></round>">123</round>
      <round data-id = "2" class="round" data-tooltip="<round></round>"></round>`,

  2: `<square></square>
      <round></round>
      <square></square>`,

  3: `<round id="border"></round>
      <round></round>
      <square></square>`,

  4: `<square></square>
      <round>
        <point></point>
      </round>
      <point></point>`,

  5: `<square>
        <blue></blue>
      </square>
      <round id="border">
        <rectangle></rectangle>
      </round>
      <round>
        <rectangle></rectangle>
      </round>
      `,
};

export const dataHTMLViewer = {
  1: `
  &ltdiv class="boat"&gt
    <round data-id = "1" class="code" data-tooltip="<round></round>">&ltround/&gt</round>
    <round data-id = "2" class="code">&ltround/&gt</round>
  &lt/div&gt
  `,
};
