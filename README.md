# a new Dom renderer

This framework aims to minimize the retrieval and rendering times by solely relying on javascript to render the Dom.
Html is only used to establish a minimal page.
JS is also used to style the elements.

## V3
base files: indexNV3.html azulstartV3.js and azulLibNV3.js

tested using addElement to add button. addButton will be redundant

## V4
base files: indexNV4.html azulstartV4.js and azulLibNV4.js

objective is to use fetch to retrieve js files after rendering the page

 1. addListeners after rendering the www page
 2. test extending objects with methods
 3. test minimizing js code

first results:
 - able to add another event listener
 - not able to remove old listener prob cause: anonymous fumction

next: 
 - create event func outside anon func
 - perhaps make init a named func instead of an anon func.

## V5

azulstartV5: change windows.onload to a named function.
made class into an object

## V6

remove addButton added eventlist to element object.
Now button can be created with addElement.

## V7

tested ability to add a grid

todo add event functions to move cursor

## V8

tested ability to add table azulTable

todo: add event functions async to move cursor

## V9

added azulJson to read json file

## V10 

changed addIcon:
 - addeventlist
 - parent optional

testing azulpdf viewer

