/**
 * Signals Gateway Shared Types
 * 
 * Add types here that are used across multiple components/modules.
 * Module-specific types should live in their respective folders.
 */

// Integration status for connected services
export type IntegrationStatus = 'connected' | 'syncing' | 'error' | 'disconnected'

// Base integration type
export interface Integration {
  id: string
  name: string
  type: 'shopify' | 'meta' | 'google' | 'klaviyo' | 'ga4' | 'tiktok' | 'shopmy'
  status: IntegrationStatus
  lastSyncAt: Date | null
  createdAt: Date
}

// Conversion event types matching BigQuery schema
export type EventName = 
  | 'PageView'
  | 'ViewContent'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'AddPaymentInfo'
  | 'Purchase'
  | 'Lead'
  | 'CompleteRegistration'
  | 'Search'

// Conversion event record
export interface ConversionEvent {
  eventId: string
  eventName: EventName
  eventTimestamp: Date
  userId?: string
  sessionId: string
  pageUrl: string
  source?: string
  medium?: string
  campaign?: string
  orderId?: string
  orderValue?: number
  currency?: string
  emqScore?: number
  clientSide: boolean
  serverSide: boolean
}

// Channel performance metrics
export interface ChannelMetrics {
  channel: string
  spend: number
  revenue: number
  roas: number
  cpa: number
  conversions: number
  period: 'day' | 'week' | 'month'
}

// Insight card from Insights Feed
export interface InsightCard {
  id: string
  type: 'alert' | 'opportunity' | 'info'
  title: string
  description: string
  metric?: {
    value: number
    change: number
    direction: 'up' | 'down' | 'flat'
  }
  createdAt: Date
  dismissed: boolean
}

// Organization (multi-tenant)
export interface Organization {
  id: string
  name: string
  slug: string
  bigqueryDataset?: string
  tier: 'growth' | 'scale' | 'enterprise'
  createdAt: Date
}
