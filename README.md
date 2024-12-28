## Vertical Navigation Component
A lightweight and customisable Web Component that creates a vertical navigation bar. This component leverages modern JavaScript and Shadow DOM for encapsulated styles and functionality, ensuring seamless integration into any project.

### Features
**Fixed Vertical Navigation:** Position the navigation on the left or right of the screen.
**Dynamic Slot Content:** Easily insert navigation links or other content using the <slot> element.
**Customisable Appearance:**
Set the navigation position with the side attribute (left or right).
Change link colours with the textColor attribute.
**Responsive Design:** Automatically hides on smaller screens (<768px).
### Installation
### 1. Include the Script
Add the following script to your project to include the component:

    <script src="https://cdn.jsdelivr.net/gh/<your-username>/<your-repository>@<version>/script.js"></script>
    
Replace <your-username>, <your-repository>, and <version> with the appropriate values.

### Usage
#### Basic Implementation
Include the <vertical-nav> component in your HTML:

<vertical-nav side="left" textColor="blue">
  <a href="#section1">Section 1</a>
  <a href="#section2">Section 2</a>
  <a href="#section3">Section 3</a>
</vertical-nav>

### Attributes
side:
* Position the navigation bar on the left or right side of the screen.
* Default: None (component will not be positioned until set).

textColor:
* Set the text colour for the links inside the navigation.
* Default: Browser's default link colour.

### Slot Content
The <slot> element allows you to insert custom content such as links:

<vertical-nav side="right" textColor="red">
  <a href="#about">About Us</a>
  <a href="#services">Our Services</a>
  <a href="#contact">Contact</a>
</vertical-nav>

## Example
### Full Example with Styles

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/gh/<your-username>/<your-repository>@<version>/script.js"></script>
  <title>Vertical Navigation Example</title>
</head>
<body>
  <vertical-nav side="left" textColor="green">
    <a href="#home">Home</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </vertical-nav>
  
  <div id="home" style="margin-top: 200px;">Home Section</div>
  <div id="portfolio" style="margin-top: 200px;">Portfolio Section</div>
  <div id="contact" style="margin-top: 200px;">Contact Section</div>
</body>
</html>

## Customisation
### Adjust the Component's CSS
Modify the component's styles by editing the template in the script.js file:
* Change default padding, margins, or borders.
* Adjust spacing and hover effects.
### Responsive Breakpoints
The component hides below 768px by default. You can modify this behaviour in the CSS:


@media (max-width: 768px) {
  :host {
    display: none;
  }
}
## Browser Compatibility
This component uses modern JavaScript and Web Components APIs. It is supported in the following browsers:
* Chrome: v67+
* Edge: v79+
* Firefox: v63+
* Safari: v10.1+
* Opera: v54+
For older browsers, use a polyfill for Web Components.

## Contributing
1. Fork the repository.
2. Create a feature branch: git checkout -b feature/your-feature.
3. Commit your changes: git commit -m 'Add your feature'.
4. Push to the branch: git push origin feature/your-feature.
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

### Author ###
Developed by Jerrell Niu
