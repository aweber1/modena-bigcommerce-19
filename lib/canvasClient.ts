import { CanvasClient } from '@uniformdev/canvas';
import getConfig from 'next/config';

const {
  serverRuntimeConfig: { uniformApiHost, uniformApiKey, uniformProjectId },
} = getConfig();

export const canvasClient = new CanvasClient({
  apiHost: uniformApiHost,
  apiKey: uniformApiKey,
  projectId: uniformProjectId,
});
