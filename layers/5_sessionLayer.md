<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# 5 SESSION LAYER

<div id="TOC">
TABLE OF CONTENT:
</div>

## KEY TERMS

- Session : The time between when the communication is opened and closed 
- Authentication
- Authorisation

---

<span style="display:none">
This is the layer responsible for opening and closing communication between the two devices. The time between when the communication is opened and closed is known as the session. The session layer ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.
The session layer also synchronizes data transfer with checkpoints. For example, if a 100 megabyte file is being transferred, the session layer could set a checkpoint every 5 megabytes. In the case of a disconnect or a crash after 52 megabytes have been transferred, the session could be resumed from the last checkpoint, meaning only 50 more megabytes of data need to be transferred. Without the checkpoints, the entire transfer would have to begin again from scratch. 
Usually, the main tasks of L5 is authentication and authorisation, downloads files as data packets, session management.
</span>


Session layer is important for connecting processeses running on diffrent stations over a network. It supports multiple types of connections and authentication. and reconnection if an error should occure.
See the table below for a list of its main functions:

It provides for full-duplex, half-duplex, or simplex operation, and establishes procedures for checkpointing, suspending, restarting, and terminating a session. In the OSI model, this layer is responsible for gracefully closing a session, which is handled in the Transmission Control Protocol at the transport layer in the Internet Protocol Suite.

<table>
<thead>
    <tr>
        <th>Purpose</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>    
<tr>
    <td>Establishing, maintaining and terminating connections</td>
    <td>Ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.</td></tr>
<tr>
    <td>Data transfer synchronisation </td>
    <td>it does this by creating checkpoints so that data transfer can resume in case the connection is terminated unexpectedly. without the checkpoints the whole process must start again.</td>
</tr>
<tr><td>Authenticaction and authorisation</td><td>it checks user credentials such as username and password</td></tr></tbody>
</table>

<embed src="https://www.youtube.com/embed/fWM-a3onIOk">

---

<br>
<br>


## SESSION LAYER PROTOCOLS


<table>
    <thead><tr>
        <th>Protocol</th>
        <th>Meaning</th>
        <th>Description</th>
    </tr></thead>
    <tbody>
        <tr>
            <td> H.323 for VOIP </td>
            <td>?</td>
            <td>
                H.323 is an ITU Telecommunication Standardization Sector (ITU-T) recommendation that describes protocols for the provision of audio-visual (A/V) communication sessions on all packet networks. H.323 provides standards for equipment, computers and services for multimedia communication across packet based networks and specifies transmission protocols for real-time video, audio and data details. used by applications such as skype.
            </td>
        </tr>
        <tr>
            <td> NetBIOS </td>
            <td> Network Basic Input Output System</td>
            <td>to share files and printers over a network.</td>
        </tr>
        <tr>
            <td> NFS </td>
            <td></td>
        </tr>
        <tr>
            <td> RPC </td>
            <td> Remote Procedure Call </td>
            <td>Session-layer services are commonly used in application environments that make use of remote procedure calls (<a href="">RPCs</a>) which is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network), which is coded as if it were a normal (local) procedure call<span style="display:none">, without the programmer explicitly coding the details for the remote interaction. That is, the programmer writes essentially the same code whether the subroutine is local to the executing program, or remote. </span> Each message is addressed to an RPC daemon listening to a port  on the remote system and each contains an identifier of the function to execute and the parameters to pass to the function. This is a form of client–server interaction (caller is client, executor is server),</td>
        </tr>
        <tr>
            <td>SSH</td>
            <td>Secure Shell</td>
            <td>
            Secure Shell, is a remote administration protocol that allows users to control and modify remote servers over the Internet. It is usually accessed from the command line and requires authentication (username and password) You might use it to connect with Github.
            </td>
        </tr>
        <tr>
            <td>PAP</td>
            <td>Password Authentication Protocol</td>
            <td></td>
        </tr>
        <tr>
            <td>L2TP</td>
            <td></td>
        </tr>
        
    </tbody>
</table>

<a href="">Prev</a>
<a href="">Next</a>

it is very similar to IPC, however it is more well structured, and doesnt just send packets. 

