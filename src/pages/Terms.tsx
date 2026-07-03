import { LegalPage } from '../components/LegalPage'
import { usePageMeta } from '../lib/seo'

export default function Terms() {
  usePageMeta({
    title: '利用規約 — 絆 KIZUNA',
    description: 'KIZUNA（絆）ウェブサイトの利用規約。',
    path: '/terms',
  })
  return (
    <LegalPage
      ja="利用規約"
      intro="本ウェブサイトをご利用いただくにあたり、以下の規約に同意いただいたものとみなします。"
      sections={[
        { ja: '知的財産', body: '当サイトのすべてのコンテンツ、意匠、テキスト、3Dモデルは KIZUNA に帰属し、無断での複製・転用を禁じます。' },
        { ja: '利用の範囲', body: '当サイトは個人的かつ非商業的な閲覧目的でご利用ください。自動的な収集や妨害行為を禁止します。' },
        { ja: '免責事項', body: '当サイトの情報は「現状のまま」提供され、正確性や完全性を保証するものではありません。これはポートフォリオ作品であり、実際の販売は行いません。' },
        { ja: '準拠法', body: '本規約は日本法に準拠し、これに従って解釈されます。' },
      ]}
    />
  )
}
