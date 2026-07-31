const AGENTS = [
  {
    "id": "it-freelance-navi",
    "name": "IT求人ナビ フリーランス",
    "category": "ITフリーランス",
    "summary": "ITエンジニア向けのフリーランス・業務委託案件紹介サービス。常駐・リモート案件を中心に、経験を活かした案件を探せる。",
    "feature_text": "IT・Web業界のフリーランス案件に特化、リモート案件も豊富",
    "fit_text": "IT・エンジニア経験を活かしてフリーランスで働きたい人向け",
    "conditions_text": "一定のIT実務経験があると案件を紹介されやすい",
    "tags": {
      "employment_status": [],
      "concern": ["independence", "it_skillup"],
      "work_style": ["freelance_contract"],
      "industry": ["it"],
      "age_range": []
    },
    "related_offers": [
      {
        "label": "IT求人ナビ フリーランスで案件を探す",
        "url": "https://px.a8.net/svt/ejp?a8mat=4B8BWS+3H1B2Q+4LXM+5YJRM",
        "type": "affiliate"
      }
    ],
    "links_to_subsidy_checker": true,
    "priority": 1
  },
  {
    "id": "crowdworks-tech",
    "name": "クラウドワークス テック",
    "category": "ITフリーランス",
    "summary": "クラウドワークスが運営するエンジニア特化のフリーランス・業務委託案件紹介サービス。専任エージェントが希望条件に合う案件を提案してくれる。",
    "feature_text": "専任エージェントによる案件紹介、単価交渉サポートあり",
    "fit_text": "実務経験を活かして自分に合う案件を効率よく探したいエンジニア向け",
    "conditions_text": "登録後、専任エージェントとの面談を経て案件紹介が始まる",
    "tags": {
      "employment_status": [],
      "concern": ["independence", "it_skillup"],
      "work_style": ["freelance_contract"],
      "industry": ["it"],
      "age_range": []
    },
    "related_offers": [
      {
        "label": "クラウドワークス テックで案件を探す",
        "url": "https://px.a8.net/svt/ejp?a8mat=4B8BWV+6BFV4I+2OM2+ZQFQA",
        "type": "affiliate"
      }
    ],
    "links_to_subsidy_checker": true,
    "priority": 1
  },
  {
    "id": "internal-se-navi",
    "name": "社内SE転職ナビ",
    "category": "正社員転職(IT)",
    "summary": "事業会社の社内SE・情報システム部門への転職に特化したエージェントサービス。客先常駐のSIerから自社開発・社内SEへのキャリアチェンジに強い。",
    "feature_text": "社内SEポジションに特化、非公開求人も多数",
    "fit_text": "客先常駐や激務のSIerから、腰を据えて働ける社内SEへ転職したい人向け",
    "conditions_text": "IT実務経験(開発・インフラ・ヘルプデスク等)があると転職しやすい",
    "tags": {
      "employment_status": ["employee"],
      "concern": ["it_skillup"],
      "work_style": ["fulltime"],
      "industry": ["it"],
      "age_range": []
    },
    "related_offers": [
      {
        "label": "社内SE転職ナビで転職先を探す",
        "url": "https://px.a8.net/svt/ejp?a8mat=4B8BWS+3HMQOI+3IZO+I4NDE",
        "type": "affiliate"
      }
    ],
    "links_to_subsidy_checker": true,
    "priority": 1
  },
  {
    "id": "meikou-career",
    "name": "明光キャリアパートナーズ",
    "category": "正社員転職(IT)",
    "summary": "未経験からのITエンジニア転職に強いキャリアエージェント。研修付き求人の紹介やキャリアカウンセリングを通じて、IT業界への転職をサポートする。",
    "feature_text": "未経験・第二新卒向けの研修付きIT求人に強い",
    "fit_text": "未経験からITエンジニアとしてキャリアをスタートしたい20代向け",
    "conditions_text": "主に20代・第二新卒層を対象とした求人が中心",
    "tags": {
      "employment_status": ["employee", "unemployed"],
      "concern": ["it_skillup"],
      "work_style": ["fulltime"],
      "industry": ["it"],
      "age_range": ["20s"]
    },
    "related_offers": [
      {
        "label": "明光キャリアパートナーズでエンジニア転職を探す",
        "url": "https://px.a8.net/svt/ejp?a8mat=4B8BWS+3ENKNM+5P1E+5YJRM",
        "type": "affiliate"
      }
    ],
    "links_to_subsidy_checker": true,
    "priority": 2
  },
  {
    "id": "ageless-agent",
    "name": "エイジレスエージェント",
    "category": "ミドル・シニア転職",
    "summary": "35歳以上のミドル・シニア世代の転職に特化したエージェントサービス。年齢を理由に転職を諦めていた人向けに、経験を活かせる求人を紹介する。",
    "feature_text": "35歳以上を主対象、業界・職種は幅広くカバー",
    "fit_text": "年齢的に転職が不安な30代後半〜40代以上向け",
    "conditions_text": "主に35歳以上を対象とした求人紹介サービス",
    "tags": {
      "employment_status": ["employee", "unemployed"],
      "concern": ["age_anxiety"],
      "work_style": ["fulltime", "either"],
      "industry": ["any"],
      "age_range": ["30s", "40s_plus"]
    },
    "related_offers": [
      {
        "label": "エイジレスエージェントで転職を探す",
        "url": "https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3777130&pid=892668922",
        "type": "affiliate"
      }
    ],
    "links_to_subsidy_checker": true,
    "priority": 1
  },
  {
    "id": "taishoku-daikou-jobs",
    "name": "退職代行Jobs",
    "category": "退職サポート",
    "summary": "会社を辞めたいが自分から言い出しにくい人向けの退職代行サービス。労働組合と提携し、有給消化交渉なども含めて退職手続きを代行してもらえる。",
    "feature_text": "労働組合提携で有給消化・退職交渉にも対応",
    "fit_text": "上司に退職を切り出しづらい、即日退職したい人向け",
    "conditions_text": "退職代行サービスのため、転職先探しは別途エージェント等の利用が必要",
    "tags": {
      "employment_status": ["employee"],
      "concern": ["quit_difficulty"],
      "work_style": [],
      "industry": ["any"],
      "age_range": []
    },
    "related_offers": [
      {
        "label": "退職代行Jobsに相談する",
        "url": "https://h.accesstrade.net/sp/cc?rk=0100q2uz00owel",
        "type": "affiliate"
      }
    ],
    "links_to_subsidy_checker": false,
    "priority": 1
  },
  {
    "id": "disability-job-navi",
    "name": "障害者ナビ",
    "category": "障害者雇用",
    "summary": "障害・特性のある人向けの求人紹介サービス。配慮事項を踏まえた求人を、専門知識のあるアドバイザーが紹介してくれる。",
    "feature_text": "障害者雇用枠の求人に特化、配慮事項の相談も可能",
    "fit_text": "障害・特性に配慮した働き方を探している人向け",
    "conditions_text": "障害者手帳の有無等、サービスによって利用条件が異なる場合がある",
    "tags": {
      "employment_status": ["employee", "unemployed", "student"],
      "concern": ["disability_support"],
      "work_style": ["fulltime", "either"],
      "industry": ["any"],
      "age_range": []
    },
    "related_offers": [
      {
        "label": "障害者ナビで求人を探す",
        "url": "https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3777130&pid=892668928",
        "type": "affiliate"
      }
    ],
    "links_to_subsidy_checker": false,
    "priority": 1
  }
]
;
