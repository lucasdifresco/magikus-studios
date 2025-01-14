import React from "react";
import Group from "Components/Group";

export default function Function() {


    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Event Structure</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Advanced Implementation of the UnityEvent structure, designed to enhance Usability and Modularity
            </h6>

            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Event structure is a robust tool designed to enhance project architecture and efficiency. 
                By reimagining the UnityEvent drawer, it enables events to be neatly collapsed into a single line in the Unity Inspector, complete with item count display, improving inspector clarity. 
                Its primary strength lies in its integration with a scriptable object framework, utilizing Event assets to streamline communication between components via a centralized event system. 
                This approach allows developers to create decoupled, modular systems that are both maintainable and extendable. 
                The Event structure’s adaptability makes it ideal for various applications, from straightforward event handling to intricate asynchronous scene management.            
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 02.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Event structure is very useful in scenarios where multiple scenes require synchronization or communication, such as a player receiving damage in one scene triggering UI updates in another. 
                It also enables a cleaner separation of concerns by decoupling event handlers from the scripts that invoke them allowing code decoupling and modularization. 
                This structure is ideal for managing global events like game pausing, level completion or player actions that affect multiple game objects.
                Some of the key features are:
            </p>
            <ul>
                <li><b>Single Line Collapse</b>: Events can be collapsed into a single line in the inspector for cleaner and more organized views.</li>
                <li><b>List Item Count</b>: Displays the number of actions currently subscribed to the event.</li>
                <li><b>Null-Safe Invocation</b>: The Try method allows invoking actions without the need for null checking.</li>
                <li><b>Scriptable Object Framework</b>: Event assets provide a framework for implementing the Observer pattern, enabling communication across different scenes without tight coupling</li>
                <li><b>Sender/Listener Modes</b>: Events can be configured as senders, listeners or both, to manage how they interact with event assets</li>
            </ul>
            <Group title="EventVoid" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLinkedToAsset</b1>: Returns true if event is linked to an event asset</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>EventVoid</b2> <b1>Try</b1>(<b2>Component</b2> <b1>sender</b1> = <b2>null</b2>): Invokes the event if it is not null or empty</li>
                        <li><b2>EventVoid</b2> <b1>Subscribe</b1>(<b2>UnityEvent</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>EventVoid</b2> <b1>Subscribe</b1>(<b2>Action</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>EventVoid</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>EventVoid</b2> <b1>Unsubscribe</b1>(<b2>Action</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>void</b2> <b1>LinkToAsset</b1>(): Links the event to the event asset if it is not null</li>
                    </ul>
                </div>
            )}/>
            <Group title="Event<T>" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>bool</b2> <b1>IsLinkedToAsset</b1>: Returns true if event is linked to an event asset</li>                    
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>Event{"<T>"}</b2> <b1>Try</b1>(<b2>Component</b2> <b1>sender</b1> = <b2>null</b2>): Invokes the event if it is not null or empty</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Subscribe</b1>(<b2>UnityEvent{"<T>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Subscribe</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent{"<T>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>Event{"<T>"}</b2> <b1>Unsubscribe</b1>(<b2>Action{"<T>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>void</b2> <b1>LinkToAsset</b1>(): Links the event to the event asset if it is not null</li>
                    </ul>
                </div>
            )}/>                    
            <Group title="EventAsset" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>int</b2> <b1>SubscribersCount</b1>: Returns the amount of subscribers to this event asset</li>                    
                        <li><b2>bool</b2> <b1>IsEmpty</b1>: Returns if the amount of subscribers is 0</li>                    
                    </ul>
                    <h5 className="c-light-1">Methods</h5>
                    <ul className="property-list">
                        <li><b2>void</b2> <b1>Try</b1>(<b2>object</b2> <b1>obj</b1>, <b2>Component</b2> <b1>sender</b1> = <b2>null</b2>): Invokes the event if it is not null or empty</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>UnityEvent{"<object, Component>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>void</b2> <b1>Subscribe</b1>(<b2>Action{"<object, Component>"}</b2> <b1>action</b1>): Subscribes the action to the event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>UnityEvent{"<object, Component>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                        <li><b2>void</b2> <b1>Unsubscribe</b1>(<b2>Action{"<object, Component>"}</b2> <b1>action</b1>): Unsubscribes the action from the event</li>
                    </ul>
                </div>
            )}/>
            <Group title="EventMode Attribute" content={(
                <div>
                    <h5 className="c-light-1">Properties</h5>
                    <ul className="property-list">
                        <li><b2>EVENT_MODE</b2> <b1>Mode</b1>: Enum to that determines the mode of the Event in relation to Event Assets (Sender, Listener or Both)</li>                    
                    </ul>
                    <h5 className="c-light-1">Constructors</h5>
                    <ul className="property-list">
                        <li><b1>EventModeAttribute</b1>(<b2>EVENT_MODE</b2> <b1>mode</b1>): Determines the default mode of the event in the inspector</li>
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-2">
                To use the Event structure, you must first define the event in your script using the EventVoid or Event{"<T>"} structure depending on whether you need to pass parameters (make sure that the Event is publicly available to visualize it in the inspector).
                <br/>
                After that, use the Try method to invoke the event. 
                This method checks for null references and calls the actions safely. 
                <br/>
                You can assign an EventAsset in the Unity Inspector and set the event to be a sender, listener or both. 
                This can be done via the inspector or using the EventMode attribute. 
                <br/>
                Remember that if the Event is going to be listening to an Event asset, you need to make sure it is linked to it by calling the LinkToAsset method first (This is usually done on awake). 
                <br/>
                The Try method allows to pass a Component as a parameter. 
                This is used to give a certain context to an Event asset invocation.
                <br/>
                You can create an Event asset by going to the Unity menu, <b1>Assets {">"} Create {">"} Magikus {">"} Structures {">"} Event Structure {">"} Event Asset</b1>.
            </p>
            <Group title="Example 01: Basic Event Setup" content={(
                <div>
                    <p> 
                        This example demonstrates how to use a basic EventVoid.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 01.jpg" alt=""/>            
                    <p> 
                        The DefeatEnemy method is subscribed to the event through the Inspector. 
                        When the script starts, it will call the event invoking all the methods subscribed to it.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: Event with Parameters" content={(
                <div>
                    <p> 
                        In this example, an Event with a parameter is used instead. 
                        There is a score int and an UpdateScore method that takes an int and logs a message with it. 
                        When the script starts the Event is called sending the score value as a parameter.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 03.jpg" alt=""/>            
                    <p> 
                        In the Inspector, the UpdateScore is subscribed dynamically to the event. 
                        This will use the value sent through the event call to the method invoked when the Event is called.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Setting Event Mode" content={(
                <div>
                    <p> 
                        Finally, this example shows how to use an Event asset and the EventMode attribute. 
                        For this example, two scripts are created. 
                        The first one is the sender script and will contain a void Event that will get called on start. 
                        It also has a PauseGame method that logs a message. 
                        In this case, the void Event will be set as EVENT_MODE.Sender (using the EventMode attribute) because it will only be sending calls.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 05.jpg" alt=""/>            
                    <p> 
                        The second script will be the listener script. 
                        This script will contain another void Event but this time it will be set to EVENT_MODE.Listener because we only want this event to be listening to an Event asset. 
                        To do this, we have to make sure that the Event is linked to the asset. 
                        This is done in the awake function. It also contains a function that prints another message.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 06.jpg" alt=""/>            
                    <p> 
                        Back in the Editor, there is an Event asset created called Event Asset Example. 
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 07.jpg" alt=""/>            
                    <p> 
                        In the inspector, the PauseGame method is subscribed to the onGamePaused Event, the PrintMessageWithAsset is subscribed to the onAssetCall Event and the Event asset is set to both Events.
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Structures/Events/Events - 08.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>The Event structure is designed to minimize overhead by checking for null references and managing subscriptions effectively.</li>
                <li>The Event drawer allows easy management of event settings and assignments directly from the Unity Inspector.</li>
                <li>Ensure that the event assets are properly configured in the inspector to prevent runtime errors.</li>
            </ul>
       </div>
    );
}