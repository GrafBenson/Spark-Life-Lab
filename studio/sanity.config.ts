import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

/**
 * SparkLifeLab Studio — image replacement MVP.
 *
 * Structure:
 *   📷 Homepage — Site Photos   → singleton-homepage (the document the live site reads)
 *   👤 Founders                 → one card per founder; upload photo here
 *   ⚙️  Site Settings           → footer contact email, legal links, etc.
 *
 * Presentation Tool is intentionally removed for this MVP.
 * The client edits images directly in the document panel — no preview overlay needed.
 *
 * To set site photos: click "Homepage — Site Photos", upload an image, click Publish.
 * To set a founder photo: click "Founders", open a founder card, upload a photo, click Publish.
 */
export default defineConfig({
  name: 'default',
  title: 'SparkLifeLab',

  projectId: '53gmhbru',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('SparkLifeLab')
          .items([
            // ── Homepage singleton ─────────────────────────────────────────
            // Always opens the specific singleton-homepage document.
            // The client cannot accidentally create a second homepage document.
            S.listItem()
              .title('📷 Homepage — Site Photos')
              .id('singleton-homepage')
              .child(
                S.document()
                  .schemaType('homepage')
                  .documentId('singleton-homepage')
                  .title('Homepage — Site Photos'),
              ),

            S.divider(),

            // ── Founders list ──────────────────────────────────────────────
            S.documentTypeListItem('founder').title('👤 Founders'),

            S.divider(),

            // ── Site Settings singleton ────────────────────────────────────
            S.listItem()
              .title('⚙️ Site Settings')
              .id('singleton-site-settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('singleton-site-settings')
                  .title('Site Settings'),
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
