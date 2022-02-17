function createDiv(content = null, className = null) {
  const div = document.createElement('div');
  if (className) div.classList.add(className);
  if (content) div.textContent = content;

  return div;
}

function createLink(name, href, className = null) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = name;
  if (className) link.classList.add(className);

  return link;
}

export {createDiv, createLink};