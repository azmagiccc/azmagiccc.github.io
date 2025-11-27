import { useEffect, useState } from "react";
import "./App.css";

type InfoLink = {
  title: string;
  description: string;
  url: string;
  cta: string;
};

type Highlight = {
  title: string;
  description: string;
};

type MediaLink = {
  title: string;
  url: string;
  note?: string;
};

type MediaPanel = {
  title: string;
  caption: string;
  items: MediaLink[];
};

type VideoClip = {
  title: string;
  description: string;
  source?: string;
  link?: string;
};

type NewsArticle = {
  title: string;
  url: string;
  image: string;
  tag?: string;
  source?: string;
};

type NewsSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: NewsArticle[];
};

type HeroContent = {
  eyebrow: string;
  title: string;
  lead: string;
  actions: { label: string; href: string; variant?: "primary" | "secondary" | "outline" }[];
  tags: string[];
};

type InfoSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  links: InfoLink[];
  highlights: Highlight[];
};

type MediaSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  panels: MediaPanel[];
};

type VideoSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  clips: VideoClip[];
};

type CommunityContent = {
  title: string;
  description: string;
  actions: { label: string; href: string; variant?: "primary" | "outline" | "secondary" }[];
};

type PageContent = {
  hero: HeroContent;
  info: InfoSectionContent;
  media: MediaSectionContent;
  news?: NewsSection;
  videos?: VideoSectionContent;
  community: CommunityContent;
};

type PicWeArticle = {
  title: string;
  url: string;
  tag?: string;
  source?: string;
  cover?: string;
};

type PicWeVideoClip = {
  title: string;
  filename: string;
  description?: string;
};

type PicWeLink = {
  title: string;
  url: string;
  description?: string;
};

