#!/usr/bin/env node
import { start } from '../index.js';
import brainEven from './games/brain-even.js';
import brainCalc from './games/brain-calc.js';
import brainGcd from './games/brain-gcd.js';
import brainProgression from './games/brain-progression.js';
// выбор игры с возвратом результата
// start(brainEven);
// start(brainCalc);

start(brainProgression);
