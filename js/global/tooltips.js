(() => {
  function positionTooltip(el, tooltip) {
    const top = el.offsetTop;
    const left = el.offsetLeft;
    const width = el.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;
    const tooltipWidth = tooltip.offsetWidth;
    const centerEl = left + (width / 2);

    tooltip.style.top = (top - tooltipHeight - 10) + 'px';
    tooltip.style.left = (centerEl - tooltipWidth / 2) + 'px';
  }

  function toggleTooltip(e) {
    let el = e.target;
    while (el.classList.contains('tip') === false) {
      el = el.parentElement;
    }
    const tooltipId = el.getAttribute('aria-describedby');
    const tooltip = document.getElementById(tooltipId);
    if (tooltip.classList.contains('fadeIn') === false) {
      positionTooltip(el, tooltip);
      tooltip.classList.add('fadeIn');
    } else {
      tooltip.classList.remove('fadeIn');
    }
  }

  let tipId = 1;

  function makeElementAlive(element) {
    element.setAttribute('tabindex', '0');
    element.setAttribute('aria-describedby', 'tooltip' + tipId);
    element.setAttribute('aria-live', 'true');
    element.addEventListener('mouseover', toggleTooltip);
    element.addEventListener('focus', toggleTooltip);
    element.addEventListener('mouseout', toggleTooltip);
    element.addEventListener('blur', toggleTooltip);
  }

  function prepareTooltip(text) {
    const tooltip = document.createElement('span');
    tooltip.textContent = text;
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

  const elementsWithTip = document.getElementsByClassName('tip');

  for (const element of elementsWithTip) {
    createTooltipsOver(element);
    makeElementAlive(element);
    tipId++;
  }
})();
