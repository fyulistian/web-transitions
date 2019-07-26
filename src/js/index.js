// import Highway from '/node_modules/@dogstudio/highway'
import Highway from '@dogstudio/highway';
import Fade from './transition';


const H = new Highway.Core ({
	transitions: {
		default: Fade
	}
});

// run("anonymous");