# React Components Assignment

**Due: Mon Nov 18, 11:59pm PT**

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-components' (`git checkout -b react-components`)
* Create a React project in this directory using Vite
* Add/Delete/Modify the necessary files to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Create a react project using vite that:
- Is a Single Page Application
- Has 3 "pages" from the perspective of the user
  - A "page" of mostly text content
  - A "page" of cards
  - A "page" with distinct "panels"
- Have some way for the user to change which "page" is shown 
  - Pass this ability around to different components
- Write a Button component
- This Button component is used multiple times (see below)
- This Button component accepts props that change the rendered appearance
- You will have a modal window using `<dialog>`

## Setup Requirements

- Create a react project named "components" inside this directory using Vite
- Modify the files in the src/ directory inside components/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.

## Functional Requirements

- Your app should show at least 3 different "pages"
  - "pages" here means the visible appearance, not actual .html files
  - All pages show the SAME header and footer
  - Each page has some navigation that allows you to to the other "pages"
  - One "page" will show mostly text content (text of your choice)
  - One "page" will show a set of cards (content of your choice)
    - At least one card should include a link that leads to a different "page"
      - The other cards do not need to have links
  - One "page" should have "panels" (Text and images side-by-side)
- There should be Header and Footer components
- There should be at least one Component for each of the "pages"
  - Those components may use additional Components if you wish
- Create a Component (outside of App.jsx) that includes and uses a `<dialog>` element for a modal window
- Create a Button component Use your Button component in 3 different ways
  - At least once with `type="button"` and `visual="link"` props in addition to any other props
  - At least once with `type="button"` and `visual="button"` props in addition to any other props
  - At least once with `type="submit"` and `visual="link"` props in addition to any other props
  - The `visual` and `type` props can default to a value, but must be able to be overridden by passing the appropriate prop
- A Button component should render a `<button>` with the matching `type` attribute
- The "submit" option above should be done in a form in a `<dialog>`-based Modal
- Clicking/submitting with ANY of the above options should NOT navigate the page
- You choose how, but each of the above options should visually let the user know they clicked the button
  - `console.log` is NOT visually letting the user know - it must be in their rendered page
  - This can be as simple as a conditionally rendered message in the HTML saying they clicked the button
  - Hint: This means something will need to change in some state so you can conditionally render
  - Hint: This means you will need to pass a function as a prop to handle onClick for the generated button
  - You may use instances of the Button component to open/close the modal.  These can count towards the 3 required Buttons.
- This assignment does not require a "complete" looking web page, but you can choose to include that

## Visual Requirements

- A Button component with a `visual="button"` prop will have styling to look like a button
- A Button component with a `visual="link"` prop will have styling to look like a link
- As mentioned in Functional Requirements, each Button must change the state so that the user can easily tell that clicking the button DID something
  - This involves the button changing a value in state and that state being used to conditionally render text or a component
- In addition to meeting the _functional_ requirements, try to make your page an attractive webpage that would make sense to a user.  Provide a concept/purpose for the page that explains the functionality.

## Accessibility Requirements

- Any links/buttons and navigation must be usable by both mouse and keyboard
- Any images should have useful alt attributes (logos must say that it is a logo and what the logo is for at a minimum)
  - There is no specific requirement for images in this assignment, but you may want to use them to create an attractive web app
  - If you include images, you should download them and use a licenses.txt to list the origins AND licenses that let you use the images.
- You should use Semantic HTML and other best practices from class

## Adaptive/Responsive Requirements

- No special requirements - You can provide such functionality, but there is no requirement for this assignment

## Restrictions
- You must remove/replace the default provided CSS
- Do not use JS to directly interact with the DOM
  - This means no `querySelector`, no `getElementXXX`, no `classList`
  - This means no setting `style` attributes, properties, or props
- Do not use table, CSS table-cell, floats, or other related concepts for layout of the page structure (floats for text around images is fine)
- Do NOT use alert(), prompt() or similar
- Do not use CSS Modules, styled-components, CSS-in-JS or other alternate forms of CSS organization
- Do not use outside JS or CSS libraries outside of what is installed by Vite
- Follow the methods and best practices used in class or described in this README

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
  - Changing visible page content in React
  - Able to pass a function to perform this change
  - A reusable Button component
  - Using `<dialog>` for a modal window
  - Interacting with that dialog modal using React
### Overall Requirements
- Does the program work as required?
- Using required techniques?
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
- Do not use style props on JS elements
