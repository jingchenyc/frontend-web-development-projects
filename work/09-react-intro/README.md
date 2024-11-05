# React Intro Assignment

**Due Mon Nov 11, 11:59pm PT**

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-intro' (`git checkout -b react-intro`)
* Add the necessary files in this directory to have the required features
* Add, commit, and push the branch to github
  - You will add/commit ALL the files created by Vite, not just the files you personally modify
  - Except for `node_modules/` and `dist/` (which should automatically be ignored by the .gitignore file Vite creates) you want to commit all the files Vite creates so that anyone getting your project from github can use it without making changes.
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Create a React project using Vite that demonstrates:
- Using and modifying state
- Creating and using Components
- Passing a state setter function
- Conditional rendering
- Applying CSS classes to a Component

## Requirements

Create a React project using Vite that:
- Has an App component with state that is modified
- App component conditionally renders another component (Reorder)
- This other component uses a callback to modify the ancestors state
- Uses CSS on elements in a component
- Uses a CSS animation to show a fade-in effect

## Setup Requirements

- Create a React project named "inventory" using Vite **inside this directory**
- Modify the files in the src/ directory inside inventory/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.
    - Remove all initial demo CSS content!
- Remember to meet the initial changes required in class:
    - Use semicolons
    - Remove any default content that you aren't deliberately using for your assignment
- You will need to create a Reorder.jsx for the Reorder Component
- The Reorder component must accept exactly one prop, "onReorder", which should be a function that takes no arguments.  When called, the onReorder function will set the count to 5.
  - This is a common point of confusion!  
  - Your App component will manage the state of the inventory (the count)
  - Your App component will CONDITIONALLY show the Reorder component to display the "Reorder" button
  - When clicked, the Reorder button in the Reorder component will call the function passed as "onReorder" to change the inventory state stored in App

## Functional Requirements

Your App component:
- Displays a count for an inventory
  - Hint: This will be a state in the App Component
- Allows you to increase/decrease the displayed count using +/- buttons
- Offers a "Reorder" button when the count is 0
  - Implement this in a Reorder component that is only shown when the count is 0
    - Hint: This means the Reorder Component is conditionally rendered inside App Component
  - Clicking the Reorder button will add 5 to the count
- Does not allow you to decrease the count below 0
  - Hint: put a `disabled={!count}` prop on the decrease button.  This will disable the button when the count is 0.
- Pressing the Reorder button sets the inventory count to 5
  - Hint: The Reorder button will need to change state that is defined in the App component.  This means you will need to pass a function to the Reorder component. Per the Setup Requirements, the passed "onReorder" prop is a function that takes no arguments, so App.jsx will have to define a function that does the state change and pass that function as "onReorder" to the Reorder component.

## Visual Requirements
- The buttons should have some space between them and each other as well as the output text
- the inventory count, the +/- buttons, and the Reorder button should all appear on the same line
- The Reorder button is ONLY shown when the Count is 0
- When it appears, the reorder button will have a "fade in" animation
  - Hint: set a CSS animation on the element or a wrapper of the element to animate from opacity 0 to opacity 1.  - Use a CSS animation (with keyframes) instead of a CSS transition.

## Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout
- Do not use outside JS or CSS libraries (including any outside React libraries, which are JS libraries).  Only use Vite as shown in class.
- Do not set `style` attributes, props, or properties!
- Do not not modify DOM nodes using `.classList`
- Follow the methods used in class or described in this README

## Grading Rubric

Note: The assignment is to show your understanding of the material from class.  If you don't do that, you can lose points, even it "it works".  Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).

This assignment is graded on a number of categories, each graded on the below scale:
- Missing (0)
- Needs Improvement (1)
- Good (2)
- Excellent (3)

This means a single mistake might cost you 0 points or more than 1 point, depending on how much that mistake changes your demonstration of the skills from class.

The categories for this assignment are:

### PR Submission
- Does PR follow submission expectations?
  - Contains only changes from this assignment, correct branch name, good commit message(s), reviewers assigned
- Are the needs for the basic goal present? 
  - The required pages exist as the expected files and are constructed in the overall required approach
  - All Vite-supplied files except for `node_modules/` and `dist/`
  - All student-created files
- Was all default CSS removed/replaced?
### Goal Demonstration
- Are the goals achieved?
    - Using and modifying state
    - Creating and using Components
    - Passing a state setter function
    - Conditional rendering
    - Applying CSS classes to a Component
### Overall Requirements
- Does the program work as required?
    - Count +/-
        - Can't go negative
    - Reorder sets to 5
    - Reorder Component conditionally rendered when count === 0
- Using required techniques?
    - count State in App
    - Reorder as component accepting `onReorder` prop
    - onReorder called by onClick in Reorder component
### HTML Quality
- Correct use of semantic elements throughout the document
- All necessary HTML elements present and correct
- All course best practices for semantic/valid HTML are applied
- All course best practices for HTML quality are applied
### CSS Quality
- All CSS class names are semantic and kebab-case
- All course best practices for CSS quality are applied
- Do not use style attributes on elements
### JS Quality
- All course best practices for JS quality are applied
- Including the use of semicolons 
- Do not modify DOM Nodes directly when using React
- Do not use style properties on DOM nodes
### JSX Quality
- Components and .jsx files follow course requirements
- Components, .jsx files, and props are well-named
- JSX is indented properly and consistently
