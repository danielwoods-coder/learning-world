# Learning-World

一个用于 HTML、CSS、JavaScript 和 Python 项目的学习练习场。

## 目录结构

```
Learning-World/
├── HTML/          # 32 个前端练习
├── JavaScript/    # 46 个练习和应用
├── Python/        # 13 个算法与数据结构练习
└── SQL/           # 数据库练习
```

## 项目详情

### HTML (32 个)

| 项目 | 说明 |
|------|------|
| a-contact-form.html | 联系表单 |
| a-survey-form.html | 调查问卷表单 |
| accessibility-quiz.html | 无障碍测验 |
| availability-table.html | 可用性表格 |
| blog-post-card.html | 博客文章卡片 |
| book-inventory.html | 图书库存 |
| build-a-book-catalog-table.html | 图书目录表 |
| build-a-checkout-page.html | 结账页面 |
| build-a-travel-agency-page.html | 旅行社页面 |
| build-an-html-audio-and-video-player.html | 音视频播放器 |
| cafe-menu.html | 咖啡馆菜单 |
| city-skyline.html | 城市天际线 |
| colored-boxes.html | 彩色盒子 |
| color-markers.html | 颜色标记 |
| confidential-email-page.html | 机密邮件页面 |
| design-a-business-card.html | 名片设计 |
| design-a-movie-review-page.html | 电影评论页面 |
| feature-selection.html | 功能选择 |
| flappy-penguin.html | 企鹅小游戏 |
| flyer-page.html | 传单页面 |
| house-painting.html | 房屋绘画 |
| lab-event-hub.html | 实验室活动中心 |
| moon-orbit.html | 月球轨道动画 |
| newspaper-article.html | 报纸文章 |
| newspaper-layout.html | 报纸布局 |
| playing-cards.html | 扑克牌 |
| product-landing.html | 产品落地页 |
| technical-documentation.html | 技术文档 |
| todo-list.html | 待办事项列表 |
| tribute-page.html | 致敬页面 |

### JavaScript (46 个)

| 项目 | 说明 |
|------|------|
| algorithms/build-a-gradebook-app.js | 成绩册应用 |
| algorithms/password-generator.js | 密码生成器 |
| algorithms/quiz-game.js | 测验游戏 |
| bookmark-manager/script.js | 书签管理器 |
| build-a-palindrome-checker/script.js | 回文检查器 |
| build-drum-machine/script.js | 架子鼓机器 |
| lightbox-viewer/script.js | 灯箱查看器 |
| markdown-to-html/script.js | Markdown 转 HTML |
| theme-switcher/Theme-Switcher.js | 主题切换器 |

还有更多算法和实用工具...

### Python (13 个)

| 项目 | 说明 |
|------|------|
| create_character.py | 创建角色 |
| deposit_spend_chart.py | 存款支出图表 |
| game_character_stats_tracker.py | 游戏角色属性追踪 |
| hashtable.py | 哈希表实现 |
| luhn.py | Luhn 算法 |
| planet.py | 行星数据 |
| polygon_area_calculator.py | 多边形面积计算 |
| selection_sort.py | 选择排序 |
| text_ai.py | 文本 AI |
| two_sum.py | 两数之和 |
| user_configuration.py | 用户配置 |
| verify_card_number.py | 银行卡号验证 |
| test_png.py | PNG 测试 |

### SQL (2 个)

- `students.sql` — 学生数据库
- `universe.sql` — 宇宙数据库

## 使用说明

### HTML

在浏览器中打开任意 `.html` 文件，或使用 Live Server 扩展。

### JavaScript

```bash
cd JavaScript
node <filename>.js        # 脚本
node app.js               # 服务端应用
```

### Python

```bash
cd Python
python <filename>.py
```

### SQL

使用数据库客户端执行 `.sql` 文件。

## 约定

- 文件命名使用描述性名称，连字符分隔（如 `cafe-menu.html`）
- HTML/CSS/JS 配对文件共享相同基名
- JavaScript 目前没有检入 ESLint 配置；如需 lint，请先在 `JavaScript/` 下添加配置