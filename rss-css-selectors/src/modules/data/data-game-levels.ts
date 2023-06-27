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
    <div class="shape-wrapper">
      <wheel data-id="1" class="shape wheel animation-rotation"></wheel>
      <div data-id="1" class=shape-help>&ltwheel/&gt&lt/wheel&gt</div>
    </div>
    <div class="shape-wrapper">
      <wheel data-id="2" class="shape wheel animation-rotation"></wheel>
      <div data-id="2" class=shape-help>&ltwheel/&gt&lt/wheel&gt</div>
    </div>
      `,
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
    <div class="shape-wrapper">
      <map data-id="1" class="shape map animation-rotation"></map>
      <div data-id="1" class=shape-help>&ltmap/&gt&lt/map&gt</div>
    </div>
    <div class="shape-wrapper">
      <wheel data-id="2" class="shape wheel"></wheel>
      <div data-id="2" class=shape-help>&ltwheel/&gt&lt/wheel&gt</div>
    </div>
    <div class="shape-wrapper">
      <map data-id="3" class="shape map animation-rotation"></map>
      <div data-id="3" class=shape-help>&ltmap/&gt&lt/map&gt</div>
    </div>
    `,
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
    <div class="shape-wrapper">
      <wheel data-id="1" id="first" class="shape wheel first animation-rotation"></wheel>
      <div data-id="1" class=shape-help>&ltwheel id="first/&gt&lt/wheel&gt</div>
    </div
    <div class="shape-wrapper">
      <wheel data-id="2" class="shape wheel"></wheel>
      <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    </div>
    <div class="shape-wrapper">
      <map data-id="3" class="shape map"></map>
      <div data-id="3" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
      `,
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
    <div class="shape-wrapper">
      <map data-id="1" class="shape map"></map>
      <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
    <div class="shape-wrapper">
      <wheel data-id="2" class="shape wheel">
        <div class="shape-wrapper">
          <spyglass data-id="3" class="shape spyglass animation-rotation"></spyglass>
          <div data-id="3" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
        </div>
      </wheel>
      <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    </div>
    <div class="shape-wrapper">
      <spyglass data-id="4" class="shape spyglass"></spyglass>
      <div data-id="4" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
    </div>
    `,
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
    taskName: 'No Name...',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id  A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements  that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `
    <div class="shape-wrapper">
      <map data-id="1" class="shape map">
        <div class="shape-wrapper">
          <sword data-id="2" class="shape sword"></sword>
          <div data-id="2" class=shape-help>&ltsword&gt&lt/sword&gt</div>
        </div>
      </map>
      <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
    <div class="shape-wrapper">
      <wheel data-id="3" id="captain" class="shape wheel">
        <div class="shape-wrapper">
          <bottle data-id="4" class="shape bottle animation-rotation"></bottle>
          <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
      </wheel>
      <div data-id="3" class=shape-help>&ltwheel id="captain"&gt&lt/wheel&gt</div>
    </div>
    <div class="shape-wrapper">
      <wheel data-id="5" class="shape wheel">
        <div class="shape-wrapper">
          <bottle data-id="6" class="shape bottle animation-rotation"></bottle>
          <div data-id="6" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
      </wheel>
      <div data-id="5" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    </div>
    `,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <map data-id="1" class="code">&ltmap&gt
        <sword data-id="2" class="code">&ltsword/&gt</sword>
      &ltmap/&gt</map><wheel data-id="3" id="captain" class="code">
      &ltwheel id="captain"&gt
        <bottle data-id="4" class="code">&ltbottle/&gt</bottle>
      &lt/wheel&gt</wheel>
      <wheel data-id="5" class="code">&ltwheel&gt
        <bottle data-id="6" class="code">&lt/bottle/&gt</bottle >
      &lt/wheel&gt</wheel>
    &lt/div&gt
      `,
    correctSeletor: '#captain bottle',
  },
  {
    level: 6,
    taskTitle: 'Select the bottle on the wheel',
    taskName: 'No Name...',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `
    <div class="shape-wrapper">
      <wheel data-id="1" class="shape wheel">
        <div class="shape-wrapper">
          <spyglass data-id="2" data-attr="spyglass" class="shape spyglass animation-rotation"></spyglass>
          <div data-id="2" class=shape-help>&ltspyglass data-attr="spyglass"&gt&lt/spyglass&gt</div>
        </div>
        <div class="shape-wrapper">
          <spyglass data-id="3" class="shape spyglass"></spyglass>
          <div data-id="3" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
        </div>
      </wheel>
      <div data-id="1" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    </div>
    <div class="shape-wrapper">
      <map data-id="4" class="shape map">
        <div class="shape-wrapper">
          <sword data-id="5" data-attr="first-sword" class="shape sword animation-rotation"></sword>
          <div data-id="5" class=shape-help>&ltsword data-attr="first-sword"&gt&lt/sword&gt</div>
        </div>
        <div class="shape-wrapper">
          <sword data-id="6" data-attr="second" class="shape sword"></sword>
          <div data-id="6" class=shape-help>&ltsword data-attr="second"&gt&lt/sword&gt</div>
        </div>
        <div class="shape-wrapper">
          <sword data-id="7" data-attr="sword-third" class="shape sword animation-rotation"></sword>
          <div data-id="7" class=shape-help>&ltsword data-attr="sword-third"&gt&lt/sword&gt</div>
        </div>
      </map>
      <div data-id="4" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
    <div class="shape-wrapper">
      <wheel data-id="8" class="shape wheel">
        <div class="shape-wrapper">
          <bottle data-id="9" data-attr="frontend" class="shape bottle animation-rotation"></bottle>
          <div data-id="9" class=shape-help>&ltbottle data-attr="frontend"&gt&lt/bottle&gt</div>
        </div>
        <div class="shape-wrapper">
          <bottle data-id="10"  data-attr="bottle" class="shape bottle"></bottle>
          <div data-id="10" class=shape-help>&ltbottle data-attr="bottle"&gt&lt/bottle&gt</div>
        </div>
        <div class="shape-wrapper">
          <bottle data-id="11" data-attr="backend" class="shape bottle animation-rotation"></bottle>
          <div data-id="11" class=shape-help>&ltbottle  data-attr="backend"&gt&lt/bottle&gt</div>
        </div>
      </wheel>
      <div data-id="8" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    </div>

    <div class="shape-wrapper">
      <spyglass data-id="12" data-attr="spyglass" class="shape spyglass animation-rotation"></spyglass>
      <div data-id="12" class=shape-help>&ltspyglass data-attr="spyglass"&gt&lt/spyglass&gt</div>
    </div>
    `,
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
    taskTitle: 'Select the bottle on the wheel',
    taskName: 'No Name...',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `
    <div class="shape-wrapper">
      <map data-id="1" class="shape map">
        <div class="shape-wrapper">
        <bottle data-id="2" data-attr="backend" class="shape bottle animation-rotation"></bottle>
        <div data-id="2" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
      </map>
      <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
    <div class="shape-wrapper">
    <wheel data-id="3" class="shape wheel">
      <div class="shape-wrapper">
        <bottle data-id="4" data-attr="frontend" class="shape bottle animation-rotation"></bottle>
        <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
      </div>
    </wheel>
    <div data-id="3" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    </div>
      <div class="shape-wrapper">
        <wheel data-id="5" class="shape wheel">
          <div class="shape-wrapper">
            <bottle data-id="6" data-attr="frontend" class="shape bottle animation-rotation"></bottle>
            <div data-id="6" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
          <div class="shape-wrapper">
            <bottle data-id="7" data-attr="frontend" class="shape bottle"></bottle>
            <div data-id="7" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
        </wheel>
      <div data-id="5" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
    </div>
    `,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <map data-id="1" class="code">&ltmap&gt
        <bottle data-id="2" class="code">&bottle/&gt</bottle>
      &ltmap/&gt</map>
      <wheel data-id="3" class="code">&ltwheel&gt
        <bottle data-id="4" class="code">&lt/bottle/&gt</bottle >
      &lt/wheel&gt</wheel>
      <wheel data-id="5" class="code">&ltwheel&gt
        <bottle data-id="6" class="code">&lt/bottle/&gt</bottle >
        <bottle data-id="7" class="code">&lt/bottle/&gt</bottle >
      &lt/wheel&gt</wheel>
    &lt/div&gt
    `,
    correctSeletor: 'map bottle, wheel > bottle:first-of-type',
  },
  {
    level: 8,
    taskTitle: 'Select the bottle on the wheel',
    taskName: 'No Name...',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `
    <div class="shape-wrapper">
      <map data-id="1" class="shape map">
        <div class="shape-wrapper">
          <spyglass data-id="2" class="shape spyglass" data-tooltip="<spyglass></spyglass>"></spyglass>
          <div data-id="2" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
        </div>
        <div class="shape-wrapper">
        <spyglass data-id="3" class="shape spyglass" data-tooltip="<spyglass></spyglass>"></spyglass>
        <div data-id="3" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
      </div>
      </map>
      <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
    <div class="shape-wrapper">
      <map data-id="4" class="shape map">
        <div class="shape-wrapper">
          <spyglass data-id="5" class="shape spyglass" data-tooltip="<spyglass></spyglass>"></spyglass>
          <div data-id="5" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
        </div>
        <div class="shape-wrapper">
          <spyglass data-id="6" class="shape spyglass animation-rotation" data-tooltip="<spyglass></spyglass>"></spyglass>
          <div data-id="6" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
       </div>
      </map>
      <div data-id="4" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
    `,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <map data-id="1" class="code">&ltmap&gt
        <spyglass data-id="2" class="code">&spyglass/&gt</spyglass>
        <spyglass data-id="3" class="code">&spyglass/&gt</spyglass>
      &ltmap/&gt</map>
      <map data-id="4" class="code">&ltmap&gt
        <spyglass data-id="5" class="code">&spyglass/&gt</spyglass>
        <spyglass data-id="6" class="code">&spyglass/&gt</spyglass>
      &ltmap/&gt</map>
    &lt/div&gt
    `,
    correctSeletor: 'map:last-of-type > spyglass:nth-child(2)',
  },
  {
    level: 9,
    taskTitle: 'Select the bottle on the wheel',
    taskName: 'No Name...',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `

    <div class="shape-wrapper">
      <map data-id="1" class="shape map">
        <div class="shape-wrapper">
        <wheel data-id="2" class="shape wheel">
          <div class="shape-wrapper">
            <bottle data-id="3" class="shape bottle"></bottle>
            <div data-id="3" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
          <div class="shape-wrapper">
            <bottle data-id="4" class="shape bottle"></bottle>
            <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
            <div class="shape-wrapper">
            <bottle data-id="5" class="shape bottle"></bottle>
            <div data-id="5" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
          <div class="shape-wrapper">
            <bottle data-id="6" class="shape bottle"></bottle>
            <div data-id="6" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
        </wheel>
        <div data-id="2" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
        </div>
      </map>
      <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>

    <div class="shape-wrapper">
      <map data-id="7" class="shape map">
        <div class="shape-wrapper">
        <wheel data-id="8" id="captain" class="shape wheel">
          <div class="shape-wrapper">
            <bottle data-id="9" class="shape bottle"></bottle>
            <div data-id="9" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
          <div class="shape-wrapper">
            <bottle data-id="10" class="shape bottle animation-rotation"></bottle>
            <div data-id="10" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
            <div class="shape-wrapper">
            <bottle data-id="11" class="shape bottle animation-rotation"></bottle>
            <div data-id="11" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
          <div class="shape-wrapper">
            <bottle data-id="12" class="shape bottle"></bottle>
            <div data-id="12" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
          </div>
        </wheel>
        <div data-id="8" class=shape-help>&ltwheel #id="captain"&gt&lt/wheel&gt</div>
        </div>
      </map>
      <div data-id="7" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>
    `,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
    <map data-id="1" class="code">&ltmap&gt
      <wheel data-id="2" class="code">&ltwheel&gt
        <bottle data-id="3" data-attr="frontend" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="4" data-attr="bottle" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="5" data-attr="backend" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="6" data-attr="backend" class="code">&ltbottle/&gt</bottle>
      &ltwheel/&gt</wheel>
    &ltmap/&gt</map>
    <map data-id="7" class="code">&ltmap&gt
      <wheel data-id="8" class="code">&ltwheel id="#captain"&gt
        <bottle data-id="9" data-attr="frontend" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="10" data-attr="bottle" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="11" data-attr="backend" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="12" data-attr="backend" class="code">&ltbottle/&gt</bottle>
      &ltwheel/&gt
      </wheel>&ltmap/&gt</map>
    &lt/div&gt
    `,
    correctSeletor: '#captain bottle:nth-child(-n+3):nth-child(n+2)',
  },
  {
    level: 10,
    taskTitle: 'Select the bottle on the wheel',
    taskName: 'No Name...',
    taskDescription: 'Combine the Descendant & ID Selectors',
    attribute: '<span>#id A</span>',
    correction: 'You can combine any selector with the descendent selector.',
    example:
      '<span>#cool span</span> selects all <span>&ltspan&gt</span> elements that are inside of elements with <span>id="cool"</span>',
    dataExampleLayout: `
    <div class="shape-wrapper">
      <map data-id="1" class="shape map">
        <div class="shape-wrapper">
          <bottle data-id="2" class="shape bottle"></bottle>
          <div data-id="2" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
        <div class="shape-wrapper">
          <bottle data-id="3" class="shape bottle animation-rotation"></bottle>
          <div data-id="3" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
        <div class="shape-wrapper">
          <bottle data-id="4" class="shape bottle"></bottle>
          <div data-id="4" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
        <div class="shape-wrapper">
          <bottle data-id="5" class="shape bottle animation-rotation"></bottle>
          <div data-id="5" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
        </div>
      </map>
      <div data-id="1" class=shape-help>&ltmap&gt&lt/map&gt</div>
    </div>

    <div class="shape-wrapper">
      <wheel data-id="6" id="captain" class="shape wheel">
        <div class="shape-wrapper">
          <bottle data-id="7" class="shape bottle"></bottle>
          <div data-id="7" class=shape-help>&ltbottle &gt&lt/bottle&gt</div>
        </div>
        <div class="shape-wrapper">
          <bottle data-id="8" class="shape bottle animation-rotation"></bottle>
          <div data-id="8" class=shape-help>&ltbottle &gt&lt/bottle&gt</div>
        </div>
        <div class="shape-wrapper">
          <bottle data-id="9" class="shape bottle"></bottle>
          <div data-id="9" class=shape-help>&ltbottle &gt&lt/bottle&gt</div>
        </div>
      </wheel>
      <div data-id="6" class=shape-help>&ltwheel id="captain"&gt&lt/wheel&gt</div>
    </div>

    <div class="shape-wrapper">
    <wheel data-id="10" class="shape wheel">
      <div class="shape-wrapper">
        <spyglass pyglass data-id="11" class="shape spyglass animation-rotation" data-tooltip="<spyglass></spyglass>"></spyglass>
        <div data-id="11" class=shape-help>&ltspyglass&gt&lt/spyglass&gt</div>
      </div>
      <div class="shape-wrapper">
        <bottle data-id="12" class="shape bottle"></bottle>
        <div data-id="12" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
      </div>
      <div class="shape-wrapper">
        <bottle data-id="13" class="shape bottle animation-rotation"></bottle>
        <div data-id="13" class=shape-help>&ltbottle&gt&lt/bottle&gt</div>
      </div>
    </wheel>
    <div data-id="10" class=shape-help>&ltwheel&gt&lt/wheel&gt</div>
  </div>
  `,
    dataHTMLViewer: `
    &ltdiv class="boat"&gt
      <map data-id="1" class="code">&ltmap&gt
        <bottle data-id="2" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="3" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="4" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="5" class="code">&ltbottle/&gt</bottle>
      &ltmap/&gt</map>
      <wheel data-id="6" class="code">&ltwheel id="captain"&gt>
        <bottle data-id="7" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="8" class="code">&ltbottle/&gt</bottle>
        <bottle data-id="9" class="code">&ltbottle/&gt</bottle>
      &lt/wheel&gt</wheel>
      <wheel data-id="10" class="code">&ltwheel&gt
        <spyglass data-id="11" class="code">&spyglass/&gt</spyglass>
        <bottle data-id="12" class="code">&lt/bottle/&gt</bottle >
        <bottle data-id="13" class="code">&lt/bottle/&gt</bottle >
      &lt/wheel&gt</wheel>
    &lt/div&gt
    `,
    correctSeletor: 'map bottle:nth-child(2n), #captain bottle:nth-child(2), wheel:last-child :nth-child(2n + 1)',
  },
];
