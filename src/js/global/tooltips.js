function positionTooltip(el, tooltip) {
  const tooltipStyle = tooltip.style;
  if (tooltip.classList.contains('tooltip-global')) {
    const rect = el.getBoundingClientRect();
    tooltipStyle.top = `${rect.top + window.pageYOffset - (tooltip.offsetHeight) - 10}px`;
    tooltipStyle.left = `${rect.left + window.pageXOffset - (tooltip.offsetWidth / 2) + (el.offsetWidth / 2)}px`;
  } else {
    const top = el.offsetTop;
    const left = el.offsetLeft;
    const width = el.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const tooltipWidth = tooltip.offsetWidth;
    const centerEl = left + (width / 2);
    tooltipStyle.top = `${top - tooltipHeight - 10}px`;
    tooltipStyle.left = `${centerEl - tooltipWidth / 2}px`;
  }
}

function toggleTooltip(e, state) {
  if (typeof state !== 'boolean') throw new TypeError('State must be a boolean');
  let el = e.target;
  while (el.classList.contains('tip') === false) {
    el = el.parentElement;
  }
  const tooltipId = el.getAttribute('aria-describedby');
  const tooltip = document.getElementById(tooltipId);
  const tipIcon = el.querySelector('.fa-commenting-o');
  if (state === true) {
    positionTooltip(el, tooltip);
    tooltip.classList.add('fadeIn');
    if (tipIcon) {
      tipIcon.style.opacity = '0';
    }
  } else {
    tooltip.classList.remove('fadeIn');
    if (tipIcon) {
      tipIcon.style.opacity = '1';
    }
  }
}

let tipId = 1;

function makeElementAlive(element) {
  element.setAttribute('tabindex', '0');
  element.setAttribute('aria-describedby', `tooltip${tipId}`);
  element.setAttribute('aria-live', 'true');
  element.addEventListener('mouseover', (e) => toggleTooltip(e, true));
  element.addEventListener('focus', (e) => toggleTooltip(e, true));
  element.addEventListener('open', (e) => toggleTooltip(e, true));
  element.addEventListener('mouseout', (e) => toggleTooltip(e, false));
  element.addEventListener('blur', (e) => toggleTooltip(e, false));
}

function prepareTooltip(text) {
  const tooltip = document.createElement('span');
  tooltip.innerText = text;
  tooltip.setAttribute('id', `tooltip${tipId}`);
  tooltip.setAttribute('role', 'tooltip');
  tooltip.classList.add('lightTooltip');
  return tooltip;
}

function createTooltipsOver(el) {
  let text = el.getAttribute('data-tip');
  if (text === null) {
    text = 'You haven\'t specified "data-tip" attribute.';
  }
  const tooltip = prepareTooltip(text);

  if (el.nodeName === 'IMG') {
    el.parentElement.insertBefore(tooltip, el);
  } else if (el.classList.contains('tip-global')) {
    tooltip.classList.add('tooltip-global');
    document.body.appendChild(tooltip);
  } else {
    el.append(tooltip);
  }
}

const elementsWithTip = document.querySelectorAll('.tip');

elementsWithTip.forEach((element) => {
  createTooltipsOver(element);
  makeElementAlive(element);

  window.addEventListener('resize', () => {
    const tooltipId = element.getAttribute('aria-describedby');
    const tooltip = document.getElementById(tooltipId);
    positionTooltip(element, tooltip);
  });

  tipId++;
});
