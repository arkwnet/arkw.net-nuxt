<template>
  <div class="main">
    <!-- 右カラム -->
    <div class="right">
      <!-- トピックス -->
      <h1 class="heading">トピックス</h1>
      <Card
        url="https://note.com/arkw0/n/n5289722646f0"
        icon="topics/windef"
        title="「Windows セキュリティの重要な警告」ダイアログ"
        description="当サイトからダウンロードしたソフトウェアの起動時に「Windows セキュリティの重要な警告」ダイアログが表示された場合の対処法"
      />
      <Card
        url="https://note.com/arkw0/n/n14530024c13d"
        icon="topics/winss"
        title="「WindowsによってPCが保護されました」ダイアログ"
        description="当サイトからダウンロードしたソフトウェアの起動時に「WindowsによってPCが保護されました」ダイアログが表示された場合の対処法"
      />
      <br />

      <!-- 更新情報 -->
      <UpdateInformation />
      <br />

      <!-- プロフィール -->
      <h1 class="heading">プロフィール</h1>
      <Card
        icon="icon"
        title="Sora Arakawa (arkw)"
        description="男性／2001年4月11日生／静岡大学 情報学部 行動情報学科 3年／静岡県浜松市在住／愛知県岡崎市出身"
      />
      <div class="chip">
        <Chip url="https://twitter.com/arkw0" icon="tw" name="Twitter" />
        <Chip url="https://note.com/arkw0" icon="note" name="note" />
        <Chip url="https://github.com/arkwnet" icon="gh" name="GitHub" />
        <Chip
          url="https://speakerdeck.com/arkw"
          icon="sd"
          name="Speacker Deck"
        />
      </div>
      <br />
      <h2>スキル</h2>
      <div class="skill">
        <Skill icon="html" title="HTML5" lv="5" />
        <Skill icon="css" title="CSS3" lv="5" />
        <Skill icon="javascript" title="JavaScript" lv="4" />
        <Skill icon="vue" title="Vue.js" lv="4" />
        <Skill icon="nuxt" title="Nuxt.js" lv="4" />
        <Skill icon="ongeki" title="オンゲキ bright MEMORY" lv="3" />
        <Skill icon="chunithm" title="チュウニズム NEW" lv="3" />
        <Skill icon="illustrator" title="Adobe Illustrator" lv="3" />
        <Skill icon="indesign" title="Adobe InDesign" lv="3" />
        <Skill icon="electron" title="Electron" lv="3" />
        <Skill icon="csharp" title="C#" lv="2" />
        <Skill icon="linux" title="Linux" lv="2" />
        <Skill icon="php" title="PHP" lv="2" />
      </div>
      <br />
      <h2>外部制作実績</h2>
      <div class="works">
        <div class="wrapper">
          <Work
            url="https://preppers.business/"
            icon="202109"
            date="2021年9月"
            title="株式会社プレッパーズ"
            :type="[
              { id: 'web', name: 'ウェブデザイン' },
              { id: 'graphic', name: 'グラフィック' },
              { id: 'system', name: 'システム開発' },
            ]"
          />
          <Work
            url="https://gakujochan.com/"
            icon="202106"
            date="2021年6月"
            title="学情チャンプロジェクト"
            :type="[
              { id: 'web', name: 'ウェブデザイン' },
              { id: 'graphic', name: 'グラフィック' },
              { id: 'system', name: 'システム開発' },
            ]"
          />
          <Work
            icon="202105"
            date="2021年5月"
            title="静岡大学ITソルーション室"
            :type="[{ id: 'web', name: 'ウェブサイト制作' }]"
          />
          <Work
            url="https://xr-hamaria.github.io/"
            icon="202102"
            date="2021年2月"
            title="静岡大学xRサークルはまりあ"
            :type="[{ id: 'web', name: 'ウェブサイト制作' }]"
          />
          <Work
            icon="202101"
            date="2021年1月"
            title="デジタルサイネージ「ITS DigiSign 2」"
            :type="[
              { id: 'system', name: 'プログラム' },
              { id: 'graphic', name: 'グラフィック' },
            ]"
          />
          <Work
            icon="202011"
            date="2020年11月"
            title="VRゲーム「VRSpeedRun」"
            :type="[{ id: 'graphic', name: 'グラフィック' }]"
          />
          <Work
            icon="202010"
            date="2020年10月"
            title="デジタルサイネージ「ITS DigiSign」"
            :type="[
              { id: 'system', name: 'プログラム' },
              { id: 'graphic', name: 'グラフィック' },
            ]"
          />
          <Work
            url="https://xr-hamaria.github.io/virtual-inf"
            icon="202008"
            date="2020年08月"
            title="静岡大学 バーチャル情報学部"
            :type="[
              { id: 'system', name: 'プログラム' },
              { id: 'graphic', name: 'グラフィック' },
              { id: 'movie', name: 'ムービー' },
            ]"
          />
        </div>
      </div>
      <table>
        <tr>
          <th>2019/04</th>
          <td>「知ろう! ボーイスカウト」ロゴデザイン、組版</td>
        </tr>
        <tr>
          <th>2019/04</th>
          <td>
            「
            <a href="http://bvetk.webcrow.jp/" target="blank">
              中部新都市運輸区
            </a>
            」ロゴデザイン、ウェブサイト制作
          </td>
        </tr>
        <tr>
          <th>2018/07</th>
          <td>
            「
            <a href="https://hishoutai.arkw.net/" target="blank">
              17NSJ参加隊 愛知第21隊『飛翔隊』
            </a>
            」ロゴデザイン、ウェブサイト制作
          </td>
        </tr>
        <tr>
          <th>2018/07</th>
          <td>「じーせかぺーぱー Vol.1」紙面デザイン</td>
        </tr>
        <tr>
          <th>2018/07</th>
          <td>「オフラインGぷろ! 2018年夏号」ロゴデザイン、組版</td>
        </tr>
        <tr>
          <th>2017/10</th>
          <td>
            「
            <a href="https://satoyama-nogyo.com/" target="blank">
              里山農業プロジェクト
            </a>
            」ウェブサイト制作
          </td>
        </tr>
        <tr>
          <th>2017/08</th>
          <td>「G-Second WEB Version 5」ウェブデザイン</td>
        </tr>
      </table>
      <p>
        その他、ソフトウェア開発・ウェブデザイン・グラフィックデザイン・映像編集などの実績多数
      </p>
      <br />
      <h2>資格</h2>
      <ul>
        <li>普通自動車第一種免許（MT）</li>
        <li>ITパスポート</li>
        <li>
          TOEIC L&R 835点（Listening 455＋Reading 380、2020年11月 IPテスト）
        </li>
        <li>実用英語技能検定 準2級</li>
        <li>中国語検定試験 4級</li>
        <li>第4級アマチュア無線技士</li>
      </ul>
      <br />
      <h2>所属</h2>
      <ul>
        <li>
          <a href="https://xr-hamaria.github.io/" target="blank">
            静岡大学 xRサークルはまりあ
          </a>
        </li>
        <li>
          <a href="https://iconcreator.web.fc2.com/" target="blank">
            静岡大学 ICON
          </a>
        </li>
        <li><a href="https://www.g-second.net/" target="blank">G-Second</a></li>
        <li>
          <a href="https://www.scout-aoi.jp/" target="blank">
            ボーイスカウト 三河葵地区
          </a>
        </li>
      </ul>
      <br />
      <h2>受賞歴</h2>
      <ul>
        <li>
          マスコットアプリ文化祭2020 プロ生ちゃん賞 「
          <a href="https://arkw.net/products/web/prohaya/">
            プロ生早押しクイズ
          </a>
          」
        </li>
        <li>
          マスコットアプリ文化祭2019 HSPTV!賞 「
          <a href="https://psk.arkw.net/">プロ生進捗管理</a>
          」
        </li>
        <li>
          第16回ふるさと岡崎メディアコンクール 児童生徒部門 高校の部
          審査員特別賞 「
          <a href="https://arkw.net/products/win/TriEditorLE/">TriEditor LE</a>
          」
        </li>
        <li>
          HSPプログラムコンテスト2017 (有)テクノキット賞 「
          <a href="https://arkw.net/products/win/eim2/">はじめての写真管理2</a>
          」
        </li>
        <li>PCNこどもプロコン2016冬 PCN特別賞</li>
        <li>PCNこどもプロコン2016夏 jig.jp賞</li>
        <li>HSPプログラムコンテスト2016 学生賞</li>
        <li>HSPプログラムコンテスト2015 学生賞</li>
        <li>
          全国小中学生作品コンクール パソコン部門 文部科学大臣奨励賞（2013年）
        </li>
        <li>
          全国小中学生作品コンクール パソコン部門
          中央出版社長賞（2011年、2012年）
        </li>
      </ul>
      <br />
      <h2>イベント登壇歴</h2>
      <table>
        <tr>
          <th>2021/12/26</th>
          <td>
            <a
              href="https://shizdailt.connpass.com/event/233650/"
              target="blank"
            >
              静大情報LT大会 -2021年12月-
            </a>
          </td>
        </tr>
        <tr>
          <th>2021/11/04</th>
          <td>
            <a
              href="https://talent.supporterz.jp/events/d618540f-6eaa-4972-9a6a-9538d453ecf4/"
              target="blank"
            >
              サポーターズ学生ライトニングトーク ～2021秋の終り編～
            </a>
          </td>
        </tr>
        <tr>
          <th>2021/10/30</th>
          <td>
            <a
              href="https://shizdailt.connpass.com/event/227253/"
              target="blank"
            >
              静大情報LT大会 -2021年10月-
            </a>
          </td>
        </tr>
        <tr>
          <th>2021/08/26</th>
          <td>
            <a
              href="https://talent.supporterz.jp/events/343cee73-1059-4058-9a25-c900c896fbda/"
              target="blank"
            >
              サポーターズ学生ライトニングトーク ～2021夏の終り編～
            </a>
          </td>
        </tr>
        <tr>
          <th>2021/08/08</th>
          <td>
            <a
              href="https://shizdailt.connpass.com/event/221048/"
              target="blank"
            >
              静大情報LT大会 -2021年8月-
            </a>
          </td>
        </tr>
        <tr>
          <th>2021/03/12</th>
          <td>
            <a href="https://talent.supporterz.jp/geeksai/2021/" target="blank">
              技育祭2021
            </a>
          </td>
        </tr>
        <tr>
          <th>2021/03/06</th>
          <td>
            <a
              href="https://team-kitten.connpass.com/event/200574/"
              target="blank"
            >
              KittenLT3
            </a>
          </td>
        </tr>
        <tr>
          <th>2021/02/14</th>
          <td>
            <a
              href="https://shizdailt.connpass.com/event/203058/"
              target="blank"
            >
              静大情報LT大会 -2021年2月-
            </a>
          </td>
        </tr>
        <tr>
          <th>2020/11/15</th>
          <td>
            <a
              href="https://team-kitten.connpass.com/event/190309/"
              target="blank"
            >
              KittenLT2
            </a>
          </td>
        </tr>
        <tr>
          <th>2020/09/28</th>
          <td>
            <a
              href="https://shizdailt.connpass.com/event/189874/"
              target="blank"
            >
              静大情報LT大会 -2020年9月-
            </a>
          </td>
        </tr>
        <tr>
          <th>2020/09/08</th>
          <td>
            <a href="https://gree.connpass.com/event/187716/" target="blank">
              #VRSionUp!8「WebVRオンラインイベント開発」
            </a>
          </td>
        </tr>
        <tr>
          <th>2020/08/24</th>
          <td>
            <a href="https://vrtokyo.connpass.com/event/181759/" target="blank">
              WebXR Tech Tokyo #2 @ cluster
            </a>
          </td>
        </tr>
        <tr>
          <th>2020/05/09</th>
          <td>
            <a
              href="https://student-lt.connpass.com/event/174185/"
              target="blank"
            >
              第4回バーチャル学生LT On YouTube LIVE
            </a>
          </td>
        </tr>
        <tr>
          <th>2019/06/09</th>
          <td>
            <a
              href="https://student-lt.connpass.com/event/130894/"
              target="blank"
            >
              第25回 学生エンジニアLT大会 in 名古屋
            </a>
          </td>
        </tr>
        <tr>
          <th>2019/03/17</th>
          <td>
            <a
              href="https://student-lt.connpass.com/event/114855/"
              target="blank"
            >
              高専カンファレンス×学生LT in 名古屋
            </a>
          </td>
        </tr>
        <tr>
          <th>2018/11/24</th>
          <td>
            <a
              href="https://pronama.jp/2018/11/09/pronama-57-at-nagoya/"
              target="blank"
            >
              プログラミング生放送勉強会 第57回＠名古屋
            </a>
          </td>
        </tr>
        <tr>
          <th>2018/10/14</th>
          <td>
            <a href="https://prolt.connpass.com/event/91719/" target="blank">
              プログラミングLT 2018
            </a>
          </td>
        </tr>
        <tr>
          <th>2017/11/23</th>
          <td>
            <a href="https://pronama.jp/2017/10/28/pronama-50/" target="blank">
              プログラミング生放送勉強会 第50回＠名古屋
            </a>
          </td>
        </tr>
        <tr>
          <th>2017/09/02</th>
          <td>
            <a
              href="http://www.wankuma.com/seminar/20170902nagoya42/"
              target="blank"
            >
              わんくま同盟 名古屋勉強会 #42
            </a>
          </td>
        </tr>
        <tr>
          <th>2016/11/26</th>
          <td>
            <a
              href="https://pronama.jp/2016/03/16/pronama-2016/"
              target="blank"
            >
              プログラミング生放送勉強会 第45回＠名古屋
            </a>
          </td>
        </tr>
        <tr>
          <th>2015/12/12</th>
          <td>
            <a
              href="https://pronama.jp/2015/11/27/pronama-38-at-nagoya/"
              target="blank"
            >
              プログラミング生放送勉強会 第38回＠名古屋
            </a>
          </td>
        </tr>
      </table>
      <br />
      <h2>使用機材</h2>
      <table>
        <tr>
          <th>メインPC</th>
          <td>
            HP ENVY 15 X360
            <span class="spec">
              （AMD Ryzen 5 2500U、16GB RAM、Windows 10）
            </span>
          </td>
        </tr>
        <tr>
          <th>サブPC</th>
          <td>
            mouse C1
            <span class="spec">
              （Intel Celeron N4100、8GB RAM、Windows 10）
            </span>
            <br />
            ASUS VivoBook E203NA
            <span class="spec">
              （Intel Celeron N3350、4GB RAM、Ubuntu 20.04）
            </span>
          </td>
        </tr>
        <tr>
          <th>サーバPC</th>
          <td>
            <a href="https://arkw.work/shiori_sv">Shiori Server</a>
            <span class="spec">
              （Orange Pi Zero LTS、Allwinner H2+、256MB RAM、Armbian buster）
            </span>
            <br />
            Akari Server
            <span class="spec">
              （Raspberry Pi 1 Model B+、Broadcom BCM2835、512MB RAM、Raspberry
              Pi OS bullseye）
            </span>
          </td>
        </tr>
        <tr>
          <th>スマートフォン</th>
          <td>
            geanee ADP-503G
            <span class="spec">
              （MediaTek MT6737M、1GB RAM、Android 10 Go Edition）
            </span>
            <br />
            HUAWEI GR5
            <span class="spec">
              （Snapdragon 615 MSM8939、2GB RAM、Android 5.1）
            </span>
          </td>
        </tr>
        <tr>
          <th>タブレット端末</th>
          <td>
            BLUEDOT BNT-71W
            <span class="spec">（MediaTek MT8163V、1GB RAM、Android 5.1）</span>
          </td>
        </tr>
        <tr>
          <th>デジタルカメラ</th>
          <td>Canon PowerShot SX620HS</td>
        </tr>
        <tr>
          <th>プリンタ</th>
          <td>
            Canon iP2700
            <span class="spec">（4色インクジェット）</span>
            <br />
            KKmoon POS-5890K
            <span class="spec">（58mmレシート）</span>
          </td>
        </tr>
        <tr>
          <th>スキャナ</th>
          <td>Canon CanoScan LiDE 30</td>
        </tr>
        <tr>
          <th>ICレコーダー</th>
          <td>SANYO DIPLY ICR-PS004M</td>
        </tr>
        <tr>
          <th>自動車</th>
          <td>
            <a href="https://arkw.work/h42v/">三菱 ミニカ H42V</a>
            <span class="spec">（2008年式 ライラ 2WD 5MT）</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- 左カラム -->
    <div class="left">
      <!-- 製品情報 -->
      <h1 class="heading">ソフトウェア</h1>
      <div class="products">
        <a href="javascript:changeProductsMenu('windows')">
          <div id="pr_menu_windows" class="item selected">PCソフトウェア</div>
        </a>
        <a href="javascript:changeProductsMenu('web')">
          <div id="pr_menu_web" class="item">ウェブアプリ</div>
        </a>
        <a href="javascript:changeProductsMenu('dev')">
          <div id="pr_menu_dev" class="item">開発者向け</div>
        </a>
      </div>
      <div class="products-background">
        <!-- 製品情報：Windows -->
        <div id="pr_item_windows" class="products">
          <div class="box">
            <Card
              url="https://arkw.net/products/pc_game/qubefall/"
              icon="products/qubefall"
              title="QubeFall"
              description="キューブを操り、敵を蹴散らす3Dアクションパズルゲーム"
            />
            <Card
              url="https://arkw.net/products/win/TypingFactory/"
              icon="products/typing"
              title="タイピングファクトリー"
              description="英単語や地名など短い文を連続して入力するタイピングゲーム"
            />
            <Card
              url="https://arkw.net/products/win/wsm/"
              icon="products/wsm"
              title="WinSmartWatch"
              description="スマートウォッチをモチーフとしたデスクトップアクセサリ"
            />
            <Card
              url="https://arkw.net/products/win/cpr/"
              icon="products/cpr"
              title="コピペレコーダー"
              description="クリップボードのコピー履歴を保持し、再利用できるソフトウェア"
            />
            <Card
              url="https://arkw.net/products/win/eims/"
              icon="products/eims"
              title="はじめての写真管理S"
              description="視覚的かつシンプルに大量の写真を管理できるソフトウェア"
            />
            <Card
              url="https://arkw.net/webgeki/wg/"
              icon="products/webgeki"
              title="ウェブ撃"
              description="オープンソースの次世代型ウェブサイト制作ツール"
            />
            <Card
              url="https://arkw.net/products/win/TriEditorLE/"
              icon="products/tried"
              title="TriEditor LE"
              description="学習用途に特化したHTML/CSS用のテキストエディタ"
            />
            <Card
              url="https://nagaharu.github.io/"
              icon="products/nghr"
              title="Nagaharu"
              description="シンプルに使えるオープンソースの文書作成ソフトウェア"
            />
          </div>
          <br />
          <p><b>開発終了 － Windows 8.1/10</b></p>
          <p>
            <a href="https://arkw.net/products/win/eim2/">
              <img src="~/assets/img/products/eim2.png" class="social" />
              はじめての写真管理2
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/EImageManage_1.1.2.exe">
              <img src="~/assets/img/products/download.png" class="social" />
              はじめての写真管理 Ver.1.1.2 インストーラー版
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/EImageManage_1.1.2.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              はじめての写真管理 Ver.1.1.2 ポータブル版
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/EDigitalDiary_1.0.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              はじめてのデジタル日記 Ver.1.0
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/EasyAddress_1.0.1.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              かんたん住所録 Ver.1.0.1 修正版
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/e_page_editor_1.0.1.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              E-Page Editor Ver.1.0.1
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/Okoshimon_1.0.1.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              おこしもん Ver.1.0.1
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/SimpleShinchoku_1.0.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              シンプル進捗管理 Ver.1.0
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/Jikagaki_1.0.1.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              直書きランチャー Ver.1.0.1
            </a>
            <br />
            <a href="https://arkw.net/products/win/old/ShiseiChecker_1.0.zip">
              <img
                src="~/assets/img/products/folder-zipper.png"
                class="social"
              />
              姿勢チェッカー for Windows Ver.1.0
            </a>
            <br />
          </p>
        </div>

        <!-- 製品情報：ウェブアプリ -->
        <div id="pr_item_web" class="products">
          <div class="box">
            <Card
              url="https://arkw.net/products/web/prohaya/"
              icon="products/prohaya"
              title="プロ生早押しクイズ"
              description="プロ生ちゃんや情報処理研究会のキャラクターと早押しクイズで対決!"
            />
            <Card
              url="https://psk.arkw.net/"
              icon="products/psk"
              title="プロ生進捗管理"
              description="その日に出した進捗を気軽に記録できるウェブサービス"
            />
            <Card
              url="https://arkw.net/products/web/pronama_clock/"
              icon="products/pronama_clock"
              title="プロ生時計"
              description="オープンソースのデジタル時計「Ahoxa」にプロ生テーマを収録!"
            />
            <Card
              url="https://arkw.net/products/web/ahoxa/"
              icon="products/ahoxa"
              title="Ahoxa"
              description="全画面で時計を表示するオープンソースのウェブアプリ"
            />
            <Card
              url="https://arkw.net/products/web/kintetsu/"
              icon="products/kintetsu"
              title="近鉄車番検索"
              description="近鉄車両の車両番号、両数、電算記号などを検索できるウェブアプリ"
            />
            <Card
              url="https://arkw.net/products/web/meitetsu/"
              icon="products/meitetsu"
              title="名鉄車番検索"
              description="名鉄車両の車両番号、両数、電算記号などを検索できるウェブアプリ"
            />
            <Card
              url="https://arkw.net/products/web/atck/"
              icon="products/atck"
              title="Article Checker"
              description="文章を検査し、「日本語の使い方」や「読みやすさ」をチェックするツール"
            />
            <Card
              url="https://arkw.net/products/web/ahoxa/"
              icon="products/dokaben"
              title="ドカベンメーカー"
              description="「ドカベン」のロゴ風画像を作成できるウェブアプリ"
            />
            <Card
              url="https://arkw.net/products/web/shazai/"
              icon="products/shazai"
              title="謝罪しろ! ジェネレータ"
              description="伊勢原名物「謝罪しろ!」看板がウェブブラウザで作り放題"
            />
            <Card
              url="https://arkw.net/products/web/hakase/"
              icon="products/hakase"
              title="教えて! ハカセ ジェネレータ"
              description="「教えて! ○○ハカセ」の画像を作成できるウェブアプリ"
            />
            <Card
              url="https://arkw.net/products/web/smsg/"
              icon="products/smsg"
              title="支離滅裂な思考・発言 ジェネレータ"
              description="「支離滅裂な思考・発言」の画像を作成できるウェブアプリ"
            />
            <Card
              url="https://arkw.net/products/web/mygen/"
              icon="products/mygen"
              title="マイ元号メーカー"
              description="2019年エイプリルフール企画"
            />
          </div>
          <br />
          <p><b>Arakawa Web Tools</b></p>
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
        </div>

        <!-- 製品情報：開発者向け -->
        <div id="pr_item_dev" class="products">
          <div class="box">
            <Card
              url="https://arkw.net/products/dev/AoiEngine/"
              icon="products/aoi"
              title="AoiEngine"
              description="コンテンツ開発を効率化するJavaScriptゲームエンジン"
            />
            <Card
              url="https://arkw.net/products/dev/arkw_tmpl/"
              icon="products/atmpl"
              title="Arakawa Template"
              description="汎用的なウェブサイト用CSSテンプレート"
            />
            <Card
              url="https://github.com/arkwnet/AkariFramework"
              icon="products/akari"
              title="AkariFramework"
              description="シンプルなCSSフレームワーク (Bijou CSS Framework ベース)"
            />
            <Card
              url="https://arkw.net/products/dev/katamuki_js/"
              icon="products/katamuki"
              title="Katamuki.js"
              description="ウェブページ上の文字を綺麗に表示できるJavaScriptライブラリ"
            />
            <Card
              url="https://arkw.net/products/dev/emotion_cover/"
              icon="products/emotion_cover"
              title="Emotion Cover"
              description="HTML5 Canvas/JavaScript製のスライドショースクリプト"
            />
            <Card
              url="https://github.com/arkwnet/SimplifiedCMS2"
              icon="products/scms2"
              title="Simplified CMS 2"
              description="PHP製の簡易型CMS"
            />
            <Card
              url="https://github.com/arkwnet/SimplifiedCMS"
              icon="products/scms"
              title="Simplified CMS"
              description="PHP製の超簡易型CMS"
            />
          </div>
        </div>
      </div>
      <br />

      <!-- コンテンツ -->
      <h1 class="heading">コンテンツ</h1>
      <p>
        <a href="https://arkw.work/shiori_sv/">
          <img
            src="~/assets/img/links/shiori.svg"
            class="link-banner"
            width="180"
          />
        </a>
        <br />
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
      <br />

      <!-- リンク集 -->
      <h1 class="heading">リンク集</h1>
      <p>
        <a href="http://yotiosoft.com/" target="blank">
          <img src="~/assets/img/links/yotiosoft.svg" width="180" />
        </a>
        <br />
        <a href="https://nona-takahara.github.io/" target="blank">
          <img src="~/assets/img/links/taka_impact.png" width="180" />
        </a>
        <br />
        <a href="http://bvetk.webcrow.jp/" target="blank">
          <img src="~/assets/img/links/bvetk.png" />
        </a>
        <br />
        <a href="https://gakujochan.com/" target="blank">
          <img src="~/assets/img/links/gakujo.png" width="180" />
        </a>
        <br />
        <a href="https://xr-hamaria.github.io/virtual-inf/" target="blank">
          <img src="~/assets/img/links/banner_120_90.png" />
        </a>
        <br />
        <a href="https://hishoutai.arkw.net/" target="blank">
          <img src="~/assets/img/links/hishoutai.png" />
        </a>
        <br />
        <a href="https://satoyama-nogyo.com/" target="blank">
          里山農業プロジェクト
        </a>
        <br />
        <a href="https://www.wizforest.com/" target="blank">魔法使いの森</a>
        <br />
      </p>
      <br />
      <p>
        <a href="https://www.shizuoka.ac.jp/" target="blank">
          <img
            src="~/assets/img/links/shizuoka.gif"
            width="180"
            class="link-banner"
          />
        </a>
        <br />
        <a href="http://hsp.tv/" target="blank">
          <img src="~/assets/img/links/hsptv_bnr.gif" />
        </a>
        <br />
        <a href="https://pass-case.com/" target="blank">Pass-case</a>
        <br />
        <a href="https://xeltica.work/" target="blank">Xeltica Studio</a>
        <br />
        <a href="https://yude.jp/" target="blank">yude.jp</a>
        <br />
        <a href="http://shinohara03.starfree.jp/" target="blank">
          Optinum Surviter
        </a>
        <br />
        <a href="https://uotaka.hamazo.tv/" target="blank">うおたか奮闘記</a>
        <br />
        <a href="http://ramlife.net/" target="blank">ラム・ライフ</a>
        <br />
        <a href="http://kusoft.moo.jp/" target="blank">KUsoft</a>
        <br />
      </p>
      <br />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card"
import UpdateInformation from "../components/Top/UpdateInformation"
import Chip from "../components/Top/Chip"
import Skill from "../components/Top/Skill"
import Work from "../components/Top/Work"
export default {
  components: {
    Card,
    UpdateInformation,
    Chip,
    Skill,
    Work,
  },
  layout: "default",
}
</script>
