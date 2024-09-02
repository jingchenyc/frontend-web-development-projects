# Assignment - Testing node and git

**Due: Mon Sep 16, 11:59pm PT** 

EXCEPTION: If you joined the class after the first week, you will need to complete this assignment but the due date is Mon Sep 23, 11:59pm PT, same as the second assignment.  I highly encourage you complete this assignment as soon as possible, and as a courtesy to the TA, mention in the PR description that you joined the class late.

## Goal

This assignment confirms:
- You have NodeJS installed on your machine
- You can run code I provide using NodeJS
- You have git installed on your machine
- Your repo is properly connected to your class repo on GitHub
- You understand how to submit assignments using git and GitHub
- You understand the basics of creating an HTML Page

## Instructions

NOTE: This assumes you have followed all of the instructions from the "setup-for-this-class" document at the base of this repo.  Do that first.

Future submissions will assume you can follow this process, adapted to the material for that assignment.

**From this directory**, at the command line:

1. Run `npm install`
  * Did you run this **in the correct directory?** (If you don't know what that means, ask!)
  * In response to running this command you should see some text while it downloads a library or two
  * If you see a permission error (EACCES) you probably installed something as root/administrator, and now your normal user account can't override it. That's a bit messy to clean up, but it's doable and you want to clean that up NOW rather than later in the semester.
      * Lots of ways of addressing this exist, with varying levels of success and computer security.  Speak up on Slack if this is an issue for you.
  * You only need to run this successfully once for each assignment/project that has this step.  Once the dependencies are installed, you can run the program (see below) as much as needed without reinstalling.  Reinstalling is only necessary if the dependencies are changed.
2. Run `node parse.js`  
  - You should see an error about "people.html" not existing
  - If you see something else, confirm that you are running this command "in" the folder the `package.json` file is in.
3. You are going to make changes, so you should first create a "feature branch" to create those changes in
  * run `git checkout -b setup-test`
  * This branch name, "setup-test", is specific to this assignment.  Each assignment will be done in its own branch with a unique name.
4. Create a file in this directory, "people.html".  
  * Edit this file to be valid HTML (including doctype and other required parts from class) with a title element that says "About Me"
  * The unordered list should have the class of `person`
  * You should should have 5 li elements inside your unordered list element
  * Each li element should have text inside it: "Name", "NEUID", "Email", "Slack Display Name", and "Github Username"
  * Inside each li, after the text for humans, you should have a single span element
    * The span element should have a class attribute with one of these exact values that corresponds to the data inside it ("name", "neuid", "email", "slackhandle", and "github")
      - Notice how each of these class names have no spaces, and are in lowercase
    * The span elements should contain the text for that value (example: Your name is inside the span with class "name")
    * Note the Slack Display Name should start with "@".  These values, particularly the github username, are case sensitive!
      - You can confirm your Slack Display Name  by typing "@" in slack and starting to type your Slack Display Name - it should offer to autocomplete your complete display name.
  * Make sure your data is accurate for you!
  * Don't forget to open and close your tags appropriately
  * Don't forget to use double quotes around the values of your attributes
  * Don't forget to include necessary elements (example: html and body, and an unordered list requires list item (li) elements), as well as a doctype
  * To search/google for info, Use `MDN (element)` to search, for example `MDN unordered list` 
  * Example: my span element for "name" would look like `<span class="name">Brett Ritter</span>`
5. If open the people.html file in Chrome, it should resemble the output in chrome-sample.png
6. Run `node parse.js` again now that you've saved your changes
  * You should see your information output
  * It should resemble command-sample.png, except with your information
  * Everything should run smoothly
  * Fix any errors that do turn up and repeat this step until everything runs smoothly
7. Add the file to the list of files to commit: `git add people.html`
8. Run `git status` to make sure nothing is listed as an 'Untracked file' and only `people.html` is listed to be added.
  * I have never heard *anyone* say "I run git status too much".  It is much easier to clean up a commit BEFORE you make it, so always run git status before doing a commit.  Always pay attention to the output of git status.  Multiple students forget this step each semester.
  * If you have git troubles, I recommend consulting the list of common solutions at https://ohshitgit.com
9. Commit the file: `git commit -m "Adds MYNAME"` (Example: `git commit -m"Adds Lex"`)
  * This commit message reflects your changes.  If you make other changes and have to commit those, and when you commit other assignments, the commit messages should reflect THOSE changes, they should NOT say "Adds MYNAME".
  * Repeat: This commit message should have your ACTUAL name and not the literal text of "MYNAME"
  * Repeat: Future assignments should not have commit messages that say "Adds MYNAME" (literal text or actual name), that is specific to this assignment
10. Send your changes to github: `git push origin setup-test` 
11. Go to the github page for this repository and create a Pull Request(PR), with 'main' on the left dropdown and your setup-test branch on the right dropdown.
  * Do not merge, you must create a Pull Request.  Your repositories should be set so that you cannot merge to main without a Pull Request, but they are created without that requirement so there is a period of time where you can merge, but you shouldn't do it.  Learn how to create the PR, because that's how all assignments for the class will be turned in, and if you do it wrong, your grade could suffer.
  * Add myself and the TA to review the PR.  If you don't do this, we may not know your work is ready and you won't get credit for it.
12. If the changes look correct, Create the Pull Request.
  * If you edited and added a `.gitignore` file, that change should be listed as well as your changes to people.html
  * There should NOT be changes to other files.
  * Be sure to **add me (and any TAs) as reviewer** on the PR.
    - "Reviewer", not "Assign To"
13. Remember to return to the main branch at the command line!  `git checkout main`.  In this branch, your changes do not exist (not until they are approved, merged in, and you pull the updated main branch)

## Grading Rubric

Note: The assignment is to show your understanding of the material from class.  If you don't do that, you can lose points, even it "it works".  Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).

| **Criteria**            | **Excellent (3)**                                                      | **Good (2)**                                              | **Needs Improvement (1)**                                  |
|-------------------------|------------------------------------------------------------------------|-----------------------------------------------------------|------------------------------------------------------------|
| **Semantic HTML**       | Correct use of semantic elements throughout the document               | Mostly correct use with minor mistakes                    | Incorrect or missing semantic elements                      |
| **Valid HTML**          | No validation errors (all required elements, lang, charset)                                  | Few minor validation errors                               | Multiple validation errors            |
| **Submission**          | Submitted to Github as PR, contains only changes related to this assignment, has a good descriptive commit message | PR contains smaller unrelated changes and/or commit message is vague or unhelpful | PR contains significant unrelated changes or commit message is misleading or wrong |
| **HTML Quality**| Well-organized and indented, readable, includes required declarations and meta tags | Minor formatting issues, mostly well-organized            | Poorly organized, missing required declarations or meta tags |
|                         | No use of `<p>` or `<br>` elements just to create space         | Some use of `<p>` or `<br>` elements to create space      | Significant use of `<p>` or `<br>` elements to create space |
|                         | All elements closed, no overlapping elements                    | Mostly all elements closed, few overlapping elements      | Multiple unclosed elements, significant overlapping elements|
| **General Requirements**| Only `<li>` elements as children of `<ul>`, requested structure | Mostly `<li>` elements as children of `<ul>`, minor structure issues| Incorrect children of `<ul>`, major structure issues             |
|                         | All required classes, parse.js shows correct output             |  Most required classes on the correct elements |  Most required classes missing or on the wrong element.

## After Submission

Then you're done!  Your Pull Request (PR) is listed on github.  Canvas will NOT automatically update to show your submission.  Grading is a manual process so give it a few days.

After grading, a TA/myself will merge your PR into main. This is where our work is different than a "real" job: For most employers you are usually responsible for merging your code after it is approved, but for this class the TA/instructor will merge it after approval.

## The Pull Request

The PR may have suggestions, make sure to read those comments to learn how to correct mistakes in future assignments.  In most job situations the comments on your PR are coming from coworkers asking questions or making suggestions and you will look at them before merging or making changes.  

If a PR for this course has serious issues, you may be requested to make changes to the PR.  This is only for requests that have serious problems, in most cases you will simply be given suggestions for future work.  (On the job, having small changes requested may be common, as the team ensures the code is something they are happy to maintain in the future.)

Making a change to PR does NOT require you close the PR.  Just switch back to the branch (not just the folder, the branch) in git, make the requested changes to the files, and again add, commit, and push the changed files to the github repo.  Your existing PR will update to include the newest changes.  You should let the TA/myself (whoever requested the changes) that the PR has been updated.

Working with git can be a lot to learn all at once, but it is a common aspect of many programming-related jobs, and ensures that everyone can make tracked changes to a shared, approved common code base without accidentally overwriting each others work or putting in incompatible changes.