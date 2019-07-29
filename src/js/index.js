import Highway from "@dogstudio/highway";
import Fade from "./Transitions";

const H = new Highway.Core ({
	transitions: {
		default: Fade
	}
});

// // File: main.js
// // Import Highway
// import Highway from '@dogstudio/highway';

// // Import Transitions
// import Fade from './transition.js';

// // Call Highway.Core once.
// const H = new Highway.Core({
//   transitions: {
//     default: Fade
//   }
// });