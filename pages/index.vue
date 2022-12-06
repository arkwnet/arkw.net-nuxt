<template>
  <div>
    <!-- トピックス -->
    <h1 class="heading">トピックス</h1>
    <Card
      href="https://note.com/arkw0/n/n5289722646f0"
      src="topics/windef"
      title="「Windows セキュリティの重要な警告」ダイアログ"
      description="当サイトからダウンロードしたソフトウェアの起動時に「Windows セキュリティの重要な警告」ダイアログが表示された場合の対処法"
      height-auto
    />
    <Card
      href="https://note.com/arkw0/n/n14530024c13d"
      src="topics/winss"
      title="「WindowsによってPCが保護されました」ダイアログ"
      description="当サイトからダウンロードしたソフトウェアの起動時に「WindowsによってPCが保護されました」ダイアログが表示された場合の対処法"
      height-auto
    />
    <br />

    <!-- 更新情報 -->
    <h1 class="heading">更新履歴</h1>
    <UpdateInformation />
    <p>
      <a href="/history">過去の更新履歴を見る</a>
    </p>
    <br />

    <!-- プロフィール -->
    <h1 class="heading">プロフィール</h1>
    <Card
      src="icon"
      title="荒川 奏良 (Sora Arakawa, arkw)"
      description="男性 / 2001年4月11日生 / 静岡大学 情報学部 行動情報学科 3年 / 静岡県浜松市在住 / 愛知県岡崎市出身 / 個人サークル「Arakawa Laboratory」代表"
      height-auto
    />
    <div class="chip">
      <Chip href="https://twitter.com/arkw0" src="twitter.svg" name="Twitter" />
      <Chip href="https://note.com/arkw0" src="note.svg" name="note" />
      <Chip href="https://github.com/arkwnet" src="github.svg" name="GitHub" />
      <Chip
        href="https://speakerdeck.com/arkw"
        src="speakerdeck.svg"
        name="Speaker Deck"
      />
      <Chip
        href="https://connpass.com/user/arkw0/"
        src="connpass.png"
        name="connpass"
      />
      <Chip href="#" src="mail.svg" name="mail@arkw.net" />
    </div>
    <h2>学歴・職歴</h2>
    <ProfileTable src="history" />
    <br />
    <h2>スキル</h2>
    <div class="skill">
      <Skill src="html" title="HTML5" lv="5" />
      <Skill src="css" title="CSS3" lv="5" />
      <Skill src="javascript" title="JavaScript" lv="4" />
      <Skill src="vue" title="Vue.js" lv="4" />
      <Skill src="nuxt" title="Nuxt.js" lv="4" />
      <Skill src="ongeki" title="オンゲキ bright MEMORY" lv="3" />
      <Skill src="chunithm" title="チュウニズム NEW" lv="3" />
      <Skill src="illustrator" title="Adobe Illustrator" lv="3" />
      <Skill src="indesign" title="Adobe InDesign" lv="3" />
      <Skill src="electron" title="Electron" lv="3" />
      <Skill src="csharp" title="C#" lv="3" />
      <Skill src="cpp" title="C++" lv="2" />
      <Skill src="linux" title="Linux" lv="2" />
      <Skill src="php" title="PHP" lv="2" />
    </div>
    <br />
    <h2>外部制作実績</h2>
    <div class="works">
      <div class="wrapper">
        <Work
          src="202111"
          date="2021年11月"
          title="VRゲーム「黄昏の赤ずきん」"
          :type="[{ id: 'graphic', name: 'UIデザイン' }]"
          position="20%"
        />
        <Work
          href="https://xr-hamaria.github.io/virtual-inf"
          src="202110"
          date="2021年10月"
          title="静岡大学 バーチャル浜松キャンパス"
          :type="[
            { id: 'system', name: 'プログラム (Three.js+jQuery)' },
            { id: 'graphic', name: 'UIデザイン' },
            { id: 'movie', name: 'ムービー' },
          ]"
        />
        <Work
          href="https://preppers.business/"
          src="202109"
          date="2021年9月"
          title="株式会社プレッパーズ"
          :type="[
            { id: 'web', name: 'ウェブデザイン' },
            { id: 'graphic', name: 'グラフィック' },
            { id: 'system', name: 'システム開発 (PHP)' },
          ]"
        />
        <Work
          href="https://gakujochan.com/"
          src="202106"
          date="2021年6月"
          title="学情チャンプロジェクト"
          :type="[
            { id: 'web', name: 'ウェブデザイン' },
            { id: 'graphic', name: 'グラフィック' },
            { id: 'system', name: 'システム開発 (PHP)' },
          ]"
        />
        <Work
          src="202105"
          date="2021年5月"
          title="静岡大学ITソルーション室"
          :type="[{ id: 'web', name: 'ウェブサイト制作' }]"
        />
        <Work
          href="https://xr-hamaria.github.io/"
          src="202102"
          date="2021年2月"
          title="静岡大学xRサークルはまりあ"
          :type="[{ id: 'web', name: 'ウェブサイト制作' }]"
        />
        <Work
          src="202101"
          date="2021年1月"
          title="デジタルサイネージ「ITS DigiSign 2」"
          :type="[
            { id: 'system', name: 'プログラム (JavaScript)' },
            { id: 'graphic', name: 'グラフィック' },
          ]"
          position="10%"
        />
        <Work
          src="202011"
          date="2020年11月"
          title="VRゲーム「VRSpeedRun」"
          :type="[{ id: 'graphic', name: 'グラフィック' }]"
          position="25%"
        />
        <Work
          src="202010"
          date="2020年10月"
          title="デジタルサイネージ「ITS DigiSign」"
          :type="[
            { id: 'system', name: 'プログラム (JavaScript)' },
            { id: 'graphic', name: 'グラフィック' },
          ]"
        />
        <Work
          href="https://xr-hamaria.github.io/virtual-inf"
          src="202008"
          date="2020年08月"
          title="静岡大学 バーチャル情報学部"
          :type="[
            { id: 'system', name: 'プログラム (Three.js+jQuery)' },
            { id: 'graphic', name: 'UIデザイン' },
            { id: 'movie', name: 'ムービー' },
          ]"
        />
      </div>
    </div>
    <ProfileTable src="works" />
    <p>
      その他、ソフトウェア開発・ウェブデザイン・グラフィックデザイン・映像編集などの実績多数
    </p>
    <br />
    <h2>資格</h2>
    <ProfileList src="certification" />
    <br />
    <h2>所属</h2>
    <ProfileList src="organization" />
    <br />
    <h2>受賞歴</h2>
    <ProfileList src="award" />
    <br />
    <h2>イベント登壇歴</h2>
    <ProfileTable src="event" />
    <br />
    <h2>使用機材</h2>
    <table>
      <tr>
        <th>メインPC</th>
        <td>
          MSI KATANA GF66
          <span class="spec">
            (Intel Core i7-11800H、NVIDIA GeForce RTX 3050 Ti、16GB RAM、Windows
            11)
          </span>
          <br />
          HP ENVY 15 X360
          <span class="spec">(AMD Ryzen 5 2500U、16GB RAM、Windows 10)</span>
        </td>
      </tr>
      <tr>
        <th>サブPC</th>
        <td>
          mouse C1
          <span class="spec">(Intel Celeron N4100、8GB RAM、Windows 11)</span>
          <br />
          ASUS VivoBook E203NA
          <span class="spec">(Intel Celeron N3350、4GB RAM、Ubuntu 20.04)</span>
        </td>
      </tr>
      <tr>
        <th>サーバPC</th>
        <td>
          <a href="https://arkw.work/chifuyu_sv">
            EPSON Endeavor ST170E "Chifuyu Server"
          </a>
          <span class="spec">
            (Intel Celeron 2950M、4GB RAM、120GB SSD、Rocky Linux 8)
          </span>
          <br />
          EPSON Endeavor ST150E "Reinforce"
          <span class="spec">
            (Intel Core i3 380M、4GB RAM、320GB HDD、Windows 10)
          </span>
        </td>
      </tr>
      <tr>
        <th>スマートフォン</th>
        <td>
          FCNT arrows Be4 Plus F-41B
          <span class="spec">
            (Qualcomm Snapdragon 460、4GB RAM、Android 12)
          </span>
          <br />
          geanee ADP-503G
          <span class="spec">
            (MediaTek MT6737M、1GB RAM、Android 10 Go Edition)
          </span>
          <br />
          KYOCERA TORQUE G02
          <span class="spec">
            (Qualcomm Snapdragon 400、2GB RAM、Android 6.0)
          </span>
          <br />
          HUAWEI GR5
          <span class="spec">
            (Qualcomm Snapdragon 615、2GB RAM、Android 5.1)
          </span>
          <br />
          Panasonic P-07C
          <span class="spec">
            (Texas Instruments OMAP3630、512MB RAM、Android 2.3)
          </span>
        </td>
      </tr>
      <tr>
        <th>タブレット端末</th>
        <td>
          Apple iPad 第9世代 Wi-Fiモデル
          <span class="spec">(Apple A13 Bionic、iPadOS 15)</span>
          <br />
          BLUEDOT BNT-71W
          <span class="spec">(MediaTek MT8163V、1GB RAM、Android 5.1)</span>
        </td>
      </tr>
      <tr>
        <th>ハンディターミナル</th>
        <td>
          SUNMI V1s
          <span class="spec">
            (ARM Cortex-A7 Quad-core、1GB RAM、Android 6.0、58mmレシート)
          </span>
        </td>
      </tr>
      <tr>
        <th>ゲームコンソール</th>
        <td>
          Nintendo Switch
          <br />
          Nintendo 3DS LL
          <br />
          Nintendo DSi LL
          <br />
          Nintendo Wii
          <br />
          SCE PlayStation 2
          <br />
          SCE PlayStation
        </td>
      </tr>
      <tr>
        <th>デジタルカメラ</th>
        <td>Canon PowerShot SX620HS</td>
      </tr>
      <tr>
        <th>プリンタ</th>
        <td>
          Canon PIXUS iP2700
          <span class="spec">(4色インクジェット)</span>
          <br />
          KKmoon POS-5890K
          <span class="spec">(58mmレシート)</span>
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
          <span class="spec">(2008年式 ライラ 2WD 5MT)</span>
        </td>
      </tr>
      <tr>
        <th>バイク</th>
        <td>
          <a href="https://arkw.work/aa04/">ホンダ スーパーカブ50プロ AA04</a>
          <span class="spec">(2016年式)</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Card from "../components/Card"
import UpdateInformation from "../components/Index/UpdateInformation"
import Chip from "../components/Index/Chip"
import Skill from "../components/Index/Skill"
import Work from "../components/Index/Work"
import ProfileList from "../components/Index/ProfileList"
import ProfileTable from "../components/Index/ProfileTable"
export default {
  components: {
    Card,
    UpdateInformation,
    Chip,
    Skill,
    Work,
    ProfileList,
    ProfileTable,
  },
  layout: "default",
}
</script>
