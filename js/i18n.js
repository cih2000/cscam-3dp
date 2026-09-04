(function () {
  var lang = new URLSearchParams(location.search).get('lang');
  window.LANG = (lang === 'en' || lang === 'zh') ? lang : 'ko';
  window.t = function (ko, en, zh) { return window.LANG === 'en' ? (en || ko) : window.LANG === 'zh' ? (zh || en || ko) : ko; };

  var textMap = {
    'CSCAM 기계사업부': 'CSCAM Machine Division',
    '금속 분말을 고정밀 파이버 레이저로 녹여 층층이 쌓아 올려, 전통적인 절삭 가공으로는 구현하기 어려운 복잡한 내부 중공 구조나 냉각 유로를 지닌 부품을 처음부터 일체형으로 구현하는': 'Metal powder is melted with a high-precision fiber laser and built layer by layer to produce integrated parts with complex internal cavities or cooling channels that are difficult to machine conventionally.',
    '금속 3D 프린팅(PBF)': 'metal 3D printing (PBF)',
    '라인업입니다. 씨에스캠의 레이저 제어 기술과 실시간 모니터링 시스템을 통해 소형 덴탈 의료 정밀 부품부터 대형 산업 발전 및 원자력 발전용 부품까지 최고 등급의 상대밀도와 신뢰성 있는 인장강도를 확보하며, 장비 크기별 최적화된 4종(AnyX-M180, M250, M400, M1000)의 고성능 금속 적층 제조 라인업을 제공하고 있습니다.': 'lineup. CSCAM combines laser-control technology with real-time monitoring to secure high relative density and reliable tensile strength, from compact dental and medical precision parts to large industrial, power-generation, and nuclear components. Four optimized models are available: AnyX-M180, M250, M400, and M1000.',
    'SLM(AnyX) 자세히 보기 →': 'Learn more about SLM (AnyX) →',
    '액체 상태의 광경화성 에폭시/아크릴 수지에 고정밀 UV 자외선 레이저를 조사하여 순간적으로 경화시켜 형상을 제조하는': 'A lineup that forms parts by applying a high-precision UV laser to liquid photosensitive epoxy/acrylic resin, curing it instantly.',
    '광경화 적층 방식(Stereolithography, SLA)': 'stereolithography (SLA)',
    '라인업입니다. 레이저 가공 분야에서 축적된 미세 스캔 제어 노하우를 접목하여 극도로 매끄러운 조도와 정밀한 치수 공차를 달성할 수 있어 정밀 덴탈 모델, 복잡한 주얼리 마스터 원형, 정밀 주조용 패턴(캐스터블 레진) 제작에 특화되어 있습니다. 소형 정밀형부터 대형 산업용 장비인 AnyX-S150, S300, S600 3가지 기종을 통해 부품 시제품부터 대형 하우징 모크업까지 폭넓은 산업군에 고속 정밀 제조 솔루션을 제안합니다.': 'By applying fine scan-control know-how accumulated in laser processing, it achieves extremely smooth surface finish and precise dimensional tolerance. It is suited for dental models, complex jewelry master patterns, and investment-casting patterns using castable resin. The AnyX-S150, S300, and S600 support applications from small precision prototypes to large housing mockups.',
    'SLA(AnyX-S) 자세히 보기 →': 'Learn more about SLA (AnyX-S) →',
    '02-1 / SLM — 라인업 소개': '02-1 / SLM — Lineup Overview',
    '혁신적인 SLM 금속 3D 프린터': 'Innovative SLM Metal 3D Printers',
    '최적의 메탈 3D 프린터 솔루션을 제공합니다': 'Optimized metal 3D printer solutions',
    'SLM(Selective Laser Melting) 방식의 소형부터 초대형까지, 4가지 라인업의 AnyX 시리즈로 고객의 다양한 요구를 충족하는 최적의 금속 3D 프린터 솔루션을 제공합니다.': 'The AnyX Series provides four SLM (Selective Laser Melting) metal 3D printer models, from compact to extra-large, to meet a wide range of customer requirements.',
    'CW(연속발진) 파이버 레이저로 금속 분말을 선택적으로 용융시켜 정밀한 3차원 형상을 처음부터 쌓아 올리는': 'It selectively melts metal powder with a CW fiber laser to build precise three-dimensional forms layer by layer.',
    '적층 제조(Additive Manufacturing)': 'additive manufacturing',
    '전용 장비입니다.': 'equipment.',
    '는 정밀 레이저를 탑재한': 'is a',
    '타입의 금속 3D 프린터로, 소형 마이크로 부품부터 초대형 우주항공 부품까지 폭넓게 제작 가능한 최적의 산업용 라인업을 제공합니다.': 'metal 3D printer equipped with precision lasers, offering an industrial lineup capable of producing everything from micro parts to extra-large aerospace components.',
    '02-2 / SLM — 개별 스펙': '02-2 / SLM — Individual Specifications',
    'AnyX-M Series 제품 라인업': 'AnyX-M Series Product Lineup',
    '장비사양': 'Specifications',
    '다운로드': 'Download',
    '문의하기': 'Contact',
    '{{ activeSpecProduct.name }} 스펙 시트': '{{ activeSpecProduct.name }} Specification Sheet',
    '상담 및 견적 문의': 'Consultation & Quote',
    '닫기': 'Close',
    '2025년 실증선박 탑재 시연완료': 'Demonstrated aboard a test vessel in 2025',
    '02-2b / SLM — 컨테이너형 이동식 SLM': '02-2b / SLM — Containerized Mobile SLM',
    '40ft 해상 컨테이너 안에 AnyX 계열 SLM 장비와 분말 취급·후처리 설비를 일체화한': 'A 40-ft marine container integrates an AnyX SLM system with powder handling and post-processing equipment as a',
    '이동식 금속 3D프린팅 올인원 워크샵': 'mobile all-in-one metal 3D printing workshop',
    '입니다. 특히 선박 운항 중 가해지는': '. In particular, it includes',
    '진동, 파고, 선체 흔들림(롤링) 등 격렬한 외란을 극복하는 능동형 상쇄 시스템': 'an active compensation system that handles severe disturbances such as vibration, waves, and vessel rolling',
    '과': 'and',
    '철저한 밀폐식 항온·항습 설비': 'sealed temperature and humidity control',
    '가 내장되어 있어, 실제 해상 환경에서도 육지와 다름없는 우수한 정밀도의 금속 부품을 즉시 생산(MRO)할 수 있도록 실증 검증되었습니다.': ', enabling verified production of precision metal parts for MRO even in actual marine environments.',
    'ANTI-ROLLING (롤링 상쇄)': 'ANTI-ROLLING',
    '상쇄율 99.70%': '99.70% compensation',
    '(보정각 ±8°)': '(correction angle ±8°)',
    'ANTI-VIBRATION (진동 감쇄)': 'ANTI-VIBRATION',
    '감쇄율 84.77%': '84.77% reduction',
    '(6자유도 검증)': '(6-DOF verified)',
    '4단계 자동 온·습도': '4-stage automatic temperature/humidity',
    'N₂ 제어': 'N₂ control',
    '선급 Stage 2 인증': 'Class Stage 2 certification',
    '소화 시스템': 'fire suppression system',
    '※ HD현대삼호중공업 8223호선(HMM GREEN)에 실제 탑재 및 해상 조형 실증 완료 (물성치 확보)': 'Verified aboard HD Hyundai Samho Heavy Industries hull 8223 (HMM GREEN), with marine printing demonstration and material-property data secured.',
    '내부 설비 구성 — 3DP 메인장치 · 모니터링장치 · 후처리장치': 'Internal Layout — 3DP Main Unit · Monitoring Unit · Post-processing Unit',
    '컨테이너 구동 영상 재생': 'Play container operation video',
    '도면 레이아웃 보기': 'View layout drawing',
    '※ 로컬 브라우저 보안(file://)으로 영상이 재생되지 않는 경우:': 'If the video does not play because of local browser security (file://):',
    '[여기(새 창)를 눌러 영상 직접 열기]': '[Open the video directly in a new window]',
    '공동연구개발 및 실증 협력 기관': 'Joint R&D and Demonstration Partners',
    '02-3 / SLM — 파우더 소재': '02-3 / SLM — Powder Materials',
    '검증된 금속 분말과 정밀 관리 시스템': 'Verified Metal Powders and Precision Management',
    '씨에스캠은 대표적으로 Sandvik社의 Osprey® 가스분무(Gas Atomized) 금속 분말을 취급하며, 구형도(Sphericity)와 유동성이 우수해 정밀 레이저 용융(SLM) 공정에 최적화되어 있습니다. 이 외에도 항공·의료·발전 등 산업별로 요구되는 물성에 맞춰 자체 검증을 마친 다양한 소재 옵션을 보유하고 있어, 상담을 통해 부품 사양에 맞는 최적의 소재와 공정 조건을 함께 제안해 드립니다.': 'CSCAM handles Sandvik Osprey® gas-atomized metal powders, which offer excellent sphericity and flowability for precision SLM processing. We also maintain internally verified material options for aerospace, medical, power-generation, and other industries, and recommend suitable materials and process conditions for each part specification.',
    '분말 관리': 'Powder',
    '취급 시스템': 'Handling System',
    'POWDER HANDLING · 전 모델 공통 적용': 'POWDER HANDLING · STANDARD ACROSS ALL MODELS',
    '02-4 / SLM — 응용 분야': '02-4 / SLM — Applications',
    'AnyX-M Series 응용 분야': 'AnyX-M Series Applications',
    '본 응용 출력물들은 실제 AnyX-M Series를 통해 제작되었습니다': 'These application samples were produced with the AnyX-M Series.',
    '02-5 / SLM — 설치사례': '02-5 / SLM — Installations',
    'SLM 설치 및 가동 현장': 'SLM Installation and Operation Sites',
    '02-6 / SLM — 브랜드 스토리': '02-6 / SLM — Brand Story',
    '10년 이상의 레이저 제어 기술이': 'More than 10 years of laser-control technology',
    'AnyX-M Series에 담겨 있습니다': 'are built into the AnyX-M Series',
    '씨에스캠은 레이저 가공 장비 개발 경험을 바탕으로 SLM 방식 금속 3D 프린터의 광학계와 제어 소프트웨어를 정밀하게 구성했습니다. 경희대학교·조선대학교 등 교육기관부터 LG전자·한국원자력연구원 등 산업·연구 현장까지, AnyX-M Series는 실제 가동 현장에서 검증되고 있습니다.': 'Based on experience developing laser-processing equipment, CSCAM configures the optics and control software for SLM metal 3D printers with high precision. The AnyX-M Series is proven in real operating environments, from universities such as Kyung Hee University and Chosun University to industrial and research sites including LG Electronics and KAERI.',
    '02-7 / SLM — 자료 다운로드': '02-7 / SLM — Downloads',
    '03 / SLA — 라인업 소개': '03 / SLA — Lineup Overview',
    'SLA 광경화 3D 프린터': 'SLA Photopolymerization 3D Printers',
    '[ AnyX-S Series ] 데이터 준비 및 업데이트 대기 중': '[ AnyX-S Series ] Data preparation and update pending',
    'CAM & 컨트롤 소프트웨어': 'CAM & Control Software',
    'SLM(AnyX)과 SLA(AnyX-S) 전 라인업은 씨에스캠 전용 소프트웨어 환경에서 구동됩니다.': 'The full SLM (AnyX) and SLA (AnyX-S) lineups operate within CSCAM dedicated software environment.',
    '"AnyX 전 라인업 전용 CAM 시스템"': '"Dedicated CAM system for the full AnyX lineup"',
    'AnyX-M Series(SLM)와 AnyX-S Series(SLA)의 조형 데이터 생성, 슬라이싱, 마킹을 하나로 처리하는 씨에스캠 전용 CAM 소프트웨어입니다.': 'CSCAM dedicated CAM software handles build-data generation, slicing, and marking for both AnyX-M Series (SLM) and AnyX-S Series (SLA).',
    'CS_Laser 3D 매뉴얼 · PDF': 'CS_Laser 3D Manual · PDF',
    '비전문가 운용을 위한 7단계 공정 절차': '7-step process workflow for non-specialist operation',
    '05 / 주요 고객': '05 / Customers',
    '3D 프린터 주요 고객': 'Major 3D Printer Customers',
    '국내 유수의': 'Leading Korean',
    '대기업, 국책 연구기관, 대학교': 'corporations, national research institutes, and universities',
    '가 씨에스캠 3D 프린터를 도입해 연구·개발·양산 현장에서 활용하고 있습니다.': 'use CSCAM 3D printers for research, development, and production.',
    '제품(견적) 문의처 및 사업부 위치': 'Product Inquiries, Quotes, and Division Location',
    '3D 프린터 사업부': '3D Printer Division',
    'Customer Center · 고객센터': 'Customer Center',
    '상담 전화': 'Consultation Phone',
    '상담 시간': 'Business Hours',
    '오전 08:30 ~ 오후 05:30': '08:30 AM ~ 05:30 PM',
    '본사 (전남광주특별시)': 'Headquarters (Gwangju, Korea)',
    '전남광주특별시 광산구 평동산단로 239-15': '239-15, Pyeongdongsandan-ro, Gwangsan-gu, Gwangju, Korea',
    '씨에스캠주식회사': 'CSCAM Co., Ltd.',
    '레이저 제어 기술 기반의 SLM 금속 3D 프린터(AnyX-M Series)와 SLA 광경화 3D 프린터(AnyX-S Series)를 공급합니다.': 'We supply SLM metal 3D printers (AnyX-M Series) and SLA photopolymerization 3D printers (AnyX-S Series) based on laser control technology.',
    '기술자료': 'Technical Resources',
    'SLM 응용분야 · 소재': 'SLM Applications · Materials',
    'SLA 응용분야 · 레진': 'SLA Applications · Resins',
    '홍보자료': 'Promotional Resources',
    '설치사례': 'Installations',
    '주요 고객': 'Customers',
    '제품(견적) 문의': 'Product Inquiry / Quote',
    '© 2026 씨에스캠주식회사 (CSCAM Co., Ltd.) — 3D Printer Division. All Rights Reserved.': '© 2026 CSCAM Co., Ltd. — 3D Printer Division. All Rights Reserved.',
    '본사 · 전남광주특별시 광산구 평동산단로 239-15 · 062-946-1900': 'HQ · 239-15, Pyeongdongsandan-ro, Gwangsan-gu, Gwangju, Korea · +82-62-946-1900',
    'CSCAM 문의하기': 'Contact CSCAM',
    '3D PRINTER 상담 챗봇': '3D PRINTER Consultation Chatbot',
    '입력 중': 'Typing',
    '안녕하세요! 씨에스캠 3D 프린터 상담 챗봇입니다.': 'Hello! This is the CSCAM 3D Printer consultation chatbot.',
    '아래 항목을 선택하거나 궁금하신 점을 입력해 주세요.': 'Select an option below or enter your question.',
    'AnyX-M Series(SLM) 스펙이 궁금해요': 'Ask about AnyX-M Series (SLM) specs',
    'AnyX-S Series 문의': 'Ask about AnyX-S Series',
    '담당자 연결 (062-946-1900)': 'Connect to a representative (+82-62-946-1900)',
    '선택해 주셔서 감사합니다! 상세 자료 송부 및 정확한 기술 상담을 도와드리기 위해 먼저 고객님의': 'Thank you for your selection. To send detailed materials and provide accurate technical consultation, please first enter your',
    '성함(회사명)': 'name (company name)',
    '을 아래 입력창에 작성해 주세요.': 'in the input box below.',
    '성함 또는 회사명을 입력하세요...': 'Enter your name or company name...',
    '전화번호 또는 이메일을 입력하세요...': 'Enter your phone number or email...',
    '상세 요구사항을 입력하세요...': 'Enter detailed requirements...',
    '메시지를 입력하세요 (준비 중)': 'Enter your message (Coming soon)',
    '접수가 성공적으로 완료되었습니다.': 'Submission completed successfully.',
    '처음 단계로 돌아가기': 'Back to the beginning'
  };

  var attrMap = {
    '국내 최대 산업용 SLM 3D프린터 라인업 및 선박용 컨테이너형 적층제조 실증사례.': 'Korea-focused industrial SLM 3D printer lineup and shipboard containerized additive manufacturing demonstration cases.',
    'SLM 조형 과정 구동': 'SLM build process animation',
    'SLA 조형 과정 구동': 'SLA build process animation',
    '선박 탑재 컨테이너형 3DP 실사진': 'Actual shipboard containerized 3DP photo',
    '컨테이너 내부 설비 구성도': 'Container internal equipment layout',
    '공동연구개발 및 실증 협력 기관': 'Joint R&D and demonstration partners',
    'CS_Laser 3D 소프트웨어': 'CS_Laser 3D software',
    'CS_Laser 3D 소프트웨어 UI 화면': 'CS_Laser 3D software UI screen',
    '씨에스캠 본사 위치': 'CSCAM headquarters location',
    '맨 위로': 'Back to top',
    '메시지를 입력하세요 (준비 중)': 'Enter your message (Coming soon)'
  };

  var zhTextMap = {
    "CSCAM 기계사업부": "CSCAM机械事业部",
    "금속 분말을 고정밀 파이버 레이저로 녹여 층층이 쌓아 올려, 전통적인 절삭 가공으로는 구현하기 어려운 복잡한 내부 중공 구조나 냉각 유로를 지닌 부품을 처음부터 일체형으로 구현하는": "通过高精度光纤激光熔化金属粉末并逐层堆叠,从零开始一体成型传统切削加工难以实现的复杂内部中空结构或冷却流道零件的",
    "금속 3D 프린팅(PBF)": "金属3D打印(PBF)",
    "라인업입니다. 씨에스캠의 레이저 제어 기술과 실시간 모니터링 시스템을 통해 소형 덴탈 의료 정밀 부품부터 대형 산업 발전 및 원자력 발전용 부품까지 최고 등급의 상대밀도와 신뢰성 있는 인장강도를 확보하며, 장비 크기별 최적화된 4종(AnyX-M180, M250, M400, M1000)의 고성능 금속 적층 제조 라인업을 제공하고 있습니다.": "产品线。凭借CSCAM的激光控制技术与实时监控系统,从小型牙科医疗精密零件到大型工业发电及核电用零件,均可确保最高等级的相对密度与可靠的抗拉强度,并提供按设备尺寸优化的4款(AnyX-M180、M250、M400、M1000)高性能金属积层制造产品线。",
    "SLM(AnyX) 자세히 보기 →": "了解更多SLM(AnyX) →",
    "액체 상태의 광경화성 에폭시/아크릴 수지에 고정밀 UV 자외선 레이저를 조사하여 순간적으로 경화시켜 형상을 제조하는": "对液态光敏环氧/丙烯酸树脂照射高精度UV紫外激光使其瞬间固化成型的",
    "광경화 적층 방식(Stereolithography, SLA)": "光固化积层方式(Stereolithography, SLA)",
    "라인업입니다. 레이저 가공 분야에서 축적된 미세 스캔 제어 노하우를 접목하여 극도로 매끄러운 조도와 정밀한 치수 공차를 달성할 수 있어 정밀 덴탈 모델, 복잡한 주얼리 마스터 원형, 정밀 주조용 패턴(캐스터블 레진) 제작에 특화되어 있습니다. 소형 정밀형부터 대형 산업용 장비인 AnyX-S150, S300, S600 3가지 기종을 통해 부품 시제품부터 대형 하우징 모크업까지 폭넓은 산업군에 고속 정밀 제조 솔루션을 제안합니다.": "产品线。结合激光加工领域积累的精密扫描控制经验,可实现极其光滑的表面粗糙度与精密的尺寸公差,特别适用于精密牙科模型、复杂珠宝原型制作及精密铸造用模型(可铸造树脂)制作。从小型精密型到大型工业设备AnyX-S150、S300、S600三种机型,为从零件试制到大型外壳模型制作等广泛产业领域提供高速精密制造方案。",
    "SLA(AnyX-S) 자세히 보기 →": "了解更多SLA(AnyX-S) →",
    "02-1 / SLM — 라인업 소개": "02-1 / SLM — 产品线介绍",
    "혁신적인 SLM 금속 3D 프린터": "创新的SLM金属3D打印机",
    "최적의 메탈 3D 프린터 솔루션을 제공합니다": "提供最优的金属3D打印机解决方案",
    "SLM(Selective Laser Melting) 방식의 소형부터 초대형까지, 4가지 라인업의 AnyX 시리즈로 고객의 다양한 요구를 충족하는 최적의 금속 3D 프린터 솔루션을 제공합니다.": "以SLM(Selective Laser Melting)方式,从小型到超大型共4款的AnyX系列,提供满足客户多样化需求的最优金属3D打印机解决方案。",
    "CW(연속발진) 파이버 레이저로 금속 분말을 선택적으로 용융시켜 정밀한 3차원 형상을 처음부터 쌓아 올리는": "通过CW(连续发振)光纤激光选择性熔化金属粉末,从零开始逐层堆叠出精密三维形状,",
    "적층 제조(Additive Manufacturing)": "积层制造(Additive Manufacturing)",
    "전용 장비입니다.": "专用设备。",
    "는 정밀 레이저를 탑재한": "是搭载精密激光的",
    "타입의 금속 3D 프린터로, 소형 마이크로 부품부터 초대형 우주항공 부품까지 폭넓게 제작 가능한 최적의 산업용 라인업을 제공합니다.": "型金属3D打印机,提供可从小型微型零件到超大型航空航天零件广泛制作的最优工业产品线。",
    "02-2 / SLM — 개별 스펙": "02-2 / SLM — 单机规格",
    "AnyX-M Series 제품 라인업": "AnyX-M系列产品线",
    "장비사양": "设备规格",
    "다운로드": "下载",
    "문의하기": "联系我们",
    "{{ activeSpecProduct.name }} 스펙 시트": "{{ activeSpecProduct.name }} 规格表",
    "상담 및 견적 문의": "咨询与报价洽询",
    "닫기": "关闭",
    "2025년 실증선박 탑재 시연완료": "2025年完成实证船舶搭载演示",
    "02-2b / SLM — 컨테이너형 이동식 SLM": "02-2b / SLM — 集装箱式移动SLM",
    "40ft 해상 컨테이너 안에 AnyX 계열 SLM 장비와 분말 취급·후처리 설비를 일체화한": "将AnyX系列SLM设备与粉末处理·后处理设备集成于40英尺海运集装箱内的",
    "이동식 금속 3D프린팅 올인원 워크샵": "移动式金属3D打印一体化工作坊",
    "입니다. 특히 선박 운항 중 가해지는": "。特别是内置了克服船舶航行中",
    "진동, 파고, 선체 흔들림(롤링) 등 격렬한 외란을 극복하는 능동형 상쇄 시스템": "振动、波高、船体摇晃(横摇)等剧烈外部扰动的主动补偿系统",
    "과": "与",
    "철저한 밀폐식 항온·항습 설비": "严密的密闭式恒温恒湿设备",
    "가 내장되어 있어, 실제 해상 환경에서도 육지와 다름없는 우수한 정밀도의 금속 부품을 즉시 생산(MRO)할 수 있도록 실증 검증되었습니다.": ",经实证验证即使在实际海上环境中也能立即生产(MRO)与陆地同等精度优良的金属零件。",
    "ANTI-ROLLING (롤링 상쇄)": "ANTI-ROLLING(横摇抵消)",
    "상쇄율 99.70%": "抵消率99.70%",
    "(보정각 ±8°)": "(补偿角 ±8°)",
    "ANTI-VIBRATION (진동 감쇄)": "ANTI-VIBRATION(振动衰减)",
    "감쇄율 84.77%": "衰减率84.77%",
    "(6자유도 검증)": "(6自由度验证)",
    "4단계 자동 온·습도": "4段自动温湿度",
    "N₂ 제어": "N₂控制",
    "선급 Stage 2 인증": "船级社Stage 2认证",
    "소화 시스템": "灭火系统",
    "※ HD현대삼호중공업 8223호선(HMM GREEN)에 실제 탑재 및 해상 조형 실증 완료 (물성치 확보)": "※ 已在HD现代三湖重工8223号船(HMM GREEN)实际搭载并完成海上成型实证(已获取物性数据)",
    "내부 설비 구성 — 3DP 메인장치 · 모니터링장치 · 후처리장치": "内部设备构成 — 3DP主装置 · 监控装置 · 后处理装置",
    "컨테이너 구동 영상 재생": "播放集装箱运行视频",
    "도면 레이아웃 보기": "查看图纸布局",
    "※ 로컬 브라우저 보안(file://)으로 영상이 재생되지 않는 경우:": "※ 若因本地浏览器安全策略(file://)导致视频无法播放:",
    "[여기(새 창)를 눌러 영상 직접 열기]": "[点击此处(新窗口)直接打开视频]",
    "공동연구개발 및 실증 협력 기관": "联合研发及实证合作机构",
    "02-3 / SLM — 파우더 소재": "02-3 / SLM — 粉末材料",
    "검증된 금속 분말과 정밀 관리 시스템": "经验证的金属粉末与精密管理系统",
    "씨에스캠은 대표적으로 Sandvik社의 Osprey® 가스분무(Gas Atomized) 금속 분말을 취급하며, 구형도(Sphericity)와 유동성이 우수해 정밀 레이저 용융(SLM) 공정에 최적화되어 있습니다. 이 외에도 항공·의료·발전 등 산업별로 요구되는 물성에 맞춰 자체 검증을 마친 다양한 소재 옵션을 보유하고 있어, 상담을 통해 부품 사양에 맞는 최적의 소재와 공정 조건을 함께 제안해 드립니다.": "CSCAM主要采用Sandvik公司的Osprey®气雾化(Gas Atomized)金属粉末,球形度与流动性优异,适用于精密激光熔化(SLM)工艺。此外,还拥有针对航空、医疗、发电等各产业所需物性、经自主验证的多种材料选项,可通过咨询为您推荐符合零件规格的最优材料与工艺条件。",
    "분말 관리": "粉末管理",
    "취급 시스템": "处理系统",
    "POWDER HANDLING · 전 모델 공통 적용": "POWDER HANDLING · 全系列通用",
    "02-4 / SLM — 응용 분야": "02-4 / SLM — 应用领域",
    "AnyX-M Series 응용 분야": "AnyX-M系列应用领域",
    "본 응용 출력물들은 실제 AnyX-M Series를 통해 제작되었습니다": "本应用输出样品均通过AnyX-M系列实际制作",
    "02-5 / SLM — 설치사례": "02-5 / SLM — 安装案例",
    "SLM 설치 및 가동 현장": "SLM安装及运行现场",
    "02-6 / SLM — 브랜드 스토리": "02-6 / SLM — 品牌故事",
    "10년 이상의 레이저 제어 기술이": "十年以上的激光控制技术",
    "AnyX-M Series에 담겨 있습니다": "凝聚于AnyX-M系列之中",
    "씨에스캠은 레이저 가공 장비 개발 경험을 바탕으로 SLM 방식 금속 3D 프린터의 광학계와 제어 소프트웨어를 정밀하게 구성했습니다. 경희대학교·조선대학교 등 교육기관부터 LG전자·한국원자력연구원 등 산업·연구 현장까지, AnyX-M Series는 실제 가동 현장에서 검증되고 있습니다.": "基于激光加工设备的开发经验,CSCAM精密构建了SLM金属3D打印机的光学系统与控制软件。从庆熙大学·朝鲜大学等教育机构,到LG电子·韩国原子力研究院等产业·研究现场,AnyX-M系列均在实际运行现场得到验证。",
    "02-7 / SLM — 자료 다운로드": "02-7 / SLM — 资料下载",
    "03 / SLA — 라인업 소개": "03 / SLA — 产品线介绍",
    "SLA 광경화 3D 프린터": "SLA光固化3D打印机",
    "[ AnyX-S Series ] 데이터 준비 및 업데이트 대기 중": "[ AnyX-S系列 ] 数据准备及更新待定",
    "CAM & 컨트롤 소프트웨어": "CAM与控制软件",
    "SLM(AnyX)과 SLA(AnyX-S) 전 라인업은 씨에스캠 전용 소프트웨어 환경에서 구동됩니다.": "SLM(AnyX)与SLA(AnyX-S)全系列均在CSCAM专用软件环境中运行。",
    "\"AnyX 전 라인업 전용 CAM 시스템\"": "\"AnyX全系列专用CAM系统\"",
    "AnyX-M Series(SLM)와 AnyX-S Series(SLA)의 조형 데이터 생성, 슬라이싱, 마킹을 하나로 처리하는 씨에스캠 전용 CAM 소프트웨어입니다.": "这是将AnyX-M系列(SLM)与AnyX-S系列(SLA)的造型数据生成、切片、标记一体化处理的CSCAM专用CAM软件。",
    "CS_Laser 3D 매뉴얼 · PDF": "CS_Laser 3D手册 · PDF",
    "비전문가 운용을 위한 7단계 공정 절차": "面向非专业人员操作的7步工艺流程",
    "05 / 주요 고객": "05 / 主要客户",
    "3D 프린터 주요 고객": "3D打印机主要客户",
    "국내 유수의": "国内领先的",
    "대기업, 국책 연구기관, 대학교": "大企业、国家级研究机构及大学",
    "가 씨에스캠 3D 프린터를 도입해 연구·개발·양산 현장에서 활용하고 있습니다.": "正在引进CSCAM的3D打印机,并将其应用于研究、开发及量产现场。",
    "제품(견적) 문의처 및 사업부 위치": "产品(报价)咨询处及事业部位置",
    "3D 프린터 사업부": "3D打印机事业部",
    "Customer Center · 고객센터": "Customer Center · 客户中心",
    "상담 전화": "咨询电话",
    "상담 시간": "咨询时间",
    "오전 08:30 ~ 오후 05:30": "上午08:30 ~ 下午05:30",
    "본사 (전남광주특별시)": "总部(韩国全罗南道光州)",
    "전남광주특별시 광산구 평동산단로 239-15": "韩国全罗南道光州广域市光山区平洞产业园路239-15",
    "씨에스캠주식회사": "CSCAM股份有限公司",
    "레이저 제어 기술 기반의 SLM 금속 3D 프린터(AnyX-M Series)와 SLA 광경화 3D 프린터(AnyX-S Series)를 공급합니다.": "供应基于激光控制技术的SLM金属3D打印机(AnyX-M系列)与SLA光固化3D打印机(AnyX-S系列)。",
    "기술자료": "技术资料",
    "SLM 응용분야 · 소재": "SLM应用领域 · 材料",
    "SLA 응용분야 · 레진": "SLA应用领域 · 树脂",
    "홍보자료": "宣传资料",
    "설치사례": "安装案例",
    "주요 고객": "主要客户",
    "제품(견적) 문의": "产品(报价)咨询",
    "© 2026 씨에스캠주식회사 (CSCAM Co., Ltd.) — 3D Printer Division. All Rights Reserved.": "© 2026 CSCAM股份有限公司(CSCAM Co., Ltd.) — 3D打印机事业部. All Rights Reserved.",
    "본사 · 전남광주특별시 광산구 평동산단로 239-15 · 062-946-1900": "总部 · 韩国全罗南道光州广域市光山区平洞产业园路239-15 · 062-946-1900",
    "CSCAM 문의하기": "咨询CSCAM",
    "3D PRINTER 상담 챗봇": "3D打印机咨询聊天机器人",
    "입력 중": "正在输入",
    "안녕하세요! 씨에스캠 3D 프린터 상담 챗봇입니다.": "您好!这里是CSCAM 3D打印机咨询聊天机器人。",
    "아래 항목을 선택하거나 궁금하신 점을 입력해 주세요.": "请选择以下选项,或输入您想咨询的内容。",
    "AnyX-M Series(SLM) 스펙이 궁금해요": "咨询AnyX-M系列(SLM)规格",
    "AnyX-S Series 문의": "咨询AnyX-S系列",
    "담당자 연결 (062-946-1900)": "转接负责人(062-946-1900)",
    "선택해 주셔서 감사합니다! 상세 자료 송부 및 정확한 기술 상담을 도와드리기 위해 먼저 고객님의": "感谢您的选择!为了发送详细资料并提供准确的技术咨询,请您先输入",
    "성함(회사명)": "姓名(公司名称)",
    "을 아래 입력창에 작성해 주세요.": "于下方输入框中。",
    "성함 또는 회사명을 입력하세요...": "请输入姓名或公司名称...",
    "전화번호 또는 이메일을 입력하세요...": "请输入电话号码或电子邮箱...",
    "상세 요구사항을 입력하세요...": "请输入详细需求...",
    "메시지를 입력하세요 (준비 중)": "请输入消息(准备中)",
    "접수가 성공적으로 완료되었습니다.": "提交已成功完成。",
    "처음 단계로 돌아가기": "返回初始步骤"
  };

  var zhAttrMap = {
    "국내 최대 산업용 SLM 3D프린터 라인업 및 선박용 컨테이너형 적층제조 실증사례.": "韩国领先的工业级SLM 3D打印机产品线及船用集装箱式积层制造实证案例。",
    "SLM 조형 과정 구동": "SLM成型过程动画",
    "SLA 조형 과정 구동": "SLA成型过程动画",
    "선박 탑재 컨테이너형 3DP 실사진": "船舶搭载集装箱式3DP实拍照片",
    "컨테이너 내부 설비 구성도": "集装箱内部设备构成图",
    "공동연구개발 및 실증 협력 기관": "联合研发及实证合作机构",
    "CS_Laser 3D 소프트웨어": "CS_Laser 3D软件",
    "CS_Laser 3D 소프트웨어 UI 화면": "CS_Laser 3D软件界面截图",
    "씨에스캠 본사 위치": "CSCAM总部位置",
    "맨 위로": "返回顶部",
    "메시지를 입력하세요 (준비 중)": "请输入消息(准备中)"
  };

  function replacePreservingSpace(node, next) {
    var map = window.LANG === 'zh' ? zhTextMap : textMap;
    var raw = node.nodeValue;
    var trimmed = raw.trim();
    if (!trimmed || !map[trimmed]) return;
    node.nodeValue = raw.replace(trimmed, map[trimmed]);
  }

  function applyAutoText(root) {
    if (window.LANG !== 'en' && window.LANG !== 'zh') return;
    var scope = root || document.body;
    if (!scope) return;

    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|NOSCRIPT)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return /[가-힣]/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(replacePreservingSpace);

    var aMap = window.LANG === 'zh' ? zhAttrMap : attrMap;
    Object.keys(aMap).forEach(function (ko) {
      document.querySelectorAll('[content="' + ko.replace(/"/g, '\\"') + '"],[alt="' + ko.replace(/"/g, '\\"') + '"],[placeholder="' + ko.replace(/"/g, '\\"') + '"],[aria-label="' + ko.replace(/"/g, '\\"') + '"],[title="' + ko.replace(/"/g, '\\"') + '"]').forEach(function (el) {
        ['content', 'alt', 'placeholder', 'aria-label', 'title'].forEach(function (attr) {
          if (el.getAttribute(attr) === ko) el.setAttribute(attr, aMap[ko]);
        });
      });
    });

    var historyNotice = Array.prototype.find.call(document.querySelectorAll('section div'), function (el) {
      return el.textContent.trim() === '※ 이 사이트는 게시용 페이지가 아닙니다.';
    });
    if (historyNotice) {
      var section = historyNotice.closest('section');
      if (section) section.style.display = 'none';
    }
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n-text]').forEach(function (el) {
      try {
        var tr = JSON.parse(el.getAttribute('data-i18n-text'));
        var value = tr[window.LANG] || tr['ko'];
        var leadingDecor = el.firstElementChild && !el.firstElementChild.textContent.trim()
          ? el.firstElementChild.cloneNode(true)
          : null;
        el.textContent = '';
        if (leadingDecor) el.appendChild(leadingDecor);
        String(value).split('\n').forEach(function (part, index) {
          if (index > 0) el.appendChild(document.createElement('br'));
          el.appendChild(document.createTextNode(part));
        });
      } catch (e) {}
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      try {
        var tr = JSON.parse(el.getAttribute('data-i18n-html'));
        el.innerHTML = tr[window.LANG] || tr['ko'];
      } catch (e) {}
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      if (btn.dataset.lang === window.LANG) {
        btn.style.color = '#1e5aa8';
        btn.style.fontWeight = '700';
      } else {
        btn.style.color = '#757575';
        btn.style.fontWeight = '400';
      }
    });
    applyAutoText(document.documentElement);
  }

  // support.js 비동기 렌더링 대응: 즉시 + 단계적 재시도
  document.addEventListener('DOMContentLoaded', function () {
    applyI18n();
    setTimeout(applyI18n, 150);
    setTimeout(applyI18n, 500);
    setTimeout(applyI18n, 1200);
    if (window.LANG === 'en' || window.LANG === 'zh') {
      new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) applyAutoText(node);
          });
        });
      }).observe(document.documentElement, { childList: true, subtree: true });
    }
  });
})();
