# WEEK 1 : HTML 

# Exercise 1.1

1. When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.

   a. What is the main functionality of the browser?
   b. High Level Components of a browser.
   c. Rendering engine and its uses.
   d. Parsers (HTML, CSS , etc)
   e. Script processors
   f. Tree construction
   g. Order of script processing
   h. Layout and painting 

# Answer

When a user enters an URL in the browser, following ways to browser fetch the desired results are :-

i>. DNS lookup to find IP address
After hitting the URL, the first thing that needs to happen is to resolve IP address associated with the domain name. 
DNS helps in resolving this.
** DNS is like a phone book ** and ** helps us to provide the IP address ** that is associated with the domain name just like our phone book gives a mobile number which is associated with the person’s name.(https://www.freecodecamp.org/news/content/images/2019/06/dns.png)
This is the overview, but there are four layers through which this domain name query goes through. Let’s understand the steps:

1. After hitting the URL, the browser cache is checked. As browser maintains its DNS records for some amount of time for the websites you have visited earlier. Hence, firstly, DNS query runs here to find the IP address associated with the domain name.

2. The second place where DNS query runs in OS cache followed by router cache.

3. If in the above steps, a DNS query does not get resolved, then it takes the help of resolver server. Resolver server is nothing but your ISP (Internet service provider). The query is sent to ISP where DNS query runs in ISP cache.

4. If in 3rd steps as well, no results found, then request sends to top or root server of the DNS hierarchy. There it never happens that it says no results found, but actually it tells, from where this information you can get. If you are searching IP address of the top level domain (.com,.net,.Gov,. org). It tells the resolver server to search TLD server (Top level domain).

5. Now, resolver asks TLD server to give IP address of our domain name. TLD stores address information of domain name. It tells the resolver to ask it to Authoritative Name server.

6. The authoritative name server is responsible for knowing everything about the domain name. Finally, resolver (ISP) gets the IP address associated with the domain name and sends it back to the browser.

After getting an IP address, resolver stores it in its cache so that next time, if the same query comes then it does not have to go to all these steps again. It can now provide IP address from their cache.

This is all about the steps that is followed to resolve IP address that is associated with the domain name. Have a look below to better understand:
(https://www.freecodecamp.org/news/content/images/2019/06/dns_resolve.png)

ii>. TCP connection initiates with the server by Browser
Once the IP address of the computer (where your website information is there) is found, it initiates connection with it. To communicate over the network, internet protocol is followed. TCP/IP is most common protocol. A connection is built between two using a process called ‘TCP 3-way handshake’. Let’s understand the process in brief:

1. A client computer sends a SYN message means, whether second computer is open for new connection or not.

2. Then another computer, if open for new connection, it sends acknowledge message with SYN message as well.

3. After this, first computer receives its message and acknowledge by sending an ACK message.

To better  understand, look below diagram.(https://www.freecodecamp.org/news/content/images/2019/06/process.png)

iii>. Communication Starts (Request Response Process)
Finally, the connection is built between client and server. Now, they both can communicate with each other and share information. After successful connection, browser (client) sends a request to a server that I want this content. The server knows everything of what response it should send for every request. Hence, the server responds back. This response contains every information that you requested like web page, status-code, cache-control, etc. Now, the browser renders the content that has been requested.

Q.a What is the main functionality of the browser?

ans-The main function is to retrieve information from the World Wide Web and making it available for users. Visiting any website can be done using a web browser. When a URL is entered in a browser, the web server takes us to that website.

Q.b High level components of a browser.

ans- 
1. The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see  the requested page.
2. The browser engine: marshals actions between the UI and the rendering engine.
3. The rendering engine: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. Networking: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. UI backend: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6. JavaScript interpreter. Used to parse and execute JavaScript code.
7. Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
(https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650)

Q.c Rendering engine and its uses.
ans- The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.

By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CSS.
A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS). Examples of layout engines: Blink, Gecko, EdgeHTML, WebKit.

Q.d Parsers(HTML, CSS , etc)

ans- HTML Parser-The HTML parser is a structured markup processing tool. It defines a class called HTMLParser, ​which is used to parse HTML files. It comes in handy for web crawling​.
     CSS Parser- The CSS Parser is implemented as a package of Java classes, that inputs Cascading Style Sheets source text and outputs a Document Object Model Level 2 Style tree.
Q.e Tree construction

ans-While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

Q.f Order of script processing

ans-"Script processing” is the performance of the behaviors or events contained in the knowledge structure. Many facets of organizational behavior can be effectively described, analyzed, and understood by using the script concept and processing notion.

Q.g Layout and painting

ans-the layout of each visible element and serves as an input to the paint process that renders the pixels to screen.
     When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

   In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.




