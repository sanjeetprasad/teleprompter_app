import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { paywallConfig } from '@/data/demo-data';
import { styles } from '@/constants/styles';
import { FeatureBulletRow } from '@/components/feature-bullet-row';
import { PlanSelectionCard } from '@/components/plan-selection-card';
import { billingService } from '@/services/billing-service';
import { palette } from '@/constants/theme';

export function PremiumScreen() {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.hero}>{paywallConfig.title}</Text>
      <View style={[styles.card, { marginBottom: 12 }]}>
        <Text style={styles.cardTitle}>PREMIUM</Text>
        <Text style={styles.body}>{paywallConfig.subtitle}</Text>
      </View>

      {paywallConfig.features.map((feature) => <FeatureBulletRow key={feature} text={feature} />)}

      <View style={{ marginTop: 14 }}>
        {paywallConfig.plans.map((plan) => (
          <PlanSelectionCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            selected={selectedPlan === plan.id}
            onPress={() => setSelectedPlan(plan.id)}
          />
        ))}
      </View>

      <Pressable
        style={[styles.primaryButton, { marginTop: 6 }]}
        onPress={async () => {
          await billingService.startTrial();
          router.back();
        }}>
        <Text style={styles.primaryButtonText}>{paywallConfig.primaryCta}</Text>
      </Pressable>
      <Pressable style={{ marginTop: 12 }}><Text style={{ color: palette.accent, textAlign: 'center' }}>{paywallConfig.secondaryCta}</Text></Pressable>
      <Pressable style={{ marginTop: 12 }} onPress={() => billingService.restorePurchases()}><Text style={{ color: palette.muted, textAlign: 'center' }}>Restore purchases</Text></Pressable>
      <Text style={{ color: palette.muted, marginTop: 16, textAlign: 'center' }}>Terms • Privacy</Text>
    </ScrollView>
  );
}
