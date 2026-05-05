# Lab 5 - Starter
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, you wouldn't want to use a unit test to test this feature. Unit tests are for smaller parts of the application, not for testing multiple features. In this case, the message feature has a write and send that could be tested. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, you would want to use a unit test for this feature because checking the length of a message is a very specific single feature. You can have different test cases for the same feature, so if the test fails, you know your max message length is the problem, not some other feature. 