const hydropowerContent: PageContent = {
  hero: {
    eyebrow: "HYDROPOWER · REAL WORLD ASSET",
    title: "Isfayram 水电站 RWA 资产",
    lead:
      "以真实水电基础设施为底层资产，IHP 将清洁能源收益带入链上，为全球用户提供透明、可追溯的可持续回报。",
    actions: [
      { label: "访问官网", href: "https://hydropower.picwe.org/", variant: "primary" },
      { label: "查看 IHP 详情", href: "https://iro.picwe.org/TRADING-details/4", variant: "secondary" },
    ],
    tags: ["清洁能源", "吉尔吉斯斯坦", "基础设施", "全球流动性"],
  },
  info: {
    eyebrow: "项目信息",
    title: "水电站 RWA 概览",
    description: "综合能源、链上数据与运营数据的公开透明，帮助理解水电站资产的收益模型与风险披露。",
    links: [
      {
        title: "Hydropower 官网",
        description: "追踪 Isfayram 水电站的建设节点、治理结构与媒体活动，实时了解 RWA 项目进展。",
        url: "https://hydropower.picwe.org/",
        cta: "访问官网",
      },
      {
        title: "IHP 代币详情",
        description: "在 PicWe IRO 平台查看 IHP (Isfayram Hydropower) 的发行方案、收益分配与链上透明数据。",
        url: "https://iro.picwe.org/TRADING-details/4",
        cta: "查看 IHP",
      },
    ],
    highlights: [
      {
        title: "真实世界资产",
        description: "Isfayram 水电站位于吉尔吉斯斯坦，清洁能源收益上链，资产与产能可核查。",
      },
      {
        title: "链上透明披露",
        description: "通过 IHP 代币将收益权、合约与媒体披露同步链上，为全球参与者提供实时数据。",
      },
      {
        title: "全球合规协同",
        description: "Web3 平台与当地政府、媒体联动，确保实物资产、社区和协议的可持续性。",
      },
    ],
  },
  media: {
    eyebrow: "媒体曝光",
    title: "国际媒体与本地报道",
    description: "汇总 Web3 行业新闻与吉尔吉斯斯坦本地媒体，了解 Hydropower 项目的真实落地。",
    panels: [
      {
        title: "Web3 媒体",
        caption: "行业视角解析 RWA 价值",
        items: [
          {
            title: "欧科日报快讯",
            url: "https://www.odaily.news/zh-CN/newsflash/451188",
            note: "Web3 行业媒体",
          },
          {
            title: "链捕手专访",
            url: "https://www.chaincatcher.com/article/2210822",
            note: "行业深度",
          },
        ],
      },
      {
        title: "吉尔吉斯斯坦媒体",
        caption: "本地政府与公众共同关注",
        items: [
          {
            title: "能源部报道 Isfayram 水电站",
            url: "https://cn.kabar.kg/news/221233/",
            note: "Kabar 国家通讯社",
          },
          {
            title: "国家电台关注 Isfayram 项目",
            url: "https://www.facebook.com/share/v/1CSEXN368S/",
            note: "Kyrgyz National Radio",
          },
          {
            title: "UTRK 国家电视台视频",
            url: "https://www.facebook.com/UTRKkg/videos/501840462468960",
            note: "官方发布",
          },
        ],
      },
      {
        title: "国内媒体",
        caption: "透视一带一路能源 RWA 模式",
        items: [
          {
            title: "腾讯新闻·一带一路能源 RWA 模式",
            url: "https://news.qq.com/rain/a/20251012A03X1K00",
            note: "国内财经媒体",
          },
        ],
      },
      {
        title: "CZ 与全球关注",
        caption: "行业龙头发声与支持",
        items: [
          {
            title: "CZ 关注吉尔吉斯斯坦能源资产",
            url: "https://x.com/cz_binance/status/1981947993491214663",
            note: "X 平台",
          },
          {
            title: "CZ 关注 PicWe 推动 RWA 落地",
            url: "https://x.com/cz_binance/status/1982028486790328802",
            note: "X 平台",
          },
        ],
      },
    ],
  },
  videos: {
    eyebrow: "影像实录",
    title: "水电站真实进展",
    description: "通过官方授权视频，直观了解 Isfayram 水电站设施、现场发布与能源专题报道。",
    clips: [
      {
        title: "Isfayram 水电站设施巡礼",
        description: "本地媒体现场录制，展示电站建设、调试与输电线路。",
        link: "https://www.facebook.com/UTRKkg/videos/501840462468960",
      },
      {
        title: "吉尔吉斯斯坦能源专题报道",
        description: "聚焦清洁能源、监管与 PicWe Hydropower 项目细节的短片。",
        link: "https://cn.kabar.kg/news/221233/",
      },
      {
        title: "CZ 对吉尔吉斯斯坦市场评论",
        description: "关注稳定币、CBDC 以及跨链市场的行业观点，提及 EthSign、yzi labs 等。",
        link: "https://x.com/cz_binance/status/1981947993491214663",
      },
      {
        title: "吉尔吉斯斯坦 CBDC 现场",
        description: "CBDC 测试、民众支付场景，以及能源、稳定币协同的行业访谈。",
        link: "https://x.com/cz_binance/status/1982028486790328802",
      },
    ],
  },
  community: {
    title: "加入 PicWe 社群",
    description:
      "关注官方渠道、订阅进展。我们与当地政府、清洁能源资产方和全球用户一起共建透明的能源 RWA。",
    actions: [
      { label: "Hydropower 官网", href: "https://hydropower.picwe.org/", variant: "primary" },
      { label: "PicWe X 账号", href: "https://x.com/PicWeGlobal", variant: "outline" },
    ],
  },
};

