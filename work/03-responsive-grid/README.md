# Assignment: Responsive Grid

**Due: Mon Sep 30, 11:59pm PT**

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'responsive-grid' (`git checkout -b responsive-grid`)
* add the necessary files in this directory to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Using the skills from class, create an `index.html` file and a `styles.css` file that have the required features (see below).  Demonstrate the skills from class where appropriate.

The page will be viewable using `npx serve` as the webserver
- Run this command in the same directory as your HTML file

## General Requirements

- Semantic HTML
- Semantic CSS class names 
- CSS where the rules are organized by structure (selectors in roughly document order)
- CSS where the properties in the rules are organized by property category
  - Include a blank line between categories
  - Future assignments will allow you to use your preferred CSS organization, but this assignment ensures you understand the concept
- CSS must be written in a **mobile-first implementation** as described in class
- The page is responsive
- The page is adaptive, with a breakpoint at 50rem
  - Below that breakpoint, the cards will move from a horizontal layout to a vertical one
- The page will contain a semantic and visible header
- The page will contain a semantic main section
- The page will contain a semantic and visible footer
- All pictures are loaded using pictures from http://placehold.co/
    - This assignment has you use the urls for placeholder images, but future assignments (once we've discussed copyright) will have you download images and include them in your repo
- All pictures are reasonable sized visually for the purpose they represent
- Two reference "wireframe" images [desktop-view.png] and [mobile-view.png] are included to give the general layout of headings, text, images, and links.  Your page will have colors and details the wireframes lack.

## Header Requirements

The header will have the following features:
- A "logo" pic (placeholder)
- h1 text saying "Cats on the Internet"
- Semantically written navigation including 3 links
  - the links do not have to go to valid page

Visual requirements of the rendered header:
- the logo is presented to the left of the h1 text
- You may modify the size and appearance of the h1 element as long as it visually remains a heading
- the nav menu is horizontal links spanning the width of the header
  - At the adaptive breakpoint the menu converts to vertical list
- the nav links are not required to follow the 12 column grid, but that is permitted

## Main Requirements

The main section will consist of an h2 text and 3 cards
- The h2 text should be "Cats in the News"
- Each card will consist of 
  - a placeholder picture intended to be a cat picture
  - an h3 heading with text of your choice
  - a block of lorem ipsum-like text or text of your choice, at least one sentence long
  - A link to "read more"
    - Be aware that "read more" has accessibility problems, and we will revisit this topic

Visual requirements of the main section
- The h2 heading should span the page
- The cards should each have different text of different lengths so that the card texts have different visual height (at least one card must word wrap more than another card)
- You may modify the size and appearance of the h2 element as long as it visually remains a heading
- The cards are evenly distributed using a 12-column grid
  - At the adaptive breakpoint the cards will stack vertically with each card filling the width of the grid
- The links in the cards will look like buttons, including a call to action color
- The links should appear in the same line across all the cards (when the cards on aligned)
    - Even if the cards have different amount of text that causes the text to wrap a different number of lines

## Footer Requirements

The footer should have at least 3 links
- The footer links should link to page urls, but those pages do not need to exist (You can link to files that don't exist)
- The links should be in a smaller text size than the main page
- The footer links should follow the 12 column grid
  - it will need to be a DIFFERENT grid as defined by CSS, but the 12 columns should fall in the same places

## Accessibility Requirements
- The adaptive breakpoint has the footer links should as vertical for the more narrow view and horizontal for the wider view
    - This is done using a 12 column grid, so you are changing how many columns each entry will span
- All images should have quality alt text to describe the picture (make up a description of the picture you would to have if you didn't have a placeholder)
- All text should have a clear contrast with the background it is presented on (easily readable)
- All text should be sized by rem units
- The page should generally be legible and readable by the average user

## Additional Restrictions
- No CSS you didn't write
- No JS
- Do not use float for layout
    - This assignment should have NO use of float
* You MUST follow the required/best practices outlined in class

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
    - Are general requirements met? (outside of "Matching Visual Structure" below)
    - Were all restrictions obeyed?
    - Were all requirements met in ways that showed understanding of the class material?
- Matching Visual Structure
    - Does your page match the layout described in the requirements shown in of the reference images?
    - Is the content responsive as required?
    - Is the content adaptive as required?
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
    - Are all Accessibility requirements of the visual appearance met (contrast, etc)?
    - Is the CSS applied wisely per class guidelines? (Not creating a page that only works for certain fixed screen sizes, etc)?
    - Are the particular CSS organization requirements from this assignment followed?
        - grouped "paragraphs" of properties, a ordered flow of selectors matching general HTML order in the page?
    - Is the CSS written in a mobile-first implementation?


