import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div>
      <h3>my app</h3>var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
    </div>
  );
}

export default App;
