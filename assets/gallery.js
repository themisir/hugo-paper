const gallery = document.getElementById('gallery');
$(gallery).justifiedGallery({
  rowHeight: 250,
  margins: 5,
  border: -5
}).on('jg.complete', function() {
    lightGallery(gallery, {
      plugins: [lgZoom],
    });
});
