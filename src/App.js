import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'Views/Main/Header';
import Footer from 'Views/Main/Footer';
import Home from 'Views/Main/Home';
import AboutUs from 'Views/Main/AboutUs';
import Library from 'Views/Library/Library';
import LibraryInConstruction from "Views/Library/InConstruction";

import LibraryMenu from "Views/Library/Library/Menu.json";
import LibraryLibrary from "Views/Library/Library/Introduction.js";
import LibraryChangelog from "Views/Library/Library/Changelog.js";
import LibraryLicense from "Views/Library/Library/License.js";

import LibraryUtilities from "Views/Library/Utilities/_Utilities.js";
import LibraryUtilitiesCreate from "Views/Library/Utilities/Create.js";
import LibraryUtilitiesAdapt from "Views/Library/Utilities/Adapt.js";
import LibraryUtilitiesControls from "Views/Library/Utilities/Controls.js";
import LibraryUtilitiesEasing from "Views/Library/Utilities/Easing.js";
import LibraryUtilitiesLooping from "Views/Library/Utilities/Looping.js";
import LibraryUtilitiesDatafile from "Views/Library/Utilities/Datafile.js";
import LibraryUtilitiesRandop from "Views/Library/Utilities/Randop.js";
import LibraryUtilitiesMathop from "Views/Library/Utilities/Mathop.js";
import LibraryUtilitiesTextop from "Views/Library/Utilities/Textop.js";
import LibraryUtilitiesListop from "Views/Library/Utilities/Listop.js";

import LibraryStructures from "Views/Library/Structures/_Structures.js";
import LibraryStructuresGrids from "Views/Library/Structures/Grids.js";
import LibraryStructuresToggles from "Views/Library/Structures/Toggles.js";
import LibraryStructuresVectors from "Views/Library/Structures/Vectors.js";
import LibraryStructuresCouples from "Views/Library/Structures/Couples.js";
import LibraryStructuresRanges from "Views/Library/Structures/Ranges.js";
import LibraryStructuresTier from "Views/Library/Structures/Tier.js";
import LibraryStructuresLabel from "Views/Library/Structures/Label.js";
import LibraryStructuresTimeScale from "Views/Library/Structures/TimeScale.js";
import LibraryStructuresEvents from "Views/Library/Structures/Events.js";
import LibraryStructuresValueAssets from "Views/Library/Structures/ValueAssets.js";
import LibraryStructuresSwitches from "Views/Library/Structures/Switches.js";

import LibraryMachines from "Views/Library/Machines/_Machines.js";
import LibraryMachinesUpdater from "Views/Library/Machines/Updater.js";
import LibraryMachinesCycle from "Views/Library/Machines/Cycle.js";
import LibraryMachinesState from "Views/Library/Machines/State.js";
import LibraryMachinesTween from "Views/Library/Machines/Tween.js";

import LibrarySystems from "Views/Library/Systems/_Systems.js";
import LibrarySystemsAnimationSystem from "Views/Library/Systems/AnimationSystem.js";
import LibrarySystemsTweakSystem from "Views/Library/Systems/TweakSystem.js";
import LibrarySystemsAudioSystem from "Views/Library/Systems/AudioSystem.js";
import LibrarySystemsDialogSystem from "Views/Library/Systems/DialogSystem.js";

import LibraryDecorators from "Views/Library/Decorators/_Decorators.js";
import LibraryDecoratorsConditional from "Views/Library/Decorators/Conditional.js";
import LibraryDecoratorsLine from "Views/Library/Decorators/Line.js";
import LibraryDecoratorsTitle from "Views/Library/Decorators/Title.js";
import LibraryDecoratorsMessage from "Views/Library/Decorators/Message.js";
import LibraryDecoratorsShowHide from "Views/Library/Decorators/ShowHide.js";
import LibraryDecoratorsBlock from "Views/Library/Decorators/Block.js";
import LibraryDecoratorsToggle from "Views/Library/Decorators/Toggle.js";
import LibraryDecoratorsCollapse from "Views/Library/Decorators/Collapse.js";
import LibraryDecoratorsProgressBar from "Views/Library/Decorators/ProgressBar.js";

import LibraryTools from "Views/Library/Tools/_Tools.js";
import LibraryToolsBaseComponent from "Views/Library/Tools/BaseComponent.js";
import LibraryToolsButtonAttribute from "Views/Library/Tools/ButtonAttribute.js";
import LibraryToolsReferenceValueAttribute from "Views/Library/Tools/ReferenceValueAttribute.js";
import LibraryToolsKeyBindingDrawer from "Views/Library/Tools/KeyBindingDrawer.js";
import LibraryToolsHierarchyEditor from "Views/Library/Tools/HierarchyEditor.js";
import LibraryToolsCurveEditor from "Views/Library/Tools/CurveEditor.js";
import LibraryToolsReferenceConsole from "Views/Library/Tools/ReferenceConsole.js";
import LibraryToolsScriptManager from "Views/Library/Tools/ScriptManager.js";

