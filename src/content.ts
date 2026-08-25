export const EMAIL: string = 'md.shaheem07@gmail.com'
export const GITHUB_URL: string = 'https://github.com/shaheeeeeeeeem'
export const LINKEDIN_URL: string = 'https://www.linkedin.com/in/mohamed-shaheem-71361a249/'

export const CODE_COMMENT_REPO: string =
  'https://github.com/shaheeeeeeeeem/code-comment-generation'
export const AIR_QUALITY_REPO: string =
  'https://github.com/shaheeeeeeeeem/air-quality-forecasting'
export const HIV_REPO: string =
  'https://github.com/shaheeeeeeeeem/molecular-property-prediction-gnn'

export const AIR_QUALITY_APP: string =
  'https://air-quality-forecasting-b33yzgtm36iyumuzwesxzj.streamlit.app/'
export const HIV_APP: string =
  'https://molecular-property-prediction-gnngit-kctmdvzbrbrhddr7bj4hr5.streamlit.app/'

export const NAME = 'Mohamed Shaheem'
export const AFFILIATION = 'Mechanical & Aerospace Engineering @ IIT Hyderabad, 2024–2028'

export const ABOUT =
  'Third-year engineering student working in machine learning. Interested in retrieval systems, representation learning, and applied deep learning. Comfortable in PyTorch, Python, and C++.'

export type Role = {
  org: string
  title: string
  period: string
  detail: string
}

export const EXPERIENCE: Role[] = [
  {
    org: 'EigenAxis.ai',
    title: 'Machine Learning Intern',
    period: 'Aug 2026 — Present',
    detail:
      'RAG pipelines; built a custom encoder embedding model from scratch in PyTorch with multi-head attention.',
  },
]

export type Project = {
  name: string
  language: string
  href: string
  detail: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Code Comment Generation',
    language: 'Python / PyTorch',
    href: CODE_COMMENT_REPO,
    detail:
      'An encoder–decoder Transformer implemented from scratch, benchmarked against a fine-tuned BART-large on CodeSearchNet Python. AST-based docstring stripping removed target leakage from the data pipeline, replacing an inflated ROUGE of ~0.98 with a validated ROUGE-L of 0.245 for BART-large and 0.219 for the from-scratch model.',
  },
  {
    name: 'Air Quality Forecasting',
    language: 'Python / LightGBM',
    href: AIR_QUALITY_REPO,
    detail:
      'Daily PM2.5 forecasting across five Indian cities on CPCB station data. LightGBM evaluated under walk-forward cross-validation — 365-day minimum training window, 30-day horizon, 39 folds per city — for a holdout MAE of 5.25–23.44, corroborated against independently sourced OpenAQ measurements.',
  },
  {
    name: 'HIV Inhibition Prediction',
    language: 'Python / PyTorch Geometric',
    href: HIV_REPO,
    detail:
      'Message-passing graph neural networks for molecular property prediction on OGB benchmarks. GIN and GAT reach a test ROC-AUC of 0.7598 and 0.7403 respectively on ogbg-molhiv, with the same architectures extended to the 128-task ogbg-molpcba benchmark for a mean average precision of 0.2204 using a virtual node.',
  },
]

export const SKILLS = [
  'Python',
  'PyTorch',
  'C++',
  'LightGBM',
  'scikit-learn',
  'PyTorch Geometric',
  'Transformers',
  'Streamlit',
  'Git',
  'Linux',
  'Docker',
  'SQL',
]
