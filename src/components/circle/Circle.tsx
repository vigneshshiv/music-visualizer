/**
 * Circle Code Art
 */
import * as React from 'react';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

declare global {
  interface Window {
    p5: any;
    setP5: (p5: any) => void;
  }
}

const Circle = () => {
  const _circle_ref_ = React.useRef(null);

  const Sketch = (p: any) => {
    let amp: any,
      bg: any,
      canvas,
      fft,
      song: any,
      volHistory: any[] = [],
      selectedColor = 0;

    /*
      Waporwave Palettes
      STANDARD: https://www.color-hex.com/color-palette/10221/ 
      PASTEL: https://www.color-hex.com/color-palette/61574
    */
    let colors = [
      p.color('#cbffe6'),
      p.color('#afe9ff'),
      p.color('#bfb9ff'),
      p.color('#ffcfea'),
      p.color('#feffbe'),
      p.color('#ff71ce'),
      p.color('#01cdfe'),
      p.color('#05ffa1'),
      p.color('#b967ff'),
      p.color('#fffb96')
    ];
    // Loads the music file into p5.js to play on click
    p.preload = () => {
      p.soundFormats('mp3');
      song = p.loadSound('/resources/song.mp3');
    };

    // Initial setup to create canvas and audio analyzers
    p.setup = () => {
      bg = p.loadImage('/images/vaporwave.png');
      canvas = p.createCanvas(637, 835);
      canvas.mouseClicked(p.handleClick);
      canvas.style('z-index: 1');

      amp = new p5.Amplitude();
    };

    p.draw = () => {
      p.background(bg);

      let vol = amp.getLevel();
      volHistory.push(vol);

      p.noFill();
      p.stroke(selectedColor === 0 ? 255 : colors[selectedColor]);

      p.translate(320, 250);
      p.beginShape();

      for (let i = 1; i < 600; i++) {
        let r = p.map(volHistory[i], 0, 1, 2, 400);
        let x = r * p.cos(i);
        let y = r * p.sin(i);
        p.vertex(x, y);
      }
      p.endShape();

      if (volHistory.length > 360) {
        volHistory.splice(0, 1);
      }
    };

    p.keyPressed = () => {
      if (p.keyCode === 32) {
        // 32 is the keycode for SPACE_BAR
        selectedColor = Math.floor(Math.random() * colors.length);
      }
      return false; // prevent default
    };

    // Toggles song on click
    p.handleClick = () => {
      if (song.isPlaying()) {
        if (song) {
          song.pause();
        }
      } else {
        song.play();
      }
    };
  };

  const [myP5, setMyP5] = React.useState(null);

  React.useEffect(() => {
    // setMyP5(new p5(Sketch, _circle_ref_.current));
    return () => {
      setMyP5(null);
    };
  }, [myP5]);

  return (
    <>
      <h1>asdf</h1>
    </>
  );
};

export default Circle;
