<template>
  <div>
    <div class="breadcrumb">
      <nuxt-link :to="localePath('/')">{{ $t("link.top") }}</nuxt-link>
      &gt;
    </div>
    <h1 class="title">{{ $t("heading.privacy") }}</h1>
    <p>
      Arakawa
      Laboratory／荒川技研（以下、「当方」といいます。）が提供するサービス（以下、「本サービス」といいます。）におけるユーザの個人情報の取扱いについて、以下の通りプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
    </p>
    <p>
      <b>１．個人情報の管理</b>
      <br />
      当方は、ユーザの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
    </p>
    <p>
      <b>２．個人情報の利用目的</b>
      <br />
      当方は、ユーザが本サービスを利用する際に個人情報をお尋ねすることがあります。また、ユーザの個人情報を情報提供元・広告主・広告配信先などを含む当方の提携先などから収集することがあります。ユーザから収集した個人情報は、当方からのご連絡・業務のご案内・ご質問に対する回答として、電子メールや資料の送付に利用いたします。
      <br />
      これらの個人情報は質問に対する回答や必要な情報をご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
    </p>
    <p>
      <b>３．利用目的の変更</b>
      <br />
      当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
      <br />
      利用目的の変更を行った場合には、変更後の目的について、当方所定の方法によりユーザに通知し、または本ウェブサイト上に公表するものとします。
    </p>
    <p>
      <b>４．個人情報の第三者提供</b>
      <br />
      当方は、次に掲げる場合を除いて、あらかじめユーザの同意を得ることなく第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
      <br />
      （１）ユーザの同意がある場合
      <br />
      （２）ユーザが希望するサービスを行なうために、当方が業務を委託する第三者に対し開示する場合
      <br />
      （３）法令に基づき開示することが必要である場合
    </p>
    <p>
      <b>５．個人情報の開示</b>
      <br />
      個人情報の開示をご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない旨の決定をしたときは、遅滞なくこれをユーザに通知します。また、この定めに関わらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。
      <br />
      （１）本人または第三者の生命・身体・財産その他の権利利益を害するおそれがある場合
      <br />
      （２）当方の業務の適正な実施に著しい支障を及ぼすおそれがある場合
      <br />
      （３）その他法令に違反することとなる場合
    </p>
    <p>
      <b>６．個人情報の訂正</b>
      <br />
      個人情報の追加または削除（以下、「訂正等」といいます。）をご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。
      <br />
      本規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは、遅滞なくこれをユーザーに通知します。
    </p>
    <p>
      <b>７．プライバシーポリシーの変更</b>
      <br />
      本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。
      <br />
      当方が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
    </p>
    <br />
    <p>
      2023年10月11日 初版
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
