

gsap.registerPlugin(ScrollTrigger);
let scroller = document.querySelector("#scroller");

var mq = window.matchMedia("(min-width: 768px)");

// SmoothScrolling
var Scrollbar = window.Scrollbar;
let scrollPositionX = 0,
	scrollPositionY = 0,
	bodyScrollBar = Scrollbar.init(document.querySelector('#scroller'), { damping: 0.05, delegateTo: document });

bodyScrollBar.addListener(({ offset }) => {
	scrollPositionX = offset.x;
	scrollPositionY = offset.y;
});
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();



ScrollTrigger.scrollerProxy("body", {
	scrollTop(value) {
		if (arguments.length) {
			bodyScrollBar.scrollTop = value;
		}
		return bodyScrollBar.scrollTop;
	}
});
bodyScrollBar.addListener(ScrollTrigger.update);





