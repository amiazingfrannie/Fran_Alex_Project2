
EXTRA-CREDIT- 
    We successfully added a valid word checker that compares the input word with our list of valid words (6 and 7 letters long)


WRITEUP:
- What were some challenges you faced while making this app?
    1. The most notable challenge we faced while making this app was related to how the on-screen keyboard and physcial keyboard manage input. Due to the order of our implementation, the DynamicGrid component was managing handling both the display logic and the keyboardPress logic. This made it so that when we initially implemented the on-screen keyboard, they did not have access to the same index variable which both referenced and controlled where the next letter should be placed. When used independently of one another, there were few bugs. However, if in a single line of input, a user opted to type using both keyboards while simultaneously backspacing, index issues would arise. 

- Given more time, what additional features, functional or design changes would you make
    1. Cache Data - Given more time, additional features that would be worth implementing would be a way to cache information including login data,  overall progress, and a resume feature.
    2. Customize Game Expereince - More features to how a user can play, where they can customize the number of letters a word may have, the number of guesses they want to have, or even a way to manage what types of words they could select from, almost like a category round.
    3. Add Functionality - Such as make the on-screen keyboard keys change their background color based 

- What assumptions did you make while working on this assignment?
    1. We wanted to make the UI components easier for the user
    2. The user would like to see our UI design

- How long did this assignment take to complete?
    1. This assignment took a collective 50-hours to complete. Between designing, researching, implementation, and fixing bugs.

