# Teleprompter Pro (Expo + TypeScript)

A production-minded MVP for a modern creator-focused teleprompter app on iOS + Android.

## Complete app structure

```txt
app/
  _layout.tsx
  index.tsx
  onboarding.tsx
  premium.tsx
  (tabs)/
    _layout.tsx
    library.tsx
    videos.tsx
    settings.tsx
  editor/[id].tsx
  teleprompter/[id].tsx
  record/[id].tsx
src/
  components/
  constants/
  data/
  db/
  models/
  screens/
  services/
  store/
  utils/
```

## Screen-by-screen UI design

- **Onboarding**: premium dark hero, short value proposition, single CTA.
- **Library**: search bar, recent scripts, horizontal folders, list/grid toggle, floating “Add New”.
- **Editor**: full-screen writing with auto-save, metadata row, quick action chips.
- **Teleprompter**: large readable text, control panel (font/speed placeholders), quick playback controls.
- **Record**: camera placeholder overlay + script text, free/premium watermark status, start/stop controls.
- **Videos**: recording cards with date + duration, empty state support.
- **Premium Paywall**: premium badge card, feature bullets, plan cards, free-trial CTA, restore + legal links.
- **Settings**: account/sync, defaults, premium toggle for dummy flow.

## Architecture

- **UI layer**: reusable components under `src/components`.
- **Domain/business layer**: state and actions in `src/store/app-store.ts`.
- **Data layer**:
  - Demo content + config in `src/data/demo-data.ts`.
  - SQLite bootstrap in `src/db/sqlite.ts`.
  - Service abstractions in `src/services/*` (billing, sync, camera).
- **Scalability**:
  - Path aliases with `@/*`.
  - Service classes ready for real providers.
  - Models centralized in `src/models/types.ts`.

## Local database setup

`src/db/sqlite.ts` initializes the scripts table. In production call `initDb()` on startup, then map store actions to repository methods.

## Dummy premium flow

- Paywall content uses `paywallConfig`.
- Billing calls route through `BillingService` (dummy success).
- Premium state can be toggled in Settings for QA.

## Sample content included

- **5 demo scripts** (`demoScripts`)
- **3 sample folders** (`sampleFolders`)
- **1 premium paywall configuration** (`paywallConfig`)
- **1 settings preset** (`settingsPreset`)

## Build instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start Expo:
   ```bash
   npm run start
   ```
3. Run platform targets:
   ```bash
   npm run ios
   npm run android
   ```
4. Type-check:
   ```bash
   npm run typecheck
   ```

## Replacing dummy data with production services

- **Auth + Cloud sync**: replace `sync-service.ts` + store bootstrap with Supabase/Firebase SDK.
- **Subscriptions**: wire `billing-service.ts` to RevenueCat offerings and entitlements.
- **Recording pipeline**: replace placeholder flow in `record-screen.tsx` with `expo-camera` + file pipeline + FFmpeg post-processing.
- **Voice scrolling**: add speech recognition service and map transcript progress to teleprompter cursor.
- **Import/Export**: add doc/text parsers and PDF/TXT exporters behind service interfaces.
- **Offline-first**: persist Zustand state + queue sync operations with retry/conflict strategy.

## Notes

- Dark theme is the default and all key actions are in bottom reach zones.
- Accessibility hooks (labels, large text layouts) are scaffolded and can be expanded with full VoiceOver tags.
