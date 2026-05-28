import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from 'react-native';
import { SubscriptionCard } from './SubscriptionCard';
import type { Subscription } from '../../types/subscription';

jest.mock('../../store/settingsStore', () => ({
  useSettingsStore: jest.fn(() => ({
    preferredCurrency: 'USD',
    exchangeRates: { rates: { USD: 1 } },
  })),
}));

jest.mock('../../services/currencyService', () => ({
  currencyService: {
    convert: jest.fn(() => 12.99),
  },
}));

jest.mock('../../utils/formatting', () => ({
  formatCurrency: () => '$12.99',
  formatCategory: () => 'Streaming',
  formatBillingCycle: () => 'monthly',
  formatRelativeDate: () => 'Jan 1, 2026',
}));

jest.mock('../../utils/subscriptionHelpers', () => ({
  getCategoryIcon: () => 'S',
  getStatusColor: () => '#00ff00',
  getBillingCycleColor: () => '#666666',
  isUpcomingBilling: () => false,
}));

describe('SubscriptionCard', () => {
  beforeAll(() => {
    jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
  });

  const subscription: Subscription = {
    id: 'sub-1',
    name: 'Pro Plan',
    category: 'streaming',
    price: 12.99,
    currency: 'USD',
    billingCycle: 'monthly',
    nextBillingDate: new Date('2026-01-01'),
    isActive: true,
    isCryptoEnabled: false,
    createdAt: new Date('2026-01-01'),
    updatedAt: new Date('2026-01-01'),
  };

  it('renders subscription card snapshot', () => {
    const tree = renderer
      .create(<SubscriptionCard subscription={subscription} onPress={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
