const toggleRequestModal = () => {
	const requestModal = document.querySelector(".request-modal");
	requestModal.classList.toggle("request-modal__active");
};

const toggleWorkCategories = () => {
	const workToggleInner = document.querySelector(".work-toggle__inner");
	workToggleInner.classList.toggle("work-toggle__active");
};

const toggleItem = (className, toggableItemClass) => {
	const item = document.querySelector(toggableItemClass);
	item.classList.toggle(className);
};
