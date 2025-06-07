<template>
  <div>
    <div class="breadcrumb">
      <nuxt-link :to="localePath('/')">{{ $t("link.top") }}</nuxt-link>
      &gt;
    </div>
    <h1 class="title">{{ $t("heading.child") }}</h1>
    <p>
      <b>１．はじめに</b>
      <br />
      Arakawa Laboratory／荒川技研（以下、「当方」といいます。）では、Google
      Play「
      <a
        href="https://support.google.com/googleplay/android-developer/answer/9878809#child_safety"
        target="blank"
      >
        子どもの安全基準に関するポリシー
      </a>
      」を遵守し、ユーザーの安全を最優先に考えたアプリ運営を行っています。本ページでは、その具体的な実施内容について説明します。
    </p>
    <p>
      <b>２．アプリの対象年齢の適正設定</b>
      <br />
      アプリストア上のレーティング（対象年齢）に年齢が達していない方は、原則として当方のリリースするアプリを利用できません。
      <br />
      今後、新たにリリースするアプリ機能が「子ども向け」または「すべての年齢層向け」
      のいずれかに該当する場合、利用者がアプリの対象年齢を誤認しないよう、Google
      Play Consoleの「ターゲット
      ユーザーおよびコンテンツ」セクションにおいて正確に設定します。
    </p>
    <p>
      <b>３．子ども向けアプリの適正なデザインとコンテンツ</b>
      <br />
      子どもが利用する可能性のあるアプリにおいて、下記のような不適切な要素が含まれないよう、厳格なチェックフローを整備します。
      <br />
      （１）
      <a
        href="https://support.google.com/googleplay/android-developer/answer/14747720#4&zippy=%2Cgoogle-%E3%81%AF-csae-%E3%82%92%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B"
        target="blank"
      >
        児童の性的虐待や搾取（CSAE）
      </a>
      に該当する内容
      <br />
      （２）
      <a
        href="https://support.google.com/googleplay/android-developer/answer/14747720#5&zippy=%2Cgoogle-%E3%81%AF-csam-%E3%82%92%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B"
        target="blank"
      >
        児童性的虐待のコンテンツ（CSAM）
      </a>
      に該当する内容
      <br />
      （３）児童の安全に関する法律に反する内容
      <br />
      すべてのコンテンツにおいて、対象年齢に適した表現を心がけ、教育的・健全な内容を提供します。
      <br />
      子ども向けアプリ機能をリリースする場合はGPS・連絡先・電話番号など機密データを収集しない方針を定め「
      <a
        href="https://support.google.com/googleplay/android-developer/answer/9893335"
        target="blank"
      >
        Google Play ファミリーポリシー
      </a>
      」に準拠した広告ネットワークのみを使用します。
      <br />
      アプリを通じた個人情報の収集は最小限に抑え、適切なプライバシー保護対策を実施します。
    </p>
    <p>
      <b>４．保護者向けガイドラインの提供</b>
      <br />
      子ども向けアプリ機能をリリースする場合においては、保護者が安心してお子様にアプリを利用させられるよう、以下の情報を明確に提供します。
      <br />
      （１）プライバシーポリシー
      <br />
      （２）保護者が制限できる機能
    </p>
    <p>
      <b>５．具体的な対策</b>
      <br />
      （１）アプリストアの説明文の適正化
      <br />
      アプリの説明文やスクリーンショットが、アプリの対象年齢の誤認を招かないないよう、慎重に作成します。
      <br />
      （２）開発プロセスにおける定期的なチェック
      <br />
      各種法令・ポリシー違反を防ぐため、開発段階からリリース後まで、定期的なチェックを実施します。
      <br />
      （３）利用者からのフィードバック受付
      <br />
      アプリ内から本ページへアクセスできる手段を提供します。
    </p>
    <br />
    <p>
      本件に関するご質問やご意見がございましたら、
      <nuxt-link :to="localePath('/')">{{ $t("link.top") }}</nuxt-link>
      に記載の連絡先よりお問い合わせください。
    </p>
    <p>
      2025年6月7日 初版
      <br />
      以上
    </p>
  </div>
</template>

<script>
export default {
  layout: "default",
}
</script>
