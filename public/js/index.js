import Highway from '@dogstudio/highway';
import Fade from './Fade';

const H = new Highway.Core ({
	transitions: {
		default: Fade
	}
});