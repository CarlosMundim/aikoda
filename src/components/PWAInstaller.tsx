'use client'
import React, { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

interface PWAInstallerProps {
  language: 'en' | 'ja'
}

export function PWAInstaller({ language }: PWAInstallerProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  const labels = {
    en: {
      installTitle: 'Install iWORKZ App',
      installMessage: 'Install iWORKZ on your device for the best experience',
      installButton: 'Install App',
      laterButton: 'Maybe Later',
      installedMessage: 'iWORKZ is installed!',
      updateAvailable: 'Update Available',
      updateMessage: 'A new version of iWORKZ is available',
      updateButton: 'Update Now',
      offlineReady: 'Ready for Offline Use',
      offlineMessage: 'iWORKZ is now available offline'
    },
    ja: {
      installTitle: 'iWORKZアプリをインストール',
      installMessage: '最高の体験のためにiWORKZをデバイスにインストールしてください',
      installButton: 'アプリをインストール',
      laterButton: '後で',
      installedMessage: 'iWORKZがインストールされました！',
      updateAvailable: 'アップデート利用可能',
      updateMessage: 'iWORKZの新しいバージョンが利用可能です',
      updateButton: '今すぐ更新',
      offlineReady: 'オフライン利用可能',
      offlineMessage: 'iWORKZはオフラインでも利用できます'
    }
  }

  useEffect(() => {
    // Check if app is running in standalone mode
    const checkStandalone = () => {
      const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches ||
                              (window.navigator as any).standalone ||
                              document.referrer.includes('android-app://')
      setIsStandalone(isStandaloneMode)
    }

    checkStandalone()

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Show install prompt after a delay if not in standalone mode
      if (!isStandalone) {
        setTimeout(() => {
          setShowInstallPrompt(true)
        }, 3000)
      }
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
      
      // Show success message
      setTimeout(() => {
        setIsInstalled(false)
      }, 3000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [isStandalone])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }
      
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } catch (error) {
      console.error('Error during installation:', error)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don't show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true')
  }

  // Don't show if already dismissed in this session
  if (sessionStorage.getItem('pwa-install-dismissed')) {
    return null
  }

  // Don't show if already in standalone mode
  if (isStandalone) {
    return null
  }

  return (
    <>
      {/* Install Prompt */}
      {showInstallPrompt && deferredPrompt && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-sap-border-color shadow-lg md:hidden">
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <h3 className="font-semibold text-sap-text-primary text-sm">
                {labels[language].installTitle}
              </h3>
              <p className="text-xs text-sap-text-secondary mt-1">
                {labels[language].installMessage}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleDismiss}
                className="px-3 py-2 text-xs text-sap-text-secondary border border-sap-border-color rounded-md hover:bg-sap-hover-background"
              >
                {labels[language].laterButton}
              </button>
              <button
                onClick={handleInstallClick}
                className="px-3 py-2 text-xs bg-sap-brand-color text-white rounded-md hover:bg-blue-600"
              >
                {labels[language].installButton}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Installation Success */}
      {isInstalled && (
        <div className="fixed top-4 left-4 right-4 z-50 p-4 bg-sap-success-color text-white rounded-lg shadow-lg">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-sm">
                {labels[language].installedMessage}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Service Worker Registration Hook
export function usePWA() {
  const [isOnline, setIsOnline] = useState(true)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('Service Worker registered:', reg)
          setRegistration(reg)

          // Check for updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setUpdateAvailable(true)
                }
              })
            }
          })
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }

    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Initial online status
    setIsOnline(navigator.onLine)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const updateApp = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      window.location.reload()
    }
  }

  return {
    isOnline,
    updateAvailable,
    updateApp,
    registration
  }
}

// PWA Status Component
export function PWAStatus({ language }: { language: 'en' | 'ja' }) {
  const { isOnline, updateAvailable, updateApp } = usePWA()

  const labels = {
    en: {
      offline: 'Offline Mode',
      updateAvailable: 'Update Available',
      updateButton: 'Update Now'
    },
    ja: {
      offline: 'オフラインモード',
      updateAvailable: 'アップデート利用可能',
      updateButton: '今すぐ更新'
    }
  }

  return (
    <>
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-sap-warning-color text-white text-center py-2 text-sm">
          📱 {labels[language].offline}
        </div>
      )}

      {/* Update Available */}
      {updateAvailable && (
        <div className="fixed top-4 left-4 right-4 z-50 p-4 bg-sap-brand-color text-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">
                {labels[language].updateAvailable}
              </h3>
            </div>
            <button
              onClick={updateApp}
              className="px-3 py-2 text-xs bg-white text-sap-brand-color rounded-md hover:bg-gray-100"
            >
              {labels[language].updateButton}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