const picweArticles: PicWeArticle[] = [
  {
    title: "WEUSD：AI驱动的全链结算稳定币",
    url: "https://mp.weixin.qq.com/s/T1QY1Wjhr3Q_ahfpHVM4fQ",
    tag: "WEUSD",
    source: "公众号",
  },
  {
    title: "风起中亚，主权链上基础设施+RWAFi的未来展望",
    url: "https://mp.weixin.qq.com/s/J0yUcOOG3CSNrGUQlX9bTQ",
    tag: "中亚",
    source: "公众号",
  },
  {
    title: "如何让万亿级RWAFi率先在BNB Chain上爆发？",
    url: "https://mp.weixin.qq.com/s/RZdhFB5ZbQSPppgx6EFrbg",
    tag: "BNB Chain",
    source: "公众号",
  },
  {
    title: "提前响应CZ号召，PicWe以BNB Chain为基础，助力吉尔吉斯斯坦开启链上RWA时代",
    url: "https://mp.weixin.qq.com/s/DxmXZAmC4rsFfXPuVUYiPw",
    tag: "BNB Chain",
    source: "公众号",
  },
  {
    title: "PicWe亮相｜2025南京RWA领军峰会",
    url: "https://mp.weixin.qq.com/s/jCSBKXeCFbhdusgPC-uoCQ",
    tag: "活动",
    source: "公众号",
  },
  {
    title: "PicWe 全链RWA DEX 教程",
    url: "https://mp.weixin.qq.com/s/Ful1onsIT6IsCQ4ZI5lRWg",
    tag: "教程",
    source: "公众号",
  },
  {
    title: "PicWe 会是下一个 Hyperliquid 吗？深度对比与未来展望",
    url: "https://mp.weixin.qq.com/s/NOIG8fVHloR0PPvasRM17A",
    tag: "对比",
    source: "公众号",
  },
  {
    title: "撸毛赚了5000万老炮为何转战 第三代金融基础设施 PicWe？",
    url: "https://mp.weixin.qq.com/s/UaIAgSVzuV4thNERu3038w",
    tag: "社群",
    source: "公众号",
  },
  {
    title: "RWA 第一股Figure VS 下一匹黑马PicWe ？",
    url: "https://mp.weixin.qq.com/s/Nb8VpWu2ySmbNhJKFF79QQ",
    tag: "对比",
    source: "公众号",
  },
  {
    title: "区块链每轮财富浪潮不断转换的底层逻辑是什么？",
    url: "https://d.foresightnews.pro/article/detail/91192",
    tag: "深度",
    source: "ForesightNews",
  },
  {
    title: "流动性割裂与链抽象：限制RWA发展的元凶及其解决方案",
    url: "https://mp.weixin.qq.com/s/Px_0EgRk4gTRNagUdSFnSQ",
    tag: "流动性",
    source: "公众号",
  },
  {
    title: "全球首个「水电站RWA」在币安BNBChain 成功 IRO！",
    url: "https://mp.weixin.qq.com/s/9Mp97ece9qMulCXAQEcIDg",
    tag: "Hydropower",
    source: "公众号",
  },
  {
    title: "人工智能，重构整个世界？——人工智能CEO论坛（第二期）",
    url: "https://mp.weixin.qq.com/s/QMa7bRH7zoa8_VGrtb8qYA",
    tag: "AI",
    source: "论坛",
  },
  {
    title: "金枝玉葉迈向全球化 RWA：首个中国品牌“中式创造”上链，影响万亿级市场",
    url: "https://ishare.ifeng.com/c/s/v006G6HIMq8unUWtj2oS0lERntTveTUfraq2u6dEz6JmJY7Fdh4CU3TU2j2Cx6xNOfPAqA16wq9E5B2aF4T--TW-_zqw",
    tag: "全球化",
    source: "凤凰网",
  },
  {
    title: "PicWe：让用户零门槛通过AI代理操作全链流动性的基础设施",
    url: "https://mp.weixin.qq.com/s/-tF54bOepGZZp42sfm4b0w",
    tag: "AI Agent",
    source: "公众号",
  },
  {
    title: "PicWe、区块谷正式成為WCS·2025 RWA產業大會戰略合作單位！！",
    url: "https://mp.weixin.qq.com/s/8UcdDFgfeELojc4XaltEDA",
    tag: "WCS 2025",
    source: "公众号",
  },
  {
    title: "香港數碼港董事局前主席林家禮博士確認出席WCS·2025 RWA產業大會！",
    url: "https://mp.weixin.qq.com/s/LhqhOw09FiUPpbNBavenNQ",
    tag: "嘉宾",
    source: "WCS 2025",
  },
  {
    title: "重磅消息！RWA研究院榮譽主席霍震宇確認出席WCS·2025 RWA產業大會！",
    url: "https://mp.weixin.qq.com/s/gbQce1KBYik1C65DviAYVw",
    tag: "嘉宾",
    source: "WCS 2025",
  },
];

const picweVideos: PicWeVideoClip[] = [
  {
    title: "PicWe 上海路演速览",
    filename: "picwe-上海.mp4",
    description: "与核心用户共创 Social RWA 的一线氛围。",
  },
  {
    title: "PicWe 浙大分享",
    filename: "picwe-浙大.mp4",
    description: "校园场景中的链上基础设施与 AI 结合。",
  },
  {
    title: "PicWe 深圳直击",
    filename: "picwe-深圳.mp4",
    description: "南方创新节点的社区对话与产品演示。",
  },
];

