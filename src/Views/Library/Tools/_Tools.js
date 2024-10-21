import React from "react";

export default function Function() {

    return (
        <div className="c-light-2">
            <h1 className="text-center">Tools</h1>
            <h6 className="ts-i text-center p-4 c-light-4 ft-secondary">
                The Magikus library offers a comprehensive suite of tools to optimize and enhance the development 
                workflow within the Unity Editor. This section details the functionalities and usage of the Curve 
                Tool, Reference Console and Hierarchy Tool. Each tool is designed to streamline specific tasks, 
                making the development process more efficient and user-friendly.
            </h6>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                The Magikus library tools are developed to address common challenges faced by Unity developers and 
                animators. These tools provide advanced capabilities for animation curve manipulation, hierarchy 
                management and reference tracking. By leveraging these tools, developers can significantly improve 
                their productivity and ensure a more organized and manageable project structure.
            </p>
            
            <h3 className="p-2">Summary</h3>

            <h4 className="c-light-1 p-3">Curve Tool</h4>
            <p className="pad-left-3">
                The Curve Tool is a powerful utility designed for the creation and manipulation of animationCurves 
                within the Unity Editor. It provides an intuitive interface for generating, editing and applying 
                various types of animation curves. This tool is invaluable for developers working with animations, 
                offering a flexible and non-destructive workflow.
            </p>

            <h4 className="c-light-1 p-3">Reference Console</h4>
            <p className="pad-left-3">
                The Reference Console is a custom Unity Editor Window that helps manage and track references within 
                Unity projects. This tool makes it easier to fix issues related to lost or broken links between 
                objects and assets, ensuring project integrity.
            </p>

            <h4 className="c-light-1 p-3">Hierarchy Tool</h4>
            <p className="pad-left-3">
                The Hierarchy Tool is designed to enhance workflow within the Unity Editor by providing additional 
                functionalities for managing and organizing the hierarchy of game objects in a scene. This tool 
                helps maintain a well-organized scene hierarchy, improving overall project management.
            </p>
        </div>
    );
}