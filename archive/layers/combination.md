<script src="js/formatter/formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style/style.css">
<link rel="stylesheet" href="style/interactiveProtocolsStyle.css">
<link rel="stylesheet" href="style/interactiveFunctionsStyle.css">
<link rel="stylesheet" href="style/cipherSuiteStyle.css">
<link rel="stylesheet" href="style/loaderStyle.css">
<link rel="stylesheet" href="style/binDecAsciiStyle.css">
<script src="js/protocols/protocols.js"></script>
<script src="js/layerFunctions/layerFunctions.js"></script>
<script src="js/cipherSuite/cipherSuites.js"></script>
<!--  -->
<div id="page-loader" class="absolute flex flex--center center flex--column" >

  <div class="earth flex flex--center"><div style="color:white; z-index:1001;">Loading</div></div>
</div>
<section>
# L7 Application Layer

<!-- <div id="TOC">
<h3 style="font-weight:bold;">TABLE OF CONTENT :</h3>
</div> -->

## MAIN TERMS

- <b>Port number</b>:port is a way to uniquely identify a process on a system.
- <b>Application software</b>: (app) is a program or group of programs designed for end users.
- <b>Application-entities</b>: protocols used by an application

---
## introduction to application layer


The application layer is the closest layer of the OSI model to the end user. It does not refer to the actual applications software, but rather the protocols needed for network applications such as chrome, skype and outlook to communicate over a network. The most important distinction in the application layer is the distinction between the application-entity and the application. For example, an online banking system may have two application-entities: one using HTTPS to communicate with its users, and one for a remote database protocol to record transactions. Neither of these protocols have anything to do with calculating your bank balance. That logic is in the application itself.

Every application is given a random <em>port number</em> by L4 transport layer to identify the source application in order for data to reach it's intended application. The destination device on the other hand is identified by well known known port numbers reserved for specific protocol such as port 443 for https and port 23 for ftp. Port numbers will be discussed in more detail in the tansport layer.

<img src="../images/netstat.png">


<!-- <embed src="https://www.youtube.com/embed/Ni6K99-SXdw"></embed> -->
<embed src="https://www.youtube.com/embed/-wzL3jcky-g">

---

## APPLICATION LAYER FUNCTIONS
<div id="l7-functions" class="interactive-functions grid"></div>
<table style="display:none">
    <caption><b>Application Layer protocol Defines:</b></caption>
  <th>Purpose</th>
  <th>Description</th>
  <tr>
    <td>Message Type</td>
    <td> e.g. whether the message a request or a response.
    </td>
  </tr>
  <tr>
    <td>Message Syntax</td>
    <td> what are the fields the subcomponents delinneate</td>
  </tr>
  <tr>
    <td>Message Semantics</td>
    <td>the meaning of the information of the structure(semantics) e.g. image, text or audio</td>
  </tr>
  <tr>
    <td>Message Rules</td>
    <td> the rules associated with sending messages. i.e. When and how to respond</td>
  </tr>
</table>


---

## PROTOCOLS

The type of network architecture used ( client-server or peer-to-peer) determines what type of protocol can be used. Network architecture will be discussed in more detail in the physical layer. See the table below for some common protocols and their purpose:

<div id="l7-protocols" class="interactive-protocols flex flex--column"></div>


<table style="display:none">
  <thead>
    <tr>
      <th>Protocol</th>
      <th>Port Number</th>
      <th>Meaning</th>
      <th>Purpose</th>
      <th>Application</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTTP/S</td>
      <td>80/443</td>
      <td>Hypertext Transfer Protocol Secure</td>
      <td>It governs the rules for transferring Hypertext (web pages written in HTML) over a computer network. The S in HTTPS stands for Secure and uses L4 transport layer's SSL/TLS to encrypt data before it is sent. The protocol is therefore also referred to as HTTP over SSL/TLS.</td>
      <td>Web browser</td>
    </tr>
    <tr>
      <td>FTP/S</td>
      <td>21/23</td>
      <td>File Transfer Protocol Secure</td>
      <td> A standard network protocol used for the transfer of files between a client and server on a network. FTP is built on a client-server model architecture using separate control and data connections between the client and the server.[1] FTP users may authenticate themselves with a clear-text sign-in protocol, normally in the form of a user name and password, but can connect anonymously if the server is configured to allow it. FTP is often encrypted with SSL/TLS to protect the user name and password (FTPS) or replaced with SSH File Transfer Protocol (SFTP).</td>
      <td>Bit torrent</td>
    </tr>
    <tr>
      <td>SMTP</td>
      <td>25</td>
      <td>Simple Mail Transfer Protocol</td>
      <td>The Simple Mail Transfer Protocol (SMTP) is a communication protocol for electronic mail transmission. Mail servers and other message transfer agents use SMTP to send and receive mail messages.</td>
      <td>Outlook</td>
    </tr>
    <tr>
      <td>POP3</td>
      <td>110</td>
      <td>Post Office Protocol</td>
      <td>Used by e-mail clients to retrieve e-mail from a mail server. The Post Office Protocol provides access via an Internet Protocol (IP) network for a user client application to a mailbox (maildrop) maintained on a mail server. The protocol supports download and delete operations for messages. POP3 clients connect, retrieve all messages, store them on the client computer, and finally delete them from the server</td>
      <td>Outlook</td>
    </tr>
    <tr>
      <td>DNS</td>
      <td>53</td>
      <td>Domain Name Server</td>
      <td>The Domain Name Server (DNS) is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Its main responsibility is to translate more readily memorized domain names to the numerical IP addresses needed for locating and identifying computer services and devices with the underlying network protocols much like a phone book which resolves names to their phone numbers. e.g. google.com = 172.217.169.46 . Without DNS, one would have to enter ip addresses manually. DNS provides a worldwide, distributed directory service and has been an essential component of the functionality of the Internet since 1985. </td>
      <td>Browser</td>
    </tr>
    <tr>
      <td>DHCP</td>
      <td>67/68</td>
      <td>Dynamic Host Configuration Protocol</td>
      <td>A DHCP server enables computers to request IP addresses and networking parameters automatically from the Internet service provider (ISP), and dynamically assigns  IP address' and other network configuration parameters to each device on the network, so they can communicate with other IP networks. This reduces the need for a network administrator or a user to manually assign IP addresses to all network devices.</td>
      <td>Router</td>
    </tr>
    <tr>
      <td>VoIP</td>
      <td>Varies</td>
      <td>Voice over Internet Protocol</td>
      <td>Used to make calls over the internet</td>
      <td>Skype</td>
    </tr>

  </tbody>
</table>


---



## Quick Exercise:

1. Visit a website from your browser, then highlight the navigation bar(Ctrl+L). The website will either be prefixed with http or https which stands for hypertext transfer protocol, the s in the latter stands for secure.
1. Open the command line in administrator mode and, Type "netstat -bon" to see which applications are accessing the internet and their associated port. You'll notice that the source (local address) numbers is random while the destination (foreign address) will use common port numbers such as 443 (https).
1. Open Resource monitor to view network traffic.
1. You can use DNS from the command line with nslookup key word. e.g. "nslookup google.com". You can access the website if you paste the IP address into the navbar of your browser.
</section>
<!--  -->
<section>
<!-- <link href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css" />
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 -->
<!--  -->
# L6 PRESENTATION LAYER

## KEY TERMS

- <b>Encryption</b>: The process of converting information or data into a code, especially to prevent unauthorized access.
- <b>Compression</b>:  The process of modifying, encoding or converting the bits structure of data in such a way that it consumes less space on disk.
- <b>Character Encoding</b>: Used to represent a repertoire of characters by some kind of encoding system, the most common being ASCII
- <b>Data/Mime Type</b>: Mime/Data type or simply type is an attribute of data which tells the compiler or interpreter how the programmer intends to use the data. e.g. MP3 for audio, html for webpages etc. Protocols in the application layer are basically mime types.

---

## introduction to L6 Presentation layer

The presentation layer is responsible for formatting and delivering data to the application layer for further processing or display. In many widely used applications and protocols, no distinction is made between the presentation and application layers. For example, HyperText Transfer Protocol (HTTP), generally regarded as an application-layer protocol, has presentation-layer aspects such as the ability to identify character encoding for proper conversion, which is then done in the application layer.

<!-- https://www.youtube.com/watch?v=AtITX-U2mL4 -->
<!-- <embed src="https://www.youtube.com/embed/RGVrn4Z02qY"> -->
<embed src="https://www.youtube.com/embed/AtITX-U2mL4">

---

## PRESENTATION LAYER FUNCTIONS
<div id="l6-functions" class="interactive-functions grid"></div>
<table style="display:none">
  <tr>
    <th>Purpose</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Convertion</td>
    <td>It converts data recieved as bits (0s and 1s)  from the lower layers and converts it into its associated file format. For example, textual data may be converted to ASCII, images to png and audio to mp3.  It also converting media into binary so that it can be converted into electrical signals over the physical layer (Layer 1).
    </td>
  </tr>
  <tr>
    <td>Translation</td>
    <td>Different machines may use different encoding schemes, so the applicaiton layer may need to translate data into a format that the Application Layer can consume.
    <ul>
      <li>UTF8 -> ASCII </li>
      <li>ASCII -> EBCDIC).</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td>Encryption/Decrypt</td>
    <td>
    Layer 6 is able to encrypt messages to be sent, and decode encrypted messages it recieves for data privacy.This is usually through L4 Transport (SSL/TLS protocol)
    </td>
  </tr>
  <tr>
    <td>Compression/Decompression</td>
    <td>This layer uses <a hre="">compression algorithms</a> to reduce the size of data recieved from L7 Application Layer to be sent over the network. This is especially important when sending large files such as video and large applications as it reduces the overheads needed to transfer data. It also decompresses data recieved from the sender.

    compression may be further subdivided as:

