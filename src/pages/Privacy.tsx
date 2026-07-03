import { LegalPage } from '../components/LegalPage'
import { usePageMeta } from '../lib/seo'

export default function Privacy() {
  usePageMeta({
    title: 'プライバシーポリシー — 絆 KIZUNA',
    description: 'KIZUNA（絆）のプライバシーポリシー。お客様の個人情報の取り扱いについて。',
    path: '/privacy',
  })
  return (
    <LegalPage
      ja="プライバシーポリシー"
      intro="KIZUNA（絆）は、お客様のプライバシーを尊重します。本ポリシーは、当サイトで収集する情報とその利用方法を説明します。"
      sections={[
        { ja: '収集する情報', body: 'お問い合わせフォームを通じてお名前、メールアドレス、メッセージ内容を収集します。閲覧に関する匿名の統計情報を取得する場合があります。' },
        { ja: '情報の利用', body: '収集した情報は、お問い合わせへの返信およびサービス改善の目的にのみ利用し、第三者に販売することはありません。' },
        { ja: 'クッキー', body: '当サイトは必要最小限のクッキーのみを使用します。ブラウザ設定でクッキーを無効化できます。' },
        { ja: 'お客様の権利', body: 'お客様は、ご自身の個人情報の開示、訂正、削除を請求する権利を有します。' },
        { ja: 'お問い合わせ', body: '本ポリシーに関するご質問は、atelier@kizuna.example までご連絡ください。' },
      ]}
    />
  )
}
