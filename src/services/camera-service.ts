export class CameraService {
  async startRecording() {
    return { sessionId: `rec-${Date.now()}` };
  }

  async stopRecording() {
    return { saved: true };
  }
}

export const cameraService = new CameraService();
