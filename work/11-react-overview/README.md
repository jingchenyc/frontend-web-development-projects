# React Overview Assignment

(Not Really) **Due: Mon Nov 25, 11:59pm PT**

This assignment will be ungraded, but is a great chance to practice your skills and get feedback before the final project.

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'review' (`git checkout -b react-overview`)
* Create a React project in this directory using Vite
* Add/Delete/Modify the necessary files to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Demonstrate your understanding of:
- Using React Conditional Rendering for
    - Components
    - Class names
    - HTML(ish) content
- Breaking up content appropriately into Components 
- Using React State and passing setters/wrapped functions around setters
- Performing form validation in React

## Requirements

Create a react project using vite that:
- Is a Single Page Application
  - Any references to "page" or "navigation" below refers to changing state to show different content and not multiple HTML files or having the browser actually perform additional page loads.
- Contains the following:
  - Two "pages" (or so the user thinks)
    - A "Home" page
    - A "Profile" page
- The Home Page has content and layout of your choice, but must include:
  - A "Logo" image in the upper left
    - Clicking on the logo will navigate to the "Home page"
  - A "Profile pic" in the upper right (based on profile data, see below)
    - Clicking on the profile pic opens a dropdown revealing:
        - The username.  This is shown in a different font and is "fabulous" when the profile data says the user is certified "dog free", or is in normal text otherwise.  You define what "fabulous" looks like.
        - A "Profile Settings" link that will navigate to the Profile page.
- The Profile Page shows the profile data.  
    - Each datum should have identifying text (Example: "Username: Jorts") should not be shown as a form field, and should each be on a distinct line from each other.
        - The selected profile pic name (see below)
        - The username
        - The user's actual name
        - A checkbox "Verified Dog Free"
    - Each line of profile datum has a button with an appropriate icon image and the text "Edit"
        - If the "Edit" button for a line is clicked, the text for the field is replaced with a form field (username or actual name), checkbox (dog free), or select dropdown (selected profile pic, must be from a set of predefined pictures of your choice).  The Edit button is replaced with two buttons "Save" and "Cancel".  Add enough space between these so that it is difficult to click the wrong one by accident.
        - Editing any field will show an appropriate validation message.  A field will not "Save" while the field is invalid.
            - profile pic has no validation
            - username cannot be empty or contain only whitespace
            - username cannot be "dog" (validation message should be "You're kidding, right?")
            - user's actual name can be empty, but cannot be only whitespace
            - dog free has no validation
        - Saving any field (Each field is managed separately, they are not all part of the same form) while the value is valid will update the profile state appropriately.  Saving an empty "actual name" field will save the actual name to be equal to the username.
- The App will start with default values of your choice already present in the state (a selected profile pic, a username, etc), so any required fields will already have a valid value
- Deeplinking isn't required, but feel free to try it out.

## Adaptive/Responsive Requirements

- App should be a good UX from 360px wide to 1000px wide (when normal text size), including on mobile devices.  You choose what that requires.

## Accessibility Requirements
- Use Semantic HTML properly
  - In particular for this assignment: buttons
- Follow WCAG guidelines mentioned in class
- Use ARIA attributes when necessary to identify data or interactions
  - Not any ARIA you CAN do, the ones that are needed for your content, such as aria-expanded on the dropdown
- all form fields must have labels
- keyboard navigation and mouse navigation must both work

## Visual Requirements

- The profile pic is one of a limited number of images you select in advance.  (The user is just picking which of these to use, they are not uploading a new profile pic).  Remember to put images in 'public' and import them with an absolute path if you want their filenames unchanged or to put them in 'src' and import them with relative paths if you are okay with the filename being changed.
- Provide enough spacing to make your text legible and areas of the screen distinct


