export const dataGameLevels = [
  {
    level: 1,
    taskTitle: 'Select the wheel',
    taskName: 'Type Selector',
    taskDescription: 'Select elements by their type',
    attribute: '<span>A</span>',
    correction:
      'Selects all elements of type <span>A</span>. Type refers to the type of tag, so <span>&ltdiv&gt</span>, <span>&ltp&gt</span> and <span>&ltul&gt</span> are all different element types.',
    example: '<span>div</span> selects all <span>&ltdiv&gt</span> elements',
    dataExampleLayout: `
      <wheel data-id="1" class="shape wheel animation-rotation"></wheel>
      <wheel data-id="2" class="shape wheel animation-rotation"></wheel>`,
    dataHelpCss: `<div data-id="1" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <wheel data-id="1" class="code">&ltwheel/&gt</wheel>
        <wheel data-id="2" class="code">&ltwheel/&gt</wheel>
    &lt/div&gt
      `,
    correctSeletor: 'wheel',
  },
  {
    level: 2,
    taskTitle: 'Select the map',
    taskName: 'Type Selector',
    taskDescription: 'Select elements by their type',
    attribute: '<span>A</span>',
    correction:
      'Selects all elements of type <span>A</span>. Type refers to the type of tag, so <span>&ltdiv&gt</span>, <span>&ltp&gt</span> and <span>&ltul&gt</span> are all different element types.',
    example: '<span>div</span> selects all <span>&ltdiv&gt</span> elements',
    dataExampleLayout: `
      <map data-id="1" class="shape map animation-rotation"></map>
      <wheel data-id="2" class="shape wheel"></wheel>
      <map data-id="3" class="shape map animation-rotation"></map>`,
    dataHelpCss: `
    <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="3" class=shape-help>&ltmap&gt&lt/map&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <map data-id="1" class="code">&ltmap/&gt</map>
        <wheel data-id="2" class="code">&ltwheel/&gt</wheel>
        <map data-id="3" class="code">&ltmap/&gt</map>
    &lt/div&gt
      `,
    correctSeletor: 'map',
  },
  {
    level: 3,
    taskTitle: 'Select the first wheel',
    taskName: 'ID Selector',
    taskDescription: 'Select elements with an ID  ',
    attribute: '<span>#id</span>',
    correction:
      'Selects the element with a specific <span>id</span>. You can also combine the ID selector with the type selector.',
    example: '<span>#cool</span> selects any element with <span>id="cool"</span> elements',
    dataExampleLayout: `
      <wheel data-id="1" id="first" class="shape wheel first animation-rotation"></wheel>
      <wheel data-id="2" class="shape wheel"></wheel>
      <map data-id="3" class="shape map"></map>`,
    dataHelpCss: `
      <div data-id="1" class=shape-help>&ltwheel id="first&gt&lt/wheel&gt</div>
      <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
      <div data-id="3" class=shape-help>&ltmap&gt&lt/map&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <wheel data-id="1" id="first" class="code">&ltwheel id="first"/&gt</wheel>
        <wheel data-id="2" class="code">&ltwheel/&gt</wheel>
        <map data-id="3" class="code">&ltmap/&gt</map>
    &lt/div&gt
      `,
    correctSeletor: '#first',
  },
  {
    level: 4,
    taskTitle: 'Select the spyglass on the wheel',
    taskName: 'Descendant Selector',
    taskDescription: 'Select an element inside another element',
    attribute: '<span>A  B</span>',
    correction:
      'Selects all <span>B</span> inside of <span>A</span>. <span>B</span> is called a descendant because it is inside of another element.',
    example:
      '<span>p strong </span> selects all <span>&ltstrong&gt</span> elements that are inside of any <span>&lp&gt</span>',
    dataExampleLayout: `
      <map data-id="1" class="shape map"></map>
      <wheel data-id="2" class="shape wheel">
        <spyglass data-id="3" class="shape spyglass animation-rotation"></spyglass>
      </wheel>
      <spyglass data-id="4" class="shape spyglass"></spyglass>
    `,
    dataHelpCss: `
    <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="3" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
    <div data-id="4" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <map data-id="1" class="code">&ltmap/&gt</map>
        <wheel data-id="2" class="code">&ltwheel&gt
            <spyglass data-id="3" class="code">&ltspyglass/&gt</spyglass>
        &lt/wheel&gt</wheel>
        <spyglass data-id="4" class="code">&ltspyglass/&gt</spyglass>
    &lt/div&gt
      `,
    correctSeletor: 'wheel spyglass',
  },
  {
    level: 5,
    taskTitle: 'Select the bottle on the wheel',
    taskName: 'Descendant ID Selector',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id  A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements  that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `
      <map data-id="1" class="shape map">
          <sword data-id="2" class="shape sword"></sword>
      </map>
      <wheel data-id="3" id="captain" class="shape wheel">
          <bottle data-id="4" class="shape bottle animation-rotation"></bottle>
      </wheel>
      <wheel data-id="5" class="shape wheel">
          <bottle data-id="6" class="shape bottle"></bottle>
      </wheel>
    `,
    dataHelpCss: `      <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="2" class=shape-help>&ltsword&gt&lt/sword&gt</div>
    <div data-id="3" class=shape-help>&ltwheel id="captain"&gt&lt/wheel&gt</div>
    <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="5" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="6" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <map data-id="1" class="code">&ltmap&gt
            <sword data-id="2" class="code">&ltsword/&gt</sword>
        &lt/map&gt</map><wheel data-id="3" id="captain" class="code">
        &ltwheel id="captain"&gt
            <bottle data-id="4" class="code">&ltbottle/&gt</bottle>
        &lt/wheel&gt</wheel>
        <wheel data-id="5" class="code">&ltwheel&gt
            <bottle data-id="6" class="code">&ltbottle/&gt</bottle >
        &lt/wheel&gt</wheel>
    &lt/div&gt
      `,
    correctSeletor: '#captain bottle',
  },
  {
    level: 6,
    taskTitle: 'Select rotating elements using attributes',
    taskName: 'Comma Combinator and attribute selector',
    taskDescription: 'Combine the attribute selector with another selector',
    attribute: '<span>A, B, C</span>',
    correction:
      'Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.',
    example:
      '<span>a[href*="w3schools"]</span> selects every <span>&lta&gt</span> element whose href attribute value contains the substring <span>"w3schools"<span>',
    dataExampleLayout: `
      <wheel data-id="1" class="shape wheel">
          <spyglass data-id="2" data-attr="spyglass" class="shape spyglass animation-rotation"></spyglass>
          <spyglass data-id="3" class="shape spyglass"></spyglass>
      </wheel>
      <map data-id="4" class="shape map">
          <sword data-id="5" data-attr="first-sword" class="shape sword animation-rotation"></sword>
          <sword data-id="6" data-attr="second" class="shape sword"></sword>
          <sword data-id="7" data-attr="sword-third" class="shape sword animation-rotation"></sword>
      </map>
      <wheel data-id="8" class="shape wheel">
          <bottle data-id="9" data-attr="frontend" class="shape bottle animation-rotation"></bottle>
          <bottle data-id="10"  data-attr="bottle" class="shape bottle"></bottle>
          <bottle data-id="11" data-attr="backend" class="shape bottle animation-rotation"></bottle>
      </wheel>
      <spyglass data-id="12" data-attr="spyglass" class="shape spyglass animation-rotation"></spyglass>
    `,
    dataHelpCss: `<div data-id="1" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="2" class=shape-help>&ltspyglass data-attr="spyglass"&gt&lt/spyglass&gt</div>
    <div data-id="3" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
    <div data-id="4" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="5" class=shape-help>&ltsword data-attr="first-sword"&gt&lt/sword&gt</div>
    <div data-id="6" class=shape-help>&ltsword data-attr="second"&gt&lt/sword&gt</div>
    <div data-id="7" class=shape-help>&ltsword data-attr="sword-third"&gt&lt/sword&gt</div>
    <div data-id="8" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="9" class=shape-help>&ltbottle data-attr="frontend"&gt&lt/bottle&gt</div>
    <div data-id="10" class=shape-help>&ltbottle data-attr="bottle"&gt&lt/bottle&gt</div>
    <div data-id="11" class=shape-help>&ltbottle  data-attr="backend"&gt&lt/bottle&gt</div>
    <div data-id="12" class=shape-help>&ltspyglass data-attr="spyglass"&gt&lt/spyglass&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <wheel data-id="1" class="code">&ltwheel&gt
            <spyglass data-id="2" data-attr="spyglass" class="code">&ltspyglass data-attr="spyglass"/&gt</spyglass>
            <spyglass data-id="3" class="code">&ltspyglass /&gt</spyglass>
        &lt/wheel&gt</wheel>
        <map data-id="4" class="code">&ltmap&gt
            <sword data-id="5" data-attr="first-sword" class="code">&ltsword data-attr="first-sword"/&gt</sword>
            <sword data-id="6" data-attr="second" class="code">&ltsword data-attr="second"/&gt</sword>
            <sword data-id="7" data-attr="sword-third" class="code">&ltsword data-attr="sword-third"/&gt</sword>
        &lt/map&gt
        </map><wheel data-id="8" class="code">&ltwheel&gt
            <bottle data-id="9" data-attr="frontend" class="code">&ltbottle data-attr="frontend"/&gt</bottle>
            <bottle data-id="10" data-attr="bottle" class="code">&ltbottle data-attr="bottle"/&gt</bottle>
            <bottle data-id="11" data-attr="backend" class="code">&ltbottle data-attr="backend"/&gt</bottle>
        &lt/wheel&gt
        </wheel><spyglass data-id="12" data-attr="spyglass" class="code">&ltspyglass data-attr="spyglass"/&gt</spyglass>
    &lt/div&gt
    `,
    correctSeletor: 'spyglass[data-attr], sword[data-attr*="sword"], bottle[data-attr$="end"]',
  },
  {
    level: 7,
    taskTitle: 'Select first bottle',
    taskName: 'First of Type Selector',
    taskDescription: 'Select the first element of a specific type',
    attribute: '<span>:first-of-type</span>',
    correction: 'Selects the first element of that type within another element.',
    example: '<span>span:first-of-type</span> selects the first <span>&ltspan&gt</span> in any element.',
    dataExampleLayout: `
      <map data-id="1" class="shape map">
        <bottle data-id="2" data-attr="backend" class="shape bottle animation-rotation"></bottle>
      </map>
    <wheel data-id="3" class="shape wheel">
        <bottle data-id="4" data-attr="frontend" class="shape bottle animation-rotation"></bottle>
    </wheel>
      <wheel data-id="5" class="shape wheel">
          <bottle data-id="6" data-attr="frontend" class="shape bottle animation-rotation"></bottle>
          <bottle data-id="7" data-attr="frontend" class="shape bottle"></bottle>
    </wheel>
    `,
    dataHelpCss: `<div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="2" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="3" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="5" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="6" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="7" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <map data-id="1" class="code">&ltmap&gt
            <bottle data-id="2" class="code">&ltbottle/&gt</bottle>
        &lt/map&gt</map>
        <wheel data-id="3" class="code">&ltwheel&gt
            <bottle data-id="4" class="code">&ltbottle/&gt</bottle >
        &lt/wheel&gt</wheel>
        <wheel data-id="5" class="code">&ltwheel&gt
            <bottle data-id="6" class="code">&ltbottle/&gt</bottle >
            <bottle data-id="7" class="code">&ltbottle/&gt</bottle >
        &lt/wheel&gt</wheel>
    &lt/div&gt
    `,
    correctSeletor: 'map bottle, wheel > bottle:first-of-type',
  },
  {
    level: 8,
    taskTitle: 'Select the last spyglass inside map',
    taskName: 'Last of Type Selector & Nth of Type Selector',
    taskDescription: 'Select an element by its order in another element. Select the last element of a specific type.',
    attribute: '<span>:nth-of-type(A) | :last-of-type</span>',
    correction: 'Selects the nth (Ex: 1st, 3rd, 12th etc.) child element in another element.',
    example: '<span>:nth-child(8)</span> selects every element that is the 8th child of another element',
    dataExampleLayout: `
      <map data-id="1" class="shape map">
        <spyglass data-id="2" class="shape spyglass"></spyglass>
        <spyglass data-id="3" class="shape spyglass"></spyglass>
      </map>
      <map data-id="4" class="shape map">
          <spyglass data-id="5" class="shape spyglass"></spyglass>
          <spyglass data-id="6" class="shape spyglass animation-rotation"></spyglass>
      </map>
    `,
    dataHelpCss: `<div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="2" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
    <div data-id="3" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
    <div data-id="4" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="5" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
    <div data-id="6" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <map data-id="1" class="code">&ltmap&gt
            <spyglass data-id="2" class="code">&ltspyglass/&gt</spyglass>
            <spyglass data-id="3" class="code">&ltspyglass/&gt</spyglass>
        &lt/map&gt</map>
        <map data-id="4" class="code">&ltmap&gt
            <spyglass data-id="5" class="code">&ltspyglass/&gt</spyglass>
            <spyglass data-id="6" class="code">&ltspyglass/&gt</spyglass>
        &lt/map&gt</map>
    &lt/div&gt
    `,
    correctSeletor: 'map:last-of-type > spyglass:nth-child(2)',
  },
  {
    level: 9,
    taskTitle: 'Select bottles from two to three',
    taskName: 'Nth сhild range',
    taskDescription: 'Select an elements in a given range',
    attribute: '<span>:nth-child(n):nth-child(-n)</span>',
    correction: 'Selects the range nth children element in another element.',
    example: '<span>:nth-child(n+3):nth-child(-n+8)</span> selects elements in the range from 3 to 8',
    dataExampleLayout: `
      <map data-id="1" class="shape map">
        <wheel data-id="2" class="shape wheel">
            <bottle data-id="3" class="shape bottle"></bottle>
            <bottle data-id="4" class="shape bottle"></bottle>
            <bottle data-id="5" class="shape bottle"></bottle>
            <bottle data-id="6" class="shape bottle"></bottle>
        </wheel>
      </map>
      <map data-id="7" class="shape map">
        <wheel data-id="8" id="captain" class="shape wheel">
            <bottle data-id="9" class="shape bottle"></bottle>
            <bottle data-id="10" class="shape bottle animation-rotation"></bottle>
            <bottle data-id="11" class="shape bottle animation-rotation"></bottle>
            <bottle data-id="12" class="shape bottle"></bottle>
        </wheel>
      </map>
    `,
    dataHelpCss: `<div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    <div data-id="3" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="5" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="6" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="7" class=shape-help>&ltmap&gt&lt/map&gt</div>
    <div data-id="8" class=shape-help>&ltwheel #id="captain"&gt&lt/wheel&gt</div>
    <div data-id="9" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="10" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="11" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
    <div data-id="12" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <map data-id="1" class="code">&ltmap&gt
            <wheel data-id="2" class="code">&ltwheel&gt
                <bottle data-id="3" data-attr="frontend" class="code">&ltbottle/&gt</bottle>
                <bottle data-id="4" data-attr="bottle" class="code">&ltbottle/&gt</bottle>
                <bottle data-id="5" data-attr="backend" class="code">&ltbottle/&gt</bottle>
                <bottle data-id="6" data-attr="backend" class="code">&ltbottle/&gt</bottle>
            &lt/wheel&gt</wheel>
        &lt/map&gt</map>
        <map data-id="7" class="code">&ltmap&gt
            <wheel data-id="8" class="code">&ltwheel id="#captain"&gt
                <bottle data-id="9" data-attr="frontend" class="code">&ltbottle/&gt</bottle>
                <bottle data-id="10" data-attr="bottle" class="code">&ltbottle/&gt</bottle>
                <bottle data-id="11" data-attr="backend" class="code">&ltbottle/&gt</bottle>
                <bottle data-id="12" data-attr="backend" class="code">&ltbottle/&gt</bottle>
            &lt/wheel&gt
        </wheel>&lt/map&gt</map>
    &lt/div&gt
    `,
    correctSeletor: '#captain bottle:nth-child(n+2):nth-child(-n+3)',
  },
  {
    level: 10,
    taskTitle: 'Select even and odd items',
    taskName: 'Nth of Type Selector',
    taskDescription: 'Combine nth of type selector',
    attribute: ':nth-of-type(even) | :nth-of-type(odd)',
    correction:
      'Selects a specific element based on its type and order in another element - or even or odd instances of that element.',
    example:
      '<span>(even)</span> — keyword, selects even elements of the list, as if we set <span>(2n)</span>. <span>(odd)</span> is a keyword, selects odd elements as if we had given <span>(2n+1)</span>.',
    dataExampleLayout: `
    <map data-id="1" class="shape map">
        <bottle data-id="2" class="shape bottle"></bottle>
        <bottle data-id="3" class="shape bottle animation-rotation"></bottle>
        <bottle data-id="4" class="shape bottle"></bottle>
        <bottle data-id="5" class="shape bottle animation-rotation"></bottle>
    </map>
    <wheel data-id="6" id="captain" class="shape wheel">
        <bottle data-id="7" class="shape bottle"></bottle>
        <bottle data-id="8" class="shape bottle animation-rotation"></bottle>
        <bottle data-id="9" class="shape bottle"></bottle>
    </wheel>
    <wheel data-id="10" class="shape wheel">
        <spyglass pyglass data-id="11" class="shape spyglass animation-rotation"></spyglass>
        <bottle data-id="12" class="shape bottle"></bottle>
        <bottle data-id="13" class="shape bottle animation-rotation"></bottle>
    </wheel>`,
    dataHelpCss: `
    <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
  <div data-id="2" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
  <div data-id="3" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
  <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
  <div data-id="5" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
  <div data-id="6" class=shape-help>&ltwheel id="captain"&gt&lt/wheel&gt</div>
  <div data-id="7" class=shape-help>&ltbottle &gt&lt/bottle&gt</div>
  <div data-id="8" class=shape-help>&ltbottle &gt&lt/bottle&gt</div>
  <div data-id="9" class=shape-help>&ltbottle &gt&lt/bottle&gt</div>
  <div data-id="10" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
  <div data-id="11" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
  <div data-id="12" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
  <div data-id="13" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>`,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
        <map data-id="1" class="code">&ltmap&gt
            <bottle data-id="2" class="code">&ltbottle/&gt</bottle>
            <bottle data-id="3" class="code">&ltbottle/&gt</bottle>
            <bottle data-id="4" class="code">&ltbottle/&gt</bottle>
            <bottle data-id="5" class="code">&ltbottle/&gt</bottle>
        &lt/map&gt</map>
        <wheel data-id="6" class="code">&ltwheel id="captain"&gt
            <bottle data-id="7" class="code">&ltbottle/&gt</bottle>
            <bottle data-id="8" class="code">&ltbottle/&gt</bottle>
            <bottle data-id="9" class="code">&ltbottle/&gt</bottle>
        &lt/wheel&gt</wheel>
        <wheel data-id="10" class="code">&ltwheel&gt
            <spyglass data-id="11" class="code">&ltspyglass/&gt</spyglass>
            <bottle data-id="12" class="code">&ltbottle/&gt</bottle>
            <bottle data-id="13" class="code">&ltbottle/&gt</bottle>
        &lt/wheel&gt</wheel>
    &lt/div&gt
    `,
    correctSeletor: 'map bottle:nth-child(2n), #captain bottle:nth-child(2), wheel:last-child :nth-child(2n + 1)',
  },
];