const picweLinks: PicWeLink[] = [
  { title: "官网", url: "https://www.picwe.org", description: "产品与路线图更新" },
  { title: "Twitter", url: "https://x.com/PicWeGlobal", description: "实时动态" },
  { title: "Medium", url: "https://medium.com/@picwe", description: "英文长文" },
  { title: "Gitbook", url: "https://picwe.gitbook.io/picwe", description: "协议与文档" },
  { title: "Telegram 社区", url: "https://t.me/PicWeCommunity", description: "全球社区" },
  { title: "Telegram 订阅号", url: "https://t.me/PicWeAnnouncements", description: "官方广播" },
  { title: "Discord 社区", url: "https://discord.com/invite/picwe", description: "产品与开发者" },
  { title: "WEUSD", url: "https://www.picwe.org/en/bridge", description: "全链稳定币入口" },
];

type MediaPanelProps = {
  title: string;
  caption: string;
  items: MediaLink[];
};

type NewsGridProps = {
  news: NewsSection;
};

function MediaPanel({ title, caption, items }: MediaPanelProps) {
  return (
    <div className="media-card">
      <div className="media-card__header">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.url}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
            {item.note && <span>{item.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsGrid({ news }: NewsGridProps) {
  return (
    <section className="news-section card-surface">
      <div className="section-header">
        <div>
          <p className="eyebrow">{news.eyebrow}</p>
          <h2>{news.title}</h2>
        </div>
        <p>{news.description}</p>
      </div>
      <div className="news-grid">
        {news.items.map((item) => (
          <a key={item.url} className="news-card" href={item.url} target="_blank" rel="noreferrer">
            <div className="news-image" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="news-body">
              <div className="news-meta">
                {item.tag && <span className="tag">{item.tag}</span>}
                {item.source && <span className="source">{item.source}</span>}
              </div>
              <h3>{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function PageView({ content }: { content: PageContent }) {
  return (
    <>
      <header className="hero card-surface">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1>{content.hero.title}</h1>
        <p className="hero-lead">{content.hero.lead}</p>
        <div className="hero-actions">
          {content.hero.actions.map((action) => (
            <a
              key={action.href}
              className={`btn ${action.variant ?? "primary"}`}
              href={action.href}
              target="_blank"
              rel="noreferrer"
            >
              {action.label}
            </a>
          ))}
        </div>
        <div className="hero-tags">
          {content.hero.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>

      <section className="info-section card-surface">
        <div className="section-header">
          <div>
            <p className="eyebrow">{content.info.eyebrow}</p>
            <h2>{content.info.title}</h2>
          </div>
          <p>{content.info.description}</p>
        </div>

        <div className="info-cards">
          {content.info.links.map((link) => (
            <article key={link.url} className="info-card">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noreferrer" className="text-link">
                {link.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="highlight-grid">
          {content.info.highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {content.news && <NewsGrid news={content.news} />}

      <section className="media-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">{content.media.eyebrow}</p>
            <h2>{content.media.title}</h2>
          </div>
          <p>{content.media.description}</p>
        </div>

        <div className="media-grid">
          {content.media.panels.map((panel) => (
            <MediaPanel key={panel.title} title={panel.title} caption={panel.caption} items={panel.items} />
          ))}
        </div>
      </section>

      {content.videos && (
        <section className="video-section card-surface">
          <div className="section-header">
            <div>
              <p className="eyebrow">{content.videos.eyebrow}</p>
              <h2>{content.videos.title}</h2>
            </div>
            <p>{content.videos.description}</p>
          </div>

          <div className="video-grid">
            {content.videos.clips.map((clip) => (
              <article key={clip.title} className="video-card">
                <div className="video-wrapper">
                  {clip.source ? (
                    <video controls preload="metadata">
                      <source src={clip.source} type="video/mp4" />
                      您的浏览器暂不支持 video 标签。
                    </video>
                  ) : (
                    <div className="video-placeholder">
                      <p>视频在官方渠道查看</p>
                      {clip.link && (
                        <a href={clip.link} target="_blank" rel="noreferrer" className="btn secondary">
                          前往视频源
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <h4>{clip.title}</h4>
                <p>{clip.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="community-callout card-surface">
        <h3>{content.community.title}</h3>
        <p>{content.community.description}</p>
        <div className="callout-links">
          {content.community.actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className={`btn ${action.variant ?? "primary"}`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} PicWe RWA Community</p>
      </footer>
    </>
  );
}

function PicWePage() {
  return (
    <div className="picwe-page">
      <header className="picwe-hero card-surface">
        <div className="hero-orb" />
        <p className="eyebrow">PicWe · 全链 RWA 操作系统</p>
        <h1>AI 代理驱动的 Social RWA · WEUSD 全链结算</h1>
        <p className="hero-lead">
          让每个用户用对话式 AI 操作跨链流动性。PicWe 将 RWA、DEX、结算稳定币 WEUSD 和社区协同汇集，
          以更低门槛把真实资产带上链。
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="https://www.picwe.org" target="_blank" rel="noreferrer">
            进入官网
          </a>
          <a className="btn secondary" href="https://www.picwe.org/en/bridge" target="_blank" rel="noreferrer">
            WEUSD 全链桥
          </a>
          <a className="btn outline" href="https://picwe.gitbook.io/picwe" target="_blank" rel="noreferrer">
            阅读 Gitbook
          </a>
        </div>
        <div className="picwe-hero-tags">
          <span>AI Agent 结算层</span>
          <span>跨链流动性抽象</span>
          <span>RWA + 社交网络</span>
          <span>WCS · 2025 联合战略</span>
        </div>
      </header>

      <section className="picwe-insight card-surface">
        <div className="insight-copy">
          <p className="eyebrow">产品速览</p>
          <h2>WEUSD、RWA DEX、社区加速器</h2>
          <p>
            PicWe 以 WEUSD 作为全链结算资产，结合 AI 代理与链抽象，实现“说一句话，完成跨链 + RWA
            流转”。DEX 教程、RWA IRO 及大会合作均已上线，为 Web2 用户打开 Web3 流动性的入口。
          </p>
          <div className="insight-pills">
            <span>全链结算</span>
            <span>RWA IRO</span>
            <span>社交交易</span>
            <span>社区驱动</span>
          </div>
          <div className="insight-links">
            <a href="https://mp.weixin.qq.com/s/T1QY1Wjhr3Q_ahfpHVM4fQ" target="_blank" rel="noreferrer" className="text-link">
              WEUSD 解读
            </a>
            <a href="https://mp.weixin.qq.com/s/Ful1onsIT6IsCQ4ZI5lRWg" target="_blank" rel="noreferrer" className="text-link">
              RWA DEX 教程
            </a>
          </div>
        </div>
        <div className="insight-grid">
          <article className="insight-card">
            <p className="eyebrow">AI · 结算</p>
            <h3>WEUSD 全链闭环</h3>
            <p>AI 代理自动完成链上签名与资产调度，用户以自然语言驱动 WEUSD 在多链间结算。</p>
          </article>
          <article className="insight-card">
            <p className="eyebrow">生态</p>
            <h3>BNB Chain & 中亚节点</h3>
            <p>以 BNB Chain 为起点，联动吉尔吉斯斯坦水电等真实资产，承接中亚公共设施上链浪潮。</p>
          </article>
          <article className="insight-card">
            <p className="eyebrow">社群</p>
            <h3>WCS·2025 联合战略</h3>
            <p>成为 WCS·2025 RWA 产业大会战略合作单位，线下路演和行业嘉宾持续共建话语权。</p>
          </article>
        </div>
      </section>

      <section className="picwe-videos card-surface">
        <div className="section-header">
          <div>
            <p className="eyebrow">实拍现场</p>
            <h2>PicWe 路演与社区瞬间</h2>
          </div>
          <p>直接播放 public 中的 picwe 系列视频，沉浸式了解产品落地与社区温度。</p>
        </div>
        <div className="video-grid three-col">
          {picweVideos.map((clip) => (
            <article key={clip.filename} className="video-card solid">
              <div className="video-wrapper">
                <video controls preload="metadata">
                  <source src={`${clip.filename}`} type="video/mp4" />
                  您的浏览器暂不支持 video 标签。
                </video>
              </div>
              <h4>{clip.title}</h4>
              {clip.description && <p>{clip.description}</p>}
            </article>
          ))}
        </div>
        <div className="more-videos">
          <a
            className="btn secondary"
            href="https://www.youtube.com/results?search_query=PicWe"
            target="_blank"
            rel="noreferrer"
          >
            更多视频 · 跳转 YouTube 频道
          </a>
        </div>
      </section>

      <section className="picwe-articles card-surface">
        <div className="section-header">
          <div>
            <p className="eyebrow">自媒体文章</p>
            <h2>深度解读与行业视角</h2>
          </div>
          <p>涵盖 WEUSD、链抽象、BNB Chain 扩张到线下大会的完整叙事，快速获取 PicWe 的策略全景。</p>
        </div>
        <div className="articles-grid">
          {picweArticles.map((article) => (
            <a key={article.url} href={article.url} target="_blank" rel="noreferrer" className="article-card">
              <div
                className="article-cover"
                style={
                  article.cover
                    ? { backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 100%), url(${article.cover})` }
                    : undefined
                }
              >
                <div className="article-meta">
                  {article.tag && <span className="pill">{article.tag}</span>}
                  {article.source && <span className="source">{article.source}</span>}
                </div>
                <h4>{article.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="picwe-links card-surface">
        <div className="section-header">
          <div>
            <p className="eyebrow">PicWe 网址合集</p>
            <h2>一键触达所有官方阵地</h2>
          </div>
          <p>产品、社群、文档与 WEUSD 入口集中呈现，方便分发与沉淀流量。</p>
        </div>
        <div className="link-grid">
          {picweLinks.map((link) => (
            <a key={link.url} className="link-card" href={link.url} target="_blank" rel="noreferrer">
              <h4>{link.title}</h4>
              {link.description && <p>{link.description}</p>}
              <span className="text-link">前往</span>
            </a>
          ))}
        </div>
      </section>

      <section className="community-callout card-surface">
        <h3>加入 PicWe · 与 AI 代理共建全链流动性</h3>
        <p>在 Twitter、Telegram、Discord 追踪产品进展，体验 WEUSD 结算与 RWA DEX。</p>
        <div className="callout-links">
          <a className="btn primary" href="https://x.com/PicWeGlobal" target="_blank" rel="noreferrer">
            关注 Twitter
          </a>
          <a className="btn secondary" href="https://t.me/PicWeCommunity" target="_blank" rel="noreferrer">
            加入 Telegram 社区
          </a>
          <a className="btn outline" href="https://discord.com/invite/picwe" target="_blank" rel="noreferrer">
            进入 Discord
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} PicWe · Social RWA Network</p>
      </footer>
    </div>
  );
}

function App() {
  const [activePage, setActivePage] = useState<"hydropower" | "picwe">("hydropower");
  const appClassName = `app ${activePage === "picwe" ? "picwe-theme" : ""}`;

  useEffect(() => {
    const body = document.body.classList;
    if (activePage === "picwe") {
      body.add("picwe-body");
    } else {
      body.remove("picwe-body");
    }
    return () => body.remove("picwe-body");
  }, [activePage]);

  return (
    <div className={appClassName}>
      <nav className="top-nav card-surface">
        <div className="brand">
          <span className="brand-dot" />
          <div>
            <p className="eyebrow">PicWe RWA资料库</p>
            <strong>Hydropower · PicWe</strong>
          </div>
        </div>
        <div className="nav-tabs">
          <button
            type="button"
            className={`nav-tab ${activePage === "hydropower" ? "active" : ""}`}
            onClick={() => setActivePage("hydropower")}
          >
            水电站 RWA
          </button>
          <button
            type="button"
            className={`nav-tab ${activePage === "picwe" ? "active" : ""}`}
            onClick={() => setActivePage("picwe")}
          >
            PicWe
          </button>
        </div>
        <div className="nav-actions">
          <a className="ghost-link" href="https://www.picwe.org" target="_blank" rel="noreferrer">
            官网
          </a>
          <a className="ghost-link" href="https://x.com/PicWeGlobal" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </nav>

      {activePage === "picwe" ? <PicWePage /> : <PageView content={hydropowerContent} />}
    </div>
  );
}

export default App;
