
## 5 Session

Session layer is important for connecting processeses running on diffrent stations over a network. It is  Involved in:

the presentation layer is responsible for translating data from one format into another e.g. bcpdi to ascii, and for converting the media i.e. text, html, jpg, mp4, mp3 into binary so that it can be converted into electrical signals over the physical layer.
Establishing, maintaining and terminating connections between two hosts.

supports multiple types of connections and authentication. and reconnection if an error should occure.

Session-layer services are commonly used in application environments that make use of remote procedure calls (<a href="">RPCs</a>) which is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network), which is coded as if it were a normal (local) procedure call, without the programmer explicitly coding the details for the remote interaction. That is, the programmer writes essentially the same code whether the subroutine is local to the executing program, or remote. This is a form of client–server interaction (caller is client, executor is server),

it checks user credentials e.g. username and password, assign numbers to session to identify them

Session support
Security
Logging onto a remote machine
e.g.
H.323 for VOIP (skype)
netbios to share files and printers over a network.
SSH. NFS
RPC

SSH, or Secure Shell, is a remote administration protocol that allows users to control and modify remote servers over the Internet. You might use it to connect with Github, or a remote web server. If this doesn’t sound familiar, you’ve probably not used it. Using Git as a version control system


Manages session and synchronizes data flow.
so that you can create a flow of communication back and forth

it is very similar to IPC, however it is more well structured, and doesnt just send packets. 

Each message is addressed to an RPC daemon listening to a port  on the remote system and each contains an identifier of the function to execute and the parameters to pass to the function.