# Assignment - JS Intro

**Due: Mon Oct 21, 11:59pm PT** 

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'js-intro' (`git checkout -b js-intro`)
* Add the necessary files to have the required features
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

You will create a webpage that has:
- A navigation menu with **one** main option
- at least 3 UI cards 
    - Content of your choice
- a distinct visual header and footer

When you click on the menu item, a dropdown menu of at least 3 links will open
- When you click on the menu item again, the dropdown will close

## Dropdown Menu Requirements

- The various links in your menu should link to urls that could exist (not "#", but do not have to be working links, just urls to files that don't exist)
- The dropdown effect should NOT use :hover/:focus-within, it should only happen on a click (for this assignment only, we are testing your JS skill, not following best practices)
  - hover/focus effects for highlighting individual elements are fine, just not for the effect to make the menu "drop down"
  - That click to make the menu "drop down" should be doable with keyboard navigation! (Tab to the menu option, Enter to click)
  - Hints: 
    - You do NOT need to add JS to handle the click - a semantic clickable element like a button and a 'click' event works just fine!
    - Toggle a class on an element when the button is clicked
    - Have your CSS apply the same changes you did on :hover/:focus-within, but only when that extra class is present
    - Make sure to use a class name that is descriptive and semantic, such as "open"
    - Put another way, the above is saying that the CSS properties you use for the menu are no different than when you did the original dropdown assignment.  The SELECTORS are different, but the CSS properties are the same as that assignment.
- The menu HTML can be (likely should be) identical to what we use before, the difference is in how we are opening/closing the menu, and that there is only one main menu option, not many.  
    - If you got feedback on improvements to that assignment, make suggested or necessary changes on this assignment
- The menu can use a transition/animation to open/close, but it is not required

## Common Questions:
- There are no mobile requirements for this assignment, you are welcome to code a mobile-friendly version anyway
- Any images must have good alt attribute values
- There is no requirement for transition/animation.  They are optional.

## Additional Requirements
- Use the skills taught in class.  Googling can get you something that "works" but doesn't cover this skill.
- Do not use var
- Use let and const as described in class (preferring to use const if the variable isn't reassigned)
- Load your JS as described in class.  In particular:
    - Don't use inline JS
    - Don't use JS to set or change the style attribute
    - Do use JS to add or remove classes using classList() on the DOM Node
- Use meaningful and helpful variable names as described in class
- Use camelCase JS variable and function names
- Use kebab-case filenames
- Use semantic kebab-case or BEM CSS class names
- Use consistent indentation and helpful whitespace to make your JS, HTML, and CSS easy to read
- Use semicolons appropriately as described in class
- Add event listener(s) as described in class using addEventListener()
- Include "use strict"; at the start of your JS file(s)
- Include an IIFE around your JS code
- Do not use float for reasons other than allowing text to wrap around an inline element or text
- Do not use tables for layout or table-layouts
- Follow the best practices shared to date in this course

## Grading Rubric 
Note: The assignment is to show your understanding of the material from class.  If you don't do that, you can lose points, even it "it works".  Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).

This assignment is graded on a number of categories, each graded on the below scale:
- Missing (0)
- Needs Improvement (1)
- Good (2)
- Excellent (3)

This means a single mistake might cost you 0 points or more than 1 point, depending on how much that mistake changes your demonstration of the skills from class.

The categories for this assignment are:
### Submission
    - Does PR follow submission expectations?  (contains only change from assignment, correct branch name, good commit message(s), reviewers assigned)
    - Are all commented out code/debugging aids removed?
### Overall Requirements
    - Does the work meet the goal?
    - Are general requirements met? (outside of other categories here)
    - Were all restrictions obeyed?
    - Were all requirements met in ways that showed understanding of the class material?
### JS Requirements
    - Is the drop down menu styling change created per the requirements?
    - Does the "drop down" happen by adding/removing a class using classList?
    - Is the "drop down" triggered by a "click" event?
### Overall JS Quality
    - Does the code make proper use of "use strict"; and IIFE?
    - Is the JS loaded as a separate JS file?
    - Are event listeners added using addEventListener and not using onXXX node properties or via inline JS?
    - Are variable and function names using camelCase as expected?
    - Are variable and function names meaningful, clear, and useful?
    - Does the code make good use of whitespace?
        - Appropriately and consistently indented?
        - Spaces around operators to make the code more readable?
        - Blank lines used to keep related "paragraphs" code of code separated?      
    - Are semicolons used per the course requirements?
    - Are variables declared using `let` and `const`, not `var`, with `const` used whenever a variable isn't reassigned?
    - Are styling changes applied using changed classes/attributes but not using `style`?
    - Does the code avoid `alert()` and similar blocking prompting functions?
### Overall HTML Quality
    - Are required elements present, and all elements used correctly?
    - Are elements used with correct and appropriate semantics when available?
    - Are attributes and values used as taught and with required syntax?
    - Are elements indented when appropriate and consistently?
    - Are semantic class names added that help explain the purpose and contents of elements?
    - Are all Accessibility requirements of the HTML met?
### Overall CSS Quality
    - Is all CSS loaded from separate CSS files?
    - Are CSS class names semantic?
    - Are CSS class names kebab-case (incl BEM)?
    - Are any BEM-style class names properly following BEM expectations?
    - Are CSS classes preferred for selectors? (situational)
    - Are CSS properties consistently indented in their blocks, with space after the :?
    - Are all Accessibility requirements of the visual appearance met (not relying on color as the only way to suggest something, text labels, etc)
    - Is the CSS applied wisely per class guidelines? (Not creating a page that only works for certain fixed screen sizes, etc)?


