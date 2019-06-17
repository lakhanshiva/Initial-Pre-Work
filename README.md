# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When you enter https://wwww.techtonic.com/ into browser and click enter, the browser tries to find the ip address corresponding to this domain name. It will query the DNS (Domain Name System) server for this information. The browser is the client and it needs to talk to the techtonic's server having this ip address. To exchange data packets between client and server, a TCP/IP connection (sometimes the type of connection varies) is established. The browser (client) sends a HTTP request to the web server. The server handles this request and sends back a response. The browser displays this HTML content (sometimes the content has JavaScript content as well).

## From start to finish, how does data reach you to be rendered in the browser?

First, a connection is established between client (browser) and server. Usually this involves receiving a 200 OK response from the server with which the browser is requesting a connection. This is mostly a TCP/IP connection over which data packets can be transferred. The server starts sending some data packets to the browser (website's content that is being requested by the browser).

## What code is rendered in the browser?

HTML (and JavaScript) content sent by server is received by the browser. DOM (Document object model) is formed from this HTML content. This is displayed in the web browser.

## What is the server-side code’s main function?

Server-side code's main function is to respond to HTTP requests sent by browsers by sending the appropriate content that is being requested. It processes user input, compiles pages, protects and guards the data and serves legal requests for data. Server side code is written in PHP, Python, ASP .Net. Sometimes it queries a database, provides authentication services, etc.

## What is the client-side code’s main function?

Client side code's main function is to send requests to the server. It displays the content received from the server and displays dynamic/static content. Client side's code is written in HTML, CSS, JavaScript. Client-side code responds to user's actions sometimes without querying the server.

## What is runtime?

All web browsers include a JavaScript runtime engine. It just executes the JavaScript code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance of client-side assets are created per browser request. This is stored in the form of a DOM (Document Object Model).

## How many instances of the server-side code are available at any given time?

One instance of server side code exists at any time on the server handling multiple requests.

## How many instances of the databases connected to the server application are created?

One login session to the database is one instance of it.
