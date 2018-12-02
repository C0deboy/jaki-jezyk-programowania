function positionTooltip(el, tooltip) {
  const top = el.offsetTop;
  const left = el.offsetLeft;
  const width = el.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const tooltipWidth = tooltip.offsetWidth;
  const centerEl = left + (width / 2);

  const tooltipStyle = tooltip.style;
  tooltipStyle.top = (top - tooltipHeight - 10) + 'px';
  tooltipStyle.left = (centerEl - tooltipWidth / 2) + 'px';
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
  element.setAttribute('aria-describedby', 'tooltip' + tipId);
  element.setAttribute('aria-live', 'true');
  element.addEventListener('mouseover', e => toggleTooltip(e, true));
  element.addEventListener('focus', e => toggleTooltip(e, true));
  element.addEventListener('mouseout', e => toggleTooltip(e, false));
  element.addEventListener('blur', e => toggleTooltip(e, false));
}

function prepareTooltip(text) {
  const tooltip = document.createElement('span');
  tooltip.innerHTML = text;
  tooltip.setAttribute('id', 'tooltip' + tipId);
  tooltip.setAttribute('role', 'tooltip');
  tooltip.classList.add('lightAriaTooltips');
  return tooltip;
}

function createTooltipsOver(el) {
  let text = el.getAttribute('data-tip');
  if (text === null) {
    text = 'You haven\'t specified "data-tip" attribute.';
  }
  const tooltip = prepareTooltip(text);

  if (el.nodeName === 'IMG') el.parentElement.insertBefore(tooltip, el);
  else el.append(tooltip);
}

const elementsWithTip = document.querySelectorAll('.tip');

elementsWithTip.forEach((element) => {
  createTooltipsOver(element);
  makeElementAlive(element);
  tipId++;
});
