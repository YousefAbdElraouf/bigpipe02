
function loadContentBlock(id, content) {
    setTimeout(() => {
      document.getElementById(id).innerHTML = content;
    }, Math.random() * 3000); 
  }

  
  loadContentBlock('content-1', 'example 1');
  loadContentBlock('content-2', 'example 2');
  loadContentBlock('content-3', 'example 3');
  loadContentBlock('content-4', 'example 4');
  loadContentBlock('content-5', 'example 5');
  loadContentBlock('content-6', 'example 6');
  loadContentBlock('content-7', 'example 7');
  loadContentBlock('content-8', 'example 8');
  loadContentBlock('content-9', 'example 9');

