# Class 12: Add a Chart to Your Vote Tracker

<a id="top"></a>
# Today's Plan: Week 3, Tuesday Lecture

#### Quiz 7 will be published this afternoon, and will be due tomorrow (Wednesday) night.

- Announcements
  - Meeting fun: We'll need to clear our room for a meeting that starts at noon today. Hopefully this will be the last time we need to deal with that.
  - Thursday (6/29): First round of project pitches
  - Friday (6/30): Second round of project pitches & set project teams

- [JS Debugging with Aaron](#debugging) *[30 minutes]*

- [Code Review with Aaron & Sam](#codereview) *[45 minutes] or 10:15am stop*

*15 minute break*

- [CSS layout demo with guest instructor Brian Nations](#css)

- [\<canvas> and ChartJS with Sam](#chartjs) *[75 minutes]*


 **Learning Objectives**

 As a result of completing Day 12 of Code 201, students will:

 - Demonstrate understanding of how the \<canvas> element can be used, as demonstrated by observations of the instructional staff during class discussion and a quiz administered through Canvas.
 - Demonstrate the ability to read documentation to utilize a JavaScript library, as demonstrated by successful completion of the daily code assignment.

## Readings

- Read about the \<canvas\> API by looking at the MDN docs
- [Read this article on ChartJS](http://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
- [Look over the ChartJS documentation](http://www.chartjs.org/docs/)

<a id="debugging"></a>
## JS Debugging with Aaron [30 minutes]

Refer to Chapter 10 in the Duckett JS text. The big points in that chapter include the following:

- You know the old saying to 'Better to work smart than work hard'? This chapter is all about the 'working smart' part of things.

- Of course, keep in mind that you're up against a lot of people who work smart ***and*** work hard.

- We're only going to focus on the most important parts of this chapter, and cook it down to the most basic things that will help you to keep moving forward when you code.

- There's a lot of techniques you can use for debugging that are outlined in this chapter, and you should take time to experiment with all of them and see which ones work best with your cognitive workflow.

- Ultimately, you'll develop a favorite set of tools and trick that mesh with your cognitive processes, or you might have to fall in line with the standard debugging practices of an employer. There's many possible ways to do things, and none are really more 'right' or 'wrong' than any other in concept, but only in application and workflow efficiency.

- General remark: error messages are only useful to you when you actually look into the console. So, if that's not a regular part of your workflow, make it one.

- It's important to learn how to treat error messages as valuable pieces of information, not just red garbage that appears in your console. Learning to decode error messages points you to not only where they are, but also the most likely part of that line to cause the problem. The more practice you get, the more you can rapidly interpret messages and debug effectively.

- p.452: Order of execution (declarations vs. calls)
- p.453: Execution contexts (context vs. scope)
- p.454: The Stack
- p.456: Hoisting
- p.457: More on scope
- p.458: Understanding errors
- p.459: Error Objects [IMPORTANT!]
  - Error (general)
  - SyntaxError
  - ReferenceError
  - TypeError
  - RangeError
  - URIError
  - EvalError
- p.463: Debugging workflow
- p.472: More console methods *(Aside: console messages can get clunky, and you don't want to pollute production code with a lot of them, but they're very useful when constructing code. In particular, they provide a window into code that is executing in some local scope that cannot be inspected by hand in the globally-scoped console.)*
- p.472: Grouping messages
- p.475: console.assert()
- p.476: Breakpoints
- p.479: Debugger keyword
- p.480: Handling exceptions with `try`, `catch`, and `finally`
- p.484: Debugging tips [IMPORTANT!]
- p.485: Common errors [IMPORTANT!]

[-top-](#top)

<a id="codereview"></a>
## Code Review with Aaron & Sam [45 minutes]

The goal for today is to get everyone as close to possible to having yesterday finished. Ideally, we'll look at and fix someone's work that will allow us to put our new debugging skills to work. We'll need to put a hard stop on the end of code review at 10:15.

[-top-](#top)

<a id="css"></a>
## CSS layout demo with guest instructor Brian Nations

Brian is the CSS wizard you're heard Sam talk about. He's going to lead you through a CodePen demo this morning to give you some hands-on practice with doing page layout with CSS.

[-top-](#top)

<a id="chartjs"></a>
## ChartJS (with code demo)

**Read the following articles on the Canvas API.**

1. [Basic usage](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
2. [Drawing shapes with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
3. [Applying styles and colors](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
4. [Drawing text](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)

**Read this article on ChartJS**

- [Read this article on ChartJS](http://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
- Articles like this are often a good way to get an introduction to something new

**Look over the ChartJS documentation**

- [Look over the ChartJS documentation](http://www.chartjs.org/docs/)
- Students should get used to reading and deciphering documentation... and those who have outstanding writing skills can consider developing a specialty in technical writing.

[-top-](#top)
