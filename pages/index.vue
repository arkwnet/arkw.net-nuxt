<template>
  <div>
    <!--
    <div class="warning">
      <span>注意喚起</span>
      <p>
        当団体を装った「なりすましメール」が発信されている事実を確認しました。
        <br />
        当該メールを受信された皆様には、多大なるご迷惑をお掛けしましたことを心よりお詫び申し上げます。
        <br />
        これらのメールは当団体からの情報漏洩によるものではなく、また当団体及びその構成員が送信したものではございません。
      </p>
      <p>
        当団体を騙る「アドレスが一致しない」「内容に心当たりがない」メールを受信された際には、
        <br />
        ウイルス感染・フィッシングサイトへの誘導・不正アクセスなどの危険がございますので、
        <br />
        メールの開封などは行わず削除していただきますようお願いいたします。
      </p>
      <p>
        当団体におきましては、不正アクセスの防止など情報セキュリティに十分注意しておりますが、
        <br />
        引き続き対策を強化して参りますので、ご理解とご協力をいただきますよう、よろしくお願いいたします。
      </p>
      <p>
        2023年10月16日
        <br />
        Arakawa Laboratory (荒川技研) / 荒川 奏良
      </p>
    </div>
    -->
    <!-- トピックス -->
    <h1 class="heading">{{ $t("heading.topics") }}</h1>
    <!--
    <Card
      href="https://arkw.work/doujin/"
      src="topics/comiket"
      title="「コミックマーケット103」に出展します!!"
      description="2023年12月30～31日開催「コミックマーケット103」にて、新作含むWindows向けゲームCDや技術書を頒布します! 場所は「2日目 (日曜日) 東地区 Sブロック 40b」です。ぜひお越しください!!"
      height-auto
    />
    -->
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
    <h1 class="heading">{{ $t("heading.update") }}</h1>
    <UpdateInformation />
    <p>
      <nuxt-link :to="localePath('history')">{{ $t("update.all") }}</nuxt-link>
    </p>
    <br />

    <!-- プロフィール -->
    <h1 class="heading">{{ $t("heading.profile") }}</h1>
    <Card
      src="icon"
      title="荒川 奏良 (Sora Arakawa, arkw)"
      :description="$t('profile.overview')"
      height-auto
    />
    <div class="chip">
      <Chip
        href="https://x.com/arkw0"
        src="x.svg"
        name="@arkw0"
        alt="X (Twitter)"
      />
      <Chip
        href="https://mi.arkw.work/@arkw"
        src="misskey.png"
        name="@arkw@mi.arkw.work"
        alt="mi.arkw.work (Misskey/ActivityPub)"
      />
      <Chip
        href="https://misskey.io/@arkw"
        src="misskeyio.png"
        name="@arkw@misskey.io"
        alt="Misskey.io (Misskey/ActivityPub)"
      />
      <Chip
        href="https://github.com/arkwnet"
        src="github.svg"
        name="@arkwnet"
        alt="GitHub"
      />
      <Chip
        href="https://note.com/arkw0"
        src="note.svg"
        name="@arkw0"
        alt="note"
      />
      <Chip
        href="https://qiita.com/arkw"
        src="qiita.svg"
        name="@arkw"
        alt="Qiita"
      />
      <Chip
        href="https://speakerdeck.com/arkw"
        src="speakerdeck.svg"
        name="@arkw"
        alt="Speaker Deck"
      />
      <Chip
        href="https://connpass.com/user/arkw0/"
        src="connpass.png"
        name="@arkw0"
        alt="connpass"
      />
    </div>
    <h2>{{ $t("profile.background") }}</h2>
    <ProfileTable src="history" />
    <br />
    <h2>{{ $t("profile.skill") }}</h2>
    <div class="skill">
      <Skill src="html" title="HTML5" lv="5" />
      <Skill src="css" title="CSS3" lv="5" />
      <Skill src="javascript" title="JavaScript" lv="5" />
      <Skill src="vue" title="Vue.js" lv="5" />
      <Skill src="nuxt" title="Nuxt.js" lv="5" />
      <Skill src="python" title="Python" lv="4" />
      <Skill src="chunithm" title="チュウニズム LUMINOUS" lv="4" />
      <Skill src="ongeki" title="オンゲキ bright MEMORY" lv="3" />
      <Skill src="illustrator" title="Adobe Illustrator" lv="3" />
      <Skill src="indesign" title="Adobe InDesign" lv="3" />
      <Skill src="electron" title="Electron" lv="3" />
      <Skill src="csharp" title="C#" lv="3" />
      <Skill src="java" title="Java" lv="3" />
      <Skill src="cpp" title="C/C++" lv="2" />
      <Skill src="linux" title="Linux" lv="2" />
      <Skill src="php" title="PHP" lv="2" />
    </div>
    <br />
    <h2>{{ $t("profile.work.title") }}</h2>
    <div class="works">
      <div class="wrapper">
        <Work
          src="IGC2023A"
          date="2023年11月"
          title="ICON Game Collection 2023 Autumn"
          :type="[{ id: 'graphic', name: 'パッケージデザイン (イラスト除く)' }]"
          position="100%"
        />
        <Work
          src="IGC2022A"
          date="2022年11月"
          title="ICON Game Collection 2022 Autumn"
          :type="[{ id: 'graphic', name: 'パッケージデザイン (イラスト除く)' }]"
          position="100%"
        />
        <Work
          href="https://asahi-chuzo.co.jp/"
          src="202201"
          date="2022年1月"
          title="株式会社 旭鋳造所"
          :type="[
            { id: 'web', name: 'ウェブデザイン (WordPress)' },
            { id: 'graphic', name: 'グラフィック' },
            { id: 'system', name: 'システム開発 (PHP)' },
          ]"
          position="50%"
        />
        <Work
          src="IGC2021A"
          date="2021年11月"
          title="ICON Game Collection 2021 Autumn"
          :type="[{ id: 'graphic', name: 'パッケージデザイン (イラスト除く)' }]"
          position="85%"
        />
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
          title="株式会社 プレッパーズ"
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
        <Work
          src="20190428"
          date="2019年04月"
          title="知ろう! ボーイスカウト"
          :type="[{ id: 'graphic', name: '紙面デザイン' }]"
          position="10%"
        />
        <Work
          href="https://bvetk.arkw.net/"
          src="20190426"
          date="2019年04月"
          title="中部新都市運輸区"
          :type="[
            { id: 'web', name: 'ウェブデザイン' },
            { id: 'graphic', name: 'グラフィック' },
          ]"
          position="5%"
        />
      </div>
    </div>
    <ProfileTable src="works" />
    <p>
      {{ $t("profile.work.other") }}
    </p>
    <br />
    <h2>{{ $t("profile.certification") }}</h2>
    <ProfileList src="certification" />
    <br />
    <h2>{{ $t("profile.organization") }}</h2>
    <ProfileList src="organization" />
    <br />
    <h2>{{ $t("profile.award") }}</h2>
    <ProfileList src="award" />
    <br />
    <h2>{{ $t("profile.event") }}</h2>
    <ProfileTable src="event" />
    <br />
    <h2>{{ $t("profile.equipment.title") }}</h2>
    <p>
      ※
      <s>{{ $t("profile.equipment.retired") }}</s>
      {{ $t("profile.equipment.retired2") }}
    </p>
    <table>
      <tr>
        <th>{{ $t("profile.equipment.main") }}</th>
        <td>
          MSI KATANA GF66
          <span class="spec">
            (Intel Core i7-11800H, NVIDIA GeForce RTX 3050 Ti, 16GB RAM, 512GB
            SSD, Windows 11)
          </span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.sub") }}</th>
        <td>
          Apple Mac mini 2023
          <span class="spec">(Apple M2, 8GB RAM, 256GB SSD, macOS 14)</span>
          <br />
          HP ENVY 15 X360
          <span class="spec">
            (AMD Ryzen 5 2500U, 16GB RAM, 256GB SSD + 1TB HDD, Windows 10)
          </span>
          <br />
          TOSHIBA dynabook Satellite B554
          <span class="spec">
            (Intel Core i3-4100M, 8GB RAM, 500GB HDD, Windows 7)
          </span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.mobile") }}</th>
        <td>
          Panasonic Let's note CF-SZ5
          <span class="spec">
            (Intel Core i5-6300U, 8GB RAM, 256GB SSD, Windows 10)
          </span>
          <br />
          mouse C1
          <span class="spec">
            (Intel Celeron N4100, 8GB RAM, 240GB SSD, Windows 11)
          </span>
          <br />
          ASUS VivoBook E203NA
          <span class="spec">
            (Intel Celeron N3350, 4GB RAM, 32GB eMMC, Ubuntu 20.04)
          </span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.server") }}</th>
        <td>
          <a href="https://arkw.work/chifuyu_sv">
            EPSON Endeavor ST170E "Chifuyu Server"
          </a>
          <span class="spec">
            (Intel Celeron 2950M, 4GB RAM, 120GB SSD, Rocky Linux 8)
          </span>
          <br />
          <a href="https://arkw.work/reinforce">
            EPSON Endeavor ST150E "Reinforce"
          </a>
          <span class="spec">
            (Intel Core i3 380M, 4GB RAM, 320GB HDD, Rocky Linux 8)
          </span>
          <br />
          <s>
            <a href="https://arkw.work/shiori_sv">
              Orange Pi Zero LTS "Shiori Server"
            </a>
            <span class="spec">
              (Allwinner H2+, 256MB RAM, 32GB MicroSD, Armbian buster)
            </span>
          </s>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.smartphone") }}</th>
        <td>
          FCNT arrows Be4 Plus F-41B
          <span class="spec">(Android 13)</span>
          <br />
          geanee ADP-503G
          <span class="spec">(Android 10 Go Edition)</span>
          <br />
          KYOCERA TORQUE G02
          <span class="spec">(Android 6.0)</span>
          <br />
          HUAWEI GR5
          <span class="spec">(Android 5.1)</span>
          <br />
          Panasonic P-07C
          <span class="spec">(Android 2.3)</span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.tablet") }}</th>
        <td>
          Apple iPad 9th Generation Wi-Fi
          <span class="spec">(iPadOS 15)</span>
          <br />
          BLUEDOT BNT-71W
          <span class="spec">(Android 5.1)</span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.handy") }}</th>
        <td>
          SUNMI V1s
          <span class="spec">(Android 6.0, 58mm Receipt)</span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.dictionary") }}</th>
        <td>
          SHARP Brain PW-HC4
          <br />
          SII DAYFILER DF-X8000
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.game") }}</th>
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
          <span class="spec">(SCPH-90000)</span>
          <br />
          SCE PlayStation
          <span class="spec">(SCPH-7500)</span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.camera") }}</th>
        <td>Canon PowerShot SX620HS</td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.multi") }}</th>
        <td>
          Brother DCP-J540N
          <span class="spec">(4-color Inkjet)</span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.printer") }}</th>
        <td>
          Canon PIXUS iP2700
          <span class="spec">(4-color Inkjet)</span>
          <br />
          KKmoon POS-5890K
          <span class="spec">(58mm Receipt)</span>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.scanner") }}</th>
        <td>Canon CanoScan LiDE 30</td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.recorder") }}</th>
        <td>SANYO DIPLY ICR-PS004M</td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.keyboard") }}</th>
        <td>YAMAHA PORTATONE PSR-290</td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.car") }}</th>
        <td>
          <a href="https://arkw.work/da64w/">Suzuki Every Wagon DA64W</a>
          <span class="spec">(JP 2WD 5MT)</span>
          <br />
          <s>
            <a href="https://arkw.work/h42v/">Mitsubishi Minica H42V</a>
            <span class="spec">(LYRA 2WD 5MT)</span>
          </s>
        </td>
      </tr>
      <tr>
        <th>{{ $t("profile.equipment.motorcycle") }}</th>
        <td>
          <a href="https://arkw.work/aa04/">Honda Super Cub 50 Pro AA04</a>
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
