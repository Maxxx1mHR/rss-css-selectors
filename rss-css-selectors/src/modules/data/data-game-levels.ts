export const dataGameLevels = [
  {
    level: 1,
    taskName: 'Type Selector',
    taskDescription: 'Select elements by their type',
    attribute: '<span>A</span>',
    correction:
      'Selects all elements of type <span>A</span>. Type refers to the type of tag, so <span>&ltdiv&gt</span>, <span>&ltp&gt</span> and <span>&ltul&gt</span> are all different element types.',
    example: '<span>div</span> selects all <span>&ltdiv&gt</span> elements',
    dataExampleLayout: `<wheel data-id="1" class="shape wheel" data-tooltip="<wheel></wheel>"></wheel>
      <wheel data-id="2" class="shape wheel" data-tooltip="<wheel></wheel>"></wheel>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <wheel data-id="1" class="code">&wheel/&gt</wheel>
      <wheel data-id="2" class="code">&wheel/&gt</wheel>
    &lt/div&gt
      `,
  },
  {
    level: 2,
    taskName: 'Type Selector',
    taskDescription: 'Select elements by their type',
    attribute: '<span>A</span>',
    correction:
      'Selects all elements of type <span>A</span>. Type refers to the type of tag, so <span>&ltdiv&gt</span>, <span>&ltp&gt</span> and <span>&ltul&gt</span> are all different element types.',
    example: '<span>div</span> selects all <span>&ltdiv&gt</span> elements',
    dataExampleLayout: `<map data-id="1" class="shape map"  data-tooltip="<map></map>"></map>
    <wheel data-id="2" class="shape wheel" data-tooltip="<wheel></wheel>"></wheel>
    <map data-id="3" class="shape map" data-tooltip="<map></map>"></map>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <map data-id="1" class="code">&map/&gt</map>
      <wheel data-id="2" class="code">&wheel/&gt</wheel>
      <map data-id="3" class="code">&map/&gt</map>
    &lt/div&gt
      `,
  },
  {
    level: 3,
    taskName: 'ID Selector',
    taskDescription: 'Select elements with an ID  ',
    attribute: '<span>#id</span>',
    correction:
      'Selects the element with a specific <span>id</span>. You can also combine the ID selector with the type selector.',
    example: '<span>#cool</span> selects any element with <span>id="cool"</span> elements',
    dataExampleLayout: `<wheel data-id="1" id="first" class="shape wheel first" data-tooltip='<wheel id="first"></wheel>'></wheel>
      <wheel data-id="2" class="shape wheel" data-tooltip="<wheel></wheel>"></wheel>
      <map data-id="3" class="shape map" data-tooltip="<map></map>"></map>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <wheel data-id="1" id="first" class="code">&wheel id="first"/&gt</wheel>
      <wheel data-id="2" class="code">&wheel/&gt</wheel>
      <map data-id="3" class="code">&map/&gt</map>
    &lt/div&gt
      `,
  },
  {
    level: 4,
    taskName: 'Descendant Selector',
    taskDescription: 'Select an element inside another element',
    attribute: '<span>A  B</span>',
    correction:
      'Selects all <span>B</span> inside of <span>A</span>. <span>B</span> is called a descendant because it is inside of another element.',
    example:
      '<span>p strong </span> selects all <span>&ltstrong&gt</span> elements that are inside of any <span>&lp&gt</span>',
    dataExampleLayout: `<map data-id="1" class="shape map" data-tooltip="<map></map>"></map>
    <wheel data-id="2" class="shape wheel" data-tooltip="<wheel></wheel>">
      <spyglass data-id="3" class="shape spyglass" data-tooltip="<spyglass></spyglass>"></spyglass>
    </wheel>
    <spyglass data-id="4" class="shape spyglass" data-tooltip="<spyglass></spyglass>"></spyglass>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <map data-id="1" class="code">&map/&gt</map>
      <wheel data-id="2" class="code">&wheel&gt
        <spyglass data-id="3" class="code">&spyglass/&gt</spyglass>
      &lt/wheel&gt</wheel>
      <spyglass data-id="4" class="code">&spyglass/&gt</spyglass>
    &lt/div&gt
      `,
  },
  {
    level: 5,
    taskName: 'No Name...',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id  A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements  that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `<map data-id="1" class="shape map" data-tooltip="<map></map>">
    <sword data-id="2" class="shape sword" data-tooltip="<sword></sword>"></sword>
  </map>
  <wheel data-id="3" id="border" class="shape wheel border" data-tooltip='<wheel id="border"></wheel>'>
    <bottle data-id="4" class="shape bottle" data-tooltip="<bottle></bottle>"></bottle>
  </wheel>
  <wheel data-id="5" class="shape wheel" data-tooltip="<wheel></wheel>">
    <bottle data-id="6" class="shape bottle" data-tooltip="<bottle></bottle>"></bottle >
  </wheel>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <map data-id="1" class="code">&map&gt
        <sword data-id="2" class="code">&sword/&gt</sword>
      &map/&gt</map><wheel data-id="3" id="border" class="code">
      &wheel id="border"&gt
        <bottle data-id="4" class="code">&bottle/&gt</bottle>
      &lt/wheel&gt</wheel>
      <wheel data-id="5" class="code">&wheel&gt
        <bottle data-id="6" class="code">&lt/bottle/&gt</bottle >
      &lt/wheel&gt</wheel>
    &lt/div&gt
      `,
  },
];
