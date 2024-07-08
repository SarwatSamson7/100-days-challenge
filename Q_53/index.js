//Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
//Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
var programmerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
var languages = programmerSkills.languages, frameworks = programmerSkills.frameworks, tools = programmerSkills.tools;
console.log("Language : ".concat(languages[0], ", Framework : ").concat(frameworks[0], ", Tool : ").concat(tools[0], " "));