export default function App() {
  
  return (
    <div className='app'>
      <div className="star-container">
        <div className="star"></div>
      </div>
      <div className="mountain-container">
          <div className="mountain1"></div>
          <div className="mountain2"></div>
      </div>

      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutUs" element={<AboutUs/>}></Route>
          
          <Route exact path="/library" element={<Library content={<LibraryLibrary />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/changelog" element={<Library content={<LibraryChangelog />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/License" element={<Library content={<LibraryLicense />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/inConstruction" element={<Library content={<LibraryInConstruction />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/utilities" element={<Library content={<LibraryUtilities />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/create" element={<Library content={<LibraryUtilitiesCreate />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/adapt" element={<Library content={<LibraryUtilitiesAdapt />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/controls" element={<Library content={<LibraryUtilitiesControls />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/easing" element={<Library content={<LibraryUtilitiesEasing />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/looping" element={<Library content={<LibraryUtilitiesLooping />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/datafile" element={<Library content={<LibraryUtilitiesDatafile />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/randop" element={<Library content={<LibraryUtilitiesRandop />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/mathop" element={<Library content={<LibraryUtilitiesMathop />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/textop" element={<Library content={<LibraryUtilitiesTextop />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/utilities/listop" element={<Library content={<LibraryUtilitiesListop />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/structures" element={<Library content={<LibraryStructures />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/grids" element={<Library content={<LibraryStructuresGrids />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/toggles" element={<Library content={<LibraryStructuresToggles />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/vectors" element={<Library content={<LibraryStructuresVectors />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/couples" element={<Library content={<LibraryStructuresCouples />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/ranges" element={<Library content={<LibraryStructuresRanges />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/tier" element={<Library content={<LibraryStructuresTier />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/label" element={<Library content={<LibraryStructuresLabel />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/timeScale" element={<Library content={<LibraryStructuresTimeScale />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/events" element={<Library content={<LibraryStructuresEvents />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/valueAssets" element={<Library content={<LibraryStructuresValueAssets />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/structures/switches" element={<Library content={<LibraryStructuresSwitches />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/machines" element={<Library content={<LibraryMachines />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/updater" element={<Library content={<LibraryMachinesUpdater />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/cycle" element={<Library content={<LibraryMachinesCycle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/state" element={<Library content={<LibraryMachinesState />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/machines/tween" element={<Library content={<LibraryMachinesTween />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/systems" element={<Library content={<LibrarySystems />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/animationSystem" element={<Library content={<LibrarySystemsAnimationSystem />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/tweakSystem" element={<Library content={<LibrarySystemsTweakSystem />} menu={LibraryMenu} />}></Route>          
          <Route exact path="/library/systems/audioSystem" element={<Library content={<LibrarySystemsAudioSystem />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/systems/dialogSystem" element={<Library content={<LibrarySystemsDialogSystem />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/decorators" element={<Library content={<LibraryDecorators />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/conditional" element={<Library content={<LibraryDecoratorsConditional />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/line" element={<Library content={<LibraryDecoratorsLine />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/message" element={<Library content={<LibraryDecoratorsMessage />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/title" element={<Library content={<LibraryDecoratorsTitle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/showHide" element={<Library content={<LibraryDecoratorsShowHide />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/block" element={<Library content={<LibraryDecoratorsBlock />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/toggle" element={<Library content={<LibraryDecoratorsToggle />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/collapse" element={<Library content={<LibraryDecoratorsCollapse />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/decorators/progressBar" element={<Library content={<LibraryDecoratorsProgressBar />} menu={LibraryMenu} />}></Route>

          <Route exact path="/library/tools" element={<Library content={<LibraryTools />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/baseComponent" element={<Library content={<LibraryToolsBaseComponent />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/buttonAttribute" element={<Library content={<LibraryToolsButtonAttribute />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/referenceValueAttribute" element={<Library content={<LibraryToolsReferenceValueAttribute />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/keyBindingDrawer" element={<Library content={<LibraryToolsKeyBindingDrawer />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/hierarchyEditor" element={<Library content={<LibraryToolsHierarchyEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/curveEditor" element={<Library content={<LibraryToolsCurveEditor />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/referenceConsole" element={<Library content={<LibraryToolsReferenceConsole />} menu={LibraryMenu} />}></Route>
          <Route exact path="/library/tools/scriptManager" element={<Library content={<LibraryToolsScriptManager />} menu={LibraryMenu} />}></Route>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}