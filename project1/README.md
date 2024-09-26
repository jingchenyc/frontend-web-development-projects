# Project 1: Multi-page Website

**Due Mon Oct 14, 11:59pm PT**

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'project1' (`git checkout -b project1`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit
  - Because this `project1/` folder is NOT inside `work/`, ONLY the `.gitignore` file you created (if you created one) in the root of the repo will be used.  If you did not yet create one, now is a good time to do so.
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

You will create a website made of several HTML pages and related CSS to demonstrate the skills learned in class so far.

The website will be about an animal of your choice (real or not, but make sure you will be able to get any images needed following the restrictions in this README!)

This webpage can be viewed and used by running:
- `npm install` (only required once on any given computer per project)
- `node server.js` (starts the server, Ctrl-C to stop running the server)
- Visiting `http://localhost:3000/` in the browser

## Functional Requirements

The website will consist of these pages (created inside the `public/` directory):

- `index.html` ( a "Homepage")
- `about.html` ( an "About" page )
- `register.html` (a Registration page to register any data you choose to meet the form requirement)

Each page will consist of a `<header>`, `<main>` and `<footer>` that are semantically correct.  You may include other elements in/around these (for example, a `<div>` might contain one or all of the above elements) as long as these elements are used in a semantically correct way (those elements must contain content that matches the meaning of the element type - see the element's definitions on MDN if you are uncertain as to what a given element should contain).

Each page will have a `<title>` element that names the page. 
- Each page will have an `<h1>` element with text that matches the text in the `<title>`

The page may contain links to pages that do not exist
- Example: you can have a link to a privacy policy page that does not exist

Every link should use a filename that could exist
- Example: you can link to a non-existent "privacy.html", but you should not have multiple links to "/fake", "fake.html", or "#" because "fake" or "#" does not say what the page would be.

## Header/Footer Requirements

- The visual header/footer for each page is identical
  - Hint: There is no way to automatically do this with just HTML, so you will have repeated content in each HTML file.  We will learn alternatives later in the semester.
  - Exception: If the page identifying header (`<h1>` or `<h2>`) is visually in the header, it will be unique on each page
- The header/footer is visually distinct from the main content of the page
- The header will include a "logo" image (of your choice, subject to the image restrictions given in this file)
  - The logo image cannot be a placeholder image
  - The logo image will be a link to the home page
  - The logo image will have an alt attribute that describes the image
    - All your `alt` attributes should be quality, that actually describe the images for someone that can't see them

## Navigation requirements
- The page will include a `<nav>` that includes two options:
    - "Menu"
    - "External Links"
- The "Menu" option in the nav will offer links to each of these pages: 
    - "Home"
    - "About"
    - "Register"
- The "External Links" option in the nav will offer links to at least 3 actual pages on the internet (example: the wikipedia page about Cats)
- The navigation can be anywhere you want in your HTML structure, but should appear on every page
  - Example: The navigation may be inside the `<header>` or it may not be, either is acceptable
- You may choose different specific text for the links 
  - They must link to those pages
  - The text you use must make it clear that they link to those pages
    - Example: "About Us" or "About Dragons" are fine, but "Ponder the Inscrutable" is not clear that it takes you to the about page
- You may link to the pages with absolute or relative paths, your choice
  - You must NOT use fully qualified URLs in these links (Example no mention of "localhost") unless you are linking to pages outside of this project code (such as wikipedia)

The navigation must be shown in at least one of the following ways:
- A horizonal menu with dropdowns
- A vertical menu that does slide-in/slide-out

## Content Requirements

### Homepage Contents

The home page will include at least 7 UI Cards. 
- These must be in two different areas
    - These two areas use the 12 column grid with different proportions at desktop size
    - Example: a div with 3 cards about topics in one category ("Cats in the News"), and a second div with 4 cards about topics in a second category ("Famous Historical Cats").  At the widest adaptive size these form 1 full-width row of 3 cards and a second full-width row of 4 cards
    - The cards of the one area do not have to have the same structure/appearance as the other area, but they may (except for the different use of the 12 column grid)

Each card will contain at least:
  - A visible and semantic heading title
    - Hint: Remember not to skip numbers in h1-h6 elements!
  - A call-to-action link

Each card will have at least one of:
  - A background color that makes it visually unique from the other cards in that category
  - A image that makes the card visually unique from the other cards

The links in the cards to not need to link to actual pages
- They must be `<a>` elements with `href` attributes regardless of appearance

The Home Page should make it obvious what Animal the site is about

### About Contents

The About page will include at least 3 paragraphs of text that each contain at least 3 sentences.  
At least 1 sentence must be real text saying in more detail what animal the site is about and something about that animal. The remaining text may be lorem-ipsum like text.

### Registration Contents

The Register page will include a form

The form will submit via POST to `/register` 

The form will ask for (at minimum):
- name
- email
- one piece of info using a checkbox
- one piece of info using a dropdown

You should use a 1 column layout for the form
- Checkboxes/Radios are allowed exceptions to this convention
- Remember: the columns used to describe a **form layout** refer to if the form labels are above/below the fields or next to the fields, NOT how many columns of fields are shown to the user
- The form must be usable at the required viewport sizes, but there is no specific requirement for adaptive behavior of the form

At least 1 field is required and should be visibly marked as required
- Reminder: An asterisk alone does not tell a user a field is required! They may not know what that means

The page/form should make it clear what information it is requesting

## Responsive/Adaptive Requirements

Each page is primarily laid out according to a 12-column grid
- Exceptions are allowed (example: a horizontal menu bar), but the main content of each page should mostly align to the 12 column grid with no exceptions that take up significant space
- This means that every page should have the main content aligned using the 12 column grid, though they need not use all 12 columns (Example, the form might fill only some of the 12 columns, and the labels/fields inside the form do not need to align to the 12 column grid)

The page must be pleasant to read from 360px and up (at standard font-size), with no cut-off content, overlapping text, or awkwardly wrapped text.
- You may contain the page contents with expanding gutters, but the page must show responsive behavior (wrapping text) until 800px
- There must be at least one adaptive breakpoint (exact size is your choice) on at least one page
- Adaptive breakpoints should use rem as their unit
- You must have text/panels that are easily seen to be responsive (wrapping text as the browser resizes)

## Accessibility Requirements

- Reasonably resizing text/zooming does not cause your display to become difficult to use
- All forms, menus, buttons, and links must be usable with keyboard as well as mouse
- No information should be conveyed through color differences only
- All form fields should be associated with a `<label>` element that contains useful text
- Any form fields that are required should be visibly and textually marked as required
- All images will have descriptive `alt` attributes
  - These alt attributes should describe what the picture is/contains
- Any icons are not required to understand and use the page with a screen reader
- This means there must be text to explain what happens, icons can only add to the experience, not be the only means to understand it

## Demonstrated Skills Requirements

These are skills that I/TA(s) must be able to confirm you have an understanding of based only on seeing you use the skills in the HTML/CSS
- Box Model
- Semantic HTML
- Semantic Class names
- CSS Grid
- CSS Flexbox
- 12 column grid layout
- A non-static position property
- Responsive HTML
- Adaptive HTML
- HTML Forms

## Extra Credit

Extra credit points should be worked on only after fulfilling all the other requirements, because the other requirements are more points.
- Use of colors and borders to create distinct visual areas
- Good use of box-shadow to add visual depth to cards or buttons
- Strong use of whitespace and line-height to create clear, readable text
- Additional page content to provide context and ways to expand the site in the future

## Additional Requirements
- Follow the best practices from the course
- Do not use any Javascript (JS) (soon!)
- Do not use float unless wrapping text around an image
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- You must follow the best practices described in this course up to this point
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have learned the lessons based one what we read
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not use external CSS
  - Exception: You may use icons from css.gg by copying the CSS snippet(s) into your own css file
    - You MUST include a comment in your CSS saying "below CSS adapted from https://css.gg under the MIT License"
    - You MAY modify/adapt/rename the CSS from css.gg.  The comment will still apply
- Any images must be ones you personally own or from `http://unsplash.com`  
  - Do NOT link to the images on unsplash.com - download the images and update the licenses.txt as below
  - Include an `licenses.txt` file in your project directory (at the same level as package.json, not in `public/`) and list the unsplash.com url of each image you downloaded from unsplash
  - For any images that you personally own and used, list (in `licenses.txt`) the filename of that image as you have it in this project. We can recognize which images are yours and which were downloaded from unsplash by looking at the images and this `licenses.txt`.
  - Do NOT download and use random images from the internet/web.  Only your own images or from unsplash.

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

### Basic Requirements (Semantic and Valid HTML + CSS, Submission)
- Does PR follow submission expectations?  (contains only changes from this project, correct branch name, good commit message(s), reviewers assigned)
- Correct use of semantic elements throughout the document
- All necessary HTML elements present and correct
- Images have appropriate alt attributes for images
- Image dimensions are close to dimensions used in page
- licenses.txt exists and contents as requested
- All course best practices for semantic/valid HTML are applied
- All CSS class names are semantic and kebab-case
- All course best practices for HTML/CSS quality are applied

### Header/Footer

- Identical and visually distinct on all pages 
- The header includes a logo linking to the homepage
- No text is "crowded" against a border or edge

### Navigation
- Correct implementation with clear links to "Home", "About", "Register", and at least 3 external pages
- Navigation is either a horizontal menu with dropdowns or a vertical menu that slides in/out
- Navigation is usable with mouse, touchscreen, or keyboard navigation
- No text is "crowded" against a border or edge or other text

### Home Page Contents
- Homepage includes at least 7 UI Cards, each with a semantic heading, a call-to-action link, and a unique background color or image
- The cards are in two separate areas, with each area being a different category of topics
- The two card areas have different proportions for the 12 column grid 
- The homepage indicates the animal the site is about
- The page content aligns to 12 column grid
- No text is "crowded" against a border or edge

### About Page Contents
- The page content aligns to 12 column grid
- No text is "crowded" against a border or edge
- Includes 3 paragraphs worth of text.

### Registration Page Contents
- The page content aligns to 12 column grid
- No text is "crowded" against a border or edge
- Form includes fields for name, email, a checkbox, and a select dropdown
- Form submits via POST to /register
- At least one field is required and clearly described as required
- The form is usable and visually clear
- The form is in a 1 column form layout (excluding checkboxes/radios)
- Form is usable with keyboard navigation
- All form fields have correctly associated text labels
- Visible labels are visually closest to the fields they apply to
- All course best practices for forms are applied

### Responsive/Adaptive Design
- Fully responsive and adaptive from 360px-800px
- Includes at least one adaptive breakpoint using rem units
- Content is readable/usable/clear at all sizes
- All course best practices for responsive/adaptive are applied
    - CSS need not be mobile-first

### Extra Credit
- Use of colors and borders to create distinct visual areas
- Good use of box-shadow to add visual depth to cards or buttons
- Strong use of whitespace and line-height to create clear, readable text
- Additional page content to provide context and ways to expand the site in the future
