# Material-style inputs for Bootstrap 4

## Add material-style inputs to your project.

First, ensure you have included both Bootstrap and Jquery before you include this code.

Include either the SCSS (recommended) or CSS file in your project to style the ```.form-group.input-material``` class.

Include ```materializeInputs()``` jQuery method by including ```materialize-inputs.jquery.js```, preferably combining it with other javascript files or embedding it in the HTML document.

Make any Bootstrap form group with text inputs or a textarea material-style by adding the ```input-material``` class to the form-group element. Then add a ```<label>``` after the input. For example:

```html
<div class="form-group input-material">
    <input type="text" class="form-control" id="name-field" required>
    <label for="name-field">Name</label>
</div>
```

Finally, run the ```materializeInputs()``` method on a container, like so:

```javascript
// enable material-style inputs in entire body
$('body').materializeInputs();
```

And you're done!

## The ```.materializeInputs(selector)``` method

The method uses a delegated event handler to be more reliable in a changing DOM. This means the method is bound to a container element, and every time the event is fired within this element jQuery will check if the changed element matches the selector. For example, the following code listens for any changes in ```#contact-form``` and then runs every time either an input or text-area in a ```.input-material``` form-group is changed:

```javascript
    // enable material-style inputs in the contact-form
    $('#contact-form').materializeInputs(".input-material input, .input-material textarea");
```

By default the selector parameter is set to: ```"input, textarea"```.