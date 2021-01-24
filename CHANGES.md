1. Print date before every message from sebastian and natalia without adding new .say(...) or console.xxx(...) and also
   append tab (tabulator) to the start of original message. You can't modify the classes Man/Woman/Person/Tongue
   <br/>Expected output:
   > 4:13:02 PM\
   > Person tongue says:     Hello my name is Sebastian
```$xslt
In index.ts add requere(process) to access process.stdout.write() - equivalent to console log because of restrictions,
create method, that return date in required format. Print date by use process.stdout.write method before every delegation.    
```

1. Create a function which will return PersonDelegate. This function should contain all delegates which are available.
   Use log delegate for filling the Array<string> (which you can create in this file, for logging everything which will
   income from delegate). Apply delegates for both persons, for future work with logs.
```$xslt
Create new Delegate class, that implements PersonDelegate interface. Add function body to fill array of delegations (strings)
and create function that returns delegations array. In index.ts create Delegation instance and add it as parameter
to created perons - new man or woman instancions. After communication print all logs.
```

1. Change the classes for opportunity to specify name of created person. We wanna see name of person on conversation
   messages. <br/> Expected output:
   > 4:13:02 PM \
   > Sebastian's tongue says:     Hello my name is Sebastian
```$xslt
In class Person create private variable to store person name and set it in constructor - if name is defined, otherwise
name variable has default value -> "Person"

Extends tell function in Tongue class, if name check if name last character is s or not. By this contition add apostrophe
to right place. Eg. if name is mark, message will be: Mark's tongue say: message, but when name is Nicolas, message will
be: Nicolas' tongue say: ...

Extends Man and Woman constructor by non-mandatory parameter name and send it to parrent class by super method, like delegates.

In index.ts add Names to creating new instance of persons as second parameter.

```                                                                                                                                                           

1. Implement (move) whole functionality of index.ts to class World after World is created run the conversation and after
   conversation output all logs from the world don't break the functionality of assignments above, feel free to create
   new persons, messages
```
In index.ts create new class World. In World class create private method to get date at required format, and two public
methods, first to run communication between persons and second to print delegations.
    
Create an instantion of class Word and call its functions.
```
   
                                                                                                                                                            
                                                                                                                                                            
                                                                                                                                                            
                                                                                                                                                            
                                                                                                                                                            
                                                                                                                                                         