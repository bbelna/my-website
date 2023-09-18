import { Container, Engine } from 'tsparticles-engine';

export interface SupportsParticles {
  particlesLoaded(container: Container): void;
  particlesInit(engine: Engine): Promise<void>;
}
