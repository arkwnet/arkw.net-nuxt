<template>
  <div class="left">
    <div class="products">
      <h2>
        <span>Android</span>
        {{ $t("software.type.sub.utility") }}
      </h2>
      <div class="box">
        <Card
          href="https://play.google.com/store/apps/details?id=jp.arkw.swarmskytox"
          src="products/swarmskytox"
          title="SwarmskyToX"
          description="Swarmsky経由でMisskeyに投稿されたノートをX (旧Twitter) へ転送するアプリ"
        />
      </div>
      <br />
      <h2>
        <span>Windows 10/11</span>
        {{ $t("software.type.sub.game") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/pc_game/hiragana_erase/"
          src="products/hiragana_erase"
          title="ひらがないれーす"
          description="ひらがなを題材とした落ちものパズルゲーム"
        />
        <Card
          href="https://arkw.net/products/pc_game/qubefall/"
          src="products/qubefall"
          title="QubeFall"
          description="キューブを操り、敵を蹴散らす3Dアクションパズルゲーム"
        />
        <Card
          href="https://arkw.net/products/win/TypingFactory/"
          src="products/typing"
          title="タイピングファクトリー"
          description="英単語や地名など短い文を連続して入力するタイピングゲーム"
        />
        <Card
          href="https://arkw.net/products/pc_game/train_chicken_race/"
          src="products/train_chicken_race"
          title="トレインチキンレース"
          description="電車でチキンレースをしてみませんか? 3Dシミュレーションゲーム"
        />
      </div>
      <br />
      <h2>
        <span>Windows 10/11</span>
        {{ $t("software.type.sub.clock") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/win/LTTimer/"
          src="products/lt_timer"
          title="ライトニングトークタイマー"
          description="ライトニングトーク (LT) に特化したタイマーソフトウェア"
        />
        <Card
          href="https://arkw.net/products/win/wsm/"
          src="products/wsm"
          title="WinSmartWatch"
          description="スマートウォッチをモチーフとしたデスクトップアクセサリ"
        />
      </div>
      <br />
      <h2>
        <span>Windows 10/11</span>
        {{ $t("software.type.sub.utility") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/win/cpr/"
          src="products/cpr"
          title="コピペレコーダー"
          description="クリップボードのコピー履歴を保持し、再利用できるソフトウェア"
        />
        <Card
          href="https://arkw.net/products/win/eims/"
          src="products/eims"
          title="はじめての写真管理S"
          description="視覚的かつシンプルに大量の写真を管理できるソフトウェア"
        />
      </div>
      <br />
      <h2>
        <span>Windows 10/11</span>
        {{ $t("software.type.sub.editor") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/webgeki/wg/"
          src="products/webgeki"
          title="ウェブ撃"
          description="オープンソースの次世代型ウェブサイト制作ツール"
        />
        <Card
          href="https://arkw.net/products/win/TriEditorLE/"
          src="products/tried"
          title="TriEditor LE"
          description="学習用途に特化したHTML/CSS用のテキストエディタ"
        />
        <Card
          href="https://nagaharu.github.io/"
          src="products/nghr"
          title="Nagaharu"
          description="シンプルに使えるオープンソースの文書作成ソフトウェア"
        />
      </div>
      <br />
      <h2>
        <span>Windows 10/11</span>
        {{ $t("software.type.sub.eol") }}
      </h2>
      <p>
        <a href="https://arkw.net/products/win/eim2/">
          <img src="~/assets/img/products/eim2.png" class="social" />
          はじめての写真管理2
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/EImageManage_1.1.2.exe">
          <img src="~/assets/img/products/download.png" class="social" />
          はじめての写真管理 Version 1.1.2 インストーラー版
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/EImageManage_1.1.2.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          はじめての写真管理 Version 1.1.2 ポータブル版
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/EDigitalDiary_1.0.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          はじめてのデジタル日記 Version 1.0
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/EasyAddress_1.0.1.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          かんたん住所録 Version 1.0.1 修正版
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/e_page_editor_1.0.1.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          E-Page Editor Version 1.0.1
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/Okoshimon_1.0.1.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          おこしもん Version 1.0.1
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/SimpleShinchoku_1.0.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          シンプル進捗管理 Version 1.0
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/Jikagaki_1.0.1.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          直書きランチャー Version 1.0.1
        </a>
        <br />
        <a href="https://arkw.net/products/win/old/ShiseiChecker_1.0.zip">
          <img src="~/assets/img/products/folder-zipper.png" class="social" />
          姿勢チェッカー for Windows Version 1.0
        </a>
        <br />
      </p>
      <br />
      <h2>{{ $t("software.type.sub.webservice") }}</h2>
      <div class="box">
        <Card
          href="https://psk.arkw.net/"
          src="products/psk"
          title="プロ生進捗管理"
          description="その日に出した進捗を気軽に記録できるウェブサービス"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.webapp") }}</span>
        {{ $t("software.type.sub.game") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/web/prohaya/"
          src="products/prohaya"
          title="プロ生早押しクイズ"
          description="プロ生ちゃんや情報処理研究会のキャラクターと早押しクイズで対決!"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.webapp") }}</span>
        {{ $t("software.type.sub.clock") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/web/pronama_clock/"
          src="products/pronama_clock"
          title="プロ生時計"
          description="オープンソースのデジタル時計「Ahoxa」にプロ生テーマを収録!"
        />
        <Card
          href="https://arkw.net/products/web/ahoxa/"
          src="products/ahoxa"
          title="Ahoxa"
          description="全画面で時計を表示するオープンソースのウェブアプリ"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.webapp") }}</span>
        {{ $t("software.type.sub.generator") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/web/btr/"
          src="products/btr"
          title="ぼざろ写真メーカー"
          description="写真に「ぼっち・ざ・ろっく！」のダム映像風テロップを入れるウェブアプリ"
        />
        <Card
          href="https://arkw.net/products/web/dokaben/"
          src="products/dokaben"
          title="ドカベンメーカー"
          description="「ドカベン」のロゴ風画像を作成できるウェブアプリ"
        />
        <Card
          href="https://arkw.net/products/web/shazai/"
          src="products/shazai"
          title="謝罪しろ! ジェネレータ"
          description="伊勢原名物「謝罪しろ!」看板がウェブブラウザで作り放題"
        />
        <Card
          href="https://arkw.net/products/web/hakase/"
          src="products/hakase"
          title="教えて! ハカセ ジェネレータ"
          description="「教えて! ○○ハカセ」の画像を作成できるウェブアプリ"
        />
        <Card
          href="https://arkw.net/products/web/smsg/"
          src="products/smsg"
          title="支離滅裂な思考・発言 ジェネレータ"
          description="「支離滅裂な思考・発言」の画像を作成できるウェブアプリ"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.webapp") }}</span>
        {{ $t("software.type.sub.shaban") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/web/kintetsu/"
          src="products/kintetsu"
          title="近鉄車番検索"
          description="近鉄車両の車両番号、両数、電算記号などを検索できるウェブアプリ"
        />
        <Card
          href="https://arkw.net/products/web/meitetsu/"
          src="products/meitetsu"
          title="名鉄車番検索"
          description="名鉄車両の車両番号、両数、電算記号などを検索できるウェブアプリ"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.webapp") }}</span>
        {{ $t("software.type.sub.other") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/web/atck/"
          src="products/atck"
          title="Article Checker"
          description="文章を検査し、「日本語の使い方」や「読みやすさ」をチェックするツール"
        />
        <Card
          href="https://arkw.net/products/web/ketsupin/"
          src="products/ketsupin"
          title="ケツピンカッター"
          description="ケツピン画像の両端をカットする反SDGsアプリ"
        />
        <Card
          href="https://arkw.net/products/web/mygen/"
          src="products/mygen"
          title="マイ元号メーカー"
          description="2019年エイプリルフール企画"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.webapp") }}</span>
        Arakawa Web Tools
      </h2>
      <p>
        <a href="https://arkw.net/products/web/tools/kutouten/">
          <img
            src="https://arkw.net/products/web/tools/icon_kutouten_16.png"
            class="social"
          />
          句読点変換
        </a>
        <br />
        <a href="https://arkw.net/products/web/tools/indent/">
          <img
            src="https://arkw.net/products/web/tools/icon_indent_16.png"
            class="social"
          />
          インデント変換
        </a>
        <br />
        <a href="https://arkw.net/products/web/tools/wordcount/">
          <img
            src="https://arkw.net/products/web/tools/icon_wordcount_16.png"
            class="social"
          />
          文字数カウント
        </a>
        <br />
        <a href="https://arkw.net/products/web/tools/dekamoji/">
          <img
            src="https://arkw.net/products/web/tools/icon_dekamoji_16.png"
            class="social"
          />
          デカ文字エディタ
        </a>
        <br />
        <a href="https://arkw.net/products/web/tools/imgsize/">
          <img
            src="https://arkw.net/products/web/tools/icon_imgsize_16.png"
            class="social"
          />
          画像サイズ表示
        </a>
        <br />
        <a href="https://arkw.net/products/web/tools/dummyimg/">
          <img
            src="https://arkw.net/products/web/tools/icon_dummyimg_16.png"
            class="social"
          />
          ダミー画像生成
        </a>
      </p>
      <br />
      <h2>
        <span>{{ $t("software.type.main.dev") }}</span>
        {{ $t("software.type.sub.js") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/dev/AoiEngine/"
          src="products/aoi"
          title="AoiEngine"
          description="コンテンツ開発を効率化するJavaScriptゲームエンジン"
        />

        <Card
          href="https://arkw.net/products/dev/katamuki_js/"
          src="products/katamuki"
          title="Katamuki.js"
          description="ウェブページ上の文字を綺麗に表示できるJavaScriptライブラリ"
        />
        <Card
          href="https://arkw.net/products/dev/emotion_cover/"
          src="products/emotion_cover"
          title="Emotion Cover"
          description="HTML5 Canvas/JavaScript製のスライドショースクリプト"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.dev") }}</span>
        {{ $t("software.type.sub.css") }}
      </h2>
      <div class="box">
        <Card
          href="https://arkw.net/products/dev/arkw_tmpl/"
          src="products/atmpl"
          title="Arakawa Template"
          description="汎用的なウェブサイト用CSSテンプレート"
        />
        <Card
          href="https://github.com/arkwnet/AkariFramework"
          src="products/akari"
          title="AkariFramework"
          description="シンプルなCSSフレームワーク (Bijou CSS Framework ベース)"
        />
      </div>
      <br />
      <h2>
        <span>{{ $t("software.type.main.dev") }}</span>
        {{ $t("software.type.sub.cms") }}
      </h2>
      <div class="box">
        <Card
          href="https://github.com/arkwnet/SimplifiedCMS2"
          src="products/scms2"
          title="Simplified CMS 2"
          description="PHP製の簡易型CMS"
        />
        <Card
          href="https://github.com/arkwnet/SimplifiedCMS"
          src="products/scms"
          title="Simplified CMS"
          description="PHP製の超簡易型CMS"
        />
      </div>
    </div>
    <br />

    <!-- コンテンツ -->
    <h1 class="heading">{{ $t("heading.contents") }}</h1>
    <p>
      <a href="https://otajien.arkw.work/" target="blank">
        <nuxt-img src="/img/links/otajien.svg" width="180" format="webp" />
      </a>
    </p>
    <p>
      <a href="https://odeya.me/" target="blank">
        <nuxt-img src="/img/links/odeyame.png" width="180" format="webp" />
      </a>
    </p>
    <p>
      <a href="https://ahiru.site/" target="blank">
        <nuxt-img src="/img/links/ahiru.png" width="180" format="webp" />
      </a>
    </p>
    <p>
      <a href="https://arkw.work/doujin/">荒川の同人活動</a>
      <br />
      <a href="http://arkw.client.jp">Arakawa No-SSL</a>
      <br />
      <a href="https://arkw.net/blog/">Arakawa Blog</a>
      <br />
      <a href="https://arkw.net/old/" target="blank">旧トップページ</a>
      <br />
      <a href="https://arkw.net/contents/bg_archive/">背景画像アーカイブ</a>
      <br />
      <a href="https://arkw.net/contents/axella/">Team Axella 跡地</a>
      <br />
    </p>
    <p>
      <a
        href="https://steamcommunity.com/id/arkw0/myworkshopfiles/?appid=573090"
        target="blank"
      >
        Stormworks ワークショップ
      </a>
      <br />
      -
      <a
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=2978083532"
        target="blank"
      >
        DLB1ディーゼル機関車
      </a>
    </p>
    <br />

    <!-- リンク集 -->
    <h1 class="heading">{{ $t("heading.links") }}</h1>
    <p>
      <a href="http://yotiosoft.com/" target="blank">
        <nuxt-img src="/img/links/yotiosoft.svg" width="180" format="webp" />
      </a>
      <br />
      <a href="https://nona-takahara.github.io/" target="blank">
        <nuxt-img src="/img/links/taka_impact.png" width="180" format="webp" />
      </a>
      <br />
      <a href="http://bvetk.arkw.net/" target="blank">
        <nuxt-img src="/img/links/bvetk.png" format="webp" />
      </a>
      <br />
      <a href="https://gakujochan.com/" target="blank">
        <nuxt-img src="/img/links/gakujo.png" width="180" format="webp" />
      </a>
      <br />
      <a href="https://hishoutai.arkw.net/" target="blank">
        <nuxt-img src="/img/links/hishoutai.png" format="webp" />
      </a>
      <br />
      <a href="http://kusoft.moo.jp/" target="blank">KUsoft</a>
      <br />
      <a href="https://xeltica.work/" target="blank">Xeltica.work</a>
      <br />
      <a href="https://yude.jp/" target="blank">yude.jp</a>
      <br />
      <a href="https://satoyama-nogyo.com/" target="blank">
        里山農業プロジェクト
      </a>
      <br />
    </p>
    <br />
    <p>
      <a href="https://www.shizuoka.ac.jp/" target="blank">
        <nuxt-img
          src="/img/links/shizuoka.gif"
          width="180"
          class="link-banner"
          format="webp"
        />
      </a>
      <br />
      <a href="http://hsp.tv/" target="blank">
        <nuxt-img src="/img/links/hsptv_bnr.gif" format="webp" />
      </a>
      <br />
      <a href="https://pass-case.com/" target="blank">Pass-case</a>
      <br />
      <a href="http://shinohara03.starfree.jp/" target="blank">
        Optinum Surviter
      </a>
      <br />
      <a href="https://uotaka.hamazo.tv/" target="blank">うおたか奮闘記</a>
      <br />
      <a href="http://ramlife.net/" target="blank">ラム・ライフ</a>
      <br />
      <a href="https://www.wizforest.com/" target="blank">魔法使いの森</a>
      <br />
    </p>
  </div>
</template>

<script>
import Card from "../components/Card"
export default {
  components: {
    Card,
  },
}
</script>