<ul>
  <li>
    <a href="">lossy (data integrity isn't guaranteed)</a>
  </li>
  <li>
    <a href="">lossless lossless (data integrity is guaranteed).</a>
  </li>
</ul>

</td>
  </tr>
</table>

---

<br>
<br>

## Presentation Layer Protocols

<div id="l6-protocols" class="interactive-protocols flex flex--column"></div>

<table style="display:none">
  <thead>
    <tr>
      <th>Protocol</th>
      <th>Meaning</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ASCII</td>
      <td>American Standard Code for Information Interchange</td>
      <td>ASCII sands for American Standard Code for Information Interchange. It uses 7 bits to represent a character incluing numbers, letters and symbols such as &?#..., and control characters such as return, tab, esc, etc. The first bit is a parity bit, used for error detection. With 7 bits there is a total of 2^7=128 distinct combinations of 1s and 0s to form a char <br><br>ASCII extended is the adition of an 8th bit which double the amount of possible combinations, which is 256. This allows the addition of extra characters such as "é". it is still limited, hence the introduction of UTF-8</td>
    </tr>
    <tr>
      <td>UTF-8</td>
      <td></td>
      <td>utf-8 extends ascii and allowes the use of non latin characters such as Chinese and Russian to be used. whereas ascii is just 7bits, utf-8 is can be up to 6bytes. the first few numbers denotes how many bytes the character consists of followd by a 0 which marks the end of the header. it is then followed by the code for the character, the second byte always begins with 10, followed by the rest of the charcode. <br><br>The first four nums in the first one indicate how many bytes are to follow the first nums of each subsequent octet begins with 10=continuation byte chinese uses 3Bytes utf-8 encoding 2Bytes in utf-16</td>
    </tr>
    <tr>
      <td>HTML</td>
      <td>Hypertext Markup Language</td>
      <td>It is the default markup language for structuring and displaying web pages in a web browser. HTML is usually accompanied by other web languages such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</td>
    </tr>
    <tr>
      <td>JPEG</td>
      <td>Joint Photographic Experts Group</td>
      <td>Is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. </td>
    </tr>
    <tr>
      <td>MP3</td>
      <td>MPEG Audio Layer-3</td>
      <td>It is a coding format for digital audio that uses lossy audio-data compression </td>
    </tr>
    <tr>
      <td>XML</td>
      <td>Extensible Markup Language (XML) </td>
      <td>It is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. It has a similar syntax to HTML. Although the design of XML focuses on documents, the language is widely used for the representation of arbitrary data structures[7] such as those used in web services.</td>
    </tr>


  </tbody>
</table>

---


## ASCII CONVERTER

You may wish to use the app below to converter ASCII to their binary, decimal and hexadecimal equivalents and vice versa.

<div class="container">

    <div class="numbers-wrapper">
    <div  class="ascii__item item--concept">
      <div class="item__name">ASCII:</div>
      <div class="item__input-wrapper"><input id="ascii" placeholder="Single character" type="text"></div>
    </div>
      <div  class="ascii__item item--concept">
        <div class="item__name">Dec:</div>
        <div class="item__input-wrapper"><input id="dec" placeholder="255" type="text">   </div>
      </div>

      <div  class="ascii__item item--concept">
        <div class="item__name">Bin:</div>
        <div class="item__input-wrapper"><input id="bin" placeholder="1001" type="text"></div>
      </div>

      <div  class="ascii__item item--concept">
        <div class="item__name">Oct:</div>
        <div class="item__input-wrapper"><input id="oct" placeholder="1234567" type="text"></div>
      </div>

      <div  class="ascii__item item--concept">
        <div class="item__name">Hex: </div>
        <div class="item__input-wrapper" ><input  id="hex" placeholder="123DEF" type="text"></div>
      </div>
      <div  class="ascii__item item--concept">
        <div class="item__name">Col:</div>
        <div id="col" class="col"></div>
      </div>

    </div>
  </div>

<!-- <embed src="../binDecHexAscii/index.html"> </embed> -->

---

## Excercise:

- Do the following to gain a better understanding of encryption:
    - Open your browser Devtools (Ctrl+Shift+J) and select the console
    - type the following in the console:
```js
    message="hello"
    encryptedMsg=btoa(message)
    decrypted=atob(encryptedMsg)
```
</section>
<!--  -->
<section>
# L5 SESSION LAYER

## KEY TERMS

- <b>Session</b> : The time between when the communication is opened and closed
- <b>Authentication</b>: Authentication refers to unique identifying information from each system user, generally in the form of a username and password.
- <b>Authorisation</b>: refers to the process of adding or denying individual user access to a computer network and its resources. Users may be given different authorization levels that limit their access to the network and associated resources.

---

<span style="display:none">
This is the layer responsible for opening and closing communication between the two devices. The time between when the communication is opened and closed is known as the session. The session layer ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.
The session layer also synchronizes data transfer with checkpoints. For example, if a 100 megabyte file is being transferred, the session layer could set a checkpoint every 5 megabytes. In the case of a disconnect or a crash after 52 megabytes have been transferred, the session could be resumed from the last checkpoint, meaning only 50 more megabytes of data need to be transferred. Without the checkpoints, the entire transfer would have to begin again from scratch.
Usually, the main tasks of L5 is authentication and authorisation, downloads files as data packets, session management.
</span>

## introduction to session layer

Session layer is important for host-to-host communication between processes running on different stations over a network. The session layer ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources. It supports multiple types of connections and authentication and also provides for full-duplex, half-duplex, or simplex operation. It establishes procedures for check pointing, suspending, restarting, and terminating a session, and reconnection if an error should occur. <span style="display:none">gracefully closing a session.</span>


<!-- <embed src="https://www.youtube.com/embed/fWM-a3onIOk"> -->
<embed src="https://www.youtube.com/embed/aPcku3orRmI">
<!-- https://www.youtube.com/watch?v=aPcku3orRmI -->
---

# SESSION LAYER FUNCTIONS
<div id="l5-functions" class="interactive-functions grid"></div>

<table style="display:none">
<thead>
    <tr>
        <th>Purpose</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><b>Establishing, maintaining and terminating connections</b></td>
    <td>Ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.</td></tr>
<tr>
    <td><b>Data transfer synchronisation </b></td>
    <td>It does this by creating checkpoints so that data transfer can resume in case the connection is terminated unexpectedly. without the checkpoints the whole process must start again.</td>
</tr>
<tr>
    <td><b>Authentication and Authorisation</b></td>
    <td>It checks user credentials such as username and password usually with Secure Shell (SSH)</td></tr></tbody>
</table>


<!-- <embed src="../images/Authentication.svg"></embed> -->

<svg width="90%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="765px" height="201px" viewBox="-0.5 -0.5 765 201" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2020-10-31T16:57:10.157Z&quot; agent=&quot;5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36 Edg/86.0.622.51&quot; etag=&quot;UFyCmRZ-IDdZ4QqlmzA3&quot; version=&quot;13.4.2&quot; type=&quot;device&quot;&gt;&lt;diagram name=&quot;Page-1&quot; id=&quot;822b0af5-4adb-64df-f703-e8dfc1f81529&quot;&gt;5VnbcpswEP0aP8YjEGDyWDvpZXqZdjKdzvQlI4MMaoClQtR2v74rEDZEtps2ceM0fjFerVbSOWeXBY/oLF+9kqxM30PMs5FL4tWIXoxc/IQ+fmnLurU4vkdbSyJFbGxbw5X4yY2RGGstYl4NHBVApkQ5NEZQFDxSAxuTEpZDtwVkw1VLlnDLcBWxzLZ+EbFKjdUhZDvwmoskNUuHvhmYs+gmkVAXZr2RSxfNpx3OWRfL+Fcpi2HZM9HLEZ1JANVe5asZzzS4HWztvJd7Rjf7lrxQd5lA409fnfff4+ufooyWbz99eD39duabMD9YVvPuHM1u1bpDSB+yNG5cKr7axQubd+7E3pizOS7qiEPOlVyjiwl05jhBO8do6MybhOOJEdZyS8rED1tb2uPD6fkyo4Vks8YWD7wwkPwBPJRY8HzhczRccYlYWFBpfARq6x2b8+wjVEIJKHBoDkpBPqJTVpWtiBdixXHlaapy3NGFg5fd5BeZSPQkBSVaKyXhhs8gA4m2AgquwxiXCCHGbdAp1CoTBbp1SUL01JSVemP5KtHJO46EkmI1XvL5ddXun0738trn74B09rJK/SGp4W5Kg7Fvc3pOjsWnZ1HGYywH5qdBt0lqzU6DIkiVQgIFsgqakYarb1yptSlmrFYwZLJdREf+G0hxe1DLiB86R1cpmUz4oYiU7CZJ8owp8WO4v4eH264uEeRlrZ5q6mSsxNDX7lES52CibGpkP0/CTfY8PHW+Rd0FwyrPKv7Ey19sjvEPamAwCe9QA0PyLytg8J9UQHLXCug/agU8t9Loc6Uzh1xq6VYj3S4FGR5gugBERvdTrdTR/L3WveG0aSxdQsK+KUj0t45VsJz3wuA220itB8P29H5rlKyqliDjPQtYcsIkUkMx7Mzhhciy36X17ZKQizjWy0yXqVD8qmSNRJaY3ZZmj5bT7rCtcXam9Llrp3RwrJT2XEtjs0zwhumKF7EW2YdWJK0atowSFkmotEPBFZpunhubTjik0z8BOqlFZ3e7JXWFj8puwHINUTGvygabPqFYiO+X7i9qlSKkSJQ6UFZMEXsTa1e1fm6yoR7pOq8TqgPefuHcVxEgRSO9vbeZKOJNHVmAXo71RBQ/Y514XR9nVBKcgEoCSyWORQvGEWW1D7weW1ZDf7xKfZf7rrujlXaPhuTEQnLH64XTQ9I7v3XPo2P3saEMLSjpU4CSdo9Tjwac/Xxhv8A9QeBu910ePWI648/ta/ZmrPdnBr38BQ==&lt;/diagram&gt;&lt;/mxfile&gt;" style="background-color: rgb(255, 255, 255);"><defs/><g><path d="M 356 164.87 L 356 97.76 L 391.53 89 L 421.31 98.01 L 421.31 165.87 L 386.28 174.14 Z" fill="#abb4c5" stroke="none" pointer-events="all"/><path d="M 356 97.76 L 391.53 89 L 421.31 98.01 L 386.28 106.53 Z" fill="#b8bfd1" stroke="none" pointer-events="all"/><path d="M 386.28 106.53 L 421.31 98.01 L 421.31 165.87 L 386.28 174.14 Z" fill="#5b6369" stroke="none" pointer-events="all"/><path d="M 386.63 143.44 C 380.11 140.92 373.87 137.74 368.01 133.92 C 365.2 131.97 362.81 129.47 361 126.56 C 359.76 124.29 359.12 121.74 359.15 119.15 C 359.05 116.36 359.1 113.57 359.3 110.79 C 359.45 108.3 359.71 105.83 360.1 103.37 C 360.47 102.02 361.03 100.72 361.76 99.52 C 363.28 98.49 365 97.65 366.86 97.01 C 370.03 95.93 373.26 95.01 376.52 94.26 C 379.92 93.35 383.38 92.68 386.88 92.26 C 389.25 91.96 391.65 91.87 394.04 92 C 397.93 92.28 401.75 93.13 405.4 94.51 L 417.26 98.87 C 418.3 100.6 418.98 102.52 419.26 104.53 C 419.59 107.22 419.78 109.93 419.81 112.64 C 420 118.62 419.84 124.61 419.31 130.57 C 419.24 133.2 418.35 135.74 416.76 137.83 C 414.44 140.39 411.31 142.07 407.9 142.59 C 405.17 143.01 402.41 143.22 399.64 143.19 Z" fill-opacity="0.4" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="356" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><path d="M 359.5 108.03 L 359.5 106.28 L 382.28 113.29 L 382.28 115.04 Z M 363.26 161.12 L 363.26 159.36 L 377.27 163.37 L 377.27 165.12 Z" fill="#52595e" stroke="none" pointer-events="all"/><path d="M 356 164.87 L 356 97.76 L 391.53 89 L 421.31 98.01 L 421.31 165.87 L 386.28 174.14 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="356" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><ellipse cx="413.01" cy="160.17" rx="18.818449460255152" ry="18.830337766401424" fill="#008cce" stroke="none" pointer-events="all"/><path d="M 400.16 146.68 C 400.35 147.2 400.61 147.7 400.92 148.15 C 401.44 148.2 401.95 148.36 402.4 148.62 C 402.27 149.15 402.5 149.7 402.96 149.99 C 403.31 150.19 403.55 150.55 403.6 150.95 C 403.61 151.15 403.71 151.34 403.86 151.47 C 404.02 151.6 404.22 151.66 404.42 151.65 C 404.65 151.61 404.89 151.6 405.12 151.6 C 405.63 151.53 406.15 151.64 406.58 151.9 L 408.17 153.05 C 408.42 153.22 408.61 153.49 408.68 153.78 C 408.77 154.07 408.77 154.39 408.68 154.68 C 408.55 154.71 408.42 154.7 408.3 154.64 C 408.21 154.39 408.03 154.18 407.79 154.06 C 407.49 153.94 407.14 153.94 406.84 154.06 C 406.43 154.29 405.96 154.37 405.5 154.3 C 405.12 154.31 404.77 154.5 404.54 154.8 C 404.37 155.06 404.09 155.22 403.78 155.24 C 403.47 155.27 403.17 155.15 402.96 154.93 C 402.77 154.68 402.47 154.54 402.15 154.57 C 401.84 154.6 401.57 154.8 401.43 155.08 C 401.27 155.45 401.17 155.83 401.13 156.23 C 401.14 156.74 401.04 157.25 400.85 157.73 C 400.74 157.97 400.57 158.18 400.34 158.32 C 399.97 158.42 399.73 158.77 399.78 159.15 C 400.08 159.51 400.31 159.91 400.47 160.35 C 400.61 160.62 400.5 160.94 400.21 161.11 C 399.93 161.35 399.79 161.72 399.86 162.08 C 399.42 162.09 398.98 162.02 398.56 161.88 C 398.4 161.67 398.18 161.52 397.93 161.44 C 397.69 161.39 397.44 161.48 397.29 161.67 C 397 162.08 396.79 162.54 396.68 163.02 C 396.58 163.35 396.53 163.7 396.52 164.04 C 396.85 164.65 397.01 165.33 396.99 166.02 L 397.24 168.06 C 397.26 168.33 397.19 168.6 397.05 168.82 C 396.89 169.03 396.67 169.18 396.42 169.25 C 392.43 161.75 393.95 152.51 400.14 146.68 Z" fill="#00527f" stroke="none" pointer-events="all"/><path d="M 423.18 144.52 C 423.09 144.8 422.91 145.05 422.67 145.21 C 422.44 145.3 422.2 145.35 421.95 145.36 L 420.56 145.54 C 419.96 145.47 419.35 145.53 418.78 145.74 C 418.83 145.94 418.75 146.15 418.58 146.28 C 418.42 146.4 418.19 146.41 418.02 146.3 C 417.65 146.31 417.31 146.47 417.07 146.74 C 416.89 146.94 416.64 147.07 416.36 147.12 C 415.98 147.2 415.65 147.45 415.47 147.8 C 415.31 148.11 415.01 148.18 414.79 147.95 C 414.65 147.68 414.56 147.38 414.53 147.07 C 414.28 146.47 413.83 145.97 413.26 145.67 C 412.68 145.41 412.14 145.07 411.66 144.65 C 411.35 144.42 411.17 144.07 411.15 143.68 C 411.13 143.45 411.16 143.22 411.22 143 C 411.03 142.6 410.65 142.33 410.21 142.28 C 409.88 142.2 409.61 141.96 409.5 141.64 C 414.34 140.74 419.34 141.78 423.43 144.52 Z" fill="#64aadc" stroke="none" pointer-events="all"/><path d="M 431.06 165.26 C 431 164.68 430.78 164.12 430.42 163.66 C 430.03 163.63 429.65 163.82 429.46 164.17 C 429.15 164.61 428.67 164.91 428.14 165.01 C 427.76 164.59 427.84 164.01 428.32 163.66 C 428.63 163.19 428.7 162.61 428.52 162.08 C 428.48 161.85 428.39 161.64 428.27 161.44 C 427.91 161.09 427.65 160.65 427.5 160.17 C 427.17 160.39 426.77 160.35 426.46 160.09 C 426.15 159.82 425.98 159.36 426.02 158.9 C 426.04 158.35 425.84 157.82 425.47 157.43 C 425.5 156.56 425.23 155.7 424.7 155.01 C 424.17 154.48 423.47 154.16 422.72 154.11 C 422.09 154.13 421.57 153.75 421.56 153.28 C 421.55 152.81 422.04 152.42 422.67 152.41 C 423.62 152.52 424.58 152.49 425.52 152.33 C 426.43 152.22 427.32 151.95 428.14 151.52 L 429.03 150.3 C 431.76 154.78 432.5 160.21 431.06 165.26 Z" fill="#0a79b9" stroke="none" pointer-events="all"/><path d="M 429.15 169.97 C 428.72 170.51 428.15 170.92 427.5 171.16 C 426.99 171.32 426.64 171.78 426.61 172.31 C 426.55 172.5 426.5 172.4 426.45 172.04 C 426.4 171.68 426.37 171.08 426.35 170.4 C 426.43 169.76 426.67 169.14 427.04 168.62 C 427.45 168.24 427.82 167.81 428.14 167.35 C 428.25 167.16 428.25 166.93 428.14 166.74 C 428.03 166.55 427.82 166.45 427.6 166.47 C 427.38 166.49 427.2 166.64 427.12 166.84 C 426.65 167.4 426.22 167.99 425.85 168.62 C 425.23 169.55 424.33 169.93 423.48 169.64 C 422.97 169.39 422.4 169.26 421.83 169.25 C 421.49 169.39 421.28 169.61 421.25 169.85 C 421.23 170.09 421.4 170.32 421.7 170.48 C 422.18 170.62 422.59 170.94 422.85 171.37 C 423.25 172.05 422.44 172.75 420.89 173.08 C 419.82 173.1 418.77 173.3 417.76 173.66 C 417.17 174.2 416.77 174.91 416.61 175.69 C 416.43 176.04 415.49 176.3 414.33 176.33 C 413.5 176.21 412.67 176.25 411.86 176.46 C 411.19 176.7 410.43 176.58 409.88 176.13 C 409.75 175.86 409.48 175.68 409.18 175.67 C 408.88 175.65 408.6 175.8 408.44 176.06 C 408.29 176.31 408.28 176.63 408.43 176.89 C 408.69 177.36 409.22 177.62 409.75 177.53 C 410.13 177.31 410.62 177.22 411.1 177.27 C 411.39 177.34 411.63 177.51 411.73 177.73 C 411.9 177.86 412.23 177.97 412.64 178.02 C 413.06 178.07 413.51 178.06 413.9 177.98 C 414.53 177.79 415.33 177.67 416.18 177.65 C 416.79 177.61 417.35 177.53 417.84 177.4 C 418.31 177.04 418.9 176.86 419.49 176.89 C 419.83 176.82 420.09 176.73 420.25 176.64 C 420.49 176.46 420.78 176.37 421.07 176.38 C 421.21 176.49 421.27 176.68 421.19 176.84 C 421 177.11 420.77 177.35 420.51 177.55 C 424.11 175.99 427.13 173.34 429.15 169.97 Z" fill="#266792" stroke="none" pointer-events="all"/><ellipse cx="411.86" cy="152.16" rx="13.6058390578999" ry="9.415168883200712" fill-opacity="0.3" fill="#ffffff" stroke="none" pointer-events="all"/><ellipse cx="405.65" cy="150.36" rx="3.9413640824337586" ry="2.8721273162317065" fill-opacity="0.4" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="356" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><ellipse cx="413.01" cy="160.17" rx="18.818449460255152" ry="18.830337766401424" fill="none" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 186px; margin-left: 394px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">Web Server</div></div></div></foreignObject><text x="394" y="198" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Web Server</text></switch></g><path d="M 116 132.55 L 349.63 133.77" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 354.88 133.8 L 347.86 137.26 L 349.63 133.77 L 347.9 130.26 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 0 155.75 L 0 151.75 L 45.25 140.75 L 45.25 89.5 L 48 89 L 116 109 L 116 159.75 L 115.5 159.95 L 115.5 163.75 L 69 175.5 Z" fill="#dedede" stroke="none" pointer-events="all"/><path d="M 45.25 140.75 L 45.25 89.5 L 114 109.75 L 114 160.25 Z" fill="#e6e6e6" stroke="none" pointer-events="all"/><path d="M 18.75 148.5 L 79.5 166.5 L 103.5 160.5 M 24 147.25 L 84 165.25 M 29.25 146 L 89.75 164 M 34.25 144.75 L 94.25 162.75 M 33.14 147.1 L 46.99 143.44 M 32.76 149.81 L 46.6 146.56 M 32.81 152.6 L 57.07 146.7 M 37.97 154.21 L 62.7 148.16 M 48.16 154.48 L 67.58 149.91 M 53.26 156.04 L 72.76 151.27 M 24.94 150.23 L 29.66 148.88 M 39.36 143.46 L 42.61 144.46 M 49.4 146.35 L 68.92 152.25 M 58.69 157.57 L 72.95 153.98 M 64.03 159.18 L 83 154.15 M 63.84 161.9 L 87.47 155.53 M 71.43 163.93 L 75.24 162.83 M 73.81 162.18 L 88.84 158.23 M 84.34 162.31 L 93.93 159.76 M 92.07 159.09 L 95.76 157.88 M 75.8 154.05 L 99.22 161.44" fill="none" stroke="#666666" stroke-linecap="round" stroke-miterlimit="10" pointer-events="all"/><rect x="0" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><path d="M 48 139.5 L 48 93 L 109.5 111.5 L 109.5 157 Z" fill="#0068aa" stroke="none" pointer-events="all"/><path d="M 48.5 93.75 L 109 112 L 109 148 C 104.14 148.39 99.27 147.34 95 145 C 89.45 141.95 84.53 137.88 80.5 133 C 78.14 129.88 75.97 126.62 74 123.25 C 70.23 117.49 64.83 112.96 58.5 110.25 C 55.33 108.99 51.89 108.56 48.5 109 Z" fill-opacity="0.4" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="0" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><path d="M 45.5 89.5 L 48 89 L 116 109 L 114 109.75 Z" fill="#5c656d" stroke="none" pointer-events="all"/><path d="M 32.75 158.5 C 32.38 158.18 32.48 157.76 33 157.5 L 39.25 156 C 40.08 155.82 41.17 155.82 42 156 L 54.4 159.7 C 54.69 159.85 54.86 160.06 54.86 160.27 C 54.86 160.49 54.69 160.7 54.4 160.85 L 47.75 162.6 C 47.02 162.73 46.13 162.73 45.4 162.6 Z" fill="#abadaf" stroke="none" pointer-events="all"/><path d="M 35 158.05 L 41 156.9 L 52.2 160.15 L 46.25 161.65 Z" fill="#008fc5" stroke="none" pointer-events="all"/><path d="M 0 151.75 L 69 171 L 69 175.5 L 0 155.75 Z" fill="#c6c6c6" stroke="none" pointer-events="all"/><path d="M 69 171 L 115.5 159.95 L 115.5 163.75 L 69.1 175.45 Z" fill="#818181" stroke="none" pointer-events="all"/><path d="M 114 109.75 L 116 109 L 116 159.95 L 114 160.45 Z" fill="#3c444c" stroke="none" pointer-events="all"/><path d="M 0 155.75 L 0 151.75 L 45.25 140.75 L 45.25 89.5 L 48 89 L 116 109 L 116 159.75 L 115.5 159.95 L 115.5 163.75 L 69 175.5 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 183px; margin-left: 58px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">computer</div></div></div></foreignObject><text x="58" y="195" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">computer</text></switch></g><path d="M 678 165.22 L 678 97.8 L 714.25 89 L 744.63 98.06 L 744.63 166.22 L 708.89 174.52 Z" fill="#abb4c5" stroke="none" pointer-events="all"/><path d="M 678 97.8 L 714.25 89 L 744.63 98.06 L 708.89 106.61 Z" fill="#b8bfd1" stroke="none" pointer-events="all"/><path d="M 708.89 106.61 L 744.63 98.06 L 744.63 166.22 L 708.89 174.52 Z" fill="#5b6369" stroke="none" pointer-events="all"/><path d="M 709.25 143.68 C 702.59 141.16 696.23 137.96 690.25 134.13 C 687.38 132.17 684.95 129.65 683.11 126.73 C 681.84 124.45 681.18 121.89 681.22 119.29 C 681.11 116.48 681.16 113.68 681.37 110.88 C 681.52 108.39 681.79 105.91 682.19 103.44 C 682.56 102.08 683.13 100.77 683.87 99.56 C 685.42 98.53 687.18 97.69 689.08 97.05 C 692.31 95.96 695.6 95.04 698.93 94.28 C 702.4 93.37 705.94 92.7 709.5 92.27 C 711.92 91.97 714.37 91.89 716.8 92.02 C 720.77 92.3 724.67 93.14 728.39 94.53 L 740.49 98.91 C 741.55 100.65 742.25 102.58 742.54 104.6 C 742.87 107.3 743.06 110.02 743.1 112.75 C 743.29 118.75 743.12 124.77 742.59 130.76 C 742.52 133.4 741.61 135.95 739.98 138.05 C 737.62 140.62 734.43 142.31 730.95 142.83 C 728.16 143.26 725.34 143.46 722.52 143.43 Z" fill-opacity="0.4" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="678" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><path d="M 681.57 108.12 L 681.57 106.36 L 704.8 113.4 L 704.8 115.16 Z M 685.4 161.44 L 685.4 159.68 L 699.7 163.71 L 699.7 165.47 Z" fill="#52595e" stroke="none" pointer-events="all"/><path d="M 678 165.22 L 678 97.8 L 714.25 89 L 744.63 98.06 L 744.63 166.22 L 708.89 174.52 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 725.43 148.88 C 726.65 144.78 733.49 141.75 741.54 141.75 C 749.59 141.75 756.44 144.78 757.65 148.88 L 757.65 171.87 C 756.44 175.97 749.59 179 741.54 179 C 733.49 179 726.65 175.97 725.43 171.87 Z" fill="#9ea5b5" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="678" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><ellipse cx="741.5" cy="149.42" rx="16.11079200970068" ry="7.591391839016209" fill="#b7bfd1" stroke="none" pointer-events="all"/><path d="M 726.62 170.05 L 726.72 152.53 C 730.04 155.89 737.81 157.66 745.31 156.78 C 752.81 155.89 758 152.59 757.72 148.88 L 757.65 166.76 C 757.49 168.71 755.94 170.45 753.58 171.32 C 751.63 171.94 749.14 172.1 746.88 171.75 C 744.62 171.41 742.87 170.6 742.19 169.59 C 741.18 168.5 739.16 167.73 736.79 167.52 C 734.41 167.3 731.97 167.67 730.25 168.51 Z" fill-opacity="0.4" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="678" y="89" width="0" height="0" fill="none" stroke="none" pointer-events="all"/><path d="M 725.43 148.88 C 726.65 144.78 733.49 141.75 741.54 141.75 C 749.59 141.75 756.44 144.78 757.65 148.88 L 757.65 171.87 C 756.44 175.97 749.59 179 741.54 179 C 733.49 179 726.65 175.97 725.43 171.87 Z" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe flex-start; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 186px; margin-left: 718px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: nowrap; ">Database Server</div></div></div></foreignObject><text x="718" y="198" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Database Serv...</text></switch></g><path d="M 432.5 134 L 671.63 134" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 676.88 134 L 669.88 137.5 L 671.63 134 L 669.88 130.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="26" y="19" width="92" height="60" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 49px; margin-left: 27px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">User Enters <font color="#ff2008">Username </font>and <font color="#ff2008">password</font></div></div></div></foreignObject><text x="72" y="53" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">User Enters Use...</text></switch></g><rect x="186" y="59" width="92" height="60" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 89px; margin-left: 187px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Client sends Name and password across network</div></div></div></foreignObject><text x="232" y="93" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Client sends Na...</text></switch></g><rect x="340.5" y="19" width="92" height="60" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 49px; margin-left: 342px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Server uses  password to <font color="#ff2008">Authenticate </font>User Identity</div></div></div></foreignObject><text x="387" y="53" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Server uses  pa...</text></switch></g><rect x="490" y="69" width="92" height="60" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 90px; height: 1px; padding-top: 99px; margin-left: 491px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Server <font color="#ff2008">Authorises </font>access for authenticated Identity</div></div></div></foreignObject><text x="536" y="103" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Server Authoris...</text></switch></g><ellipse cx="26" cy="29" rx="10" ry="10" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 18px; height: 1px; padding-top: 29px; margin-left: 17px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">1</div></div></div></foreignObject><text x="26" y="33" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">1</text></switch></g><ellipse cx="506" cy="63.5" rx="10" ry="10" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 18px; height: 1px; padding-top: 64px; margin-left: 497px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">4</div></div></div></foreignObject><text x="506" y="67" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">4</text></switch></g><ellipse cx="346" cy="10.25" rx="10" ry="10" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 18px; height: 1px; padding-top: 10px; margin-left: 337px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">3</div></div></div></foreignObject><text x="346" y="14" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">3</text></switch></g><ellipse cx="196" cy="54" rx="10" ry="10" fill="#ffffff" stroke="#000000" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 18px; height: 1px; padding-top: 54px; margin-left: 187px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">2</div></div></div></foreignObject><text x="196" y="58" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">2</text></switch></g></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://desk.draw.io/support/solutions/articles/16000042487" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>

---

<br>
<br>


## SESSION LAYER PROTOCOLS

<div id="l5-protocols" class="interactive-protocols flex flex--column"></div>

</section>
<!-- 4 -->
<section>
# L4 Transport layer

## KEY TERMS

- <b>segment</b>: The PDU of the transport layer. TCP and UDP have different header structures.
- <b>checksum</b>: A small-sized datum derived from a block of  data for the purpose of detecting errors that may have been introduced during its transmission or storage. They are created by hash algorithms such as SHA1 takes an input and produces a string (a sequence of numbers and letters) of a fixed length. to verify data integrity but are not relied upon to verify data authenticity.
- <b>socket</b> : The triad of <b>transport protocol</b> (TCP/UDP), <b>IP address</b>, and <b>port number</b> that serves as an endpoint for sending and receiving data across a network. The structure and properties of a socket are defined by an application programming interface (API) for the networking architecture. Sockets are created only during the lifetime of a process of an application running in the node.
- <b>PKI</b>: A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption. The purpose of a PKI is to facilitate the secure electronic transfer of information for a range of network activities such as e-commerce, internet banking and confidential email.
- <b>Port</b>: it is a logical construct that identifies a specific process or a type of network service. In a client-server architecthre, the client is given an ephemeral port number which lasts as long as the connection to the server. The server on the other hand uses a well known port based on the protocol in use e.g. port 80 for http.
- <b>3 way handshake</b>: is the method used by TCP set up a TCP/IP connection over a network. it involves three stages (SYN,SYN-ACK,ACK). see Types of connections for more information.
- <b>cipher suite</b>: a set of algorithms that help secure a network connection that uses Transport Layer Security (TLS). cipher suites usually contains a selection of the following algorithms:
    - <b>key exchange algorithm</b>
    - <b>bulk encryption algorithm</b>
    - <b>hashing algorithm</b>
    - <b>message authentication code (MAC) algorithm</b>

---
<span style="display:none">
[checksum]() A checksum is a sequence of numbers and letters used to check data for errors. If you know the checksum of an original file, you can use a checksum utility to confirm your copy is identical. To produce a checksum, you run a program that puts that file through an algorithm. Typical algorithms used for this include MD5, SHA-1, SHA-256, and SHA-512. The algorithm uses a cryptographic hash function that takes an input and produces a string (a sequence of numbers and letters) of a fixed length. The input file can be a small 1 MB file or a massive 4 GB file, but either way, you’ll end up with a checksum of the same length. Checksums may also be called “hashes.” [socket]() A socket is the triad of <b>transport protocol</b> (TCP/UDP), <b>IP address</b>, and <b>port number</b> that serves as an endpoint for sending and receiving data across a network. The structure and properties of a socket are defined by an application programming interface (API) for the networking architecture. Sockets are created only during the lifetime of a process of an application running in the node. [PKI]() A public key infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates and manage public-key encryption. The purpose of a PKI is to facilitate the secure electronic transfer of information for a range of network activities such as e-commerce, internet banking and confidential email. It is required for activities where simple passwords are an inadequate authentication method and more rigorous proof is required to confirm the identity of the parties involved in the communication and to validate the information being transferred. [port]()
a port is a communication endpoint. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service. A port is identified for each transport protocol and address combination by a 16-bit unsigned number, known as the port number. The most common transport protocols that use port numbers are the <b>Transmission Control Protocol (TCP)</b> and the <b>User Datagram Protocol (UDP)</b>.
</span>
<!-- --- -->

<span style="display:none">
  This layer is separated by two protocols like Transport Control Protocol and User Datagram Protocol. TCP is following connection-oriented transmission. It's slower but provides feedback (HTTP, FTP, etc). UDP is following connectionless transmission. It's faster but doesn't provide feedback and used when we don't care about the fullness of data (video games, music, movies, etc.).
  Layer 4 is responsible for end-to-end communication between the two devices. This includes taking data from the session layer and breaking it up into chunks called segments (or datagrams in case of UDP) before sending it to layer 3. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.
  The transport layer is also responsible for flow control and error control,. Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection doesn’t overwhelm a receiver with a slow connection. The transport layer performs error control on the receiving end by ensuring that the data received is complete , and checks checksums of data units and make use of automatic repeat request if it isn’t.
</span>

## Introduction to L4 Transport layer

The L4 transport layer is at the center of the OSI model, lying between L7-L5 upper layers and L3-L1 lower  layers. As the name suggests, it is responsible for delivering data between two hosts on a network. It first divides data received from the upper layers into manageable sizes called segments and  adds header information before passing it on to lower layers for further processing. The most common protocols in this layer are <b>Transmission Control Protocol (TCP)</b> for reliable data transmission, and <b>User Datagram Protocol (UDP)</b> for fast but Unreliable data transmission. Other protocols may provide additional capabilities for error recovery, data flow, retransmission and encryption. This chapter will be primarily focus on TCP & UDP and TLS.

<embed src="https://www.youtube.com/embed/DsQcX-7n6fY"></embed>

---

## TRANSPORT LAYER FUNCTIONS
<div id="l4-functions" class="interactive-functions grid"></div>
<table style="display:none">
<thead>
  <tr>
    <th>Purpose</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
<tr>
  <td><b>Segmentation & reassembly</b></td>
  <td>Takes data from the session layer and breaks it up into manageable chunks called segments (or datagrams in case of UDP). Segments can take different paths from source to destination. The transport layer on the receiving device reassembles the segments in the right order using the sequence number (TCP). The port number directs each segment to the associated application. </td>
</tr>
<tr>
  <td><b>flow control - windowing</b></td>
  <td> Flow control is a mechanism to determine the optimal speed for data transmission between two devices. It ensures that the sender doesn't overwhelm the receiving device with data that it cant handle due to hardware constraints. Windowing is a process to negotiate how much data a sender and receiver can process prior to  transmission. e.g. if a mobile only processes 10mbs, it will tell the server to slow down so to prevent data loss.- provides additional quality of service (QOS)</td>
</tr>
<tr>
  <td><b>Error control</b></td>
  <td>It uses the <a href="https://www.youtube.com/watch?v=ppU41c15Xho">checksum</a> to inspect the data's integrity. If the receiving device identifies any missing segments, it will make an automatic repeat request (ARR) to the sender to retransmit the missing data. </td>
</tr>
<tr>
  <td><b>Connection and connectionless data transfer</b></td>
  <td>There are essentially 2 types of connections. connection oriented using Transport Control Protocol (TCP) and connectionless oriented with User Datagram Protocol(UDP). TCP is much slower but provides feedback to the server if data is incomplete or corrupt and so is more reliable which is good for transfering files (FTP/S) web pages (HTTP/S) and email (SMTP). establishing, maintaining connection for data transfer and terminating. (3 phases). UDP on the otherhand faster but less reliable so is ideal when we completeness of data is not an issue such as streaming video games, music and movies.</td>
</tr>
<tr>
  <td><b>Encryption</b></td>
  <td>The transport layer has its own encryption protocol called Transport Layer Security (TLS) and Secure Socket Layer (SSL) it's predecessor. TLS  provides end-to-end encryption, meaning encryption is handled by the end devices as opposed to intermediary devices such as routers and switches. TLS is often used by L7 application layer protocols such as HTTPS and FTPS. The S suffixed at the end of these protocol stands for secure </td>
</tr>
<tr>
  <td><b>Session Multiplexinng</b></td>
  <td>This is the ability to have multiple concurrent sessions open to one or many hosts using the IP addresses and port numbers known as a socket. Hence you can have multiple applications with established connections to multiple hosts on a network.</td>
</tr>
</tbody>
</table>



<span style="display:none">
  [check+sum](https://www.youtube.com/watch?v=ppU41c15Xho): sender creates the checksum, the receiver  validates the checksum, similar to parity bit, if you have a burst error it will be detected, and if bits that change in a column will be caught. it cuts off the sum to 8 bits and sends them as the checksum, its like sending the remainder of a sum. the left most bits are chopped off and added to the checksum to retain some of the information. after this we reverse all the numbers called the 1s complement addition. if you take the whole sum and divide by 255, add the remainder. then flip it e.g. if the bits add up to 11111111 it will be flipped to 00000000 which will be the checksum. the limitations is that the order that the bits dont matter if the letters are in the wrong order it wont be detected. if data is removed or added, e.g. adding 0s were inserted, the checksum will be the same. and if the 0s are removed it wont detect it. \n\n the receiver collects all the data blocks including the checksum. and the receiver sums all the datablocks including the checksum. if the results are all 1s, it accepts, otherwise it rejects.\n\n it can detect all errors involving an odd number of bits and even number of bits. but if one or more bits of a segments are damaged and the corresponding bit or bits of opposite value in a second segment are also damaged, the sum of those columns will not change and the receiver wont detect the error(s).\n\n the checksum is part of the UDP\n\n
  msg="Hello, world!"
  "Hello, world!"
  sum=msg.split("").map(el=>el.charCodeAt()).reduce((acc,curr)=>acc + curr)
  //1161
  checksum=(Math.floor(sum/255)*255) | (sum%255)
  //1021\n\n 1. break the original message into  k number of blocks with n bits in each block. e.g. break a 20 bit msg into 4 blocks (k) which will have 5 bits (n) in each block
  2. sum all the k data blocks.
  3. Add the carry to the sum if any
  4. Do 1's complement to the sum=checksum
</span>


---

## TYPES OF CONNECTION (TCP vs UDP)

There are essentially two types of connections:

- <b>TCP (Connection oriented)</b>: where the client and server esatablish a connection with a three way handshake. Ideal for reliable data transmission.
- <b>UDP (Connectionless oriented)</b>: where the client and server dont establish a connection. ideal for fast data delivery, but is unreliable.

<embed src="https://www.youtube.com/embed/fNyd6Vo8Dps">

See the table below for a detailed comparison between TCP and UDP

<table>
  <thead>
    <tr>
    <th></th>
    <th width="40%"><a href="https://www.youtube.com/watch?v=DsQcX-7n6fY">TCP</a></th>
    <th width="40%">UDP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection type</td>
      <td>connection-oriented requiring SYN and ACK handshaking and is thus more reliable</td>
      <td>Connectionless as it doesnt require handshaking making it less reliable</td>
    </tr>
    <tr>
      <td>Retransmission &amp; windowing</td>
      <td>If data transmitted as segments dont reach their final destination for whatever reason, they will be retransmitted and control through windowing</td>
      <td>No windowing or retransmission</td>
    </tr>
    <tr>
      <td>Sequencing</td>
      <td>Segments are sequenced and reassembled in the right order.</td>
      <td>Data can arrive in any order as there is no sequencing</td>
    </tr>
    <tr>
      <td>Speed</td>
      <td>Due to handshaking it has more overheads and so is slower than UDP</td>
      <td>It is fast and has less overhead making as it doesnt require handshaking or provide feedback so.
    </td>
    </tr>
    <tr>
      <td>Services</td>
      <td>Connecting to Web pages (HTTP), sending emails (SMTP) and files (FTP)</td>
      <td>Transmission of video and audio, TFTP, and network services such as DNS & DHCP.
    </td>
    </tr>
    <tr>
      <td>Diagram</td>
      <!-- <td colspan="2"><img src="../images/tcpvudp.jpeg" width="656px"></td> -->
      <td colspan="2"><img src="https://sites.google.com/site/ciscoch9/_/rsrc/1525977696865/home/tcp-vs-udp/TCP%20VS%20UDP.jpeg" width="656px"></td>
    </tr>
  </tbody>
</table>

<!-- <img src="../images/EN-tcp.png" alt=""> -->


!!! make tcp header and udp header

---

## TCP HEADER

[each term explained](https://www.lifewire.com/tcp-headers-and-udp-headers-explained-817970)

<embed src="https://www.youtube.com/embed/F27PLin3TV0"></embed>

<table id="tcp-header" border="0" cellpadding="0" cellspacing="0" width="636" style="border-collapse:
 collapse;table-layout:fixed;width:477pt">
 <colgroup><col width="80" style="mso-width-source:userset;mso-width-alt:2925;width:60pt">
 <col width="76" style="mso-width-source:userset;mso-width-alt:2779;width:57pt">
 <col width="80" span="6" style="mso-width-source:userset;mso-width-alt:2925;
 width:60pt">
 </colgroup><tbody>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl232" width="636" style="height:36.0pt;
  width:477pt">TCP Header (4 bits long)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="4" height="48" class="xl233" width="316" style="height:36.0pt;
  width:237pt">Source Port (2 bytes)</td>
  <td colspan="4" class="xl233" width="320" style="border-left:none;width:240pt">Destination
  Port (2 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl233" width="636" style="height:36.0pt;
  width:477pt">Sequence Num (4 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl233" width="636" style="height:36.0pt;
  width:477pt">Acknowledgement Num (4 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td height="48" class="xl233" width="80" style="height:36.0pt;border-top:none;
  width:60pt">Data offset (1 byte)</td>
  <td class="xl233" width="76" style="border-top:none;border-left:none;width:57pt">reserved
  <br>
    (3 bits)</td>
  <td colspan="2" class="xl233" width="160" style="border-left:none;width:120pt">Control
  Flags<br>
    (9 bits)</td>
  <td colspan="4" class="xl233" width="320" style="border-left:none;width:240pt">Window
  Size (2 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="4" height="48" class="xl233" width="316" style="height:36.0pt;
  width:237pt">Checksum (2 bytes)</td>
  <td colspan="4" class="xl233" width="320" style="border-left:none;width:240pt">Urgent
  Pointer (2 bytes)</td>
 </tr>
 <tr height="48" style="mso-height-source:userset;height:36.0pt">
  <td colspan="8" height="48" class="xl234" width="636" style="height:36.0pt;
  width:477pt">Optional Data (0-40 bytes)</td>
 </tr>

</tbody></table>


<!-- <img src="../images/tcp-headers-f2c0881ea4c94e919794b7c0677ab90a.webp"> -->
<span style="display:none">
//the below descriptions will be embedded in the diagram \n\n Source TCP port number (2 bytes or 16 bits): The source TCP port number represents the sending device. \n\n Destination TCP port number (2 bytes or 16 bits): The destination TCP port number is the communication endpoint for the receiving device. \n\n Sequence number (4 bytes or 32 bits): Message senders use sequence numbers to mark the ordering of a group of messages. \n\n Acknowledgment number (4 bytes or 32 bits): Both senders and receivers use the acknowledgment numbers field to communicate the sequence numbers of messages that are either recently received or expected to be sent. \n\n TCP data offset (4 bits): The data offset field stores the total size of a TCP header in multiples of four bytes. A header not using the optional TCP field has a data offset of 5 (representing 20 bytes), while a header using the maximum-sized optional field has a data offset of 15 (representing 60 bytes). \n\n Reserved data (3 bits): Reserved data in TCP headers always has a value of zero. This field aligns the total header size as a multiple of four bytes, which is important for the efficiency of computer data processing. \n\n Control flags (up to 9 bits): TCP uses a set of six standard and three extended control flags—each an individual bit representing On or Off—to manage data flow in specific situations. \n\n Window size (2 bytes or 16 bits): TCP senders use a number, called window size, to regulate how much data they send to a receiver before requiring an acknowledgment in return. If the window size is too small, network data transfer is unnecessarily slow. If the window size is too large, the network link may become saturated, or the receiver may not be able to process incoming data quickly enough, resulting in slow performance. Windowing algorithms built into the protocol dynamically calculate size values and use this field of TCP headers to coordinate changes between senders and receivers. \n\n TCP checksum (2 bytes or 16 bits): The checksum value inside a TCP header is generated by the protocol sender as a mathematical technique to help the receiver detect messages that are corrupted or tampered with. \n\n Urgent pointer (2 bytes or 16 bits): The urgent pointer field is often set to zero and ignored, but in conjunction with one of the control flags, it can be used as a data offset to mark a subset of a message as requiring priority processing. \n\n TCP optional data (0 to 40 bytes): Usages of optional TCP data include support for special acknowledgment and window scaling algorithms. \n\n </span>

---

## Port Numbers

A port number is simply a number assigned to an application by the transport layer which allows data to reach its intended application. If you think of the IP address is the road, then the port number would be the house number.

<embed src="https://www.youtube.com/embed/RDotMcs0Erg"></embed>


---

## SSL/TLS

Transport Layer Security (TLS), and Secure Sockets Layer (SSL) are cryptographic protocols designed to provide authentication, data encryption communications and security between servers, machines and applications operating over a network. TLS was introduced in 1999 due to vulnerabilities discovered in SSL protocols (e.g. POODLE, DROWN) which is now-deprecated. TLS is most often used in conjunction with other Internet protocols such as HTTPS, SSH, FTPS, and secure email.

<b>TLS LAYERS:</b>

1. The TLS handshake layer:
  -  manages which cipher (the type of encryption algorithm) will be used, agree on cryptographic protocols (Cipher suite)
  -  authenticate server to client using the digital certificate(public key, issuing entity, the entity issued, a serial number, dates, and a digital fingerprint), using a certificate specific to the domain name and organization.
  -   The key exchange (based on the public-private key pair from the certificate). establish shared session key
2. The TLS record layer:
  - gets data from the user applications, encrypts it,
  - fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer.
  - secure communication using session key

TLS doesnt actually do any encryption itself, it simply refer to the handshake that takes place between a client and a server which agrees on a shared secret and type of encryption that is going to be used. The handshake process is performed only once to establish a secure network connection for both parties.

<embed src="https://www.youtube.com/embed/cuR05y_2Gxc"></embed>
[TLS sub layers](https://www.youtube.com/watch?v=9-yonkeiq5A)


Different parts of the cipher suite handle are used at different stages of the handshake. e.g. Key exchange may use RSA while bulk data encryption may use AES.
<img src="../images/tls.svg" />

---


You may recall that the L5 session layer also has its own encryption protocol called Secure Shell. The main difference between SSH and SSL/TLS is that SSL is a general method for protecting data transported over a network, whereas SSH is used for logging in and sharing data with a remote computer usually through a terminal.


<span style="display:none">
  TLS consists of two parts: The TLS handshake layer manages which cipher (the type of encryption algorithm) will be used, the authentication (using a certificate specific to your domain name and organization), and the key exchange (based on the public-private key pair from the certificate). The handshake process is performed only once to establish a secure network connection for both parties. The TLS record layer gets data from the user applications, encrypts it, fragments it to an appropriate size (as determined by the cipher), and sends it to the network transport layer. TLS establishes an encrypted, bidirectional network tunnel for arbitrary data to travel between two hosts. TLS is most often used in conjunction with other Internet protocols such as HTTPS, SSH, FTPS, and secure email.
  SSL is a general method for protecting data transported over a network, whereas SSH is a network application for logging in and sharing data with a remote computer.
</span>

---

## Data link Protocols

<div id="l4-protocols" class="interactive-protocols flex flex--column"></div>

## cipher SUITE

The cipher suite is the list of supported encryption and hashing algorithms that a client machine can support. This is sent to the server with the initial hello message, and the server chooses the algorithms that will be used based on this list.

<div id="cipher-suite__body" class="grid"></div>
  <script src="js/cipherSuite/cipherSuiteGenerator.js"></script>
<div style="display:none" class="grid cipher-suite">
    <div class="cipher-suite__row grid center">
      <div class="table__item"></div>
      <div class="table__item table__lable">Key Exchange</div>
      <div class="table__item table__lable">Authentication</div>
      <div class="table__item table__lable">Cipher</div>
      <div class="table__item table__lable">MAC</div>
    </div>
    <div class="cipher-suite__row grid">
      <div class="table__item table__lable">Description</div>
      <div class="table__item">Enables The Exchange Of The Symetric Key Using PKI</div>
      <div class="table__item">After The Key Exchange, You Want To Authenticate That The Site You're Visiting Is Authentic Using A Certificate Which Has A Pub
        c Key</div>
      <div class="table__item">Used For Bulk Encryption After The Symetric Key Has Been Sent.</div>
      <div class="table__item">Hash Algorithms Which Takes The Content Of The Certificate And Performs A Hash Function Used For Digital Certificate</div>
    </div>
    <div class="cipher-suite__row grid">
      <div class="table__item table__lable">Suites</div>
      <div class="table__item">
    <div>RSA: being phased out</div>
    <div>DH:forward secret ciphers</div>
    <div>DHE:ephemeral (short lived</div>
    <div>ECDHE:Elyptic curve perfect forward secret</div>
</div>
<div class="table__item">
  <div>RSA </div>
  <div>ECDSA</div>
</div>
<div class="table__item">
    <div>AES: Advanced encryption standard</div>
<div>GCM:mode of AES</div>
<div>CBC: mode of AES</div>
    <div>Camellia: not used much</div>
      </div>
      <div class="table__item">
        <div>SHA1</div>
        <div>SHA128</div>
        <div>SHA256</div>
        <div>SHA384</div>
        <div>MD5</div>
    </div>
</div>
</div>

<div style="display:none" id="cipher-suite-table">
<div class="thead row">
   <div class="xl120"></div>
   <div class="xl96" >Key Exchange</div>
   <div class="xl96">Audiventication</div>
   <div class="xl96">Cipher</div>
   <div class="xl96">MAC</div>
 </div>
 <!-- row1 end -->
 <div class="cipher-suite__row" >
  <td class="xl96"><b>Description</b></td>
  <td class="xl120" >enables the exchange of the
  symetric key using PKI</td>
  <td class="xl120"  >after the key exchange, you
  want to authenticate that the site you're visiting is authentic using a
  certificate which has a public key</td>
  <td class="xl120" >used for bulk encryption after
  the symetric key has been sent.</td>
  <td class="xl120">Hash algorithms which takes the
  content of the certificate and performs a hash function used for digital
  certificate</td>
 </div>
 <!-- row2 -->

 <div class="cipher-suite__row" >
  <td class="xl96"  ><b>Suites</b></td>
  <td class="xl120" >
<ul>
    <li>RSA: being phased out</li>
    <li>DH:forward secret ciphers</li>
    <li>DHE:ephemeral(short lived)</li>
    <li>ECDHE:Elyptic curve perfect forward secret</li>
</ul>
</td>
  <td class="xl120" >
<ul>
<li>RSA </li>
<li>ECDSA</li>
</ul>
</td>
  <td class="xl120" >
    <ul>
        <li>AES: Advanced encryption standard</li>
        <li>GCM:mode of AES</li>
        <li>CBC: mode of AES</li>
        <li>Camellia: not used much</li>
        </ul>
</td>
  <td class="xl120" >
    <ul>
        <li>SHA1</li>
        <li>SHA128</li>
        <li>SHA256</li>
        <li>SHA384</li>
        <li>MD5</li>
    </ul>
</td>
 </div>
</tbody>
</div>

The following is an example of a typical cipher suite

<pre><span title='key exchange'>ECDHE</span>-<span title='authentication'>RSA</span>-<span title='encryption'>AES128</span>-<span title='an optional AES mode'>GCM</span>-<span title='hashing algorithm'>SHA256</span></pre>



<span style="display:none"> v1 f65c942fd1773022145418083094568ee34d131933bfdf0c2f200bcc4ef164e3 ‎05 ‎August ‎2020 07:56:39 SHA256 ECDSA 304402201751da5a863ed99c4ed391b0f1e3cb3c1edbb59ddb59d9b6712f10abd97df37b022039a4d96665aa9ec1928038c3e807e5fb2d2fc52311510a27ceb60290a9f4b3ec Key exchange Diffe Helman DH, Diffe Helman Ephemeral (DHE), Elyptical Curve Diffe Helman Ephemeral(ECDHE) : becoming the primary key exchange protocol, allows smaller sizes to get the same security RSA: Authentication: RSA ECDSA: elyptical curve Digital signature algorithm Cipher (Bulk encryption): AES: advanced Encryption Standard AES can stand on its own but may often use GCM & CBC Camelia: not used that much introduced by in 2000, was used by firefox. DES: old RC4: old GCM:Gawork Counter Mode CBC:, cipherblock chaining. Message Authentication Code MAC hash algorithm hash the digital certificate. SHA(1,128,256,384): secure hash Algorithm MD5; not secure ECDHE-RSA-AES128-GCM-SHA256 </span>

---

## Excercise:
- Do the following to see the certificate and cypher suite used by a website:
    - visit a website, click on the padlock in the navbar and select certificate>Detail. This will allow you to view a website's certificate which includes information such as public key and the cipher suite used.
    - Note that if the website does not have a padlock, the  the website is insecure.
- Can you identify what uses udp vs TCP?
</section>
<!--  -->
<section>
# L3 Network layer

## KEY TERMS

- <b>Packet</b>:  The Protocol Data unit (PDU) of the network layer which has the sender &amp; receiver's IP addresses.
- <b>Routing</b>: refers to the network-wide process that determines the end-to-end paths that packets take from source to destination. performed by a router.
- <b>routing algorithm</b>: Knows the global decisions and create the local forwarding table to decide the best path for packets to take to reach their destination.
- Forwarding refers to the router-local action of transferring packet from an input link interface to the appropriate output link interface.
- <b>[Local forwarding table](https://www.youtube.com/watch?v=QR4JHXaz7ss)</b> : When packets pass through a router, it will examine the header to determine the destination address, looks it up in the local forwarding table (created by the routing algorithm) and then send the packets on the appropriate outgoing link.
- Network ID: Routing metric of the path though which the packet is to be sent (best path)(Dubai e.g. 5002),
- Next Hop: the address of the next device to which the packet is to be sent on the way to its final destination.
- <b>ip address</b> : A numerical address used by devices to know where to send data. it includes the address of the device and the network it belongs to. it comes in two different flavours. IPv4 and IPv6. (see IP section for more details)
- <b>subnet</b> : A subnetwork or subnet is a logical subdivision of an IP network. The practice of dividing a network into two or more networks is called subnetting. For IPv4, a network may also be characterized by its subnet mask or netmask, which is the bitmask that when applied by a bitwise AND operation to any IP address in the network, yields the routing prefix.
    - unicast
    - multicast
- <b>Tunneling</b>: performed by a communications protocol to allows data to move from one network to another. It involves allowing private network communications to be sent across a public network (such as the Internet) through a process called encapsulation. the best known are L2TP and PPTP(outmoded and weak).

---

## introduction to the network layer

The network layer facilitates data transfer between two separate networks throught a router using the sender and receiver's logical IP address. For devices on the same network however, this task is performed by the L2 switch using the sender and receiver's MAC address, and so the transport layer is not required. The network layer encapsulates segments from  the transport layer into packets with the sender and receivers IP addressess, and then reassembling these packets on the receiving device. Unlike the host-to-host communication of the upper layers(L7-L5), this layer uses <span style="color:green">point-to-point</span> principle and so much of the logic and error handling of routing is performed by intermediary devices such as routers and Layer 3 switches.


<span style="display:none">handles Routing of data. after data has arrived, each frame is examined to see if the data has reached its ultimate target. it recieves outgoing and incomming transmissions and ensures that it reaches the right target. for IP addressses this is achieved through ARP. Internet Protocol (IP) address is the adddress of your computer over a network.
</span>


<embed src="https://www.youtube.com/embed/dNInnvmRivI">

---

## NETWORK LAYER FUNCTIONS
<div id="l3-functions" class="interactive-functions grid"></div>
<table style="display:none">
<thead>
    <tr>
        <th>Purpose</th>
        <th>Description</th>
    </tr>
</thead>
<tbody><tr>
    <td>Logical Addressing</td>
    <td>This layer uses IP addresses i.e.  IPv4, IPv6 to uniquely identify all devices on a network so that data reaches the right destination.  </td>
</tr>
    <tr>
        <td>Forwarding</td>
        <td>(local process)</td>
    </tr>
    <tr>
        <td>Routing</td>
        <td> (Global hops across multiple routing)finding the best path to the destination as there are multiple paths to take.  Path determination (Open Shortest Path First, Border Gateway Protocol, intermediate system-intermediate system). determines best path to reach destination</td>
    </tr>
    <tr>
        <td>Error Handling</td>
        <td>This layer uses ICMP  to send Error messages if a node on the network cannot be reached. ICMP is  utilised by command line tools such as ping and traceroute</td>
    </tr>
    <tr>
        <td>Fragmentation and reassembly</td>
        <td> if the data is too large, it is fragmented and reassembled at arrival. maximum payload for ethernet is 1500Bytes</td>
    </tr>
    <tr>
        <td>Packaging</td>
        <td>It encapsulates data from higher layers with the sender and receiver's IP address</td>
    </tr>

</tbody>
</table>

---


## IP Addresses

<span style="display:none">In this tutorial for beginners I discuss the structure of the IPv6 address, the network portion, the interface ID, and the network prefix. The function of the different types of IPv6 addresses: global unicast, link-local, unique local, and anycast. How SLAAC works in IPv6 address auto-configuration along with EUI-64 to auto-configure the interface-id. The role of ICMPv6 in router and neighbor solicitation and advertisement (RS, RA, NS, NA). I also go over IPv6 addresses that are important to know like IPv6 all routes default gateway, loopback, and multicast addresses like the all solicited nodes multicast address
</span>

An IP address is the logical address assigned to each device on a network. This is usually assigned by a router using DHCP but can be assigned manually to remain static which is imortant for shared device such as printers and servers. With DHCP, the router leases the address to the device when it is connected and the address becomes available when the machine disconnects from the network. There are 2 types of IP addresses: IPv4 a 32 bit address with each byte separated by a dot; IPv6 is the newer version of IP addresses and is a 128 bit address written in hexadecimal notation. This article will elaborate more on IPv4 as it is the predominant of the two.


<embed src="https://www.youtube.com/embed/7_-qWlvQQtY"></embed>

<!-- [vid](https://www.youtube.com/watch?v=v8aYhOxZuNg) -->
An IPv4 addresses identifys 2 things: the address of a host (H) on a network, and the address of the network (N) it belongs to. The part of the IP address which indicate the network depends on the class of IP address it belongs to which is identified by the subnet mask. see the table below for more details:

<table border="0" cellpadding="0" cellspacing="0">
 <colgroup><col>
 <col width="200px">
 <col>
 <col>
 <col>
 <col>
 <col>
 <col>
 <col>
 </colgroup><tbody><tr>
  <td>Class</td>
  <td>from</td>
  <td>to<span>&nbsp;</span></td>
  <td>Subnet Mask</td>
  <td>Max host</td>
  <td>No of networks</td>
  <td>Organisation</td>
  <td>first bit pattern</td>
  <td>Network/Host portion</td>
 </tr>
 <tr>
  <td>A</td>
  <td>1.0.0.0<span>&nbsp;</span></td>
  <td>126.255.255.255</td>
  <td>255.0.0.0</td>
  <td>2^24-2= 16M<span>&nbsp;</span></td>
  <td>2^7=128</td>
  <td>Large</td>
  <td>0xxxxxxx</td>
  <td>N.H.H.H</td>
 </tr>
 <tr>
  <td>B</td>
  <td>128.0.0.0</td>
  <td>191.255.255.255</td>
  <td>255.255.0.0</td>
  <td>2^16-2=64K</td>
  <td>2^14=16000</td>
  <td>Mid size</td>
  <td>10xxxxxx</td>
  <td>N.N.H.H</td>
 </tr>
 <tr>
  <td>C</td>
  <td>192.0.0.0</td>
  <td>233.255.255.255</td>
  <td>255.255.255.0</td>
  <td>2^8-2=254</td>
  <td>2^21=2M</td>
  <td>small</td>
  <td>110xxxxx</td>
  <td>N.N.N.H</td>
 </tr>
 <tr>
  <td>D</td>
  <td>244.0.0.0</td>
  <td>239.255.255.255</td>
  <td>Reserved for multicasting</td>
  <td>N/A</td>
  <td>reserved for multicast groups</td>
  <td>N/A</td>
  <td>1110xxxx</td>
  <td>N/A</td>
 </tr>
 <tr>
  <td>E</td>
  <td>240.0.0.0</td>
  <td>254.255.255.255</td>
  <td>Experimental</td>
  <td>N/A</td>
  <td>reserved for research and
  development</td>
  <td>future use</td>
  <td>1111xxxx</td>
  <td>N/A</td>
 </tr>
 <tr>
  <td colspan="9"></td>
 </tr>
</tbody></table>

Note: Class A addresses 127.0.0.0 to 126.255.255.255 are reserved for loopback testing on the local machine
Class C addresses are the most familiar as they are used on the local network, ad usually begin with 192.168.xxx.xxx

<span style="color:red">1</span>.<span style="color:green">2.3.4</span>

---

## ROUTING &amp; Forwarding

every node has a routing algorithm and local forwarding table.
routing algorithm populates the local forwarding table at the node which determines the end to end path. Forwarding is the physical movement of packet from a nodes input interface to a nodes output interface.


![routing &amp local forwarding table](https://slideplayer.com/slide/16427581/96/images/3/Interplay+between+routing+and+forwarding.jpg)


---


## network layer protocols

see the table below for a list of some network layer protocols.

<div id="l3-protocols" class="interactive-protocols flex flex--column"></div>

<table style="display:none" border="0" cellpadding="0" cellspacing="0">
 <colgroup>
  <col span="2">
  <col>
  <col span="3">
 </colgroup>
 <tbody>
  <tr>
    <td>Meaning</td>
    <td>Acronym</td>
    <td>Description</td>
    <td>IP</td>
    <td>Category</td>
    <td>Algorithm</td>
 </tr>
 <tr>
  <td>internet Group Management Protocol</td>
  <td>IGMP</td>
  <td>Management Protocol (IGMP) is a
  communications protocol used by hosts and adjacent routers on IPv4 networks
  to establish multicast group memberships. IGMP is an integral part of IP
  multicast and allows the network to direct multicast transmissions only to
  hosts that have requested them.<br>
    <br>
    IGMP can be used for one-to-many networking applications such as online
  streaming video and gaming, and allows more efficient use of resources when
  supporting these types of applications.<br>
    <br>
    version 1,2,3. 2 is current standard. Has a quwry 224.0.0.1 message,
  membership report message 22<font>4.0.0.2</font><font>and leave message. Ip datagram has an ip header(20 bytes and an
  igmp message( 8 bytes/32 bits) which includes type(8bit): membership query,
  membership report and leave; max response time(8bit) only used by membership
  query, and checksum(16 bits) determines the entire payload of the datagram.</font></td>
  <td>224.0.0.1</td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Protocol
  Independent Multicast</td>
  <td>PIM</td>
  <td>ppim doesnt care if youre using
  rip or ospf. Optimal tree. Prune and graft in dense mode, occures every three
  minutes affects performance. Sparse mode uses shared distribution tree using
  a rendevous point. Protocol-Independent Multicast (PIM) is a family of
  multicast routing protocols for Internet Protocol (IP) networks that provide
  one-to-many and many-to-many distribution of data over a LAN, WAN or the
  Internet. It is termed protocol-independent because PIM does not include its
  own topology discovery mechanism, but instead uses routing information
  supplied by other routing protocols.<span>&nbsp;&nbsp;
  </span>PIM does not build its own routing tables. PIM uses the unicast
  routing table for reverse path forwarding.[1]:56–57. PIM-SM is commonly used
  in IPTV systems for routing multicast streams between VLANs, Subnets or local
  area networks.[4]</td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Enhanced
  Interior Gateway routing Protocol</td>
  <td>EIGRP</td>
  <td>For cisco routers, each router
  only knows about its neighbour and isnt aware of global. Neighbours exchange
  routing information. Establish connections by sending a hello message sent
  every 5 seconds. Hold timer is time allowed for a response (15 seconds). Uses
  RTP not TCP/UDP. Unlike other well known routing protocols, such as RIP,
  EIGRP only sends incremental updates, reducing the workload on the router and
  the amount of data that needs to be transmitted. In addition to the routing
  table, EIGRP uses the following tables to store information:<br>
    <br>
    Neighbor Table: The neighbor table keeps a record of the IP addresses of
  routers that have a direct physical connection with this router. Routers that
  are connected to this router indirectly, through another router, are not
  recorded in this table as they are not considered neighbors.<br>
    Topology Table: The topology table stores routes that it has learned from
  neighbor routing tables. Unlike a routing table, the topology table does not
  store all routes, but only routes that have been determined by EIGRP. The
  topology table also records the metrics for each of the listed EIGRP routes,
  the feasible successor and the successors. Routes in the topology table are
  marked as "passive" or "active". Passive indicates that
  EIGRP has determined the path for the specific route and has finished
  processing. Active indicates that EIGRP is still trying to calculate the best
  path for the specific route. Routes in the topology table are not usable by
  the router until they are inserted into the routing table. The topology table
  is never used by the router to forward traffic. Routes in the topology table
  will not be inserted into the routing table if they are active, are a
  feasible successor, or have a higher administrative distance than an
  equivalent path.[2]<br>
    Information in the topology table may be inserted into the router's routing
  table and can then be used to forward traffic. EIGRP supports the following
  features:[3]<br>
    <br>
    Support for Classless Inter-Domain Routing (CIDR) and variable length
  subnet masking. Routes are not summarized at the classful network boundary
  unless auto summary is enabled.<br>
    Support for load balancing on parallel links between sites.<br>
    The ability to use different authentication passwords at different
  times.<br>
    MD5 and SHA-2 authentication between two routers.<br>
    Sends topology changes, rather than sending the entire routing table when a
  route is changed.<br>
    Periodically checks if a route is available, and propagates routing changes
  to neighboring routers if any changes have occurred.<br>
    Runs separate routing processes for Internet Protocol (IP), IPv6, IPX and
  AppleTalk, through the use of protocol-dependent modules (PDMs).<br>
    Backwards compatibility with the IGRP routing protocols.[4].<br>
    Cisco Systems now classifies EIGRP as a distance vector routing protocol,
  but it is normally said to be a hybrid routing protocol.[4][9] While EIGRP is
  an advanced routing protocol that combines many of the features of both
  link-state and distance-vector routing protocols, EIGRP's DUAL algorithm
  contains many features which make it more of a distance vector routing
  protocol than a link-state routing protocol.[9][10]<span>&nbsp;</span></td>
  <td>224.0.0.10</td>
  <td>distance vector</td>
  <td></td>
 </tr>
 <tr>
  <td>Router
  Information Protocol</td>
  <td>RIP</td>
  <td>Determines best path by number
  of hops. Not always optimal disregards otherfactors such as network traffic
  bandwith. Load balanced when two paths are the same distance. It is a
  classful protocol so doesnt support Variable LAN Subnet Mask (VLSM). broadcast
  update every 30 seconds. 120 Administrative Distance (AD). maximum of 15 hops
  anymore is unreachable. Information Protocol (RIP) is one of the oldest
  distance-vector routing protocols which employs the hop count as a routing
  metric. RIP prevents routing loops by implementing a limit on the number of
  hops allowed in a path from source to destination. The largest number of hops
  allowed for RIP is 15, which limits the size of networks that RIP can
  support.<br>
    <br>
    RIP implements the split horizon, route poisoning and holddown mechanisms
  to prevent incorrect routing information from being propagated.<span>&nbsp; </span>Bellman–Ford algorithm and the
  Ford–Fulkerson algorithm distant-vector routing protocols started to be
  implemented from 1969 onwards in data networks such as the ARPANET and
  CYCLADES.</td>
  <td>224.0.0.9</td>
  <td>distance vector</td>
  <td>Bellman-ford</td>
 </tr>
 <tr>
  <td>Open
  Shrotest path First</td>
  <td>OSPF</td>
  <td>sever factors determine best
  path including: category of routing protocol. Adminsistrative distance,
  metric calculatin, timer, load balancing. Etc. Quick to converge but cant
  handle many routes. Each router has the same picture of the network as each
  other. this is done with LSA (Link State Advertisements)<span>&nbsp; </span>keeping it in an LSDB (Database), routers
  exchange their LSDB. Each ahas a RID (Router ID, usually an ip address, can
  be set manually or automatically)</td>
  <td>224.0.0.5</td>
  <td>link state</td>
  <td>Dijkstra</td>
 </tr>
 <tr>
  <td></td>
  <td>IS-IS</td>
  <td></td>
  <td></td>
  <td>link state</td>
  <td></td>
 </tr>
 <tr>
  <td>reverse
  path forwarding</td>
  <td>RPF</td>
  <td>distribution tree: source
  distribituion tree, and shared distributuion tree. ( see PIM)</td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Link
  State Advertisment</td>
  <td>LSA</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Border
  Gateway Protocol</td>
  <td>BGP</td>
  <td>uses TCP, port 179. router to
  router communication. How routers in autonomous systems (AS) communicate. How
  the exchange information and what to do with packets determine best path. The
  glue which connects service providers and ISPs. Supoports 250,000 routes and
  growing. it is now in version 4. it is optimised for scalability rather than
  convergence time. it only has 4 messages: open; keep alive; update;
  notification and has 6 protocols uses tcp on port 179</td>
  <td></td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>Internet Protocol
  Version 4</td>
  <td>IPv4</td>
  <td>An IPv4 address is a 32-bit numeric
  address written in decimal as four numbers separated by a dot. Each number
  can range between 0 to 255. There are four classes of IP addresses. e.g.
  192.168.1.1</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Internet
  Protocol Version 6</td>
  <td>IPv6</td>
  <td>Ipv6 was
  introduced due to the limited number of IPv4 addresses. It is a 128 bits
  written in hexadecimal number consisting of 32 hexadecimal numbers.
  e.g.&nbsp;<font>FDA3:BBCC:DCEE:0:6166:283F:29EA:5293:</font><font>&nbsp;These numbers are grouped in 4's giving 8 groups or
  blocks. There is over 340 undecillion ipv6 addresses available.</font></td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>ATM</td>
  <td>Asynchronous
  Transfer Mode</td>
  <td>A
  telecommunications standard for digital transmission of multiple types of
  traffic, including telephony (voice), data, and video signals in one network
  without the use of separate overlay networks.</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Internet
  Control message protocol</td>
  <td>ICMP</td>
  <td>ICMP is used by
  network devices, including routers to send error messages and operational
  information indicating, for example, that a request service is not available
  or that a host or router could not be reached. Unlike TCP and UDP, ICMP isnt
  typically used to exchange data between systems nor is it employed by
  end-user network applications with the exception of ping and traceroute</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Internet
  Group Messaging Protocol</td>
  <td>IGMP/v6</td>
  <td>IGMP is a
  communications protocol used by hosts and adjacent routers on IPv4 networks
  to establish multicast group memberships only to hosts that have requested
  them. IGMP can be used for one-to-many networking applications such as online
  streaming video and gaming, and allows more efficient use of resources. For
  IPv6 networks, this is handled by Multicast Listener Discovery (MLD) which is
  a part of ICMPv6</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>Protocol
  Independent Multicast</td>
  <td>PIM</td>
  <td>After a host has
  sent a multicast request with ICMP to the local router, PIM is then used
  between the local and remote multicast routers, to direct multicast traffic
  from hosts sending multicasts to hosts that have registered through IGMP to
  receive them.</td>
  <td colspan="3"></td>
 </tr>
 <tr>
  <td>L2TP</td>
  <td>Layer 2 Tunneling
  Protocol</td>
  <td>A tunneling
  protocol used to support virtual private networks (VPNs) or as part of the
  delivery of services by ISPs. It encrypts its own control messages (using an
  optional pre-shared secret), and does not provide any encryption or
  confidentiality of content by itself. Rather, it provides a tunnel for Layer
  2 (which may be encrypted), and the tunnel itself may be passed over a Layer
  3 encryption protocol such as IPsec [1]</td>
  <td colspan="3"></td>
 </tr>
</tbody></table>

<table style="display:none">
    <thead>
    <tr>
        <th>Protocol</th>
        <th>Acronym</th>
        <th>Description</th>
    </tr>
</thead>
    <tbody>
        <tr>
            <td>Internet Protocol Version 4</td>
            <td>IPv4</td>
            <td>An IPv4 address is a 32-bit numeric address written in decimal as four numbers separated by a dot. Each number can range between  0 to 255. There are four classes of IP addresses. e.g. 192.168.1.1</td>
        </tr>
<tr>
            <td>Internet Protocol Version 6</td>
            <td>IPv6</td>
            <td>Ipv6 was introduced due to the limited number of IPv4 addresses. It is a 128 bits written in hexadecimal number consisting of 32 hexadecimal numbers. e.g. <span style="color:green">FDA3:BBCC:DCEE:0:6166:283F:29EA:5293:</span> These numbers are grouped in 4's giving 8 groups or blocks. There is over 340 undecillion ipv6 addresses available.
</td>
        </tr>
        <tr>
            <td>ATM</td>
            <td>Asynchronous Transfer Mode</td>
            <td> A telecommunications standard for digital transmission of multiple types of traffic, including telephony (voice), data, and video signals in one network without the use of separate overlay networks.</td>
        </tr>
        <tr>
            <td>Internet Control message protocol</td>
            <td>ICMP</td>
            <td>ICMP is used by network devices, including routers to send error messages and operational information indicating, for example, that a request service is not available or that a host or router could not be reached. Unlike TCP and UDP, ICMP isnt typically used to exchange data between systems nor is it employed by end-user network applications with the exception of ping and traceroute</td>
        </tr>
        <tr>
            <td>Internet Group Messaging Protocol</td>
            <td>IGMP/v6</td>
            <td>IGMP is a communications protocol used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships only to hosts that have requested them. IGMP can be used for one-to-many networking applications such as online streaming video and gaming, and allows more efficient use of resources. For IPv6 networks, this is handled by Multicast Listener Discovery (MLD) which is a part of ICMPv6  <span style="display:none"> IGMP is used by hosts and adjacent routers on IPv4 networks to establish multicast group memberships... That is IGMP will be within the local multicast router and the end host client... then to cross the L3 boundary (eg. a router) protocol like Protocol Independent Multicast (PIM) is then used between the local and remote multicast routers, to direct multicast traffic from the multicast server to many multicast clients.</span></td>
        </tr>
        <tr>
          <td>Protocol Independent Multicast</td>
          <td>PIM</td>
          <td>After a host has sent a multicast request with ICMP to the local router, PIM is then used between the local and remote multicast routers, to direct multicast traffic from hosts sending multicasts to hosts that have registered through IGMP to receive them.</td>
        </tr>
        <tr>
            <td>L2TP</td>
            <td>Layer 2 Tunneling Protocol </td>
            <td>A tunneling protocol used to support virtual private networks (VPNs) or as part of the delivery of services by ISPs. It  encrypts  its own control messages (using an optional pre-shared secret), and does not provide any encryption or confidentiality of content by itself. Rather, it provides a tunnel for Layer 2 (which may be encrypted), and the tunnel itself may be passed over a Layer 3 encryption protocol such as IPsec [1]</td>
        </tr>
    </tbody>
</table>


---


## Quick excercise:
- type the following command in your command line terminal to view information such as IP address and network information of your computer: ipconfig /all
- to use features of ICMP, type the following command from your command line terminal:
  - ping sitename
  - traceroute sitename
- to view the routing table of your network type: route PRINT -4
further reading:
delivery schemes

---

[ip video](https://www.youtube.com/watch?v=z7Al3P8ShM8)

further investigation:

packet tracer.
</section>
<!-- 2 -->
<section>
# L2 Data Link - IEEE 802 (Data link and physical standards)


## KEY TERMS
- <b>Network Interface Card (NIC)</b>: A hardware device which enables devices to communicate on a network. It has a physical address burned into it called a MAC address.
- <b>Mac Address</b>: The MAC address is a unique 6 Bytes (48-bit) binary address written in hexadecimal for easier conversion. Each byte is usually separated by any of the following: hyphen (-); colon (:);  dot (.); The first 3 bytes identifies the manufacturer while the last 3 bytes are unique to every device. A device will accept data if the MAC address in it's header matches it's own MAC address.

<table style="text-align:center">
<thead>
       <tr ><th colspan="2">MAC Address</th></tr>
</thead>
<tbody>
 <tr >
  <td colspan="2"><span style="background:orange; color:white;">00-1A-7D</span>-<span style="background:green; color:white">DF-61-8B</span></td>
 </tr>
 <tr >
  <td >Manufacturer
  </td>
  <td>Unique Identifyer
  </td>
 </tr>
</tbody>
</table>
- <b>Frame</b>: A frame is a PDU created on the Data Link layer which has the source and destination MAC addresses, and the  Frame Check Sequence (FCS)<span style="display:none">(Optional) when field length is not used </span> used for error detection
- <b>Logic Link Controller(LLC)</b>: The upper sublayer of the DLL which acts  as a mediator between the network layer above and the MAC sublayer of the DLL below.
- <b>Media Access Controller(MAC)</b>: The Lower sub-layer of the DLL which  communicates with the physical layer below and the LLC (upper-sublayer)

---

## Introduction to the datalink layer

The DLL encapsulates packets from L3 Network layer into frames which contains the source and destination MAC address' of the sender and receiver. It also converts electrical impulses received from the physical layer into bits, and decasulates frames to be passed on to the upper layers. The DLL performs a similar roles to the Network layer, including physical addressing of data between switches, error detection and flow control. The main difference betweei the DLL and the network layer is that the DLL encapsulates data with the sender and receiver's MAC address in a frame used by a switches for physical addressing to devices on the same network, whereas  the network layer encapsulates data into segments from the transport layer which has the sender and reciever's logical IP address used by routers to deliver data between devices on a different network. In simple terms, the network layer is not used unless data needs to be sent to a device on a different network. The DLL is considered to be the most complex layer in the OSI model and consists of 2 sublayers:

- The Logical Link Control (LLC);
- Media Access Controller (MAC).

These sublayers will be discussed separately in this article:

<embed src="https://www.youtube.com/embed/0b3h7CdJRpQ">

<table class="ui table">
  <caption><h2>DIFFERENCE BETWEEN DLL &amp NETWORK LAYERS</h2 ></caption>
  <thead>
    <tr>
      <th style="width:20%">Feature</th>
      <th style="width:40%">DLL</th>
      <th style="width:40%">Network</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LAYER</td>
      <td>L2</td>
      <td>L3</td>
    </tr>
    <tr>
      <td>Area of operation</td>
      <td>Same network</td>
      <td>Separate Network</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Switch</td>
      <td>Router</td>
    </tr>
    <tr>
      <td>Addressing</td>
      <td>Physical Addressing with MAC Address </td>
      <td>Logical Addressing with IP Address</td>
    </tr>
    <tr>
      <td>Header</td>
      <td>Frame</td>
      <td>Packet</td>
    </tr>
    <tr>
      <td>Flow Control & Error Control</td>
      <td>Intra-network e.g. (CSMA/CD, CSMA/CA, Token Ring)</td>
      <td>Inter-network (L5 Transport)</td>
    </tr>
  </tbody>
</table>



<span style="display:none">it sets up links accross the physical  network ti encapsulates bits into data frames to be sent over a network and decapsulates incoming data. switches are the most common network devices that exist at the data link layer. it is also involved in error detection</span>


---

## Logic Link Control (LLC) 802.2 (implemented in software)
The LLC is the upper sublayer of the DLL which acts as an interface between the MAC sublayer and L3 network layer. LLC is very similar to several famous data link protocols, like Synchronous Data Link Control (SDLC) or High Level Data Link Control (HDLC) protocols. The LLC includes the <span style="color:blue">service access points (SAP)</span> information in the frame to allow multiple applications to communicate simultaneously with other applications on the local machine or other stations on the network.

---

## LOGICAL LINK CONTROLLER FUNCTIONS
<div id="l2LLC-functions" class="interactive-functions grid"></div>

<table style="display:none">
<tr>
    <th>Function</th>
    <th>Description</th>
</tr>
<tr>
    <td>Frame flow control</td>
    <td>flow control is a speed matching mechanism that coordinates many frames a sender can transmit within a period (a window) before waiting for an acknowledgement from the receiver. This is important due to hardware limitations such as memory and bandwith. the sender before the limits are reached and request that the transmitter send fewer frames or stop temporarily. and without it will lead to data loss from the receiver. </td>
</tr>
<tr>
    <td>Error detection </td>
    <td>LLC uses the CRC field to detect errors When it provides a connection-oriented or an acknowledged connectionless service using the <a href="https://www.youtube.com/watch?v=LnbvhoxHn8M">Sliding window Automatic Repeat Request (ARQ)</a> Go Back N protocol. ARQ is a control protocols for transmission of data over noisy or unreliable communication network such as ethernet. They are named so because they provide for automatic retransmission of frames that are corrupted or lost during transmission. ARQ is also called Positive Acknowledgement with Retransmission (PAR).
</td>
</tr>
<tr>
    <td>Multiplexing</td>
    <td> makes it possible for several network protocols (e.g. IP, IPX, Decnet, . EtherType, 802.1Q VLAN and Appletalk) to coexist within a multipoint network and to be transported over the same network medium.</td>
</tr>
<tr>
    <td>Hardware control</td>
    <td>controls the hardware responsible for interaction with the wired, optical or wireless transmission medium.
</td>
</tr>
</table>

<!-- [:new](https://www.youtube.com/watch?v=_b4dXKB8Pt8) -->


<span style="display:none">
- allows upper layers to access media (Framing)
- Controls how data is placed and recieved from media (MAC) and Error detection
- it is involved in physical addressing using the MAC address. data units on this layer are called frames
</span>

---

## Media Access Control (abstraction to hardware) MAC:

MAC is the lower sublayer of the DLL. It is responsible for the transmission of data packets to and from the  NIC, and to and from another remotely shared channel. It is also involved in flow control and multiplexing for the transmission medium.

MAC sublayer provides a control abstraction of the physical layer such that the complexities of physical link control are invisible to the LLC and upper layers of the network stack. Thus any LLC sublayer (and higher layers) may be used with any MAC. In turn, the medium access control block is formally connected to the PHY via a media-independent interface.

---

## MEDIA ACCESS CONTROLLER FUNCTIONS
<div id="l2MAC-functions" class="interactive-functions grid"></div>

<table style="display:none">
    <thead>
        <tr>
            <th>Funtion</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> flow control</td>
            <td>it determines the speed at which data can be transfered between two devices on the local network measured in bits/second</td>
        </tr>
        <tr>
            <td>
                multiplexing
            </td>
            <td>
                Allowing multiple protocols to run on the same medium
            </td>
        </tr>
        <tr>
            <td>full-duplex logical communication channel </td>
            <td>The MAC layer emulates a full-duplex logical communication channel in a multi-point network. This channel may provide unicast, multicast or broadcast communication service.</td>
        </tr>
        <tr>
            <td>Error Detection</td>
            <td>
                Generates  and checks the Frame Check Sequence (FCS) in the header for errors and  discard malformed frames <a href="">check header parts for more information</a>.
            </td>
        </tr>
        <tr>
            <td>Media Access</td>
            <td>It controls when devices on a network can send data and when to wait with mechanisms such as  csma/cd, csma/ca and Token Ring For topologies with a collision domain (bus, ring, mesh, point-to-multipoint topologies). This necessary to avoid collisions of data which corrupts its integrity.  Additionally, the MAC is also responsible for compensating for collisions by initiating retransmission if a jam signal is detected. retransmission and backoff functions
            </td>
        </tr>
        <tr>
            <td>
                Mac Addressiing for Ethernet 802.3
            </td>
            <td>Uses the device's MAC address to identify devices on a network</td>
        </tr>
        <tr>
            <td>
                Framing
            </td>
            <td>
                It encapsulates and decapsulates packets into frames and back, by providing a Header (Preamble+SFD) and Trailer (FCS) (See header parts for more information). Then forwards the data to the physical layer as soon as the appropriate channel access method permits. <br> <br>
                When receiving data from the physical layer, the MAC block ensures data integrity by verifying the sender's frame check sequences, and strips off the sender's preamble and padding before passing the data up to the higher layers. it also provides the interframe gap (IFG).
            </td>
        </tr>
    </tbody>
</table>


---

## parts of a Frame header

<table >
 <tbody>
<tr>
  <td colspan="9">Size(Bytes)</td>
 </tr>
 <tr>
  <td>7</td>
  <td>1</td>
  <td>6</td>
  <td>6</td>
  <td>2</td>
  <td>2</td>
  <td>46 - 1500</td>
  <td>4</td>
  <td></td>
 </tr>
 <tr>
  <td><div class="header__unit">Preamble</div><div class="header__unit__description hidden">  </div></td>
  <td><div class="header__unit">SFD</div><div class="header__unit__description hidden"> </div></td>
  <td><div class="header__unit">Dest MAC</div><div class="header__unit__description hidden">  </div></td>
  <td><div class="header__unit">Src MAC</div><div class="header__unit__description hidden"> </div></td>
  <td><div class="header__unit">TPID</div><div class="header__unit__description hidden">  </div></td>
  <td><div class="header__unit">TCI</div><div class="header__unit__description hidden"> </div></td>
  <td><div class="header__unit">Payload</div><div class="header__unit__description hidden"> </div></td>
  <td><div class="header__unit">CRC/FCS</div><div class="header__unit__description hidden"> </div></td>
  <td><div class="header__unit">Inter Packet gap</div></td>
 </tr>
</tbody>
<tfoot>
<tr>
    <td colspan="9"> </td>
</tr>
</tfoot>
</table>


<table style="display:none">
<tr><td>Start Frame Delimiter (SFD) </td><td>is the 8-bit (1-byte) value marking the end of the preamble of an Ethernet frame. The SFD is immediately followed by the destination MAC address. It has the value 10101011.</td>
</tr>
<tr><td>preamble</td> <td>of an Ethernet frame consists of a 56-bit (7-byte) pattern of alternating 1 and 0 bits, which allows devices on the network to easily detect a new incoming frame. The SFD is designed to break this pattern, and signal the start of the actual frame.</td>
</tr>


<tr>
    <td>header startFrame</td>
    <td>8ytes(signals the reciever that data is on its way), Address=12bytes(source and destionation of file), type=2bytes(type of data) trailer</td>
</tr>
<tr><td>FCS</td><td>=4bytes(frame check sequence)</td></tr>
<tr>
    <td>stop frame=optional </td>
    <td>LLC: prepares data for transmission frames the network layer packet identifies network layer protocols</td>
</tr>
<tr>
  <td>MAC: addresses the frame marks the beginning and end of a frame</td></tr>
</table>

<!-- ![ethernetFrame](images\EthernetFrameFormat.png) -->


parts:

<table style="display:none" border="0" cellpadding="0" cellspacing="0" width="1157" style="border-collapse:
 collapse;table-layout:fixed;width:869pt">
 <colgroup><col class="xl65" width="108" style="mso-width-source:userset;mso-width-alt:3949;
 width:81pt">
 <col class="xl65" width="56" style="mso-width-source:userset;mso-width-alt:2048;
 width:42pt">
 <col class="xl65" width="86" style="mso-width-source:userset;mso-width-alt:3145;
 width:65pt">
 <col class="xl145" width="302" style="mso-width-source:userset;mso-width-alt:11044;
 width:227pt">
 <col class="xl65" width="79" style="mso-width-source:userset;mso-width-alt:2889;
 width:59pt">
 <col class="xl65" width="113" style="mso-width-source:userset;mso-width-alt:4132;
 width:85pt">
 <col class="xl65" width="413" style="mso-width-source:userset;mso-width-alt:15104;
 width:310pt">
 </colgroup><tbody><tr height="20" style="height:15.0pt">
  <td height="20" class="xl65" width="108" style="height:15.0pt;width:81pt"></td>
  <td class="xl65" width="56" style="width:42pt"></td>
  <td class="xl65" width="86" style="width:65pt"></td>
  <td class="xl144" width="302" style="width:227pt">Part</td>
  <td class="xl67" width="79" style="width:59pt">Size (Bytes)</td>
  <td class="xl67" width="113" style="width:85pt">Code</td>
  <td class="xl68" width="413" style="width:310pt">Description</td>
 </tr>
 <tr height="80" style="height:60.0pt">
  <td colspan="3" rowspan="2" height="120" class="xl159" width="250" style="border-right:
  .5pt solid black;border-bottom:.5pt solid black;height:90.0pt;width:188pt">Preamble
  (MAC)</td>
  <td class="xl69" width="302" style="border-left:none;width:227pt">PLCP</td>
  <td class="xl70" width="79" style="width:59pt">7</td>
  <td class="xl70" width="113" style="width:85pt">10101010</td>
  <td class="xl71" width="413" style="width:310pt">allows devices on the network to
  easily detect a new incoming frame. The alternating 1 and 0 bits allows
  devices on the network to easily synchronize their receiver clocks, providing
  bit-level synchronization.<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <tr height="40" style="height:30.0pt">
  <td height="40" class="xl72" width="302" style="height:30.0pt;border-left:none;
  width:227pt">Start Frame Delimiter (SFD)</td>
  <td class="xl73" width="79" style="width:59pt">1</td>
  <td class="xl73" width="113" style="width:85pt">10101011</td>
  <td class="xl74" width="413" style="width:310pt">Provides byte-level
  synchronization and to mark a new incoming frame.<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <tr height="52" style="mso-height-source:userset;height:39.0pt">
  <td rowspan="11" height="969" class="xl164" width="108" style="border-bottom:.5pt solid black;
  height:726.75pt;border-top:none;width:81pt">Ethernet Frame, 64-1518 Bytes</td>
  <td rowspan="7" class="xl164" width="56" style="border-bottom:.5pt solid black;
  border-top:none;width:42pt">Header<br>
    LLC</td>
  <td rowspan="2" class="xl164" width="86" style="border-bottom:.5pt solid black;
  border-top:none;width:65pt">Mac Addresses</td>
  <td class="xl75" width="302" style="border-left:none;width:227pt">Destintion (DA)</td>
  <td class="xl73" width="79" style="width:59pt">6</td>
  <td class="xl73" width="113" style="width:85pt">01:80:C2:00:00:01</td>
  <td class="xl74" width="413" style="width:310pt">Globally assigned multicast
  destination address</td>
 </tr>
 <tr height="65" style="mso-height-source:userset;height:48.75pt">
  <td height="65" class="xl76" width="302" style="height:48.75pt;border-left:none;
  width:227pt">Source (SA)</td>
  <td class="xl73" width="79" style="width:59pt">6</td>
  <td class="xl73" width="113" style="width:85pt">00:00:00:00:00</td>
  <td class="xl74" width="413" style="width:310pt">The machine the<span style="mso-spacerun:yes">&nbsp; </span>stuff is coming from</td>
 </tr>
 <tr height="84" style="mso-height-source:userset;height:63.0pt">
  <td height="84" class="xl146" width="86" style="height:63.0pt;border-top:none;
  border-left:none;width:65pt">802.1Q VLAN Tag (optional)<br>
    </td>
  <td class="xl152" width="302" style="border-top:none;border-left:none;width:227pt">Tag
  Protocol ID (TPID)</td>
  <td class="xl149" width="79" style="border-top:none;border-left:none;width:59pt">2</td>
  <td class="xl141" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl141" width="413" style="border-top:none;border-left:none;width:310pt">set
  to 0x8100 for 802.1Q</td>
 </tr>
 <tr height="32" style="mso-height-source:userset;height:24.0pt">
  <td rowspan="3" height="86" class="xl147" width="86" style="border-bottom:.5pt solid black;
  height:64.5pt;width:65pt">Tag Control Information (TCI)</td>
  <td class="xl152" width="302" style="border-top:none;border-left:none;width:227pt">Priority
  Code Point (802.1p) 3bit</td>
  <td rowspan="3" class="xl164" width="79" style="border-bottom:.5pt solid black;
  border-top:none;width:59pt">2</td>
  <td class="xl141" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl141" width="413" style="border-top:none;border-left:none;width:310pt">Quality
  of service class of service, if it needs priority</td>
 </tr>
 <tr height="25" style="mso-height-source:userset;height:18.75pt">
  <td height="25" class="xl153" width="302" style="height:18.75pt;border-top:none;
  border-left:none;width:227pt">DEI (Discard Eligibility Indicator)<span style="mso-spacerun:yes">&nbsp; </span>Canonical Format Indicator 1Bit</td>
  <td class="xl149" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl141" width="413" style="border-top:none;border-left:none;width:310pt">Congestion</td>
 </tr>
 <tr height="29" style="mso-height-source:userset;height:21.75pt">
  <td height="29" class="xl153" width="302" style="height:21.75pt;border-top:none;
  border-left:none;width:227pt">VLAN ID (VID) 12Bit</td>
  <td class="xl149" width="113" style="border-top:none;border-left:none;width:85pt">&nbsp;</td>
  <td class="xl74" width="413" style="width:310pt">up to 4094 VLANs, 0x000 and
  0xFFF are reserved</td>
 </tr>
 <tr height="163" style="mso-height-source:userset;height:122.25pt">
  <td height="163" class="xl147" width="86" style="height:122.25pt;border-left:none;
  width:65pt">802.3 Ethertype (Length)</td>
  <td class="xl154" width="302" style="border-left:none;width:227pt">ARP;<br>
    Ethernet II (DIX) w IPv4/6;<br>
    Novell raw IEEE 802.3 non-standard variation;<br>
    IEEE 802.2 Logic Link Control (LLC);<br>
    IEEE 802.2 Subnetwork Access Protocol (SNAP) frame;</td>
  <td class="xl73" width="79" style="width:59pt">2</td>
  <td class="xl73" width="113" style="width:85pt">0x8808</td>
  <td class="xl74" width="413" style="width:310pt">0x0800: 1pv4<br>
    0x86DD: ipv6<br>
    0x0806: ARP<br>
    </td>
 </tr>
 <tr height="71" style="mso-height-source:userset;height:53.25pt">
  <td rowspan="2" height="114" class="xl159" width="56" style="border-bottom:.5pt solid black;
  height:85.5pt;border-top:none;width:42pt">Payload</td>
  <td rowspan="2" class="xl166" width="86" style="border-bottom:.5pt solid black;
  width:65pt">&nbsp;</td>
  <td class="xl150" width="302" style="width:227pt">Data</td>
  <td class="xl73" width="79" style="width:59pt">46-1500</td>
  <td class="xl73" width="113" style="width:85pt">varies</td>
  <td class="xl74" width="413" style="width:310pt">&nbsp;</td>
 </tr>
 <tr height="43" style="mso-height-source:userset;height:32.25pt">
  <td height="43" class="xl151" width="302" style="height:32.25pt;width:227pt">Padding</td>
  <td class="xl73" width="79" style="width:59pt">42</td>
  <td class="xl73" width="113" style="width:85pt">0x00</td>
  <td class="xl74" width="413" style="width:310pt">&nbsp;</td>
 </tr>
 <tr height="360" style="height:270.0pt">
  <td rowspan="2" height="405" class="xl164" width="56" style="border-bottom:.5pt solid black;
  height:303.75pt;border-top:none;width:42pt">Trailer MAC</td>
  <td class="xl148" width="86" style="border-left:none;width:65pt">&nbsp;</td>
  <td class="xl81" width="302" style="border-left:none;width:227pt">Frame Check
  Sequence (CRC) <br>
    MAC<br>
    Cyclic reduncdancy check</td>
  <td class="xl73" width="79" style="width:59pt">4</td>
  <td class="xl73" width="113" style="width:85pt">varies</td>
  <td class="xl74" width="413" style="width:310pt"><span style="mso-spacerun:yes">&nbsp;</span>allows detection of corrupted data within
  the entire frame as received on the receiver side. The standard states that
  the FCS value is computed as a function of the protected MAC frame fields:
  source and destination address, length/type field, MAC client data and
  padding (that is, all fields except the FCS) using the left shifting CRC32
  BZIP2 (poly = 0x4C11DB7, initial CRC = 0xFFFFFFFF, CRC is post complemented,
  verify value = 0x38FB2284). The standard states that data is transmitted
  least significant bit (bit 0) first, while the FCS is transmitted most
  significant bit (bit 31) first.[3]:section 3.2.9 An alternative is to
  calculate a CRC using the right shifting CRC32 (poly = 0xEDB88320, initial
  CRC = 0xFFFFFFFF, CRC is post complemented, verify value = 0x2144DF1C), which
  will result in a CRC that is a bit reversal of the FCS, and transmit both
  data and the CRC least significant bit first, <br>
    <br>
    A parity bit check. n bits + 1 exclusive or on the bits, if there isnt a
  match up there is an error.</td>
 </tr>
 <tr height="45" style="mso-height-source:userset;height:33.75pt">
  <td height="45" class="xl148" width="86" style="height:33.75pt;border-left:none;
  width:65pt">&nbsp;</td>
  <td class="xl142" width="302" style="border-left:none;width:227pt">Inter-frame
  gap</td>
  <td class="xl73" width="79" style="width:59pt">12</td>
  <td class="xl74" width="113" style="width:85pt">97 Nanoseconds</td>
  <td class="xl74" width="413" style="width:310pt"><span style="mso-spacerun:yes">&nbsp;</span>idle time between packets. After a packet
  has been sent, transmitters are required to transmit a minimum of 96 bits (12
  octets) of idle line state before transmitting the next packet.<span style="mso-spacerun:yes">&nbsp;</span></td>
 </tr>
 <!--[if supportMisalignedColumns]-->
 <tr height="0" style="display:none">
  <td width="108" style="width:81pt"></td>
  <td width="56" style="width:42pt"></td>
  <td width="86" style="width:65pt"></td>
  <td width="302" style="width:227pt"></td>
  <td width="79" style="width:59pt"></td>
  <td width="113" style="width:85pt"></td>
  <td width="413" style="width:310pt"></td>
 </tr>
 <!--[endif]-->
</tbody></table>

<table style="display:none">
<tr><td>Preamble</td><td>: 7 bytes 101010 of an Ethernet frame consists of a 56-bit (7-byte) pattern of alternating 1 and 0 bits, which allows devices on the network to easily detect a new incoming frame. The SFD is designed to break this pattern, and signal the start of the actual frame.</td>
</tr><tr><td>SFD 1 byte</td><td>: 101011 is the 8-bit (1-byte) value marking the end of the preamble of an Ethernet frame. The SFD is immediately followed by the destination MAC address. It has the value 10101011.</td>
</tr><tr><td>Dest Mac</td><td>: 6 bytes where to send to </td>
</tr><tr><td>Source Mac</td><td>: 6 bytes where it came from </td>
</tr><tr><td>Ether type</td><td>: is it ipv4=0x0800, ipv6=Ox86DD or arp=0x0806?</td>
</tr><tr><td>Payload</td><td>: 46-1500 bytes</td>
</tr><tr><td>Cyclic Redundancy Check(CRC)/frame check sequenceFCS</td><td>:  (4 bytes) ensure there is not errors between frames). a form of parity check, the bits sent is not the same as the one recieved </td>
</tr><tr><td>Interpacket gap</td><td>: UPDATE</td>
</tr><tr><td>TPID (2 Bytes) </td><td>: UPDATE</td>
</tr><tr><td>Tag Control Information</td><td>: PCP (3bits), DEI (1bit), VID(12 Bits)</td>
</tr>

</table>

---

## Datalink protocols

There are 2 types of protocols. Noiseless channels and noisy channel which is what stop and wait ARC and go-back-n ARQ.

<div id="l2-protocols" class="interactive-protocols flex flex--column"></div>

<!-- ![Ethernet Field Protocols](images\EthernetFieldProtocolNumbers.png) -->

<table style="display:none"><tr>
  <td>ARP</td>
  <td>Address Resolution Protocol</td>
  <td>a procedure for mapping a dynamic Internet Protocol address (IP address) to a permanent physical machine address in a local area network (LAN).</td>
</tr>
<tr>
  <td>HDLC</td>
  <td>High-Level Data Link Control</td>
  <td>is a bit-oriented code-transparent synchronous data link layer protocol used to deliver error-free data to the intended destionation device. it doesnt have a type field, and is router specific, so two different  a cisco router.

  </td>
</tr>
<tr>
  <td>PPP</td>
  <td>Point to point Protocol</td>
  <td>protocol between two routers directly without any host or any other networking in between. It can provide connection authentication, transmission encryption,[1] and compression. <br><br>
PPP is used over many types of physical networks, including serial cable, phone line, trunk line, cellular telephone, specialized radio links, and fiber optic links</td>
</tr>
<tr>
  <td>frame relay</td>
</tr>
<tr>
  <td>Ethernet 802.3</td>
</tr>
<tr>
  <td>Wireless 802.11</td>
</tr>
</table>

---

## excercise
- To check the mac address of your network interface card open the command line terminal and type:
<pre>
getmac
:: or
ipconfig /all
</pre>
- To see an address table of all machines on the local network type the following in the command line:
<pre>ARP -a</pre>

---

[questions](https://www.sanfoundry.com/computer-networks-questions-answers-data-link-layer/)
</section>
<!-- 1 -->
<section>
  #  L1 PHYSICAL LAYER'


## KEY TERMS


- <b>Bit stream</b>:The PDU of the physical layer is bits transmitted as electrical impulses through a medium such as copper wire.
- <b>Computer Network</b>: Local Area network Wide Area network Personal Area Network
- <b>Network Topology</b>: Describe how networks are configured. Networks can be configured in various ways such as: Star; ring; bus; mesh.
- <b>Network Architecture</b>: Describes the relationship between hosts on a network. They can either be peer-to-peer or client-server
- <b>Network Access Point (NAP)</b>: a device used by a host machine to access the network
- <b>fault tolerance</b>: a networks capacity to remain functional as a result of faults in the network. some topologies such as mesh are more fault tolerant than others such as bus.
- <b>links transmission capacity</b>: the speed at which data can be transmitted over a network usually measured in bits/second.
- <b>Switching</b>: Describes how network devices deliver data over a network. Circuit Switching is stable whereas Packet Switching is more flexible


---

## Intro to L1 Physical Layer

The physical includes all the hardware and physical as well as wireless devices needed to create a network such as power plugs connectors receivers transceivers. It also defines how data is physically transmitted. i.e. as electrical impulses through copper cables; as light through fiberoptic; or as wireless radio waves such as bluetooth & GSM.
<span style="display:none"> It is responsible for transmitting data between hosts on a network either through electrical impulses through copper wires light impulses through fiberoptic cables or radio waves for wireless transmission or mechanical. </span>The physical layer is usually the first layer to be investigated when troubleshooting network problems. This layer does not have any associated protocols but is crucial for creating a computer network.

<embed src="https://www.youtube.com/embed/hRr20m10NLw">

---

## PHYSICAL LAYER FUNCTIONS

<div id="l1-functions" class="interactive-functions grid"></div>

---

<h2>Components of a Network</h2>

<embed src="https://www.youtube.com/embed/Itwk3BJ4GPY"></embed>

<table>
  <caption></caption>
  <thead>
    <tr>
      <th>Component</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>Edge</td>
    <td>a host on the network</td>
    <td>PC Laptop Tablet Server</td>
  </tr>
  <tr>
    <td> Access networks</td>
    <td>the medium through which data is transmitted </td>
    <td>such as DSL Ethernet fiberoptic wireless 5G etc.</td>
  </tr>
  <tr>
    <td>Core</td>
    <td>Devices responsible for delivering data from from source to destination. </td>
<td>routers and switches.</td>
</tr>
</tbody>
</table>

![internet](http://niau.org/wordpress/wp-content/uploads/2010/03/6arch.jpg)

---

<ul>
  <li><em>circuit switching</em>: dedicated circuit for every connect between the sender and receiver. connection oriented e.g. traditional phone call. good for real-time communication</li>
<li>  <em>packet switching</em>: all the data is split into chunks and may traverse different routes to the target destination arriving at different times. more flexible and efficient fault tolerant.</li></ul>


## Types of Access Network

As discussed data can be transmitted through various mediums. see the table below for a list of common mediums. The main mediums are wired (ethernet fiberoptic) and wireless(802.11 802.15 GSM).


<table>
<thead>
  <tr>
    <th>Connection</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Ethernet(802.3)</td>
    <td>Wired</td>
    <td>This is generally a local area network (LAN) technology with some wide area network (WAN) applications. Physical connections are made between nodes and/or infrastructure devices (hubs switches routers) by various types of copper or fiber cable. 802.3 is a technology that supports the IEEE 802.1 network architecture. 802.3 also defines LAN access method using CSMA/CD.</td>
  </tr>
  <tr>
    <td>Universal Serial Bus (USB)</td>
    <td>Wired</td>
    <td>USB was designed to standardize the connection of peripherals to personal computers both to communicate with and to supply electric power. It has largely replaced interfaces such as serial ports and parallel ports and has become commonplace on a wide range of devices. </td>
  </tr>
  <tr>
    <td>Digital Subscriber Line (DSL)</td>
    <td>Wired</td>
    <td>a family of technologies that are used to transmit digital data over telephone lines. In telecommunications marketing the term DSL is widely understood to mean asymmetric digital subscriber line (ADSL) the most commonly installed DSL technology for Internet access.

DSL service can be delivered simultaneously with wired telephone service on the same telephone line since DSL uses higher frequency bands for data.</td>
  </tr><tr>
    <td>Wireless (802.11)</td>
    <td>Wireless</td>
    <td>IEEE 802.11 is part of the IEEE 802 set of local area network (LAN) protocols and specifies the set of media access control (MAC) and physical layer (PHY) protocols for implementing wireless local area network (WLAN) Wi-Fi computer communication in various frequencies including but not limited to 2.4 GHz 5 GHz 6 GHz and 60 GHz frequency bands.</td>
  </tr>
  <tr>
    <td>Long-Term Evolution (LTE)</td>
    <td>Wireless</td>
    <td>a standard for wireless broadband communication for mobile devices and data terminals based on the GSM/EDGE and UMTS/HSPA technologies. It increases the capacity and speed using a different radio interface together with core network improvements</td>
  </tr><tr>
    <td>Bluetooth (802.15)</td>
    <td>Wireless</td>
    <td></td>
  </tr><tr>
    <td>Global System for Mobile Communications (GSM)</td>
    <td>Wireless</td>
    <td>describe the protocols for second-generation (2G) digital cellular networks used by mobile devices such as mobile phones and tablets. It was first deployed in Finland in December 1991.[2] By the mid-2010s it became a global standard for mobile communications achieving over 90% market share and operating in over 193 countries and territories.[3]</td>
  </tr>
</tbody>
</table>

---


## [NETWORK Topologies](https://www.youtube.com/watch?v=uSKdjjw5zow)

Network Topology describes the layout of devices connected on a network. topologies can be described based on their physical layout or logical layout (how data flows through the network:

<embed src="https://www.youtube.com/embed/zbqrNg4C98U"></embed>

<table >
  <thead>
    <tr>
      <th>Topology</th>
      <th>Description</th>
      <th>Pros</th>
      <th>Cons</th>
      <th>Example (will be a picture)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bus</td>
      <td>All data between nodes in the network is transmitted over this common transmission medium and is able to be received by all nodes in the network. A signal containing the address of the intended receiving machine travels from a souce machine in both direction to all machines connected to the bus until it finds the intended recipient</td>
      <td>
        <ul>
          <li>only wire</li>
          <li>cheap </li>
          <li>suited for temporary network </li>
          <li>node failures does not affect others</li>
        </ul>
      </td>
      <td>Not fault tolerant (No redundancy) Limited cable length no security</td>
      <td><img src="images\svg\bus.svg" ></td>
    </tr>
    <tr>
      <td>Ring</td>
      <td>it is a bus topology in a closed loop Peer-to-peer LAN topology two connections: one to each of its nearest neighbors unidirectional Sending and receiving data takes place with the help of a TOKEN which is passed throughout the network and whichever machine has it can send data.</td>
      <td>Better than bus topology can cause bottleneck due to weak links all nodes with equal access</td>
      <td>unidirectional. single point failure will affect the whole network the higher the load the lower the performance no security</td>
      <td><img src="images\svg\ring.svg" ></td>
    </tr>
    <tr>
      <td>Star</td>
      <td>Every node is connected to a central node called a hub/switch centralised management all traffic must pass through the hub/switch which is responsible for routing data to its intended destination. two or more star topologies can be connected via a repeater. wireless Networks use a star topology benefits is if one computer fail the rest can still access. disadvantage is if the device fails all other devices cant access the network called a single point of failure
</td>
      <td>easy to design and implement centralised administration scalable</td>
      <td>Single point of failure in the hub/switch will affect the whole network bottlenecks due to overloaded hub/switch increased cost due to switch/hub</td>
      <td>
        <img src="images\svg\star.svg" >
      </td>
    </tr>
    <tr>
      <td>Mesh</td>
      <td>Each node is directly connected to every other node in the network and is fault tolerant and reliable</td>
      <td>Fault tolerant reliable</td>
      <td>Issues with broadcasting messages expensive and impractical for large networks</td>
      <td><img src="images\svg\mesh.svg" ></td>
    </tr>
    <tr>
      <td>Hybrid</td>
      <td>A combination of two or more topologies</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

---

## Networking aRCHITECTURE
<span style="display:none">Network architecture is a framework for the specification of a network's physical components and their functional organization and configuration its operational principles and procedures as well as communication protocols used.The type of protocol used by an application depends on the type of application architecture being used.
</span>
Network architecture describes the structure and classification of a distributed application. For example the applications architecture of the public switched telephone network (PSTN) has been termed the Intelligent Network. There are any number of specific classifications but all lie on a continuum between the dumb network (e.g. Internet) and the intelligent network (e.g. the telephone network).

A popular example of such usage of the term in distributed applications as well as PVCs (permanent virtual circuits) is the organization of nodes in peer-to-peer (P2P) services and networks. P2P networks usually implement overlay networks running over an underlying physical or logical network. These overlay networks may implement certain organizational structures of the nodes according to several distinct models the network architecture of the system

<embed src="https://www.youtube.com/embed/-0thZyLPoBM"></embed>

See the table below for a summary of the main types of network models

<table>
  <caption>Network Models</caption>
  <thead><tr>
    <th>Architecture</th>
    <th>Description</th>
  </tr></thead>
  <tbody>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Client%E2%80%93server_model"> client-server</a></td>
      <td>The most common architecture in which many clients (remote processors) request and receive service from a centralized server (host computer). Client computers provide an interface to allow a computer user to request services of the server and to display the results the server returns. This is used by data centres/cloud computing. protocols used by this layer include DNS and DHCP. <a href="https://www.youtube.com/watch?v=MTzCUA4suPs">big data internet of things cloud</a></td>
    </tr>
    <tr>
      <td><a href="https://en.wikipedia.org/wiki/Peer-to-peer">Peer-to-peer(P2P)</a></td>
      <td>direct communication between individual computers without the need of a server. it is difficult to manage. e.g. torrenting using FTP.</td>
    </tr>
    <tr>
      <td>Hybrid</td>
      <td>combines the strengths of client-server and P2P while covering their weaknesses. e.g. skype using VoIP</td>
    </tr>
  </tbody>
</table>

---

## excercises

- make a diagram of your own network be sure to inlcude edges cores and access networks and WAN DNS DHCP

## further investigations:

- [submarinecablemap](https://www.submarinecablemap.com/)
- ixp
</section>
<!--  -->
<script src="js/loader/pageLoader.js"> </script>
<script src="js/protocols/protocolsGenerator.js"></script>
<script src="js/layerFunctions/layerFunctionsGenerator.js"></script>
<script src='js/binDecAscii/logic3.js'></script>