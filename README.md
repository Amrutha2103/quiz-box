# **Quiz Box**

[Click here to view the live project](https://amrutha2103.github.io/quiz-box/)

Quiz Box is a training platform for programmers where you can improve your skills with fun exercises and test your knowledge with programmer quiz questions.

The quiz provides Multiple Choice Questions (MCQs) and you will have to read all the given answers and click over the correct answer. You can use "Next" button to go to next questions in the quiz.

Interactive quizzes are content where a user answers questions and is then given a specific result or score. The result is based on a calculation of the user's interactions and the answers they provided for each question.

![This is an image](documentation/readme1.jpg)

## **Features**

### **Existing Features**

- Header

    * Featured at the top of the page, the header shows the game name: Quiz Box in a font that clearly contrasts with the background.
    * The header is also provided with a logo next to the game name.

![This is header image](documentation/readme2.jpg)

- Home Page

    * The Home Page displays the rules to participate in the quiz.
    * The page also has a "Play" button to start the quiz.

![This is home page image](documentation/readme-home.jpg)

- The Game Area

    * The game area provides multiple choice questions.
    * You will have to read all the given answers and click over the correct answer.
    * You cannot proceed to the next question before selection.
    * You can use "Next" button to go to next questions in the quiz.
    * You can click the "Home" and "Restart" button to go back to the Home page and restart the quiz after you start the game. 
    
![This is game area image](documentation/readme3.jpg)

- The Score Area

    * The user answers questions and is then given a specific result or score
    * The Javascript code compares the answer provided by the user with the correct answer.
    * The result is based on a calculation of the user's interactions and the answers they provided for each question.
    * This section provides a "Reload" button that the user can click to reload the quiz and play the game.

![This is score area image](documentation/readme4.jpg)

- The Timer

    * A timer is displayed at the top which is the time remaining to complete the quiz.
    * The timer in this project is set to 5 minutes.

![This is timer image](documentation/readme-timer.jpg)

### **Features to implement**

- When there is time, I would like to expand this quiz game to include the user's name.
- I would also include an option to go back to the previous questions to edit the answer if the user wishes.

## **Testing**

- I confirmed that the quiz results are always correct.
- I confirmed that the colors, fonts chosen and texts included are readable and easy to understand.
- I confirmed that all the buttons are provided action and redirected to the correct page.

### **Browser Compatibility**

- I tested the website on different browsers like Chrome, Edge and Firefox.

![This is Chrome image](documentation/readme-chrome.jpg)

![This is Edge image](documentation/readme-edge.jpg)

![This is Firefox image](documentation/readme-firefox.jpg)

### **Responsiveness**

- I confirmed that the project is responsive and looks good on all standard screen sizes using the devtools device toolbar.

![This is a mobile image](documentation/readme-mob.jpg)

![This is a tab image](documentation/readme-tab.jpg)

### **Validator Testing** 

- HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Famrutha2103.github.io%2Fquiz-box%2F).

  ![This is a html validator image](documentation/readme-index.jpg) 

  ![This is a html validator image](documentation/readme-quiz.jpg) 

- CSS
  * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Famrutha2103.github.io%2Fquiz-box%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

![This is a css validator image](documentation/readme-css.jpg) 

- JavaScript
  * No errors were found when passing through the official [JSHint JavaScript Validator](https://jshint.com/)

  ![This is a javascript validator image](documentation/readme-js.jpg) 

- Accessibility
  * I have checked the accessibility by running it through the lighthouse in devtools.

![This is an accesssibility test image](documentation/readme-accessibility.jpg)

### **Bugs**

- When I tested my project, I noticed that the game area was not responsive.
  - I fixed the issues using media queries.

![This is an error image](documentation/readme-testing.png) 

  - I removed the unused variable and fixed the issue.

## **Deployment**

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/Amrutha2103/quiz-box), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://amrutha2103.github.io/quiz-box/)

### Local Deployment

In order to make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/Amrutha2103/quiz-box.git`

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Amrutha2103/quiz-box)

## **Credits**


### **Content**

- The code to implement the timer was taken from [educative](https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript)


### **Media**

- The quiz logo image was taken from this site [Adobe stock](https://stock.adobe.com/search?k=quiz+logo)

