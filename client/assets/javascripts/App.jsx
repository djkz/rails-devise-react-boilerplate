import $ from 'jquery';
import React from 'react';
import Navigation from './components/Navigation';

$(function onLoad() {
  function render() {
    if ($('#content').length > 0) {
      React.render(
        <div>
            <Navigation></Navigation>
        </div>,
        document.getElementById('content')
      );
    }
  }

  render();

  // Next part is to make this work with turbo-links
  $(document).on('page:change', () => {
    render();
  });
});
