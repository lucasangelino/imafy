import { atom } from 'nanostores';
import { ImageStatus } from '../types/types';

export const imageStatus = atom(ImageStatus.IDDLE)
export const originalImage = atom(null)
export const transformedImage = atom(null)