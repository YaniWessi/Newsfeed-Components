/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(menuItems){

  const menu = document.createElement('div');
  const ul   = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  const li6 = document.createElement('li');
  
  
  menu.appendchild(ul);
  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
  ul.append(li4);
  ul.append(li5);
  ul.append(li6);

  li1.textContent = menuItems[0];
  li2.textContent = menuItems[1];
  li3.textContent = menuItems[2];
  li4.textContent = menuItems[3];
  li5.textContent = menuItems[4];
  li6.textContent = menuItems[5];

  div.classList.add('menu')
 menuItems.forEach(function(iteration){
   iteration = document.createElement('li')

   ul.append(iteration)
 })

}