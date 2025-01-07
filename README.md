# EZ Tabler Icon Picker

A flexible, easy-to-use icon picker for Tabler Icons.

![Description of image](./images/banner.png)

## Installation

Setup is straightforward:

1. Add **Tabler Icons** to your project.
2. Add **EZ Icon Picker** to your project.
3. Initialize EZ Icon Picker.

### Add the Required Files

Include the following links in your HTML file to load Tabler Icons and EZ Icon Picker:

```html
<!-- Tabler Icons CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/3.21.0/tabler-icons.min.css" integrity="sha512-XrgoTBs7P5YtpkeKqKOKkruURsawIaRrhe8QrcWeMnFeyRZiOcRNjBAX+AQeXOvx9/9fSY32dVct1PccRoCICQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- EZ Icon Picker CSS -->
<link rel="stylesheet" href="/dist/ez-icon-picker.css">
```

### Load EZ Icon Picker JavaScript

Add the following to load EZ Icon Picker:

```html
<!-- EZ Icon Picker JavaScript -->
<script src="/dist/ez-icon-picker.min.js" type="module"></script>
```

### Setup the Icon Picker

1.Add a div with a selector class, e.g., .icon-picker.

```html
<div class="icon-picker" data-name="icon"></div>
```

2.Initialize the picker by adding the following JavaScript:

``` javascript
<script>
    document.addEventListener('DOMContentLoaded', () => {
        new EzIconPicker({
            selector: '.icon-picker'
        });
    });
</script>
```

### Full Example Code

Here’s the complete HTML setup for the EZ Tabler Icon Picker:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Tabler Icons CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/3.27.1/tabler-icons.min.css"
        integrity="sha512-24pha7f9ovk2qSOeb9WkMiBXIlBFChRtCcsj1xt3fBGXySJtBVlBqYg46xK+oKgt0okLlZWcXulHvqIN45oTkg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- EZ Icon Picker CSS -->
    <link rel="stylesheet" href="/dist/ez-icon-picker.css">
    <title>Tabler Icon Picker</title>
</head>
<body>
    <!-- Icon Picker Element -->
    <div class="icon-picker" data-name="icon" data-icon="ti ti-home"></div>

    <!-- EZ Icon Picker JavaScript -->
    <script src="/dist/ez-icon-picker.iife.js" type="module"></script>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            new EzIconPicker({
                selector: '.icon-picker'
            });
        });
    </script>
</body>
</html>
```

### Properties

`data-name` - Specifies the name of the input field, useful for form submissions.

`data-icon` - Allows pre-selecting an icon by specifying its class name

## Example Usage

To create an icon picker with a default icon, use the following code:

``` html
<div class="icon-picker" data-name="icon" data-icon="ti ti-home"></div>
```
