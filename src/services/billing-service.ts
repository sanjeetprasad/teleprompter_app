export class BillingService {
  async startTrial(): Promise<{ success: boolean }> {
    return { success: true };
  }

  async restorePurchases(): Promise<{ restored: boolean }> {
    return { restored: true };
  }
}

export const billingService = new BillingService();
