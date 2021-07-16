import('../style/style.sass');
import items from './obj.js';
import { renderItem } from './render.js';

const content = document.getElementById('cont');

items.forEach(item => content.appendChild(renderItem(item)))
