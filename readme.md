# react-swipezor
A beautiful react swipe button compatible with both desktop and mobile. This button uses [react-swipeable](https://github.com/FormidableLabs/react-swipeable) to detect the swipe action.

<center>
<img src="https://zeus2198.github.io/asset/swipe-mock.gif" />
</center>

## Installation
```bash
npm install --save react-swipezor
```
or
```bash
yarn add react-swipezor
```
## Demo / Example
[Click here](https://zeus2198.github.io/react-swipezor)

## Options
| Key              | Type                 | Default | Description                                                                                                                                                                                                                            |
|------------------|----------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mainText         | `string` \| `react node` |         | Element that appears on button                                                                                                                                                                                                         |
| overlayText      | `string` \| `react node` |         | Element that appears on swipe overlay                                                                                                                                                                                                  |
| onSwipeDone      | `function`             |         | Callback that gets called when the button is swipped                                                                                                                                                                                   |
| reset            | `integer`            |         | If this value changes, the button is resseted to initial state, i.e., non-swiped state.                                                                                                                                                |
| caret | `string` \| `react node` |   | Element to serve as new caret, default is an image of arrow.
| classList        | `string`               | ''      | Class names that gets appended to main button element                                                                                                                                                                                  |
| overlayClassList | `string`               | ''      | Class names that gets appended to overlay element                                                                                                                                                                                      |
| caretClassList   | `string`               | ''      | Class names that gets appended to caret element                                                                                                                                                                                        |
| delta            | `integer`              | 10      | Minimum distance to swipe before swiping animation starts                                                                                                                                                                              |
| minSwipeWidth    | `float`              | 0.6     | Minimum width that a user needs to swipe till to change the button state to swipped state. Value ranges from `0-1`. For example, `0.6` means user needs to swipe atleast till 60% of total width of button to set it to swiped state. |
| minSwipeVelocity | `float`              | 0.6     | Other way to change button state to swiped is to swipe it quickly. If the swipe velocity is above this value then button is set to swiped state.  |

**Note**: Even if user swipes to lesser distance than the one specified by `minSwipeWidth` option, if his swipe velocity is above `minSwipeVelocity` the button state will be changed to swiped.


---
### Development
Firstly install the dependencies with `npm install` or `yarn install`.

Now make sure you are in root of the folder, use the following command to create a link locally, which is to be used in example project, using the following command
```bash
npm link
```
Now start the automatic rebuild for hot reloading purpose using the command:
```bash
npm start
```
Keep this terminal opened and move onto next step.

Now you need to start the example project, to do this make sure your current directory is `/example`, install its dependencies too using `npm install` or `yarn install` command. Now link react-swipezor to the example project using the command:
```bash
npm link react-swipezor
```
Now you can start the example project by running the command:
```
npm start
```
Now you are ready to make changes to `/src/index.js` file.
