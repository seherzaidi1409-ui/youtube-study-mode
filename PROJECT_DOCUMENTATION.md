# BuildX Assignment 3: MVP Development and Product Pitch

## Project Title: YouTube Study Mode

### 1. Problem Statement

YouTube is a valuable learning platform where students can access educational videos, lectures, tutorials, and explanations. However, when students open YouTube to study, Shorts and unrelated recommendations can sometimes distract them from their original learning goal.

Completely blocking YouTube is not an ideal solution because students may genuinely need it for their studies. The problem is finding a way to make educational content accessible while reducing exposure to distracting sections of the platform.

**Problem statement:** How might we help students who use YouTube for studying stay focused on their learning goals while retaining access to educational content?

## 2. Target User

The primary target users are students who regularly use YouTube for academic purposes and sometimes get distracted by Shorts or unrelated recommendations.

The solution is particularly relevant to students who want to reduce distractions without completely blocking YouTube.

However, the problem does not affect every student in the same way. Interviews conducted during Assignment 2 showed that some students experienced distractions from Shorts and recommendations, while another primarily used YouTube for studying and did not consider it a major source of distraction.

## 3. Solution Hypothesis

My solution is **YouTube Study Mode**, a basic Chrome extension prototype that allows users to toggle selected distracting sections of YouTube on and off.

When Study Mode is enabled, the extension hides selected Shorts-related and recommendation-heavy sections. When it is disabled, the normal YouTube experience returns.

**Solution hypothesis:** If students who are distracted by Shorts and recommendations can hide selected sections while continuing to access educational videos, they may find it easier to stay aligned with their original study intentions.

This is a hypothesis that requires usability testing and further evaluation. The current prototype has not yet been shown to improve study focus or academic outcomes.

## 4. Core User Loop

The core user loop describes how a student interacts with the product:

1. **Open YouTube:** The student visits YouTube to access educational content.
2. **Enable Study Mode:** The student opens the extension popup and turns Study Mode on.
3. **Browse educational content:** Selected Shorts-related and recommendation-heavy sections are hidden, while the student can continue using YouTube.
4. **Continue studying:** The student uses the available educational content for their learning task.
5. **Disable Study Mode when needed:** The student can turn the feature off to return to the normal YouTube experience.

This loop is designed to be simple and user-controlled.

## 5. MVP / Product Description

The minimum viable product (MVP) is a basic Chrome extension built using HTML, CSS, JavaScript, and Chrome Extension Manifest V3.

### Core Features

- A popup interface for switching Study Mode on and off.
- Hiding of selected Shorts-related sections.
- Hiding of selected recommendation-heavy sections.
- A simple way to switch back to the normal YouTube experience.
- A lightweight prototype focused on the main problem rather than additional features.

### Technology Stack

- **HTML:** Popup structure and interface.
- **CSS:** Styling and hiding selected page sections.
- **JavaScript:** Toggle functionality and interaction with the YouTube page.
- **Chrome Extension Manifest V3:** Extension configuration and permissions.

### Product Link

GitHub repository: https://github.com/seherzaidi1409-ui/youtube-study-mode

The repository contains the prototype's source code and screenshots documenting its interface and behavior.

## 6. Screenshots and Proof of Work

The project includes screenshots showing:

- **Study Mode OFF:** The normal YouTube interface.
- **Study Mode ON:** The interface with selected distracting sections hidden.
- **Extension Popup:** The interface used to control Study Mode.

These screenshots provide visual evidence of the prototype's implementation and its main interaction.

## 7. Key Learnings

The project began with a problem exploration process rather than immediately building a solution. During Assignment 2, I interviewed three students about their experiences using YouTube for studying.

The interviews revealed that:

- Two of the three students described distractions involving Shorts or recommendations.
- One student did not consider YouTube a major distraction and primarily used it for educational purposes.
- Students have different study habits and use YouTube in different ways.
- Blocking YouTube completely could remove access to useful educational resources.

These findings helped me narrow the problem and focus on reducing selected distractions instead of preventing students from using YouTube altogether.

Building the MVP also helped me translate a problem statement into a working software prototype and think about how its usability could be tested.

## 8. Limitations and Next Steps

The current version is an early prototype, not a finished product.

### Limitations

- YouTube's page layout may change, which can affect how selected sections are detected or hidden.
- The prototype has not yet been evaluated through structured usability testing with students.
- It is not yet established whether using Study Mode reduces distractions or improves study outcomes.
- The current implementation focuses on selected interface sections rather than offering comprehensive distraction management.

### Next Steps

1. Test the extension with students who use YouTube for studying.
2. Collect feedback on ease of use and whether the selected sections are useful to hide.
3. Identify any interface elements that are hidden incorrectly or remain distracting.
4. Improve compatibility with YouTube's changing layout.
5. Evaluate whether the tool helps users remain aligned with their original study intentions.

## 9. Conclusion

YouTube Study Mode explores a practical way to address distractions that can occur when students use YouTube for educational purposes. Instead of blocking the platform completely, the prototype gives users a simple way to hide selected distracting sections while retaining access to educational content.

The main learning from this project is the importance of understanding users before building a solution, creating a small MVP that can be tested, and treating the solution as a hypothesis rather than assuming it will work.

**Project:** YouTube Study Mode  
**Repository:** https://github.com/seherzaidi1409-ui/youtube-study-mode  
**Product Pitch:** https://youtu.be/d549hqhhCq0
