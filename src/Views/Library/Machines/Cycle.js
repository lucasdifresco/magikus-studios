import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center">Cycle Machine</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Cycle Machine is designed to facilitate the creation and management of cycles within the context of 
                Unity game development. It allows developers to define and control various cycling behaviors, such as 
                timed or frame-based cycles, with options to handle start, finish, and cycle events.
            </h6>


            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The primary purpose of the Cycle Machine is to provide a flexible and robust mechanism for executing repeated actions in a game. 
                It can be used to manage animations, periodic updates, or any repetitive tasks that need to be executed at regular intervals.
            </p>
            <p className="pad-left-2">
                Some of the use cases are:
            </p>
            <ul className="property-list">
                <li>Trigger animations at specified intervals.</li>
                <li>Execute periodic checks or updates within the game.</li>
                <li>Manage timed events such as power-ups, buffs, or debuffs.</li>
                <li>Control the timing of AI actions and reactions.</li>
            </ul>

            <h3 className="p-2">How it Works</h3>
            <p className="pad-left-2">
                The Cycles class provides a set of static methods that facilitate the creation and management of various 
                looping mechanisms in the Magikus framework. These methods allow users to create periodic, burst, 
                delay and curve cycles with ease. The primary purpose of these cycles is to execute actions repetitively 
                with specific timing constraints and patterns, making them highly useful in game development, simulations 
                and other applications requiring timed or repeated actions.
            </p>

            <Group title="ICycle" content={(                
                <div className="p-3">
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Play</b1>(): Starts the cycle.</li>
                        <li><b2>ICycle</b2> <b1>Pause</b1>(): Pauses the cycle.</li>
                        <li><b2>ICycle</b2> <b1>Unpause</b1>(): Resumes the paused cycle.</li>
                        <li><b2>ICycle</b2> <b1>Finish</b1>(): Finishes the cycle immediately and triggers the finish event.</li>
                        <li><b2>ICycle</b2> <b1>Break</b1>(): Stops the cycle without triggering the finish event.</li>
                        <li><b2>ICycle</b2> <b1>SkipCycle</b1>(): Skips the next cycle.</li>
                        <li><b2>ICycle</b2> <b1>SkipFrame</b1>(): Skips the next frame.</li>
                        <li><b2>ICycle</b2> <b1>AddCycleSkip</b1>(): Adds an additional cycle skip.</li>
                        <li><b2>ICycle</b2> <b1>AddFrameSkip</b1>(): Adds an additional frame skip.</li>
                        <li><b2>ICycle</b2> <b1>Then</b1>(<b2>ICycle</b2> <b1>cycle</b1>): Chains another cycle to start after the current cycle finishes.</li>
                        <li><b2>ICycle</b2> <b1>WaitFor</b1>(<b2>params ICycle[]</b2> <b1>cycles</b1>): Waits for the specified cycles to finish before starting.</li>
                        <li><b2>ICycle</b2> <b1>While</b1>(<b2>ICycle</b2> <b1>cycle</b1>): Runs the current cycle while another cycle is active.</li>
                        <li><b2>ICycle</b2> <b1>SetPeriod</b1>(<b2>float</b2> <b1>period</b1>): Sets the cycle period.</li>
                        <li><b2>ICycle</b2> <b1>SetCycleAmount</b1>(<b2>int</b2> <b1>amount</b1>): Sets the number of cycles.</li>
                        <li><b2>ICycle</b2> <b1>SetCycleOffset</b1>(<b2>float</b2> <b1>amount</b1>): Sets the cycle offset.</li>
                        <li><b2>ICycle</b2> <b1>SetLooping</b1>(<b2>bool</b2> <b1>isLooping</b1>): Enables or disables looping.</li>
                        <li><b2>ICycle</b2> <b1>SetLoopMode</b1>(<b2>LOOP_MODE</b2> <b1>mode</b1>): Sets the cycle mode (Time or Frame).</li>                    
                        <li><b2>ICycle</b2> <b1>OnStart</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called when the cycle starts.</li>
                        <li><b2>ICycle</b2> <b1>OnFinish</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called when the cycle finishes.</li>
                        <li><b2>ICycle</b2> <b1>OnCycleStart</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called at the start of each cycle.</li>
                        <li><b2>ICycle</b2> <b1>OnCycle</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called during each cycle.</li>
                        <li><b2>ICycle</b2> <b1>OnOffset</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called at each offset.</li>
                        <li><b2>ICycle</b2> <b1>OnCycleEnd</b1>(<b2>Action</b2> <b1>action</b1>): Sets an action to be called at the end of each cycle.</li>
                    </ul>
                </div>
            )}/>

            <Group title="Periodic Cycle" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Use the Periodic method to perform an action at regular intervals.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Periodic</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a simple periodic cycle.</li>
                        <li><b2>ICycle</b2> <b1>Periodic</b1>(<b2>Action{"<int>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle with a cycle count.</li>
                        <li><b2>ICycle</b2> <b1>Periodic</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>Periodic</b1>(<b2>Func{"<int, bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that plays until cycleAction returns true with a cycle count.</li>
                        <li><b2>ICycle</b2> <b1>PeriodicFrame</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames.</li>
                        <li><b2>ICycle</b2> <b1>PeriodicFrame</b1>(<b2>Action{"<int>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames with a cycle count.</li>
                        <li><b2>ICycle</b2> <b1>PeriodicFrame</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames and plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>PeriodicFrame</b1>(<b2>Func{"<int, bool>"}</b2> <b1>cycleAction</b1>): Creates a periodic cycle that runs on frames and plays until cycleAction returns true with a cycle count.</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action</b2> <b1>cycleAction</b1>: The action to be performed periodically.</li>
                        <li><b2>Action{"<int>"}</b2> <b1>cycleAction</b1>: The action to be performed periodically with a cycle count.</li>
                        <li><b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>: The action to be performed periodically until it returns true.</li>
                        <li><b2>Func{"<int, bool>"}</b2> <b1>cycleAction</b1>: The action to be performed periodically until it returns true with a cycle count.</li>                    
                        <li><b2>float</b2> <b1>playEveryXSeconds</b1> (optional): The interval between each execution in seconds.</li>
                        <li><b2>int</b2> <b1>playEveryXFrames</b1> (optional): The interval between each execution in frames.</li>
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use (Regular, Fixed, Late, Async).</li> 
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): The time scale to apply to the cycle.</li>
                    </ul>
                </div>
            )}/>

            <Group title="Burst Cycle" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Use the Burst method to perform an action multiple times in quick succession with intervals between bursts.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a simple burst cycle.</li>
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Action{"<float>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle with the progress value.</li>
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that plays until it returns true.</li>
                        <li><b2>ICycle</b2> <b1>Burst</b1>(<b2>Func{"<float, bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that plays until it returns true with a progress value.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Action{"<float>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames with the progress value.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames that plays until it returns true.</li>
                        <li><b2>ICycle</b2> <b1>BurstFrame</b1>(<b2>Func{"<float, bool>"}</b2> <b1>cycleAction</b1>): Creates a burst cycle that runs on frames that plays until it returns true with a progress value.</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action</b2> <b1>cycleAction</b1>: The action to be performed in a burst.</li> 
                        <li><b2>Action{"<int>"}</b2> <b1>cycleAction</b1>: The action to be performed in a burst with a cycle count.</li>
                        <li><b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>: The action to be performed in a burst until it returns true.</li>
                        <li><b2>Func{"<int, bool>"}</b2> <b1>cycleAction</b1>: The action to be performed in a burst until it returns true with a cycle count.</li>
                        <li><b2>float</b2> <b1>playForXSeconds</b1> (optional): The interval between each execution in seconds.</li>
                        <li><b2>int</b2> <b1>playForXFrames</b1> (optional): The interval between each execution in frames.</li>
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): The time scale to apply to the cycle.</li>                    
                    </ul>
                </div>
            )}/>

            <Group title="Delay Cycle" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Use the Delay method to perform an action after a specified delay.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a simple delay cycle.</li>
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Action{"<int>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle with a cycle count.</li>
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>Delay</b1>(<b2>Func{"<int, bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that plays until cycleAction returns true with a cycle count.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Action</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Action{"<int>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames with a cycle count.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames and plays until cycleAction returns true.</li>
                        <li><b2>ICycle</b2> <b1>DelayFrame</b1>(<b2>Func{"<int, bool>"}</b2> <b1>cycleAction</b1>): Creates a delay cycle that runs on frames and plays until cycleAction returns true with a cycle count.</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action</b2> <b1>cycleAction</b1>: The action to be performed after a delay.</li> 
                        <li><b2>Action{"<int>"}</b2> <b1>cycleAction</b1>: The action to be performed after a delay with a cycle count.</li> 
                        <li><b2>Func{"<bool>"}</b2> <b1>cycleAction</b1>: The action to be performed after a delay until it returns true.</li> 
                        <li><b2>Func{"<int, bool>"}</b2> <b1>cycleAction</b1>: The action to be performed after a delay until it returns true with a cycle count.</li> 
                        <li><b2>float</b2> <b1>playAfterXSeconds</b1>: The delay duration in seconds.</li> 
                        <li><b2>int</b2> <b1>playAfterXFrames</b1>: The delay duration in frames.</li> 
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): The time scale to apply to the cycle.</li> 
                    </ul>
                </div>
            )}/>

            <Group title="Curve Cycle" content={(
                <div className="p-3">
                    <p className="pad-left-3">
                        Use the Curve method to perform an action that follows an animation curve over a specified duration.
                    </p>
                    <h5 className="c-light-1 pad-left-3">Methods</h5>
                    <ul className="property-list">
                        <li><b2>ICycle</b2> <b1>Curve</b1>(<b2>Action{"<float>"}</b2> <b1>cycleAction</b1>, <b2>AnimationCurve</b2> <b1>curve</b1>): Creates a simple curve cycle.</li>
                        <li><b2>ICycle</b2> <b1>Cycle</b1>(<b2>this AnimationCurve</b2> <b1>curve</b1>, <b2>Action{"<float>"}</b2> <b1>cycleAction</b1>): Extension method for AnimationCurve objects that creates a curve cycle.</li>
                    </ul>
                    <h5 className="c-light-1 pad-left-3">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>Action{"<float>"}</b2> <b1>cycleAction</b1>: The action to be performed, taking a float parameter that represents the curve progress value.</li> 
                        <li><b2>AnimationCurve</b2> <b1>curve</b1>: The animation curve to follow.</li>
                        <li><b2>float</b2> <b1>secondsToTravel</b1>: The duration of the curve in seconds.</li>                      
                        <li><b2>UPDATER_TYPE</b2> <b1>type</b1> (optional): The type of updater to use.</li>
                        <li><b2>ITimeScale</b2> <b1>timeScale</b1> (optional): The time scale to apply to the cycle.</li>
                    </ul>
                </div>
            )}/>

            <div className="pad-bottom-3"></div>


            <h3 className="p-2">How to Use</h3>
            <ul className="property-list">
                <li><b>Create a Cycle Instance</b>: Instantiate a new cycle with the desired parameters.</li>
                <li><b>Configure the Cycle</b>: Set the period, cycle amount and other properties.</li>
                <li><b>Attach Event Handlers</b>: Define actions to be executed at various stages of the cycle.</li>
                <li><b>Start the Cycle</b>: Call the Play() method to start the cycle.</li>
                <li><b>Control the Cycle</b>: Use methods like Pause(), Unpause(), Finish(), etc., to control the cycle's execution.</li>
            </ul>

            <h4 className="c-light-1 p-3">Example 01: Simple Cycle Creation</h4>
            <p className="pad-left-3">
                This is a Unity script that demonstrates the use of a cycle machine. It is intended to be attached to a GameObject in a Unity scene.
                In the Start method, the script initializes a cycle with a duration of 2 seconds per cycle. 
                This cycle is set to repeat continuously. 
                The script configures the cycle to log messages at different stages: when a cycle starts, during the cycle and when the cycle ends. 
                Once configured, the cycle is started with the Play method.
                The Update method allows for real-time control of the cycle. 
                It listens for specific key inputs: pressing the "P" key pauses the cycle, the "U" key resumes it if paused and the "F" key ends the cycle.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Cycle/Cycle - 01.jpg" alt=""/>
            <p className="pad-left-3">
                This setup demonstrates how to use the Magikus Library to create and manage a cycle, with built-in logging for different 
                cycle events and keyboard controls for dynamic interaction during runtime.
            </p>


            <h4 className="c-light-1 p-3">Example 02: Creating Cycles with Cycles Class</h4>
            <p className="pad-left-3">
                This example demonstrates the use of the Cycles class creating a periodic cycle, a burst cycle, a delay cycle and a curve cycle.
            </p>
            <img className="block-center mar-bottom-3 img-border" src="images/Library/Machines/Cycle/Cycle - 02.jpg" alt=""/>


            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The cycle can be set to operate in two modes: Time-based and Frame-based. Choose the mode based on your specific needs.</li>
                <li>Ensure that any actions attached to the cycle do not cause significant delays to avoid impacting the cycle's timing accuracy.</li>
                <li>Use WaitFor to synchronize multiple cycles and ensure they start in the correct order.</li>
                <li>Ensure that the cycleAction provided is not null to avoid runtime exceptions.</li>
                <li>The timeScale parameter allows you to control the timing behavior of the cycles, making them dependent or independent of the game's time scale.</li>                
            </ul>

            <h3 className="p-2">Conclusion</h3>
            <p className="pad-left-2">
                The Cycle Machine is a powerful tool for managing repetitive actions in Unity. 
                By providing flexible configuration options and robust control mechanisms, 
                it simplifies the implementation of various looping behaviors, enhancing the overall game development experience.
            </p>
       </div>
    );
}