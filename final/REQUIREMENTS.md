# Final Project

**Due Mon Dec 9, 11:59pm PT**

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'final' (`git checkout -b final`)
* Create all necessary files for your project here
* add, commit, and push the branch to github
  - Commit with a GOOD commit message!  Not "Adds MYNAME" or "Adds files via upload"
* Create a PR to merge to main
* Be sure to include the TA(s) and myself as reviewer(s)

Hint: Because we've already covered most of the content of this project, the scoring is heavily impacted by attention to detail.  Be sure that **I can definitively say that you understand the concepts you are using**.  A minimal implementation can leave that unclear.  Use this project as a piece to demonstrate not only to me but also to future employers rather than trying to do the minimum required effort.

## Goal

- Create a React-based Single Page Application (SPA) using Vite
- This web app will be about a topic of your choice
  - This can be informational, a game, whatever, your choice
- This web app MUST appear "complete"
  - No fake screens/views/pages
  - No lorem ipsum-like text
  - Appropriately complete visuals
- This web app will have certain required and a selection of optional features (see below)
- This web app will demonstrate your your understanding of the best practices and concepts taught in class
- The web app will be tested by running:
  - `npm install` (once per project)
  - `npm run build`
  - `npx serve -s dist`
  - Be sure to run this process to test your application! An improperly written app may work with the dev server from `npm run dev` and NOT with the above flow!

## Fully Required Features

Your web app MUST feature all of the below, in addition to featuring SOME of the "Partially Required Features"

### Additional Submission Requirements

- Do NOT submit the `dist/` directory as part of your commit and PR
  - The project will default to correctly excluding the `dist/` directory because Vite creates a `.gitignore` file, so just don't break that default behavior
  - Properly using git is part of your score!

### Required Functionality
Your web app MUST contain and demonstrate these features/abilities/style of writing

- Multiple "pages" for the SPA that replace most/all of the main content
  - Navigation and branding can remain between pages, your choice
  - Your app must consist of at least 3 "pages", but I expect most projects will have more pages than 3 in order to demonstrate all features
- A navigation that allows the user to move from one "page" to another in the SPA
  - A user never has to use the browser "Back" button to use your app
  - A user never has to reload/refresh the page to use your app
- At least one form with some sort of validation that conditionally appears
  - You can have forms that do not have input limitations (and thus have no validation)
  - All forms that DO have input limitations must have validation 
  - You are required to have at least 1 form that has input limitations (and thus has validations)
- A `<title>` that describes your application

### Required Maintainability

- Your CSS class names must be semantically descriptive
- Your CSS class names should be kebab-case or BEM-style
- Your `.css` is done following the practices of class
- Your styling is not using CSS Modules, styled-components, or other CSS-in-JS styles
  - Not because those other practices are bad, but in order to see that you have learned the general lessons from class
  - You should not set any `style` attributes, properties, or props
- Your CSS must be in more than one file
- Your `.css` files must be organized to make it easy to find the proper file for styling a given element
- Your `.css` within a file must be organized to make it easier to find/modify the rules and properties for a given element
- Your CSS targets classes unless setting app-wide defaults for elements or targeting specifically unique elements (ex: a skiplink or `#root`)
- Your Components are each separate `.jsx` files
- Your Components are all in files with filenames that match the component name
    - The components must be named in MixedCase
        - The `main.jsx` file that Vite creates is an exception
- Any JS files that are not using JSX are `.js` files
- All `.js`, `.jsx`, and `.css` files are consistently indented
- While the app is tested in Chrome for grading, you must not use CSS/JS features that are not supported in all modern major browsers

### Required Legalities

- Outside images or CSS MUST be in your repository, not linked from outside
- Any images that you use MUST be listed in `licenses.txt` saying where the image is from and what license allows you to use it
  - For future work, remember that the `licenses.txt` I require is NOT how you would track legalities on the job
    - But only because there is no standard.  You MUST track the source and license for any external work
  - Only images from `http://unsplash.com`, .SVG or .PNG (only) from https://fonts.google.com/icons, or images you own are permitted

### Required Visuals

