const textContainer = document.getElementById('textContainer');

// Example text for demonstration
const text = `
    Speed reading is a technique that allows you to read quickly while retaining comprehension. 
    It involves techniques such as minimizing subvocalization and using peripheral vision. 
    This UI will display text at a rate of 200 words per minute (WPM).
    Adjustments may be needed based on user feedback and readability considerations
	Speed reading is a technique that allows you to read quickly while retaining comprehension. 
    It involves techniques such as minimizing subvocalization and using peripheral vision. 
    This UI will display text at a rate of 200 words per minute (WPM).
    Adjustments may be needed based on user feedback and readability considerations
	Speed reading is a technique that allows you to read quickly while retaining comprehension. 
    It involves techniques such as minimizing subvocalization and using peripheral vision. 
    This UI will display text at a rate of 200 words per minute (WPM).
    Adjustments may be needed based on user feedback and readability considerations.
	UI will display text at a rate of 200 words may be needed based on user feedback
	Speed reading is a technique that allows you to Speed reading is a technique that 
	allows you to read Speed reading is a technique that allows you to
	It involves techniques such as minimizing subvocalization peed reading is a technique
	that Adjustments may be needed based on user feedback and UI will display text at a 
	rate of 200 Speed reading is a technique that allows you to read allows  feedback R T A S W G S 
	X G D E G C S D Y N D S S S G B DS S R B  S  H H F R  D E E Y B false
	This UI will display text at a rate of 200 words per minute (WPM).
    Adjustments may be needed based on user This UI will display text at 
	a rate of 200 words per minute (WPM). This UI will display text at a rate of
	200 words per minute (WPM).X G D E G C S D Y N D S S S G B DS S R B 
	S  H H F R  D E E Y B Adjustments may be needed based allows you to read Speed reading is a technique that allows you to
	It involves techniques such as minimizing 
	
	14 OOPS 05 duration()

 Abstraction:process of hiding implementation;
  |:-) @  3:22 abstraction ki adv java ki sambandam enti yes sir there is sambandam hai
Servlet is Interafce

why Interafces:
To achieve 100% abstract
after  1.8 based on requirement we go for interface

where :
every where in java
EVIDENCE go to API in java.lang pack we can see there are Interfaces

what exactly is Interface:
is SRS(Service Requirement Specification) but not implementation

 |:-) @  DJ duwwada jagannatham dialogue manishi oupadaale
 to achieve abstract we have t go for Interafces
 implementation is done by using class (backend developer)

 Interface is blueprint of class
 class is userdefined datatype
 Interface is keyword to create reference type
 interface is architecture
 in interface we cannt create obj coz it is not userdefined datatype
 i.e.w e cant instantiate 
 in interafces we can hav only abstact methods i.e. no implementation upto 1.8 version 
 after 1.8 we have onwards we hav default and static methods
 |:-) @ 25:35 awesome feature
 with implementation

 void addition()
 {

 }
 without implementation

 void addition();


 interface methods are by default public and abstract 

@ 27:00



  

`;

// Split the text into an array of words
const words = text.split(/\s+/);

// Calculate the delay between displaying each word (in milliseconds)
const delay = 60000 / 400; // 60000 ms (1 minute) / 200 WPM = 300 ms per word

// Function to display text at 200 WPM
function displayText() {
    let i = 0;
    const intervalId = setInterval(function() {
        if (i < words.length) {
            textContainer.textContent = words[i];
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, delay);
}

// Start displaying the text
displayText();


VideoDate: 1/05/2024...Duration :1:07:28
VideoName:34  Collections 01  Collections Introduction  VCube  Srikanth 360p.mp4


Why?
Organsing elememts structuring data in proper way based on a proper way
for transfer of data from(one place to another place in structured way ) UI to
 Database(MySQl) we use Collections
without Collections ther eis no application
it represents data in proper way 
Collections is a framework  
@ :-) 8:16 maya chessunnamaa mantram estunnamama no re 
@ :-) 9:48 dont join companies withiut collections interview 

Collections made Java Robust 

Collections Framework:
in java.util is collection of classes and interface

we can represernt data in key value pairs (Map interface)
we transfer data from DAO to database.

what exactly collections are:

groip of obbjests together inside a a single unit or object

@ :-) 21:28 Gumpulo Govinda

in collections we use objects only not primitive datatypes
unlike arrays 

arrrays vs collections

Arrays : 
fixed size
collections are growable 
@ 28:08 :-) pushpaka vimaanam

in arrys on homogenous 
collections are heterogenous
@ :-) 29:10 (approx)amavaasya punnami ki notes sir

wrapperObjects:Integer,Float,Byte etc,.

Collections are 100% objectOriented since no primitive datatypes

why collections:
readability,flexibility

if we go for arrays we need to know the size prior to usage  which is not possible always
collections hold both homo and heterogenous data
collection implements predefined DataStructures

Arrays vs Collections from Sri5Java notes

good about arrays is only performance since it is sequential and we 
use primitie so less data consumed
for dynamically changing data use Collections

collections have predefined methjods
@38:52 :-)  eat fivestar do nothing is concept
@  :-) 39:10 gurthu unte dabblu but baddakam aaye

@ :-) 40:40 check check
general meaning of collection is if we want to represent group of objects is collections

examples of java framework : spring hibernate etc 

where we use :

to store data in appliactions.
in banks we get datat by name id whuch is example for key value pairs

we need to understand Interfaces and classes to know more about collections

@ :-) 46:42 arre doubt unte nannu adagandi ra by 

interfaces and classes 

DAO is interface and we take DAOimplementer

preRequesite :interfaces and Abstraction

interface is SRS(Service REquirement Specitifaction) we achieve Abstraction

@ :-) @52:58 aunaa sir

@ :-) 53:23 how how how

54:00 listen again

if we  use class for ex ArrayList  but not interface
then inorder to give ArrayList 
we can do 
ArrayList al= new ArrayList  then one can eaily download our classes and 
he can easily convert them from .class to .java files by using Decompiler
and by using al.(anymethod) by this he can see our functionmaalities 


consider List in this we just provide Specitification

@ :-) 56:50 there is no upayogam.
ArrayList al = new ArrayList() security is lost
this concept is called Abstraction
and by Abstraction java is Secure 
@ :-) 59:00 DAO is not Davv or dove
DAO is interface

@ :-) goddelli chenulo paddattu 

Interfaces 
collection
List 
Queue FIFO
DeQue
Set
SortedSet
NavigableSet
Map(Key value pairs)

@ :-) 1:04:27 manalekkane sir em cheyyadu

we have Cursors:
Iterator
ListIterator
Enumeration



 