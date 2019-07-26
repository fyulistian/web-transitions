// import Highway from '/node_modules/@dogstudio/highway'
import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transitions {
	in({from, to, done}) {
		const tl = new TimelineLite();
		tl.fromTo(to, 0.5, {left: '-100%', top: '50%'}, {left: 0%}).fromTo(
			to, 
			0.5, 
			{height: '2vh'}, 
			{
				height: '90vh', top: '10%', 
				onComplete: function() {
					from.remove();
					done();
				}
			}
		);
	}
	out({ from, done }) {
		done();
	}
}

export default Fade;

// const run = (user) => {
// 	console.log(`Hi .. [${user}]`);
// }

// run("anonymous");