- You MUST have an identifiable color palette for your site that goes well together
- Different areas of the "pages" of your SPA MUST appear visually distinct and have whitespace and boundaries that are sufficient and helpful for the user
- The app must appear to be "complete"
  - No placeholder text (Meaning no lorem-ipsum"-like text.  Placeholder attributes are allowed)
  - No placeholder images
  - No links to non-existent content
    - Exception: Links to social media accounts can link to other accounts, as if those accounts were for your project
  - Content the user would expect is present

### Required Responsive/Adaptive Behavior

Your web app MUST demonstrate these responsive/adaptive behaviors
- General Responsive behavior that allows the page to be readable and clear at any viewport sizes in between adaptive breakpoints (between 360px and 1200px widths at standard font size)
- At least one Adaptive breakpoint 

### Required Accessibility

Your web app MUST demonstrate these accessibility features

- You must use Semantic HTML when there is a clearly appropriate semantic HTML element for the purpose
  - `<a>` is used for navigation (between "pages" of the Single Page Application or to urls that are not part of the Single Page Application)
  - `<button>` is used for controls of an interactive portion of the "page"
  - You can make a `<button>` look like a link or make `<a>` look like a button, but the element used must match the actual semantic purpose (`<a>` for navigation and `<button>` for controls) regardless of the visual appearance
- You must use landmark HTML elements where appropriate
  - Ex: `<header>`, `<footer>`, `<main>`, `<nav>`
  - `<article>` and `<section>` have subtle semantics and their use is not required for this project 
- Any heading elements (`<h1>`, `<h2>`, etc) must be properly used
  - They are used for titles of content that is a subsection of the previous heading
  - No levels in between are skipped
  - The current HTML never has more than one `<h1>` element at a time
- ALL foreground images must have a useful and accurate `alt` attribute
  - "useful" and "accurate" are IMPORTANT.  It is not enough to have alt text if that alt text is not helpful to someone using it.
  - For this project, that includes any "logo" images
- Any image in the background MUST NOT display any relevant information to the user
- All font sizes must be in rem units
    - The majority of your text content is sized 1rem
    - No font size is below 0.75rem
- Your pages must remain readable/usable when zoomed in up to 200%
- All controls and form fields must be accessible/usable via both keyboard and mouse
  - The skiplink need only be focusable by keyboard
- You must have a skiplink that works when the app is loaded
  - Each "page" should work with the skiplink
  - "work with skiplink" means that using keyboard navigation and following the skiplink means the next Tab will enter the main content of the page and skip any material before the main content
- You must pass WCAG contrast requirements for AA level
- All links on the page will have useful text for the link
  - The link text will not include "click here"
  - The link text is meaningful without context (such as when in a list of links in a screenreader)
  - You do not have links to different destinations with the same link text
    - You fulfill this requirement if the default link text is overridden by an aria-label value that matches the link-text requirements
- All form fields must have an appropriate `<label>` element properly associated with the data
  - You can confirm this by clicking on the label text - the field should be focused
- Any controls must have an accessible text description
  - Ex: Button text, an associated `<label>` element, or an `aria-label` attribute
  - This should NOT include error messages for the element, only the label text
- Do not use color as the only indicator for information to the user
- Nothing automatically rotates/advances
- Any animation or transition CSS MUST be in a media query that blocks the motion for users that have `prefers-reduced-motion`

## Partially Required Features

You must implement at least 5 of these features following the practices from class:

- Drop down navigation menu
  - the menu drops down on click or drops down on hover/focus, your choice of which trigger causes the dropdown
- An Adaptive "hamburger menu"
  - A menu that is visible at larger viewport size, but is replaced with a dropdown menu at smaller viewport sizes (this counts as a dropdown as well if done)
  - If you have a hamburger menu that is available on ALL page sizes, that counts as a dropdown navigation menu but NOT as an Adaptive Hamburger Menu
  - Having two navigations and only showing one at a time does NOT count as an Adaptive Hamburger Menu
- Accordions or Tabs
  - These require that content is conditionally shown based on changing the Accordion from open to closed or on selecting a "Tab"
  - These must be usable and identified to accessibility tech, relying on semantic HTML where possible and using aria-properties when needed.  
- Theme selection (switching between a light or a dark theme) that then applies to all "pages" in the SPA
  - The option to change theme can be on all pages or in some "Settings" page, your choice
- Cards or Panels that include an image and text grouped together visually
  - This option must have sufficient styling to be noteworthy
- A Carousel of images (where one image is shown at a time)
  - Reminder: I do NOT recommend carousels as a matter of UX, I include this option only because you may be asked to create such an abomination on the job
- A "gallery" that shows many items (images/cards/panels/rows/etc) that can be filtered or sorted or otherwise changes which items are shown   
  - You must have AT LEAST one of "filter" or "sort" or "otherwise change which items are shown"
  - "Filtering" meaning that the user can select options that changes which of the total number of possible items are shown
- A "complex" form interaction (Ex: Specific Fields that appear/show or use a different input type based on criteria). Examples of complex form interactions:
  - A dropdown with "other" that shows an additional field to fill in what "other" is when selected, but if you pick something from the dropdown that isn't "other", the extra field isn't shown
  - A shipping address and billing address where a checkbox says "billing address same as shipping address" and when you check it the billing address is pre-filled and the fields are given the "readonly" attribute so that they can't be edited.  Unchecking the box makes those fields editable again.
    - This is an example of "complex" form interaction.  You do not have to have exactly these form contents or labels, but this demonstrates a behavior that qualifies as "complex"
  - Two select dropdowns where the selection in the first changes the options for the second, like selecting the make and model of a car (changing the "make" selection changes what is available in the dropdown for "model"). 
- A Modal form that alters some data shown in the app.  Examples of "altering some data shown in the app" include changing your Display Name in Slack or changing if emails are shown in "Compact" mode in Gmail
  - There are multiple parts to this requirement:
    - It must be a modal dialog using the dialog element as shown in class
    - The modal dialog content must include a form
    - The form collects/changes data that is saved into state in the application
    - This state data must be visible somewhere in the app OUTSIDE of the form
      - Example: The page says "Hello USERNAME" somewhere in the content (but it must appear OUTSIDE the form and modal) and the modal form allows the user to change the value of USERNAME

Any of these options implemented using techniques NOT based on class will not count towards the requirement

## Additional Requirements
- Follow the best practices from the course
- Do not use HTML-based form validation (including type="email", use type="text" instead)
- Do not use float unless wrapping text around an image
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have  learned the lessons based one what we read
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not use external CSS (meaning no CSS you didn't write)
  - Exception: You MAY link to outside webfonts 
- Any images must be ones you personally own, be from `http://fonts.google.com/icons (SVG or PNG only), or be from `http://unsplash.com` ("free" only)
  - If you include any images in your repo, you must include a `licenses.txt` file in your repo (at the same level as package.json, not in `public/`) and list the url of each image you downloaded along with the url of the license allowing you to use those images
  - For any images that you personally own and used, list (in `licenses.txt`) the filename of that image as you have it in this project, and list your name as the owner.
  - Do NOT download and use random images from the internet/web.  Only use images from the listed sites (or you own) and that you have permission to use
- Do not use any additional JS libraries or external JS
  - This means no JS you didn't write, except for that installed by Vite as shown in class
  - NO react-router/react-router-dom, NO libraries of components, etc
  - Such libraries are not bad, but this project is to demonstrate YOUR skills
- Do NOT use alert(), prompt(), or other blocking JS that wasn't introduced in class
- Do not use redirects
- Do not use cookies, localStorage, sessionStorage, or other client-side storage.  Store any data in Component state for this project.
- Do not modify the DOM in any way outside of using React
- Do not read the DOM outside of using the event target to capture values from form fields

## Grading Rubric

Note: The project is to show your understanding of the material from class.  If you don't do that, you can lose points, even it "it works".  Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).

This project is graded on a number of categories, each graded on the below scale:
- Missing (0)
- Needs Improvement (1)
- Good (2)
- Excellent (3)

This means a single mistake might cost you 0 points or more than 1 point, depending on how much that mistake changes your demonstration of the skills from class.

The categories for this project are:

### Submission
- PR meets all expected details per normal course expectations
- PR follows "Submission Instructions" and "Additional Submission Requirements" above
- Provided code runs per requirements
- All restrictions on content obeyed

### Primary Goals and Functionality
- The application meets the criteria listed in "Goals" and "Required Functionality" above
- The application meets the criteria listed in "Additional Requirements" above

### Required Maintainability
- The application meets the criteria listed in "Required Maintainability" above

### Required Legalities
- The application meets the criteria listed in "Required Legalities" above

### Required Visuals and Responsive/Adaptive Behavior
- The application meets the criteria listed in "Required Visuals" above
- The application meets the criteria listed in "Required Responsive/Adaptive Behavior" above

### Required Accessibility
- The application meets the criteria listed in "Required Accessibility" above

### Selection of Features
At least 5 of the following are included, meeting the more detailed requirements listed above.  Only features built using concepts covered in the course will count.
- Drop down navigation menu
- An Adaptive "hamburger menu"
- Accordions or Tabs
- Theme selection (switching between a light or a dark theme) that then applies to all "pages" in the SPA
- Cards or Panels that include an image and text grouped together visually
- A Carousel of images (where one image is shown at a time)
  - Reminder: I do NOT recommend carousels as a matter of UX, I include this option only because you may be asked to create such an abomination on the job
- A filtered or sortable "Gallery" that shows many items (images/cards/panels/rows/etc) on the page
- A "complex" form interaction 
  - Note: What defines a "complex" form interaction is covered at length above.  A simple form will not suffice 
- A Modal form that alters some data shown in the app
  - This has specific requirements detailed earlier
  - Reminder: Modals interrupt the user, so they should be used cautiously.  I include this option so you can demonstrate your understanding of properly creating and and managing a modal UI, not becuase this is a task a modal is well-suited for.

### Extra Credit

Extra credit points should be worked on only after fulfilling all the other requirements, because the other requirements are worth more points than the extra credit

There are two categories of Extra Credit. You do not need all the criteria under a category to get the maximum credit, but you may need more than one criteria.  Each category is taken as a whole and you are judged by the degree of skill and understanding of the concepts from the course that are demonstrated.  Skills not introduced in the course may not count.

Extra credit is based on these criteria:
- Are you demonstrating skills learned from class?
- Do these demonstrations show sufficiently complex understanding?
- Do these demonstrations benefit the User Experience (UX)?

#### Extra Credit: Additional Required Features
- You can earn extra credit by including more required features than the minimum
- The benefit of this credit depends on the degree of demonstrated skill and understanding rather than the number of features, though more features can't hurt

#### Extra Credit: UI/UX "complexity"
- You can earn extra credit by having more UI or UX "complexity" than required
  - An app involving additional effort that uses skills from class to improve UX beyond the base requirements
  - The "complexity" should be an improvement for the user, not presented complexity


