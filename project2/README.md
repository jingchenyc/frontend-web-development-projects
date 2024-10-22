# Project 2

**Due: Mon Nov 4, 11:59pm PT**

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'project2' (`git checkout -b project2`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit.
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Provide ( in `public/`) the necessary HTML, CSS, and JS files to create the experience shown in the included images using the skills and best practices taught in class.

- Only the "index.html" and "cats.html" pages are required, the other links must be usable URLs that link to non-existent pages
  - Adding additional pages can net you extra credit, but fulfill the required pages and functionality first

This webpage can be viewed and used by running:
- `npm install` (only required once on any given computer for each project/assignment)
- `node server.js` (starts the server, Ctrl-C to stop running the server)
- Visiting `http://localhost:3000/` in the browser

## Functional Requirements

- Matching the exact text/images of the pages is not required
  - Any replacement text should make sure to demonstrate different line lengths and blocks of different sizes
  - Any replacement Images should be the same sizes
  - They cannot be placeholder images, you must have actual images that are files in the repo and of an appropriate size.
- The same HTML must be used for the main navigational menu, both for the "desktop" horizontal menu and the "mobile" hamburger menu. All adaptive changes in presentation should be done with the same HTML content 
  - Elements can be shown or hidden (such as the hamburger menu icon), but there should not be two different versions of the same content that are in turn shown or hidden. If some content is visible in both adaptive views, the same HTML should be responsible for showing it with only styling differences.
- The logo image is also a link to the "/" page (index.html)
- Activating one of the "Subscribe" buttons (styled to look like links) on the "Famous Cats" page opens a modal window
  - Esc key will close this window
  - There is only one single modal, but it can be opened by any of the "Subscribe" buttons
  - Note: This is a poor use of a modal, and is done to demonstrate your skill
- The form validation is done with JS, not HTML-based
  - The form fields are required
  - The email field must have an "@" in it
    - Do NOT test for any other email-like trait/text
        - ONLY test for an "@" symbol
    - NOT using type="email"
  - The confirm field must match the email field for the submission to succeed
  - These fields are tested when their value changes AND when the form attempts to submit
- When validation is passed, the form will submit to "/subscribe"
    - This will display a boring unstyled confirmation page, that's fine
    - You must confirm the confirmation page does list your entered fields and values, however
- When Cancel is pressed the modal closes, regardless of validation

## Responsive/Adaptive Requirements

- Both pages have an Adaptive Breakpoint at 44rem
- Both pages are Responsive at sizes other than the Adaptive Breakpoint
  - Grading will review from 360px to 1200px in width at standard text sizes
- Remember to set paddings/margins on elements to maintain some whitespace between text/elements
  - 0.5rem is a good distance for this assignment
- The main navigation menu changes from a horizontal menu in desktop sizes to a click-based hamburger menu at mobile sizes
- The footer navigation menu changes from a horizontal menu in desktop sizes to a vertical menu at mobile sizes
- The Home page panels lose the space between them and around them at mobile sizes
  - There is NOT a double-thick line between them
- The Home page panels have the text around the images at mobile size, but not at desktop size
  - Yes, this is done with float, using float the way it is meant to be used

## Accessibility Requirements

- The pages contain a "skiplink" letting you skip to the main content
- Reasonably resizing text/zooming does not cause your display to become difficult to use
- All forms, menus, buttons, and links must be usable with keyboard as well as mouse
  - This is demonstrated in the reference images when the mouse isn't moving and the focused links are changing
  - The hamburger icon can be reached via keyboard, and is activated with Space/Enter to open the menu
  - Tabbing on the hamburger menu is closed does NOT select (invisibly) one of the menu links. Instead it selects the next visible link on the page
- No information should be conveyed through color differences only
- All form fields should be associated with a `<label>` element that contains useful text
- Any form fields that are required should be visibly and textually marked as required
- All images will have descriptive `alt` attributes
  - These alt attributes should describe what the picture is
  - Logo images on these pages should be either loaded as a background image or use alt=""
- Any icons are not required to understand and use the page with a screen reader
  - This means there must be aria-label text or visible associated text to explain what the icon is/does

## Appearance Notes

- The colors used on the page are:
  - papayawhip 
  - burlywood
  - #eee or #eeeeee
  - lime
  - lightcoral
  - black (with 0.7 opacity when used as a backdrop)
  - dodgerblue
  - red
  - blue
  - white
- image dimensions:
  - 100x100px (logo)
  - 200x200px (panels and cards)
  - 125x125px (floating in panels)
- line heights:
  - 1.2 (default)
  - 1.4
  - 1.6
- padding/gaps/margins:
  - 0
  - 0.5rem
  - 1rem
  - 2rem
- font-sizes
  - 1rem (default)
  - 1.2 rem (form buttons)

## Demonstrated Skills Requirements

These are skills that I/TA(s) must be able to confirm you have an understanding of based only on seeing you use the skills in the HTML/CSS
- Semantic HTML
- Semantic Class names
- CSS Grid
- CSS Flexbox
- 12 column grid layout
- A non-static position property
- Responsive HTML
- Adaptive HTML
- HTML Forms
- JS-based Form validation and reporting
- A dialog element-based modal window
- A hamburger menu using JS

## Extra Credit

Extra credit points should be worked on only after fulfilling all the other requirements, because the other requirements are more points
- Transitions/animations on state/visibility
  - Any motion must be added in media queries that check prefers-reduced-motion
- Create any additional pages that are linked to on this page and provide content that demonstrates other skills
- Extra credit is based on these criteria:
  - Are you demonstrating skills learned from class
  - Do these demonstrations show sufficiently complex understanding
  - Do these demonstrations provide benefit to the User Experience (UX)

## Additional Requirements
- Follow the best practices from the course
- Do not use HTML-based form validation (including type="email", use type="text" instead)
- Do not use float unless wrapping text around an image/inline element
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have learned the lessons based one what we read
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not use external CSS
  - Exception: You may use icons downloaded as SVG/PNG from http://fonts.google.com/icons 
    - You MUST include the filename of any such image in your `licenses.txt` file AND include this link as the license information: https://github.com/google/material-design-icons/blob/master/LICENSE
- Any images must be ones you personally own, be from the Material Icons images mentioned above, or be from `http://unsplash.com`
  - You must have any images you use downloaded into your repo
  - You must include a `licenses.txt` file in your repo (at the same level as package.json, not in `public/`) and list the url of each image you downloaded along with the url of the license allowing you to use those images
  - For any images that you personally own and used, list (in `images.txt`) the filename of that image as you have it in this project, and list your name as the owner.
  - Do NOT download and use random images from the internet/web.  Only use images from the listed sites (or that you own) and that you have permission to use

## Grading Rubric 

Note: The project is to show your understanding of the material from class.  If you don't do that, you can lose points, even it "it works".  Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).

Repeat: DO NOT COPY WORK.  This is 25% of your grade, it is not worth risking a 0 or worse.

This project is graded on a number of categories, each graded on the below scale:
- Missing (0)
- Needs Improvement (1)
- Good (2)
- Excellent (3)

This means a single mistake might cost you 0 points or more than 1 point, depending on how much that mistake changes your demonstration of the skills from class.

The categories for this assignment are:
### Basic Minimums 
- Does PR follow submission expectations?
    - Contains only changes from this project, correct branch name, good commit message(s), reviewers assigned
- Are the needs for the basic goal present? 
    - The required pages exist as the expected files and are constructed in the overall required approach
### Overall Requirements
- Is the goal achieved?
- Does product match the reference image behaviors for anything not covered by other categories?
### Form Submission/Validation Requirements
- Form fields and data submit correctly and confirmation page shows details
- Validation occurs as required
    - On use of submit button or via Enter in a form field
- Email and Confirm Email fields function as required
- Error messages display as required
- Error messages clear as required
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
- Do not use style properties on DOM nodes
- Use addEventListener to add event listeners
### Responsive/Adaptive Quality
- Content matches general responsive behavior shown in reference images
    - Exact matches of when a line wraps isn't required, but should be close
- Adaptive layout change at 44rem
- Adaptive changes cover necessary behavior changes shown in reference images
### Copyright
- licenses.txt exists and contents as requested
    - Each image filename, source, AND the license info
### Accessibility Quality
- Do you have a functioning skiplink?
- Form fields have properly associated label text
- Visual interactive elements have text associated with them
- Images have appropriate alt attributes for images
- Actual image file dimensions are close to dimensions used in page
- Navigation and form are usable with mouse, touchscreen, or keyboard
### Extra Credit (Not all listed items are required to earn credit)
- Transitions/animations on state/visibility
  - Any motion must be added in media queries that check prefers-reduced-motion
- Create any additional pages that are linked to on this page and provide content that demonstrates other skills
- Does additional content demonstrate skills learned from class
    - Do these demonstrations show sufficiently complex understanding
    - Do these demonstrations provide benefit to the User Experience (UX)

