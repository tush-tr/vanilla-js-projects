# Learn JavaScript easy way
After HTML and CSS we will go for JavaScript. Lets start development with JavaScript.
# Introduction to JavaScript
### What is Javascript?
<ul>
<li>JavaScript is a cient side scripting language.</li>
<li>It is used to make web pages alive.</li>
<li>It is used to programmatically perform actions within the page.</li>
<li>When JavaScript was created, it was initially called "LiveScript".</li>
<li>But java was a very popular language at that time, so it was decided that positioning language as a "younger brother" of java would help.</li>
</ul>

### What JavaScript can do?
<ul>
<li>JavaScript can execute not only in the browser, but also on the server.(Node js)</li>
<li>We will use JavaScript as a client as well as server side language.</li>
<li>JavaScript has envolved greatly as a language and is now used to perform wide variety of tasks.</li>
</ul>

### What can in-browser JavaScript do?
<ul>
<li>Safety--- JavaScript don't have low level permissions(executes through browser)</li>
<li>Add new HTML and change existing HTML from DOM(document object model)</li>
<li>React to events(actions that user performs)</li>
<li>Ajax Requests(send a request to the server)</li>
<li>Get and Set cookies(An HTTP cookie is a small piece of data stored on the user's computer by the web browser while browsing a website.)</li>
</ul>

### What can't in-browser JavaScript do?
<ul>
<li>Read/write to/from computer hard disk without permission.</li>
</ul>

### 1. <a href="tutorials/tut01.htm">Introduction to console.log</a>
### 2. <a href="tutorials/tut02.htm">Variables and operators in JavaScript</a>
### 3. <a href="tutorials/tut03.htm">Strings in JavaScript</a>
### 4. <a href="tutorials/tut04.htm">String functions in JavaScript</a>
### 5. <a href="tutorials/tut05.htm">Scope- let, const, If-else conditionals and Switch case in JavaScript</a>
### 6. <a href="tutorials/tut06.htm">Arrays and objects</a>
### 7. <a href="tutorials/functions/tut07.js">Functions in JavaScript</a>
### 8. <a href="tutorials/tut08.htm">Alert, prompt, confirm in JavaScript</a>
### <a href="tutorials/exer01.htm">Q. Ask the user age in your page and return on the console, he can drive or not.</a>
### 9. <a href="tutorials/tut09.htm">Loops</a>
### For loop in JavaScript
<pre>
for (let i = 0; i < array.length; i++) {
            const element = array[i];
            
        }
</pre>


## 10. <a href="tutorials/tut10.htm">DOM Maniplulation</a>
#### What is DOM?
The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

<img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg">
<br>

DOM HTML Tree<br><p>
With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
</p>

## 11. <a href="tutorials/tut11.htm">Events and listening to events</a>
### JavaScript Events
HTML events are "things" that happen to HTML elements.<br>
When JavaScript is used in HTML pages, JavaScript can "react" on these events.
#### HTML Events
An HTML event can be something the browser does, or something a user does.
<br>
Here are some examples of HTML events:
<ul>
<li>An HTML web page has finished loading</li>
<li>An HTML input field was changed</li>
<li>An HTML button was clicked</li>
</ul>
Often, when events happen, you may want to do something.
<br>
JavaScript lets you execute code when events are detected.
<br>
HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
<pre><code>element event='some JavaScript'</code></pre>

### <a href="tutorials/tut12.htm">SetInterval and set timeout</a>

### <a href="tutorials/tut13.htm">Date and Time</a>
### <a href="min_pro01.htm">Mini Project 1 -- Make a digital clock.</a>
### <a href="tutorials/tut14.htm">Arrow Functions</a>
### <a href="tutorials/tut15.htm">Math Object in JavaScript</a>
### <a href="tutorials/tut16.htm">Working with JSON</a>
### What is JSON?
<ul>
<li>JSON stands for JavaScript Object Notation</li>
<li>JSON is a lightweight format for storing and transporting data</li>
<li>JSON is often used when data is sent from a server to a web page</li>
<li>JSON is "self-describing" and easy to understand</li>
</ul>
<pre>
{
"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]
}</pre>
