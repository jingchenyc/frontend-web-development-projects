# Assignment - Basic Form

**Due: Mon Oct 7, 11:59pm PT** 

# Goal

You will create a webpage that contains a registration form as described below.
- This page will be usable with the webserver described below
- This page and the form on the page will be styled as described below

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'basic-form' (`git checkout -b basic-form`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit.
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## General Requirements

- You will create a webpage (`index.html`) in the `public/` directory found in this directory
    - Note: _in the public/ folder!_
- We will use a custom webserver (provided) to handle the form input
    - NOT `npx serve` (otherwise submitting your form won't work)
- This webpage can be viewed and used by running:
  - `npm install` (only required once on any given computer for this project)
  - `node server.js` (starts the server, Ctrl-C to exit)
  - Visiting `http://localhost:3000/` in the browser
- The page you create will use semantic HTML and semantic CSS
- Follow the best practices described in this course

## Page Requirements

- The page will have a visually distinct header
  - an `<h1>` header text is required, logo image and/or menu are optional
  - If you want a logo image, you can use a placeholder or an image you personally took ONLY (more options later)
- The page will have a visually distinct footer
  - A link to a "privacy policy" is required
    - The link does not need to link to an actual page
    - The styling and structure of the footer is up to you
- The main content of the page (including the form) is inside a `<main>` element

## Form Requirements

- The form will submit to `/submit` using POST
  - This server will show the data that is sent so you can confirm it works
    - Do not worry about styling the page of results
    - Make sure that the page of results correctly shows the entered data
- The form will collect the user's name (as field "name")
- The form will collect the users email (as field "email")
- The form will have checkbox for "Do you want us to send you annoying emails?" (as field "annoy-me")
  - The checkbox will default to being checked when the page is loaded
- The form will have a drop down offering the options of "Silver Tier", "Gold Tier", or "Platinum Tier" (the data sent is "1", "2", or "3" respectively, as field name "tier")
  - The form will default to having none of these selected, and instead an option with an empty value and the option of "Please select" will be selected by default
- The form will have a submit button with the text "Register"

The name, email, and dropdown fields are required.  The form should visually indicate the fields are required before any fields are filled in, in a manner that provides good a11y (Can't be just a red `*` if the `*` isn't defined on the page).

## Styling Requirements 

- The page will be responsive and adaptive, with a breakpoint of your choice that works well with the content
- The "desktop" version will show a two-column layout for the form
  - Remember: "two column layout" when talking about a form refers only to the relationship between the label and the form field, NOT the number of columns of content
  - Show the checkbox with the label on the right of the field, unlike the other fields
- The "mobile" version will have a one-column layout for the form
  - Remember: "one column layout" when talking about a form refers only to the relationship between the label and the form field, NOT the number of columns of content
  - Show the checkbox with the label on the right of the field, unlike the other fields
- One column form layout labels should be closer to their related field than to the any field above them
- Two column form layout labels should be aligned close to the field

## Accessibility Requirements
- The form can be navigated and used with keyboard (using tab, typing, and space) or mouse
- All fields must be labeled and the labels must be explicitly associated with the fields
- Required fields are labeled as such in a way that do not require color-sightedness
- The page should have a reasonable layout for a range of widths, from 360px to 1000px (with normal text-size)

## Notes
- You must have explicit association between labels and fields, but you can choose if you have an implicit association as well
- You decide how to construct your form HTML, as long as it meets the other requirements
- You can have additional text in/around the form to create a more involved experience, your choice
- You can create any semantic HTML for the page subject to the rest of the requirements

## Additional Requirements
- Every input element should have a functional label with meaningful text
  - Hint: Easy test is to click the label text - it should focus/activate the input
- Do not use tables or table-layouts
- Do not use positioning to manipulate the layout of form elements
- Do not use transforms, transitions, animations, or other effects not yet covered in class. (soon!)
- No CSS you didn't write
- No JS (soon!)
- Do not use float for layout
    - This assignment should have NO use of float
* You MUST follow the required/best practices outlined in this course to date

## Grading Rubric

Note: The assignment is to show your understanding of the material from class.  If you don't do that, you can lose points, even it "it works".  Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).

This assignment is graded on a number of categories, each graded on the below scale:
- Missing (0)
- Needs Improvement (1)
- Good (2)
- Excellent (3)

This means a single mistake might cost you 0 points or more than 1 point, depending on how much that mistake changes your demonstration of the skills from class.

The categories for this assignment are:
- Submission
    - Does PR follow submission expectations?  (contains only change from assignment, correct branch name, good commit message(s), reviewers assigned)
- Overall Requirements
    - Does the project meet the goal?
    - Are general requirements met? (outside of "Form Requirements" below)
    - Were all restrictions obeyed?
    - Were all requirements met in ways that showed understanding of the class material?
    - Is the content responsive (if needed) across the range of required sizes?
    - Is the content adaptive as required?
- Form Requirements
    - Is form HTML created correctly?
    - Does the form HTML meet the requirements?
    - Is the form styled in a 1-column or 2-column format as required?
    - Are all fields explicitly and correctly associated with a text label?
    - Are checkboxes visually labeled as required, unlike 1-column/2-column format?
- Overall HTML Quality
    - Are required elements present, and all elements used correctly?
    - Are elements used with correct and appropriate semantics when available?
    - Are attributes and values used as taught and with required syntax?
    - Are elements indented when appropriate and consistently?
    - Are semantic class names added that help explain the purpose and contents of elements?
    - Are all Accessibility requirements of the HTML met?
- Overall CSS Quality
    - Is all CSS loaded from separate CSS files?
    - Are CSS class names semantic?
    - Are CSS class names kebab-case?
    - Are CSS classes preferred for selectors? (situational)
    - Are CSS properties consistently indented in their blocks, with space after the :?
    - Are all Accessibility requirements of the visual appearance met (not relying on color as the only way to suggest something, text labels, etc)
    - Is the CSS applied wisely per class guidelines? (Not creating a page that only works for certain fixed screen sizes, etc)?

