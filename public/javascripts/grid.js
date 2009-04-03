var Grid = {
  draw_line: function(context, x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  },
  
  draw: function() {
    var baseline = 24;
    var baseline_divisions = 2;
    
    var width = 960;
    var height = baseline;
    
    var context = document.getCSSCanvasContext('2d', 'grid', width, height);
    
    context.strokeStyle = '#f00';
    context.lineWidth = 1;
    var step = baseline / baseline_divisions;
    for (var i = step; i <= height; i += step) {
      context.globalAlpha = (i % baseline == 0 ? 0.3 : 0.15);
      this.draw_line(context, 0, i - 0.5, width, i - 0.5);
    }
  }
};

$(document).ready(function() {
  Grid.draw();
});