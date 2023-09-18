import { Component } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Container,
  Engine,
} from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { SupportsParticles } from 'src/app/core/supports-particles';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements SupportsParticles {
  id = 'LandingComponentParticles';

  particlesOptions = {
    background: {
      color: {
        value: '#000',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 250,
        enable: true,
        opacity: 0.3,
        width: 0.1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 300,
        },
        value: 50,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 0.1, max: 1 },
      },
    },
    detectRetina: true,
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
    await loadFull(engine);
  }
}
