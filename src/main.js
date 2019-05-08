import '@webcomponents/custom-elements';
import './app';

const init = () => {
  const root = document.getElementById('app');
  const node = document.createElement('my-app');
  root.appendChild(node);
}

init();